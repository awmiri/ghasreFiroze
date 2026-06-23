'use client';
import { useState } from 'react';
import { Send, Search, Heart, Star, Trash, Edit, Save, X, Plus } from 'lucide-react';
import {ToolsButton, ToolsTextarea} from "@/components/tools/ui";

export default function Example() {
    const [comment, setComment] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className="max-w-md mx-auto p-4 space-y-6">
            <h1 className="text-2xl font-bold">Textarea & Button Examples</h1>

            {/* ===== Textarea Examples ===== */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">Textarea</h2>

                <ToolsTextarea
                    value={comment}
                    onChange={setComment}
                    label="نظر شما"
                    placeholder="نظر خود را بنویسید..."
                    rows={3}
                    hint="حداقل 10 کاراکتر"
                />

                <ToolsTextarea
                    value={description}
                    onChange={setDescription}
                    label="توضیحات"
                    placeholder="توضیحات کامل..."
                    rows={4}
                    variant="outline"
                    icon={<Edit className="w-4 h-4" />}
                    required
                />

                <ToolsTextarea
                    value=""
                    onChange={() => {}}
                    label="فیلد خطا"
                    error="این فیلد اجباری است"
                    variant="filled"
                />
            </div>

            {/* ===== Button Examples ===== */}
            <div className="space-y-4">
                <h2 className="text-lg font-semibold">دکمه‌ها</h2>

                {/* انواع دکمه */}
                <div className="flex flex-wrap gap-2">
                    <ToolsButton variant="primary">Primary</ToolsButton>
                    <ToolsButton variant="secondary">Secondary</ToolsButton>
                    <ToolsButton variant="success">Success</ToolsButton>
                    <ToolsButton variant="danger">Danger</ToolsButton>
                    <ToolsButton variant="warning">Warning</ToolsButton>
                    <ToolsButton variant="info">Info</ToolsButton>
                    <ToolsButton variant="ghost">Ghost</ToolsButton>
                    <ToolsButton variant="outline">Outline</ToolsButton>
                </div>

                {/* با آیکون */}
                <div className="flex flex-wrap gap-2">
                    <ToolsButton icon={<Search className="w-4 h-4" />}>
                        جستجو
                    </ToolsButton>
                    <ToolsButton
                        variant="success"
                        icon={<Save className="w-4 h-4" />}
                        iconPosition="right"
                    >
                        ذخیره
                    </ToolsButton>
                    <ToolsButton
                        onClick={()=>{}}
                        variant="danger"
                        icon={<Trash className="w-4 h-4" />}
                        iconOnly
                        shape="circle"
                    />
                    <ToolsButton
                        variant="primary"
                        icon={<Plus className="w-4 h-4" />}
                        iconOnly
                        shape="rounded"
                    />
                </div>

                {/* سایزهای مختلف */}
                <div className="flex flex-wrap items-center gap-2">
                    <ToolsButton size="xs">XS</ToolsButton>
                    <ToolsButton size="sm">SM</ToolsButton>
                    <ToolsButton size="md">MD</ToolsButton>
                    <ToolsButton size="lg">LG</ToolsButton>
                    <ToolsButton size="xl">XL</ToolsButton>
                </div>

                {/* حالت‌های خاص */}
                <div className="flex flex-wrap gap-2">
                    <ToolsButton loading disabled>
                        در حال ارسال
                    </ToolsButton>
                    <ToolsButton disabled>غیرفعال</ToolsButton>
                    <ToolsButton fullWidth>عرض کامل</ToolsButton>
                </div>

                {/* با آیکون و متن */}
                <div className="flex flex-wrap gap-2">
                    <ToolsButton
                        icon={<Heart className="w-4 h-4" />}
                        variant="danger"
                    >
                        پسندیدن
                    </ToolsButton>
                    <ToolsButton
                        icon={<Star className="w-4 h-4" />}
                        variant="warning"
                    >
                        امتیاز
                    </ToolsButton>
                </div>
            </div>
        </div>
    );
}