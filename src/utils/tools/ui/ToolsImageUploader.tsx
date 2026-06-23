import React, {useState, useRef, DragEvent} from 'react';
import {Upload, X, Plus, Trash2, Move} from 'lucide-react';

export interface ImageFile {
    id: string;
    file: File;
    preview: string;
    name: string;
    size: number;
}

interface ToolsImageUploaderProps {
    value: ImageFile[];
    onChange: (images: ImageFile[]) => void;
    label?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    maxImages?: number;
    maxSize?: number; // بر حسب مگابایت
    aspectRatio?: number; // مثلاً 16/9 یا 1/1
    className?: string;
    imageClassName?: string;
}

const ToolsImageUploader: React.FC<ToolsImageUploaderProps> = (
    {
        value,
        onChange,
        label,
        hint,
        error,
        required = false,
        disabled = false,
        maxImages = 10,
        maxSize = 5, // 5 مگابایت
        aspectRatio,
        className = '',
        imageClassName = '',
    }) => {

    const [isDragging, setIsDragging] = useState(false);
    const [rejectedMessage, setRejectedMessage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const generateId = () => {
        return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    };

    const validateImage = (file: File): { valid: boolean; reason?: string } => {
        if (!file.type.startsWith('image/')) {
            return {valid: false, reason: 'فرمت فایل باید تصویر باشد'};
        }

        if (file.size > maxSize * 1024 * 1024) {
            return {valid: false, reason: `حجم تصویر بیشتر از ${maxSize} مگابایت است`};
        }

        return {valid: true};
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
                    ${isDragging ? 'border-sky-500 bg-sky-50' : 'border-gray-300 bg-gray-50'}
                    ${error ? 'border-red-500' : ''}
                    ${disabled || value.length >= maxImages ? 'opacity-50 cursor-not-allowed' : ''}
                    ${value.length >= maxImages ? 'pointer-events-none' : ''}
                `}
                style={{aspectRatio: aspectRatio || 'auto'}}
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

                <div className="flex flex-col items-center justify-center gap-2 p-8 text-center">
                    <Upload className={`w-8 h-8 ${isDragging ? 'text-sky-500' : 'text-gray-400'}`}/>
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
                        {`حداکثر ${maxImages} تصویر • حداکثر ${maxSize} مگابایت`}
                    </div>
                </div>
            </div>

            {/* تصاویر انتخاب شده */}
            {value.length > 0 && (
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {value.map((image, index) => (
                        <div
                            key={image.id}
                            className="relative group rounded-lg overflow-hidden border border-gray-200 bg-gray-50"
                        >
                            <img
                                src={image.preview}
                                alt={image.name}
                                className={`w-full aspect-square object-cover ${imageClassName}`}
                            />

                            {/* Hover overlay */}
                            <div
                                className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => removeImage(image.id)}
                                    className="p-1.5 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                                >
                                    <Trash2 className="w-4 h-4 text-white"/>
                                </button>
                            </div>

                            {/* ترتیب */}
                            <div className="absolute top-1 left-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                                {index + 1}
                            </div>

                            {/* نام فایل */}
                            <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs p-1 truncate">
                                {image.name.length > 20 ? image.name.slice(0, 17) + '...' : image.name}
                            </div>
                        </div>
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

            {/* Rejected Message Toast */}
            {rejectedMessage && (
                <div
                    className="fixed bottom-4 right-4 z-50 px-3 py-2 bg-red-500 text-white text-sm rounded-lg shadow-lg">
                    {rejectedMessage}
                </div>
            )}
        </div>
    );
};

export default ToolsImageUploader;