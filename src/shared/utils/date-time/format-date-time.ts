import { format } from 'date-fns';

export const formatDateTime = (
  value: Date | number,
  dateFormat: string,
): string => {
  return format(value, dateFormat);
};
