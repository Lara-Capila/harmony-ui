import { useContext } from 'react';
import { FontAwesomeIcon } from '../../Icon/FontAwesomeIcon';
import { FontAwesomeIconProps } from '../../Icon/FontAwesomeIcon.types';
import { inputStyles } from '../Input.styles';
import { InputContext } from './Root';

export const prefixIconId = 'prefix-icon';
export const suffixIconId = 'suffix-icon';

export const PrefixIcon = ({ iconName, kind }: FontAwesomeIconProps) => {
  const { size } = useContext(InputContext);

  const { prefix } = inputStyles({ size });

  return (
    <FontAwesomeIcon
      kind={kind}
      iconName={iconName}
      id={prefixIconId}
      styles={prefix()}
    />
  );
};

export const SuffixIcon = ({ iconName, kind }: FontAwesomeIconProps) => {
  const { size } = useContext(InputContext);

  const { suffix } = inputStyles({ size });
  return (
    <FontAwesomeIcon
      kind={kind}
      iconName={iconName}
      id={suffixIconId}
      styles={suffix()}
    />
  );
};
