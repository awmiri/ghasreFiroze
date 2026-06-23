import { HTMLInputTypeAttribute, forwardRef, ReactNode } from "react";

// تعریف تایپ‌های کامل
type InputSize = "sm" | "md" | "lg";
type InputVariant = "outline" | "filled" | "flushed";

interface ToolsInputTextProps {
  // ویژگی‌های اصلی
  id?: string | undefined;
  value: string;
  onChange: (value: string) => void;
  title?: string;
  placeholder?: string;
  required?: boolean;
  type?: HTMLInputTypeAttribute;

  // ویژگی‌های جدید برای شخصی‌سازی
  label?: string; // معادل title
  error?: string;
  hint?: string;
  icon?: ReactNode;
  onClickIcon?: () => void;
  iconPosition?: "left" | "right";
  size?: InputSize; // تغییر نام از size به inputSize
  variant?: InputVariant;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  hintClassName?: string;
  disabled?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  step?: number;
  pattern?: string;
  direction?: string;
}

const ToolsInputText1 = forwardRef<HTMLInputElement, ToolsInputTextProps>(
  (
    {
      id,
      direction,
      // ویژگی‌های اصلی
      value,
      onChange,
      title,
      label,
      placeholder = "",
      required = false,
      type = "text",

      // ویژگی‌های اضافی
      error,
      hint,
      icon,
      onClickIcon,
      iconPosition = "right",
      size = "md",
      variant = "filled",
      containerClassName = "",
      labelClassName = "",
      inputClassName = "",
      errorClassName = "",
      hintClassName = "",
      disabled = false,
      readOnly = false,
      autoComplete = "off",
      maxLength,
      min,
      max,
      step,
      pattern,

      // بقیه props
      // ...restProps
    },
    ref,
  ) => {
    // تعیین اندازه input
    const sizeClasses = {
      sm: "h-8 text-xs px-3",
      md: "h-12 text-sm px-4",
      lg: "h-14 text-base px-5",
    };

    // تعیین نوع ظاهر (variant)
    const variantClasses = {
      outline:
        "border border-gray-300 bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
      filled:
        "bg-gray-100 border border-transparent focus:bg-white focus:border-sky-500 focus:ring-1 focus:ring-sky-500",
      flushed:
        "border-b border-gray-300 bg-transparent rounded-none px-0 focus:border-sky-500 focus:ring-0",
    };

    // استایل پایه و ترکیبی
    const baseInputClasses = `
        w-full 
        rounded-lg 
        transition-all 
        duration-200 
        placeholder:text-gray-400 
        placeholder:text-sm
        disabled:bg-gray-50 
        disabled:text-gray-400 
        disabled:cursor-not-allowed
        read-only:bg-gray-50 
        read-only:cursor-default
        focus:outline-none
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
        bg-white ${inputClassName}
    `;

    // استایل برچسب (label)
    const baseLabelClasses = `
        block 
        text-sm 
        font-medium 
        text-gray-700 
        mb-1.5
        ${required ? 'after:content-["*"] after:text-red-500 after:mr-1' : ""}
        ${labelClassName}
    `;

    // تعیین عنوان نهایی (اولویت با label است، بعد title)
    const finalTitle = label || title;

    // تعیین direction برای تایپ‌های خاص
    const getInputDirection = () => {
      if (!!direction) return direction == "ltr" ? "ltr" : "rtl";
      const ltrTypes = ["email", "password", "url", "tel", "number"];
      if (ltrTypes.includes(type as string)) {
        return "ltr";
      }
      return undefined;
    };

    return (
      <div className={`w-full ${containerClassName}`}>
        {/* برچسب */}
        {finalTitle && <label className={baseLabelClasses}>{finalTitle}</label>}

        {/* ورودی با آیکون */}
        <div className="relative">
          {icon && iconPosition === "left" && (
            <div
              onClick={onClickIcon}
              className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ${!!onClickIcon ? "cursor-pointer" : ""}`}
            >
              {icon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            readOnly={readOnly}
            autoComplete={autoComplete}
            maxLength={maxLength}
            min={min}
            max={max}
            step={step}
            pattern={pattern}
            className={`
                        ${baseInputClasses}
                        ${icon && iconPosition === "left" ? "pl-10" : ""}
                        ${icon && iconPosition === "right" ? "pr-10" : ""}
                    `}
            style={{
              direction: getInputDirection(),
            }}
            aria-invalid={!!error}
            aria-describedby={
              error ? `${id}-error` : hint ? `${id}-hint` : undefined
            }
          />
          {/*{...restProps}*/}
          {icon && iconPosition === "right" && (
            <div
              onClick={onClickIcon}
              className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 ${!!onClickIcon ? "cursor-pointer" : ""}`}
            >
              {icon}
            </div>
          )}
        </div>

        {/* پیام خطا */}
        {error && (
          <p className={`mt-1.5 text-sm text-red-600 ${errorClassName}`}>
            {error}
          </p>
        )}

        {/* راهنما */}
        {hint && !error && (
          <p className={`mt-1.5 text-xs text-gray-500 ${hintClassName}`}>
            {hint}
          </p>
        )}
      </div>
    );
  },
);

ToolsInputText1.displayName = "ToolsInputText1";

export default ToolsInputText1;
