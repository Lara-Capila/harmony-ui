import { LoadingProps } from './Loading.types';

export const Loading = ({ size = 'fa-sm' }: LoadingProps) => {
  return (
    <i
      className={`fa-solid fa-spinner fa-spin ${size}`}
      aria-label="Loading"
      title="Loading"
    ></i>
  );
};
