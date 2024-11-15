import { labelStyles } from './Label.styles';
import { LabelProps } from './Label.types';

export const Label = ({
  children,
  htmlFor,
  size,
  required = false,
  error = false,
}: LabelProps) => {
  const styles = labelStyles({ size, required, error });

  return (
    <label className={styles} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
