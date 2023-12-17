import { useState, useEffect, useCallback } from 'react';
import { fetchBundleBySettings } from 'src/api/fakeApi';

interface State<T> {
  data?: T,
  error?: Error,
  loading?: boolean
  featchWithError: () => void,
}

interface IUseFetchProps {
  withBackground: boolean,
  withImage: boolean,
  productsCount: number,
}

export const useFetch = <T = unknown>({
    withBackground = true,
    withImage = true,
    productsCount = 10,
  }: IUseFetchProps): State<T> => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState();
  const [loading, setIsLoading] = useState(false);

  useEffect(
    () => {
      let mounted = true;
      setIsLoading(true);
      fetchBundleBySettings(
        2000,
        withBackground,
        withImage,
        productsCount,
      )
        .then(data => {
          if (mounted && data) {
            setData(data as T);
            setIsLoading(false)
          }
        })
        .catch(err => {
          if (mounted) {
            setError(err);
            setIsLoading(false);
          }
        })
        .finally(() => {
          mounted = false;
          setIsLoading(false);
        })
    },
    [productsCount, withBackground, withImage]
  );

  const featchWithError = useCallback(
    () => {
      setIsLoading(true);
      fetchBundleBySettings(
        2000,
        withBackground,
        withImage,
        productsCount,
      )
      .then(() => {
        throw new Error('Server error 505')
      })
      .catch(
        (err) => {
          setIsLoading(false);
          setError(err);
        } 
      )
      .finally(
        () => {
          setIsLoading(false);
        }
      )
    },
    [productsCount, withBackground, withImage]
  );

  return {
    data,
    error,
    loading,
    featchWithError,
  }
};