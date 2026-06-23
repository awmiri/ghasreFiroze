import React, { useState, useRef, DragEvent } from 'react';
import { Upload, X, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import ImageItem from "@/components/tools/ui/ImageItem";

interface ImageFile {
    id: string;
    file: File;
    preview: string;
    name: string;
    size: number;
}

interface ToolsImageUploaderProProps {
    value: ImageFile[];
    onChange: (images: ImageFile[]) => void;
    label?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    maxImages?: number;
    maxSize?: number;
    className?: string;
}

const ToolsImageUploaderPro: React.FC<ToolsImageUploaderProProps> = ({
                                                                         value,
                                                                         onChange,
                                                                         label,
                                                                         hint,
                                                                         error,
                                                                         required = false,
                                                                         disabled = false,
                                                                         maxImages = 8,
                                                                         maxSize = 5,
                                                                         className = '',
                                                                     }) => {

    const [isDragging, setIsDragging] = useState(false);
    const [rejectedMessage, setRejectedMessage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const generateId = () => {
        return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    };

    const validateImage = (file: File): { valid: boolean; reason?: string } => {
        if (!file.type.startsWith('image/')) {
            return { valid: false, reason: 'فرمت فایل باید تصویر باشد' };
        }
        if (file.size > maxSize * 1024 * 1024) {
            return { valid: false, reason: `حجم تصویر بیشتر از ${maxSize} مگابایت است` };
        }
        return { valid: true };
    };

    const processImages = async (files: FileList | File[]) => {
        if (disabled) return;
        const fileArray = Array.from(files);
        const newImages: ImageFile[] = [];
        const errors: string[] = [];

        for (const file of fileArray) {
            const validation = validateImage(file);
            if (!validation.valid) {
                errors.push(`${file.name}: ${validation.reason}`);
                continue;
            }

            const preview = URL.createObjectURL(file);
            newImages.push({
                id: generateId(),
                file,
                preview,
                name: file.name,
                size: file.size,
            });
        }

        if (errors.length > 0) {
            setRejectedMessage(errors.join(', '));
            setTimeout(() => setRejectedMessage(null), 3000);
        }

        if (newImages.length > 0) {
            const currentCount = value.length;
            const newCount = newImages.length;
            if (currentCount + newCount > maxImages) {
                const allowed = maxImages - currentCount;
                const finalImages = newImages.slice(0, allowed);
                onChange([...value, ...finalImages]);
                if (newImages.length > allowed) {
                    setRejectedMessage(`حداکثر ${maxImages} تصویر مجاز است`);
                    setTimeout(() => setRejectedMessage(null), 3000);
                }
            } else {
                onChange([...value, ...newImages]);
            }
        }
    };

    const handleDrop = async (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled) return;
        const files = e.dataTransfer.files;
        if (files.length > 0 && value.length < maxImages) {
            await processImages(files);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0 && value.length < maxImages) {
            await processImages(e.target.files);
        }
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const removeImage = (id: string) => {
        const imageToRemove = value.find(img => img.id === id);
        if (imageToRemove) {
            URL.revokeObjectURL(imageToRemove.preview);
        }
        onChange(value.filter(img => img.id !== id));
    };

    const moveLeft = (id: string) => {
        const index = value.findIndex(img => img.id === id);
        if (index > 0) {
            const newImages = [...value];
            [newImages[index - 1], newImages[index]] = [newImages[index], newImages[index - 1]];
            onChange(newImages);
        }
    };

    const moveRight = (id: string) => {
        const index = value.findIndex(img => img.id === id);
        if (index < value.length - 1) {
            const newImages = [...value];
            [newImages[index], newImages[index + 1]] = [newImages[index + 1], newImages[index]];
            onChange(newImages);
        }
    };

    const handleClick = () => {
        if (!disabled && value.length < maxImages) {
            fileInputRef.current?.click();
        }
    };

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {label}
                    {required && <span className="text-red-500 mr-1">*</span>}
                </label>
            )}

            {/* Drop Zone */}
            <div
                onClick={handleClick}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`
                    relative rounded-lg cursor-pointer
                    transition-all duration-200
                    border-2 border-dashed
                    py-8 px-4
                    ${isDragging ? 'border-sky-500 bg-sky-50' : 'border-gray-300 bg-gray-50'}
                    ${error ? 'border-red-500' : ''}
                    ${disabled || value.length >= maxImages ? 'opacity-50 cursor-not-allowed' : ''}
                `}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileSelect}
                    disabled={disabled || value.length >= maxImages}
                    className="hidden"
                />

                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <Upload className={`w-8 h-8 ${isDragging ? 'text-sky-500' : 'text-gray-400'}`} />
                    <div className="text-sm text-gray-600">
                        {isDragging ? (
                            <span className="text-sky-600">تصویر را رها کنید...</span>
                        ) : (
                            <>
                                <span className="font-medium text-sky-600">برای انتخاب کلیک کنید</span>
                                <span className="text-gray-400"> یا </span>
                                <span className="font-medium text-sky-600">تصویر را بکشید</span>
                            </>
                        )}
                    </div>
                    <div className="text-xs text-gray-400">
                        {`فرمت‌های مجاز: JPG, PNG, GIF, WebP • حداکثر ${maxImages} تصویر • حداکثر ${maxSize} مگابایت`}
                    </div>
                </div>
            </div>

            {/* آمار آپلود */}
            {value.length > 0 && (
                <div className="mt-3 mb-3 text-sm text-gray-600">
                    <span className="font-medium">{value.length}</span>
                    <span className="text-gray-400"> از </span>
                    <span className="font-medium">{maxImages}</span>
                    <span className="text-gray-400"> تصویر آپلود شده</span>
                </div>
            )}

            {/* تصاویر - باکس های کوچک مثل عکس */}
            {/* تصاویر - باکس های کوچک */}
            {/* تصاویر - باکس های کوچک */}
            {/* تصاویر - باکس های کوچک */}
            {value.length > 0 && (
                <div className="flex flex-wrap gap-3">
                    {value.map((image, index) => (
                        <ImageItem
                            key={image.id}
                            image={image}
                            index={index}
                            isFirst={index === 0}
                            isLast={index === value.length - 1}
                            onRemove={removeImage}
                            onMoveLeft={moveLeft}
                            onMoveRight={moveRight}
                        />
                    ))}
                </div>
            )}

            {/* خطاها */}
            {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
            )}
            {hint && !error && (
                <p className="mt-1.5 text-xs text-gray-500">{hint}</p>
            )}

            {/* Toast Error */}
            {rejectedMessage && (
                <div className="fixed bottom-4 right-4 z-50 px-3 py-2 bg-red-500 text-white text-sm rounded-lg shadow-lg">
                    {rejectedMessage}
                </div>
            )}
        </div>
    );
};

export default ToolsImageUploaderPro;