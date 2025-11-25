import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = ({ label, error, className = '', ...props }: TextareaProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-vertical hover:border-gray-400 ${
          error ? 'border-red-500 focus:border-red-500 focus:ring-red-100' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
        <span className="inline-block w-1 h-1 rounded-full bg-red-600"></span>
        {error}
      </p>}
    </div>
  );
};
