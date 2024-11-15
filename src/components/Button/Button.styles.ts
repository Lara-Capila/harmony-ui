import { tv } from 'tailwind-variants';
import { KindType } from '../../types/model';
import { ButtonStatusType } from './Button.types';

const baseStyles = [
  'relative flex items-center justify-center rounded border font-sans font-medium antialiased',
  'outline-none focus-visible:z-[1] focus-visible:ring-2 focus-visible:ring-offset-2',
  'border-color-default',
];

const loadingClass = 'data-[loading=true]:bg-color-pressed';

const colorClasses: Record<string, Record<string, string>> = {
  default: {
    filled: `bg-color-default text-color-default hover:bg-color-default-hover focus-visible:bg-color-default-focus active:bg-color-default-pressed`,
    outlined: `border border-default bg-color-base text-color-default hover:bg-color-default-hover focus-visible:bg-color-default-focus active:bg-color-default-pressed`,
    dashed: `border-dashed border-default bg-color-base text-color-default hover:bg-color-base-hover focus-visible::bg-color-base-focus active:bg-color-base-pressed`,
    text: `bg-transparent text-color-default hover:bg-color-default-hover focus-visible:bg-color-default-focus active:bg-color-default-pressed`,
  },
  primary: {
    filled: `bg-color-primary text-color-base hover:bg-color-primary-hover focus-visible:bg-color-primary-focus active:bg-color-primary-pressed`,
    outlined: `border border-primary text-color-primary hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
    dashed: `border-dashed border-primary text-color-primary hover:bg-color-base-hover focus-visible:bg-color-default-focus active:bg-color-default-pressed`,
    text: `bg-transparent text-color-primary hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
  },
  info: {
    filled: `bg-color-info text-color-base hover:bg-color-info-hover focus-visible:bg-color-info-focus active:bg-color-info-pressed`,
    outlined: `border border-info text-color-info hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
    dashed: `border-dashed border-info text-color-info hover:bg-color-base-hover focus-visible:bg-color-default-focus active:bg-color-default-pressed`,
    text: `bg-transparent text-color-info hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
  },
  success: {
    filled: `bg-color-success text-color-base hover:bg-color-success-hover focus-visible:bg-color-success-focus active:bg-color-success-pressed`,
    outlined: `border border-success text-color-success hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
    dashed: `border-dashed border-success text-color-success hover:bg-color-default-hover focus-visible:bg-color-default-focus active:bg-color-default-pressed`,
    text: `bg-transparent text-color-success hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
  },
  warning: {
    filled: `bg-color-warning text-color-base hover:bg-color-warning-hover focus-visible:bg-color-warning-focus active:bg-color-warning-pressed`,
    outlined: `border border-warning text-color-warning hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
    dashed: `border-dashed border-warning text-color-warning hover:bg-color-default-hover focus-visible:bg-color-default-focus active:bg-color-default-pressed`,
    text: `bg-transparent text-color-warning hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
  },
  error: {
    filled: `bg-color-error text-color-base hover:bg-color-error-hover focus-visible:bg-color-error-focus active:bg-color-error-pressed`,
    outlined: `border border-error text-color-error hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
    dashed: `border-dashed border-error text-color-error hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
    text: `bg-transparent text-color-error hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
  },
  invert: {
    filled: `bg-color-invert-default text-color-base hover:bg-color-invert-default-hover focus-visible:bg-color-invert-default-focus active:bg-color-invert-default-pressed`,
    outlined: `bg-color-base-default border-default text-color-invert-base hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
    dashed: `bg-color-base-default border-dashed border-default text-color-invert-base hover:bg-color-base-hover focus-visible:bg-color-base-focus active:bg-color-base-pressed`,
    text: `bg-transparent text-color-invert-base hover:bg-color-invert-default-hover focus-visible:bg-color-invert-default-focus active:bg-color-invert-default-pressed`,
  },
};

export const buttonStyles = tv({
  slots: {
    base: baseStyles,
  },
  variants: {
    size: {
      sm: 'min-h-[36px] min-w-[103px] gap-2 p-2 text-sm',
      md: 'min-h-[40px] min-w-[123px] gap-2.5 px-3 py-2 text-base',
      lg: 'min-h-[44px] min-w-[146px] gap-3 px-4 py-3 text-lg',
    },
    kind: {
      filled: 'border-transparent',
      outlined: 'bg-color-base',
      dashed: 'border-dashed bg-color-base',
      text: 'border-transparent bg-transparent',
    },
    status: {
      default: '',
      primary: '',
      info: '',
      error: '',
      warning: '',
      success: '',
      invert: '',
    },
    disabled: {
      true: 'text-color-disabled',
    },
    loading: {
      true: loadingClass,
    },
  },
  compoundVariants: Object.entries(colorClasses).flatMap(([status, kinds]) => {
    return Object.entries(kinds).map(([kind, classes]) => ({
      kind: kind as KindType,
      status: status as ButtonStatusType,
      disabled: false,
      className: classes,
    }));
  }),
  defaultVariants: {
    size: 'md',
    kind: 'filled',
    status: 'default',
    disabled: false,
    loading: false,
  },
});
