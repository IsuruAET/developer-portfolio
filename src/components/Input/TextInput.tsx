interface TextInputProps {
  name: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  textarea?: boolean;
}

const TextInput = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  textarea = false,
}: TextInputProps) => {
  const InputComponent = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <InputComponent
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => onChange(e.target.value)}
        className="w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none bg-white/80 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 focus:bg-white focus:dark:bg-gray-800/70"
      />
      <label
        htmlFor={name}
        className="text-sm absolute left-4 top-2 pointer-events-none origin-left"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
