import { inputStyles } from '../Input.styles';
import { FieldProps } from '../Input.types';

export const Field = ({ ...props }: FieldProps) => {
  const { inputElement } = inputStyles();

  return <input type="text" className={inputElement()} {...props} />;
};
