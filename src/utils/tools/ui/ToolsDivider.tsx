import React from 'react';

type DividerVariant = 'horizontal' | 'vertical';
type DividerStyle = 'solid' | 'dashed' | 'dotted';

interface ToolsDividerProps {
    variant?: DividerVariant;
    style?: DividerStyle;
    color?: string;
    thickness?: number;
    margin?: number; // فاصله از چپ و راست
    className?: string;
    children?: React.ReactNode;
    orientation?: 'left' | 'center' | 'right';
}

const ToolsDivider: React.FC<ToolsDividerProps> = ({
    variant = 'horizontal',
    style = 'solid',
    color = '#E5E7EB',
    thickness = 1,
    margin = 0,
    className = '',
    children,
    orientation = 'center',
}) => {

    const borderStyle = {
        borderColor: color,
        borderWidth: thickness,
        borderStyle: style,
    };

    if (variant === 'vertical') {
        return (
            <div
                className={`inline-block h-full ${className}`}
                style={{
                    width: thickness,
                    borderLeft: `${thickness}px ${style} ${color}`,
                    marginLeft: margin,
                    marginRight: margin,
                }}
            />
        );
    }

    // با متن
    if (children) {
        const orientationClass = {
            left: 'justify-start',
            center: 'justify-center',
            right: 'justify-end',
        };

        return (
            <div className={`flex items-center gap-4 w-full ${orientationClass[orientation]} ${className}`}>
                <div
                    className="flex-1"
                    style={{
                        borderTop: `${thickness}px ${style} ${color}`,
                        marginLeft: orientation === 'right' && margin ? margin : 0,
                        marginRight: orientation === 'left' && margin ? margin : 0,
                    }}
                />
                <span className="text-sm text-gray-400 whitespace-nowrap">{children}</span>
                <div
                    className="flex-1"
                    style={{
                        borderTop: `${thickness}px ${style} ${color}`,
                        marginLeft: orientation === 'right' && margin ? margin : 0,
                        marginRight: orientation === 'left' && margin ? margin : 0,
                    }}
                />
            </div>
        );
    }

    // ساده
    return (
        <div
            className={`w-full ${className}`}
            style={{
                borderTop: `${thickness}px ${style} ${color}`,
                marginLeft: margin,
                marginRight: margin,
                width: `calc(100% - ${margin * 2}px)`,
            }}
        />
    );
};

export default ToolsDivider;