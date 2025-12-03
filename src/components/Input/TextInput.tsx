import { useState } from "react";

interface TextInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  textarea?: boolean;
  error?: string;
  maxLength?: number;
}

const TextInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  textarea = false,
  error,
  maxLength,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const InputComponent = textarea ? "textarea" : "input";
  const isActive = isFocused || value.length > 0;

  return (
    <div className="relative">
      <InputComponent
        type={textarea ? undefined : "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        maxLength={maxLength}
        className={`w-full px-4 pb-3 border rounded-xl transition-all duration-300 outline-none resize-none bg-white/80 dark:bg-gray-800/50 ${
          error
            ? "border-red-500 dark:border-red-500"
            : "border-gray-300 dark:border-gray-700"
        } text-gray-900 dark:text-white focus:border-blue-500 focus:bg-white focus:dark:bg-gray-800/70 focus:ring-2 focus:ring-blue-500/20 ${
          textarea ? (isActive ? "pt-8" : "pt-6") : "pt-6"
        }`}
        rows={textarea ? 6 : undefined}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 pointer-events-none origin-left transition-all duration-300 ${
          isActive
            ? "top-2 text-xs text-blue-500 dark:text-blue-400 font-medium"
            : "top-4 text-sm text-gray-500 dark:text-gray-400"
        }`}
      >
        {label}
      </label>
      {error && (
        <p className="mt-1 text-xs text-red-500 dark:text-red-400">{error}</p>
      )}
      {maxLength && (
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 text-right">
          {value.length}/{maxLength}
        </p>
      )}
    </div>
  );
};

export default TextInput;
