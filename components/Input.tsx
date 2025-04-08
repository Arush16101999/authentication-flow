import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Input: React.FC<InputProps> = ({ label, name, ...rest }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-sm font-medium mb-1">
      {label}
    </label>
    <input
      id={name}
      name={name}
      className="w-full px-4 py-2 border rounded-md"
      {...rest}
    />
  </div>
);
