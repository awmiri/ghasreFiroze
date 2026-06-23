'use client';
import { useState } from 'react';
import ToolsImageUploaderPro, {ImageFile} from "@/components/tools/ui/ToolsImageUploaderPro";

export default function ImageUploadExample() {
    const [images, setImages] = useState<ImageFile[]>([]);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <ToolsImageUploaderPro
                value={images}
                onChange={setImages}
                label="گالری تصاویر"
                hint="می‌توانید چندین تصویر انتخاب کنید"
                maxImages={8}
                maxSize={5}
            />
        </div>
    );
}