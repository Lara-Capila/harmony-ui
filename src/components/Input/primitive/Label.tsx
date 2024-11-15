import { useContext } from 'react';
import { Label } from '../../Label/Label';
import { InputLabelProps } from '../Input.types';
import { InputContext } from './Root';

export const InputLabel = ({ children, htmlFor }: InputLabelProps) => {
  const { error, size, required } = useContext(InputContext);

  return (
    <Label required={required} htmlFor={htmlFor} size={size} error={error}>
      {children}
    </Label>
  );
};
