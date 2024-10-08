import React, { useId, forwardRef } from "react";

const Input = ({ label, type = "text", className = "", ...props }, ref) => {
  const id = useId();

  return (
    <div className="mb-4 w-full">
      {label && (
        <label htmlFor={id} className="block font-medium text-gray-800 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        ref={ref}
        {...props}
        className={`w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm md:px-3 md:py-2 ${className}`}
      />
    </div>
  );
};

export default forwardRef(Input);
