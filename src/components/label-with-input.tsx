import React from 'react';
import {
  Controller,
  Control,
  ControllerRenderProps,
  UseFormStateReturn,
} from 'react-hook-form';

type ReactHookFormsProps = {
  field: ControllerRenderProps<any, any>;
  formState: UseFormStateReturn<any>;
};

type LabelWithInputProps = {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'number' | 'textArea';
  placeHolder: string;
};

const LabelWithInput = ({
  label,
  name,
  type,
  placeHolder,
  field,
  formState,
}: LabelWithInputProps & ReactHookFormsProps) => {
  const inputClassName="block w-full rounded-md border-0 py-1.5 pl-1 pr-1 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

  return (
    <div className="pb-1">
      <label
        htmlFor={name}
        className={`block text-sm font-medium leading-6 text-gray-900 ${formState.errors[name]?.message && 'text-red-600'}`}>
        {label}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        {type === 'textArea' ? (
          <textarea
            {...field}
            value={field.value ?? ''}
            placeholder={placeHolder}
            name={name}
            id={name}
            className={inputClassName}></textarea>
        ) : (
          <input
            {...field}
            value={field.value ?? ''}
            type={type || 'text'}
            name={name}
            id={name}
            className={inputClassName}
            placeholder={placeHolder}
          />
        )}
      </div>
      {formState.errors[name]?.message && (
        <p className="mt-1 text-xs text-red-600">
          {String(formState.errors[name]?.message)}
        </p>
      )}
    </div>
  );
};

LabelWithInput.displayName = 'LabelWithInput';

const LabelController = ({
  control,
  ...rest
}: LabelWithInputProps & { control: Control<any> }) => (
  <Controller
    name={rest.name}
    control={control}
    render={({ field, formState }) => (
      <LabelWithInput
        {...rest}
        formState={formState}
        field={field}
      />
    )}
  />
);

export default LabelController;
