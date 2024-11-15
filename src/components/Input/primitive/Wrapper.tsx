import { useContext } from 'react';
import { inputStyles } from '../Input.styles';
import { InputWrapperProps } from '../Input.types';
import { InputContext } from './Root';

export const Wrapper = ({ children }: InputWrapperProps) => {
  const { error, size } = useContext(InputContext);

  const { inputWrapper } = inputStyles({ size, error });

  return <div className={inputWrapper()}>{children}</div>;
};
