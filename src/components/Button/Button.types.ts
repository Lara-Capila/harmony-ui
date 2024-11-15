import { ButtonHTMLAttributes } from 'react';
import { KindType, SizeType, StatusType } from '../../types/model';

export type ButtonStatusType = StatusType | 'primary' | 'invert';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: SizeType;
  kind?: KindType;
  status?: ButtonStatusType;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}
