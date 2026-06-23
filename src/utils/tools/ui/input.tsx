import {HTMLInputTypeAttribute} from "react";

export default function ToolsInputText(
    {
        value,
        onChange,
        title,
        placeholder,
        required = false,
        type
    }:
    {
        value: string;
        onChange: (value: string) => void
        title: string;
        placeholder?: string;
        required?: boolean;
        type: HTMLInputTypeAttribute
    }
) {

    return <>
        <div className="w-full mb-4 form-control">
            <label className="label">
                {/*dark:text-white*/}
                <span className="label-text text-sm text-black2">{title}</span>
                {required && <span className="text-rose-500"> *</span>}
            </label>
            {/*dark:bg-gray-800 dark:text-white dark:border-0*/}
            <input
                style={(["email","password","url"] as HTMLInputTypeAttribute[]).includes(type) ? {direction:'ltr'} : undefined}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full h-12 mt-2 rounded-lg bg-slate-100  focus:ring-1 focus:ring-sky-500
                 px-4
                 placeholder:text-xs
                 border-slate-200 "
                placeholder={placeholder}
                required={required}
                autoComplete="off"
            />
        </div>
    </>
}