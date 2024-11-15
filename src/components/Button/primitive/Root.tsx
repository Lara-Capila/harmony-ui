import { Loading } from '../../Loading/Loading';
import { buttonStyles } from '../Button.styles';
import { ButtonProps } from '../Button.types';

export const ButtonRoot = ({
  kind = 'filled',
  size = 'md',
  status = 'default',
  disabled = false,
  loading = false,
  children,
  ...args
}: ButtonProps) => {
  const classes = buttonStyles({ kind, size, status, disabled, loading }).base();

  return (
    <button
      role="button"
      data-loading={loading}
      disabled={disabled}
      aria-disabled={disabled}
      className={classes}
      {...args}
    >
      {loading ? <Loading /> : children}
    </button>
  );
};
