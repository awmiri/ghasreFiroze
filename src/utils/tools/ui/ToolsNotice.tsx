import React, { ReactNode } from 'react';

type NoticeVariant = 'info' | 'warning' | 'error' | 'success';

interface ToolsNoticeProps {
    children: ReactNode;
    variant?: NoticeVariant;
    icon?: ReactNode;
    className?: string;
}

const variantClasses = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    success: 'bg-green-50 text-green-800 border-green-200',
};

const defaultIcons = {
    info: 'ℹ️',
    warning: '⚠️',
    error: '❌',
    success: '✅',
};

const ToolsNotice: React.FC<ToolsNoticeProps> = ({
                                                     children,
                                                     variant = 'info',
                                                     icon,
                                                     className = '',
                                                 }) => {
    return (
        <div className={`rounded-lg border p-3 text-sm ${variantClasses[variant]} ${className}`}>
            <div className="flex items-center gap-2">
                {icon !== undefined ? icon : <span>{defaultIcons[variant]}</span>}
                <span>{children}</span>
            </div>
        </div>
    );
};

export default ToolsNotice;