import cover from 'src/assets/cover.png';
import { getRandomItem, getTime } from './utils'
import { images, colors, amounts, prices, milliseconds } from './constants';

const createProduct = (
  withImage?: boolean,
) => ({
  imageSrc: withImage ? getRandomItem(images) : '',
  textColor: getRandomItem(colors),
  amount: getRandomItem(amounts), 
})

const createProducts = (
  count: number = 1,
  withImage?: boolean,
) => [...new Array(count)].map(() => createProduct(withImage));

export const createBundle = (
  withBackground?: boolean,
  withImage?: boolean,
  productsCount?: number,
) => [{
  bgImage: withBackground ? cover : '___--',
  price: getRandomItem(prices),
  time: getTime(getRandomItem(milliseconds)),
  available: '10',
  maxAvailable: '20',
  items: createProducts(productsCount, withImage),
}];
