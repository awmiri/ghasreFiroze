import React, { ReactNode } from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface ToolsAlertProps {
    variant?: AlertVariant;
    title?: string;
    message: string;
    icon?: ReactNode;
    closable?: boolean;
    onClose?: () => void;
    className?: string;
    showIcon?: boolean;
}

const variantStyles = {
    info: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-800',
        icon: <Info className="w-5 h-5 text-blue-500" />,
    },
    success: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        text: 'text-green-800',
        icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
    warning: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        text: 'text-yellow-800',
        icon: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
    },
    error: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        text: 'text-red-800',
        icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    },
};

const ToolsAlert: React.FC<ToolsAlertProps> = ({
                                                   variant = 'info',
                                                   title,
                                                   message,
                                                   icon,
                                                   closable = false,
                                                   onClose,
                                                   className = '',
                                                   showIcon = true,
                                               }) => {
    const styles = variantStyles[variant];

    return (
        <div className={`rounded-lg border p-4 ${styles.bg} ${styles.border} ${className}`}>
            <div className="flex items-start gap-3">
                {showIcon && (icon || styles.icon)}
                <div className="flex-1">
                    {title && (
                        <h4 className={`font-medium mb-1 ${styles.text}`}>{title}</h4>
                    )}
                    <p className={`text-sm ${styles.text} opacity-90`}>{message}</p>
                </div>
                {closable && (
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default ToolsAlert;