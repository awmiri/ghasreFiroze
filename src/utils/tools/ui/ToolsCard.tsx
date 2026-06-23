import React, { ReactNode } from 'react';

type CardVariant = 'default' | 'outlined' | 'elevated' | 'filled';
type CardPadding = 'none' | 'sm' | 'md' | 'lg';

interface ToolsCardProps {
    children: ReactNode;
    variant?: CardVariant;
    padding?: CardPadding;
    className?: string;
    onClick?: () => void;
    hoverable?: boolean;
}

const paddingClasses = {
    none: 'p-0',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
};

const variantClasses = {
    default: 'bg-white border border-gray-200',
    outlined: 'bg-transparent border-2 border-gray-300',
    elevated: 'bg-white shadow-lg',
    filled: 'bg-gray-50 border border-gray-100',
};

const ToolsCard: React.FC<ToolsCardProps> = ({
                                                 children,
                                                 variant = 'default',
                                                 padding = 'md',
                                                 className = '',
                                                 onClick,
                                                 hoverable = false,
                                             }) => {
    return (
        <div
            className={`
                rounded-lg
                transition-all duration-200
                ${variantClasses[variant]}
                ${paddingClasses[padding]}
                ${hoverable ? 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer' : ''}
                ${onClick ? 'cursor-pointer' : ''}
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default ToolsCard;