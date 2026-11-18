
import { useCallback, useState } from 'react';

export const useApiRequest = <A extends unknown[], R>(
  apiCall: (...args: A) => Promise<R>
) => {
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(
    async (...args: A): Promise<R | null> => {
      setIsLoading(true);

      try {
        return await apiCall(...args);
      } catch {
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [apiCall]
  );

  return {
    request,
    isLoading,
  };
};
