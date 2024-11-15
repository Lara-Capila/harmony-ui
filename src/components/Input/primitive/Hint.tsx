import React, { useContext } from 'react';
import { HintText } from '../../HintText/HintText';
import { InputContext } from './Root';

export const Hint = ({ children }: { children: React.ReactNode }) => {
  const { error, size } = useContext(InputContext);

  return (
    <HintText error={error} size={size}>
      {children}
    </HintText>
  );
};
