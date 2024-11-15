import { InputHTMLAttributes, ReactElement, ReactNode } from 'react';
import { SizeType } from '../../types/model';
import { LabelProps } from '../Label/Label.types';

export interface InputRootProps {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  size?: SizeType;
  error?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
}

export interface InputWrapperProps {
  children: ReactElement | ReactElement[];
}

export type InputLabelProps = Omit<LabelProps, 'size' | 'required'>;

export type FieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'className' | 'type'
>;

export interface CreateContextProps {
  size: SizeType;
  setSize: (size: SizeType) => void;
  error: boolean;
  setError: (error: boolean) => void;
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
  readOnly: boolean;
  setReadOnly: (readOnly: boolean) => void;
  required?: boolean;
  setRequired?: (required: boolean) => void;
}

export interface HintTextProps {
  error: boolean;
  size: SizeType;
  children: ReactNode;
}
