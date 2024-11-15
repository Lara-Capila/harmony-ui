import { createContext, useMemo, useState } from 'react';
import { SizeType } from '../../../types/model';
import { inputStyles } from '../Input.styles';
import { CreateContextProps, InputRootProps } from '../Input.types';

const defaultContextValues: CreateContextProps = {
  size: 'md',
  error: false,
  disabled: false,
  readOnly: false,
  required: false,
  setSize: () => {},
  setError: () => {},
  setDisabled: () => {},
  setReadOnly: () => {},
  setRequired: () => {},
};

export const InputContext = createContext<CreateContextProps>(defaultContextValues);

const InputProvider = ({
  children,
  size: currentSize,
  error: currentError,
  disabled: currentDisabled,
  readOnly: currentReadOnly,
  required: currentRequired,
}: Required<InputRootProps>) => {
  const [size, setSize] = useState<SizeType>(currentSize);
  const [error, setError] = useState<boolean>(currentError);
  const [disabled, setDisabled] = useState<boolean>(currentDisabled);
  const [readOnly, setReadOnly] = useState<boolean>(currentReadOnly);
  const [required, setRequired] = useState<boolean>(currentRequired);

  const value = useMemo(
    () => ({
      size,
      setSize,
      error,
      setError,
      disabled,
      setDisabled,
      readOnly,
      setReadOnly,
      required,
      setRequired,
    }),
    [size, error, disabled, readOnly, required]
  );

  return <InputContext.Provider value={value}>{children}</InputContext.Provider>;
};

export const Root = ({
  children,
  size = 'md',
  error = false,
  disabled = false,
  readOnly = false,
  required = false,
}: InputRootProps) => {
  const { host } = inputStyles({ size });

  return (
    <InputProvider
      required={required}
      size={size}
      error={error}
      disabled={disabled}
      readOnly={readOnly}
    >
      <div className={host()}>{children}</div>
    </InputProvider>
  );
};
