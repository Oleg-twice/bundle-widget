export function sleep(ms: number = 100) {
  let timeout: ReturnType<typeof setTimeout>;

  const promise = new Promise(function(resolve) {
    timeout = setTimeout(function() {
      resolve('timeout done');
    }, ms);
  }); 

  return {
    promise: promise, 
    cancel: () => {
      clearTimeout(timeout);
    }
  };
}

export const getRandomItem = <T>(array: T[]) => {
  const randomIndex = Math.floor(Math.random() * array.length);

  return array[randomIndex];
} 
type PriceType = {
  amount: number,
  currencySymbol: string,
}

export const getPrice = ({ amount, currencySymbol }: PriceType) => `${currencySymbol}${amount}`;
export const getTime = (ms: number) => new Date(ms).toISOString().slice(11, 19);

