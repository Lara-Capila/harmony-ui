import { useState } from 'react';
import { FontAwesomeIcon } from '../../Icon/FontAwesomeIcon';
import { inputStyles } from '../Input.styles';
import { FieldProps } from '../Input.types';

export const Password = ({ ...props }: FieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { inputElement } = inputStyles();

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const iconName = showPassword ? 'fa-eye' : 'fa-eye-slash';

  return (
    <div className="flex flex-1">
      <input
        id="passwordInput"
        type={showPassword ? 'text' : 'password'}
        className={inputElement()}
        {...props}
      />

      <button
        onClick={toggleShowPassword}
        aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
        title={showPassword ? 'Esconder senha' : 'Mostrar senha'}
        aria-controls="passwordInput"
      >
        <FontAwesomeIcon kind="regular" iconName={iconName} />
      </button>
    </div>
  );
};
