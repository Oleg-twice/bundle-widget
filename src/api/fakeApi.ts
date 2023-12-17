import Bundles from './config.json';
import { sleep } from './utils';
import { transformBundlePruducts } from './transformers';
import { createBundle } from './factories';

export const fetchBundleProducts = (ms = 2000) => {
  const { promise, cancel } = sleep(ms);

  return promise.then(() => transformBundlePruducts(Bundles)).finally(() => cancel());
}

export const fetchBundleBySettings = (
  ms = 2000,
  withBackground?: boolean,
  withImage?: boolean,
  productsCount?: number,
) => {
  const { promise, cancel } = sleep(ms);

  return promise.then(() => createBundle(
    withBackground,
    withImage,
    productsCount,
  )).finally(() => cancel());
}
