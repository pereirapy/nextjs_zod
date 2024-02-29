import { ChangeEvent } from 'react';

type SelectWithLabelProps = {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  value: string | number;
  onChange: (_e: ChangeEvent<HTMLSelectElement>) => void;
};
export const SelectWithLabel = ({
  label,
  options,
  name,
  value,
  onChange,
}: SelectWithLabelProps) => (
  <div>
    <label
      className="mr-2"
      htmlFor={label}>
      {label}
    </label>
    <select
      id={label}
      name={name}
      onChange={onChange}
      value={String(value)}
      className="py-1 px-3 border border-slate-500">
      {options.map((option) => (
        <option
          key={option.value}
          value={String(option.value)}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
