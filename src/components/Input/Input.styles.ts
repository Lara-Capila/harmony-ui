import { tv } from 'tailwind-variants';

export const inputStyles = tv({
  slots: {
    host: [
      'relative flex w-full flex-col items-start justify-start font-sans antialiased',
    ],
    inputWrapper: [
      'input-wrapper flex w-full flex-1 cursor-text flex-row items-center justify-start',
      'placeholder-color-placeholder',
      'border-color-default rounded border bg-color-base',
      'hover:border-color-primary',
      'text-color-default',
    ],
    inputElement: ['w-full flex-1 bg-color-base focus:outline-none'],
    prefix: 'inset-y-0 left-0 flex flex-row items-center justify-start',
    suffix: 'inset-y-0 right-0 flex flex-row items-center justify-start',
  },
  variants: {
    readonly: {
      true: {
        inputWrapper: [
          'border-color-default pointer-events-none bg-color-default text-color-default',
        ],
        inputElement: [
          'pointer-events-none cursor-default text-color-default placeholder:text-color-default',
        ],
      },
      false: {
        host: '',
      },
    },
    disabled: {
      true: {
        inputWrapper: [
          'border-color-disabled hover:border-color-disabled cursor-not-allowed bg-color-disabled text-color-disabled',
        ],
        inputElement: [
          'cursor-not-allowed text-color-disabled placeholder:text-color-disabled',
        ],
      },
      false: {
        host: ['cursor-text'],
      },
    },
    size: {
      sm: {
        host: 'gap-0.5',
        inputWrapper: 'px-2 py-2 text-sm',
        inputElement: '',
        prefix: ['pr-2'],
        suffix: ['pl-2'],
      },
      md: {
        host: 'gap-1',
        inputWrapper: 'px-3 py-2 text-base',
        inputElement: '',
        prefix: ['pr-2.5'],
        suffix: ['pl-2.5'],
      },
      lg: {
        host: 'gap-1.5',
        inputWrapper: 'px-4 py-2 text-lg',
        inputElement: '',
        prefix: ['pr-3'],
        suffix: ['pl-3'],
      },
    },
    error: {
      true: {
        inputWrapper: 'border border-error text-color-error hover:border-error',
      },
    },
  },
  defaultVariants: {
    error: false,
    disabled: false,
    size: 'md',
    isSelect: false,
  },
});
