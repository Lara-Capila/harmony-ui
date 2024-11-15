import { tv } from 'tailwind-variants';

export const labelStyles = tv({
  base: 'block font-sans font-medium text-color-default',
  variants: {
    size: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    },
    required: {
      true: "after:ml-0.5 after:text-inherit after:content-['*']",
      false: '',
    },
    disabled: {
      true: {
        base: 'text-color-disabled after:text-color-disabled',
      },
    },
    error: {
      true: 'text-color-error',
    },
  },
  defaultVariants: {
    size: 'md',
    required: false,
    disabled: false,
  },
});
