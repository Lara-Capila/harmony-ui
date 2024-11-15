import { FontAwesomeIconProps } from './FontAwesomeIcon.types';

const iconPrefixMap = {
  solid: 'fa-solid',
  regular: 'fa-regular',
  brands: 'fa-brands',
};

export const FontAwesomeIcon = ({
  kind = 'solid',
  iconName,
  size = 'fa-sm',
  id,
  styles,
}: FontAwesomeIconProps) => {
  const iconPrefix = iconPrefixMap[kind];

  return <i id={id} className={`${iconPrefix} ${styles} ${iconName} ${size}`}></i>;
};
