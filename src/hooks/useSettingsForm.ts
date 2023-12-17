import { useToggle } from './useToggle';
import { useInput } from './useInput';
import { useDebounce } from './useDebounce';

export const useSettingsForm = () => {
  const [isItemsWithImagesChecked, toggleItemsWithImages] = useToggle(true);
  const [isMainCarouselChecked, toggleMainCaruselBackground] = useToggle(true);

  const {
    value,
    onInputChange: onItemsAmountChange,
  } = useInput({ defaultValue: '' });

  const itemsAmount = useDebounce(value, 50);

  return {
    isItemsWithImagesChecked,
    toggleItemsWithImages,
    isMainCarouselChecked,
    toggleMainCaruselBackground,
    onItemsAmountChange,
    itemsAmount: Number(itemsAmount || 1),
  };
};
