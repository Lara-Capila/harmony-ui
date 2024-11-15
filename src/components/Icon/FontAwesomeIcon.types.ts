export type KindIcon = 'solid' | 'regular' | 'brands';

export type FontAwesomeIconSize =
  | 'fa-2xs' // 0.625em / 10px
  | 'fa-xs' // 0.75em / 12px
  | 'fa-sm' // 0.875em / 14px
  | 'fa-lg' // 1.25em / 20px
  | 'fa-xl' // 1.5em / 24px
  | 'fa-2xl'; // 2em / 32px

export interface FontAwesomeIconProps {
  kind?: KindIcon;
  iconName: string;
  size?: FontAwesomeIconSize;
  id?: string;
  styles?: string;
}
