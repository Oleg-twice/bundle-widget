import {
  useState, useCallback, useMemo, useLayoutEffect,
} from 'react';

const initialQueriesList = [
  '(max-width: 734px)',
  '(min-width: 735px) and (max-width: 1199px)',
  '(min-width: 1200px)',
  '(orientation: landscape)',
];

const DEVICES_KEYS = {
  MOBILE: 'MOBILE',
  TABLET: 'TABLET',
  DESKTOP: 'DESKTOP',
  LANDSCAPE: 'LANDSCAPE',
};

type DetectDeviceType = {
  ACTIVE_DEVICE?: string,
  LANDSCAPE?: boolean,
}

export const useDetectDevice = (queries?: Array<string>): DetectDeviceType => {
  const currentQueries = queries?.length ? queries : initialQueriesList;

  const mediaQueriesList = useMemo(
    () => currentQueries?.map((query) => matchMedia(query)),
    [currentQueries],
  );

  const getMatchesList = useCallback(
    () => mediaQueriesList?.map((o) => o.matches),
    [mediaQueriesList],
  );

  const [values, setValues] = useState(getMatchesList());

  const handler = useCallback(
    () => setValues(getMatchesList()),
    [getMatchesList],
  );

  useLayoutEffect(() => {
    mediaQueriesList.forEach((query) => query?.addEventListener('change', handler));

    return () => mediaQueriesList.forEach((query) => query?.removeEventListener('change', handler));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeKeysMap = useMemo(
    () => Object.keys(DEVICES_KEYS).reduce(
      (acc, key, i) => {
        if (values[i] && i !== values.length - 1) {
          return ({
            ...acc,
            ACTIVE_DEVICE: key,
          });
        }

        return acc;
      },
      {}
    ),
    [values]
  );

  return {
    ...activeKeysMap,
    [DEVICES_KEYS.LANDSCAPE]: values[values.length - 1]
  };
};