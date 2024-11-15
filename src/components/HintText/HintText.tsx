import { HintTextProps } from '../Input/Input.types';
import { hintTextStyles } from './HintText.styles';

export const HintText = ({ error, size, children }: HintTextProps) => {
  const styles = hintTextStyles({ error, size });

  return <span className={styles}>{children}</span>;
};
