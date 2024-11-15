import { FontAwesomeIcon } from '../../Icon/FontAwesomeIcon';
import { FontAwesomeIconProps } from '../../Icon/FontAwesomeIcon.types';

export const Icon = ({ iconName, kind }: FontAwesomeIconProps) => {
  return <FontAwesomeIcon kind={kind} iconName={iconName} />;
};
