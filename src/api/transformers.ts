import { IProduct, IBundle, IBundles } from 'src/models';
import cover from 'src/assets/cover.png';
import { getRandomItem, getPrice, getTime } from './utils';
import { images } from './constants';


const transformProducts = (products: IProduct[]) => products.map(
  ({
    amount,
    productTextColor,
  }) => ({
    imageSrc: getRandomItem(images),
    textColor: productTextColor,
    amount, 
  })
)

export const transformBundle = ({
  timeLeftMs,
  maxAvailable,
  available,
  price,
  products,
}: IBundle) => ({
  bgImage: cover,
  price: getPrice(price),
  time: getTime(timeLeftMs),
  available: available.toString(),
  maxAvailable: maxAvailable.toString(),
  items: transformProducts(products),
});

// Transform Products to more generic item
export const transformBundlePruducts = ({ bundles }: IBundles) => bundles.map(transformBundle);
