import React from 'react';

export default function SelectInput({
    label, 
    name, 
    className, 
    children, 
    errors = [],
  ...props
}){
  return (
    <div className="flex flex-col items-start">
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}:
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={
            `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
            className
        }
      >
        {children}
      </select>
      {errors && <div className="form-error">{errors}</div>}
    </div>
  );
};