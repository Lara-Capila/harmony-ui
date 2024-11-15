import { SizeType } from '../../types/model';

export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  size?: SizeType;
  required?: boolean;
  error?: boolean;
}
