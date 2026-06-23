import React, { useState, useRef, DragEvent } from 'react';
import { Upload, X, File, FileText, Image, FileArchive, FileJson, FileCode, XCircle } from 'lucide-react';

type FileSize = 'sm' | 'md' | 'lg';
type FileVariant = 'outline' | 'filled' | 'dashed';

interface ToolsFileInputProps {
    value: File[];
    onChange: (files: File[]) => void;
    label?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    multiple?: boolean;
    maxFiles?: number;
    maxSize?: number; // بر حسب مگابایت
    accept?: string; // مثل ".pdf,.jpg,.png" یا "image/*"
    size?: FileSize;
    variant?: FileVariant;
    className?: string;
}

const ToolsFileInput: React.FC<ToolsFileInputProps> = ({
                                                           value,
                                                           onChange,
                                                           label,
                                                           hint,
                                                           error,
                                                           required = false,
                                                           disabled = false,
                                                           multiple = true,
                                                           maxFiles = 10,
                                                           maxSize = 10, // 10 مگابایت پیش‌فرض
                                                           accept,
                                                           size = 'md',
                                                           variant = 'dashed',
                                                           className = '',
                                                       }) => {

    const [isDragging, setIsDragging] = useState(false);
    const [rejectedFiles, setRejectedFiles] = useState<{ name: string; reason: string }[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const sizeClasses = {
        sm: 'p-4 text-sm',
        md: 'p-6 text-base',
        lg: 'p-8 text-lg',
    };

    const variantClasses = {
        outline: 'border-2 border-gray-300 bg-white',
        filled: 'border-2 border-transparent bg-gray-50',
        dashed: 'border-2 border-dashed border-gray-300 bg-gray-50',
    };

    const getFileIcon = (fileName: string) => {
        const extension = fileName.split('.').pop()?.toLowerCase();
        if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension || '')) {
            return <Image className="w-4 h-4 text-blue-500" />;
        }
        if (['pdf'].includes(extension || '')) {
            return <FileText className="w-4 h-4 text-red-500" />;
        }
        if (['zip', 'rar', '7z', 'tar', 'gz'].includes(extension || '')) {
            return <FileArchive className="w-4 h-4 text-yellow-500" />;
        }
        if (['json', 'xml', 'csv'].includes(extension || '')) {
            return <FileJson className="w-4 h-4 text-green-500" />;
        }
        if (['js', 'ts', 'jsx', 'tsx', 'html', 'css', 'py', 'java', 'cpp'].includes(extension || '')) {
            return <FileCode className="w-4 h-4 text-purple-500" />;
        }
        return <File className="w-4 h-4 text-gray-500" />;
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const validateFiles = (files: File[]): { valid: File[]; rejected: { name: string; reason: string }[] } => {
        const valid: File[] = [];
        const rejected: { name: string; reason: string }[] = [];

        for (const file of files) {
            // بررسی حجم
            if (file.size > maxSize * 1024 * 1024) {
                rejected.push({ name: file.name, reason: `حجم بیشتر از ${maxSize} مگابایت` });
                continue;
            }

            // بررسی پسوند
            if (accept) {
                const acceptExts = accept.split(',').map(e => e.trim());
                const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
                const fileType = file.type;

                let isAccepted = false;
                for (const acceptItem of acceptExts) {
                    if (acceptItem.startsWith('.')) {
                        if (fileExt === acceptItem.toLowerCase()) isAccepted = true;
                    } else if (acceptItem.endsWith('/*')) {
                        const typePrefix = acceptItem.replace('/*', '');
                        if (fileType.startsWith(typePrefix)) isAccepted = true;
                    } else {
                        if (fileType === acceptItem) isAccepted = true;
                    }
                }

                if (!isAccepted) {
                    rejected.push({ name: file.name, reason: `فرمت پشتیبانی نمی‌شود (${accept})` });
                    continue;
                }
            }

            valid.push(file);
        }

        // محدودیت تعداد
        const currentCount = value.length;
        const newCount = valid.length;
        if (currentCount + newCount > maxFiles) {
            rejected.push({ name: 'تعداد فایل‌ها', reason: `حداکثر ${maxFiles} فایل مجاز است` });
            return { valid: valid.slice(0, maxFiles - currentCount), rejected };
        }

        return { valid, rejected };
    };

    const processFiles = (files: FileList | File[]) => {
        if (disabled) return;
        const fileArray = Array.from(files);
        const { valid, rejected: newRejected } = validateFiles(fileArray);

        if (valid.length > 0) {
            const newFiles = multiple ? [...value, ...valid] : valid;
            onChange(newFiles);
        }

        if (newRejected.length > 0) {
            setRejectedFiles(prev => [...prev, ...newRejected]);
            setTimeout(() => setRejectedFiles(prev => prev.filter(r => !newRejected.includes(r))), 3000);
        }
    };

    const handleDrop = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        if (disabled) return;
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            processFiles(files);
        }
    };

    const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (!disabled) setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            processFiles(e.target.files);
        }
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    const removeFile = (index: number) => {
        const newFiles = [...value];
        newFiles.splice(index, 1);
        onChange(newFiles);
    };

    const handleClick = () => {
        if (!disabled) {
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
                    ${sizeClasses[size]}
                    ${variantClasses[variant]}
                    ${isDragging ? 'border-sky-500 bg-sky-50' : ''}
                    ${error ? 'border-red-500' : ''}
                    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                `}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    multiple={multiple}
                    accept={accept}
                    onChange={handleFileSelect}
                    disabled={disabled}
                    hidden
                    className="hidden"
                />

                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <Upload className={`w-8 h-8 ${isDragging ? 'text-sky-500' : 'text-gray-400'}`} />
                    <div className="text-sm text-gray-600">
                        {isDragging ? (
                            <span className="text-sky-600">فایل را رها کنید...</span>
                        ) : (
                            <>
                                <span className="font-medium text-sky-600">برای انتخاب کلیک کنید</span>
                                <span className="text-gray-400"> یا </span>
                                <span className="font-medium text-sky-600">فایل را بکشید</span>
                            </>
                        )}
                    </div>
                    <div className="text-xs text-gray-400">
                        {accept ? `فرمت‌های مجاز: ${accept}` : 'همه فرمت‌ها مجاز هستند'}
                        {` • حداکثر ${maxFiles} فایل`}
                        {` • حداکثر ${maxSize} مگابایت`}
                    </div>
                </div>
            </div>

            {/* فایل‌های انتخاب شده */}
            {value.length > 0 && (
                <div className="mt-3 space-y-2">
                    {value.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200"
                        >
                            <div className="flex items-center gap-2 flex-1 min-w-0">
                                {getFileIcon(file.name)}
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-gray-900 truncate">
                                        {file.name}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                        {formatFileSize(file.size)}
                                    </div>
                                </div>
                            </div>
                            {!disabled && (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFile(index);
                                    }}
                                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <X className="w-4 h-4 text-gray-500" />
                                </button>
                            )}
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

            {/* Rejected Files Toast */}
            {rejectedFiles.length > 0 && (
                <div className="fixed bottom-4 right-4 z-50 space-y-1">
                    {rejectedFiles.map((rej, idx) => (
                        <div key={idx} className="flex items-center gap-2 px-3 py-2 bg-red-500 text-white text-sm rounded-lg shadow-lg">
                            <XCircle className="w-4 h-4" />
                            <span>{rej.name}: {rej.reason}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ToolsFileInput;