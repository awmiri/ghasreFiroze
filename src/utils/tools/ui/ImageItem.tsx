import React, {useState} from 'react';
import {Trash2, ChevronLeft, ChevronRight} from 'lucide-react';

interface ImageFile {
    id: string;
    file: File;
    preview: string;
    name: string;
    size: number;
}

interface ImageItemProps {
    image: ImageFile;
    index: number;
    isFirst: boolean;
    isLast: boolean;
    onRemove: (id: string) => void;
    onMoveLeft: (id: string) => void;
    onMoveRight: (id: string) => void;
}

const ImageItem: React.FC<ImageItemProps> = (
    {
        image,
        index,
        isFirst,
        isLast,
        onRemove,
        onMoveLeft,
        onMoveRight,
    }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative"
            style={{width: '64px', height: '64px'}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* باکس عکس */}
            <div className="w-full h-full rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                <img
                    src={image.preview}
                    alt={image.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* شماره عکس */}
            <div
                className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-sky-500 text-white text-xs flex items-center justify-center shadow-md">
                {index + 1}
            </div>

            {/* هاور منو */}
            {isHovered && (
                <div className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center gap-1">
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove(image.id);
                        }}
                        className="p-1.5 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
                        title="حذف"
                    >
                        <Trash2 className="w-3 h-3 text-white"/>
                    </button>

                    {!isFirst && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onMoveLeft(image.id);
                            }}
                            className="p-1.5 bg-gray-600 rounded-full hover:bg-gray-700 transition-colors"
                            title="انتقال به چپ"
                        >
                            <ChevronRight className="w-3 h-3 text-white"/>
                        </button>
                    )}

                    {!isLast && (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onMoveRight(image.id);
                            }}
                            className="p-1.5 bg-gray-600 rounded-full hover:bg-gray-700 transition-colors"
                            title="انتقال به راست"
                        >
                            <ChevronLeft className="w-3 h-3 text-white"/>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageItem;