import React, {Children, ReactNode} from 'react';

// تعریف تایپ‌ها برای props
type MainAxisAlignment = 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
type CrossAxisAlignment = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
type MainAxisSize = 'max' | 'min';
type TextDirection = 'rtl' | 'ltr';
type VerticalDirection = 'down' | 'up';

// تابع کمکی برای تبدیل MainAxisAlignment به کلاس‌های Tailwind
const getJustifyContent = (alignment: MainAxisAlignment): string => {
    const map: Record<MainAxisAlignment, string> = {
        'start': 'justify-start',
        'end': 'justify-end',
        'center': 'justify-center',
        'space-between': 'justify-between',
        'space-around': 'justify-around',
        'space-evenly': 'justify-evenly',
    };
    return map[alignment];
};

// تابع کمکی برای تبدیل CrossAxisAlignment به کلاس‌های Tailwind
const getAlignItems = (alignment: CrossAxisAlignment): string => {
    const map: Record<CrossAxisAlignment, string> = {
        'start': 'items-start',
        'end': 'items-end',
        'center': 'items-center',
        'stretch': 'items-stretch',
        'baseline': 'items-baseline',
    };
    return map[alignment];
};

// تابع کمکی برای تبدیل VerticalDirection
const getFlexDirection = (direction: VerticalDirection): string => {
    return direction === 'down' ? 'flex-col' : 'flex-col-reverse';
};

// هوک برای تشخیص اندازه صفحه (responsive)
const useBreakpoint = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return isMobile;
};

// تبدیل ToolsRowExpand
interface ToolsRowExpandProps {
    children: ReactNode[] | ReactNode;
    space?: number;
    spaceFirst?: number;
    spaceLast?: number;
    flexs?: number[];
    hasSpace?: boolean;
    firstSpace?: boolean;
    lastSpace?: boolean;
    firstLastSpace?: boolean;
    textDirection?: TextDirection;
    mainAxisAlignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    crossAxisAlignment?: CrossAxisAlignment;
    verticalDirection?: VerticalDirection;
}

export const ToolsRowExpand: React.FC<ToolsRowExpandProps> = (
    {
        children,
        space,
        spaceFirst,
        spaceLast,
        flexs = [],
        hasSpace = true,
        firstSpace = false,
        lastSpace = false,
        firstLastSpace = false,
        textDirection = 'rtl',
        mainAxisAlignment = 'start',
        mainAxisSize = 'max',
        crossAxisAlignment = 'end',
        verticalDirection = 'down',
    }) => {
    const isMobile = useBreakpoint();
    const finalSpace = space ?? 8; // w8() -> 8px
    const finalSpaceFirst = spaceFirst ?? 8;
    const finalSpaceLast = spaceLast ?? 8;

    const childrenArray = Children.toArray(children);
    if (childrenArray.length === 0) {
        return null;
    }

    // ساخت لیست فرزندان با فاصله‌ها
    const renderChildrenWithSpacing = () => {
        const out: ReactNode[] = [];

        if (firstSpace && !isMobile) {
            out.push(<div key="first-space" style={{width: finalSpaceFirst}}/>);
        }


        for (let j = 0; j < childrenArray.length; j++) {
            const child = childrenArray[j];
            const flex = flexs[j] ?? 1;

            if (!isMobile) {
                out.push(
                    <div key={`child-${j}`} style={{flex}} className="min-w-0">
                        {child}
                    </div>
                );
            } else {
                out.push(<div key={`child-${j}`}>{child}</div>);
            }

            if (j !== childrenArray.length - 1 && hasSpace) {
                if (!isMobile) {
                    out.push(<div key={`space-${j}`} style={{width: finalSpace}}/>);
                } else {
                    out.push(<div key={`space-${j}`} style={{height: finalSpace}}/>);
                }
            }
        }

        if (lastSpace && !isMobile && firstLastSpace) {
            out.push(<div key="last-space" style={{width: finalSpaceLast}}/>);
        }

        return out;
    };

    const commonClasses = `
    flex
    ${mainAxisSize === 'min' ? '' : 'w-full'}
    ${getAlignItems(crossAxisAlignment)}
  `;
    if (isMobile) {
        return (
            <div
                className={`${commonClasses} ${getFlexDirection(verticalDirection)}`}
                style={{
                    justifyContent: getJustifyContent(mainAxisAlignment),
                    paddingLeft: '8px',
                    paddingRight: '8px',
                    direction: textDirection === 'rtl'?'rtl':"ltr",
                }}
            >
                {renderChildrenWithSpacing()}
            </div>
        );
    }


    return (
        <div
            className={`${commonClasses} flex-row`}
            style={{
                justifyContent: getJustifyContent(mainAxisAlignment),
                direction: textDirection === 'rtl'?'rtl':"ltr",
            }}
        >
            {renderChildrenWithSpacing()}
        </div>
    );
};

// تبدیل ToolsRowExpandForce
interface ToolsRowExpandForceProps {
    children: ReactNode[] | ReactNode;
    space?: number;
    spaceFirst?: number;
    spaceLast?: number;
    flexs?: number[];
    hasSpace?: boolean;
    firstSpace?: boolean;
    lastSpace?: boolean;
    firstLastSpace?: boolean;
    textDirection?: TextDirection;
    mainAxisAlignment?: MainAxisAlignment;
    mainAxisSize?: MainAxisSize;
    crossAxisAlignment?: CrossAxisAlignment;
    verticalDirection?: VerticalDirection;
}

export const ToolsRowExpandForce: React.FC<ToolsRowExpandForceProps> = (
    {
        children,
        space,
        spaceFirst,
        spaceLast,
        flexs = [],
        hasSpace = true,
        firstSpace = false,
        lastSpace = false,
        firstLastSpace = false,
        textDirection = 'rtl',
        mainAxisAlignment = 'start',
        mainAxisSize = 'max',
        crossAxisAlignment = 'start',
        verticalDirection = 'down',
    }) => {
    const finalSpace = space ?? 8;
    const finalSpaceFirst = spaceFirst ?? 8;
    const finalSpaceLast = spaceLast ?? 8;

    const childrenArray = Children.toArray(children);
    if (childrenArray.length === 0) {
        return null;
    }

    const renderChildrenWithSpacing = () => {
        const out: ReactNode[] = [];

        if (firstSpace && hasSpace) {
            out.push(<div key="first-space" style={{width: finalSpaceFirst}}/>);
        }
        for (let j = 0; j < childrenArray.length; j++) {
            const child = childrenArray[j];
            const flex = flexs[j] ?? 1;

            out.push(
                <div key={`child-${j}`} style={{flex}} className="min-w-0">
                    {child}
                </div>
            );

            if (j !== childrenArray.length - 1 && hasSpace) {
                out.push(<div key={`space-${j}`} style={{width: finalSpace}}/>);
            }
        }

        if (lastSpace && hasSpace && firstLastSpace) {
            out.push(<div key="last-space" style={{width: finalSpaceLast}}/>);
        }

        return out;
    };

    const commonClasses = `
    flex flex-row
    ${mainAxisSize === 'min' ? '' : 'w-full'}
    ${getAlignItems(crossAxisAlignment)}
    ${textDirection === 'rtl' ? 'direction-rtl' : 'direction-ltr'}
  `;

    return (
        <div
            className={commonClasses}
            style={{
                justifyContent: getJustifyContent(mainAxisAlignment),
                direction: textDirection === 'rtl'?'rtl':"ltr",
            }}
        >
            {renderChildrenWithSpacing()}
        </div>
    );
};

// اضافه کردن استایل کمکی برای RTL
// const style = document.createElement('style');
// style.textContent = `
//   .direction-rtl {
//     direction: rtl;
//   }
//   .direction-ltr {
//     direction: ltr;
//   }
// `;
// document.head.appendChild(style);