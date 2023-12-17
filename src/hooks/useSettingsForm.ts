import { useToggle } from './useToggle';
import { useInput } from './useInput';

export const useSettingsForm = () => {
  const [isItemsWithImagesChecked, toggleItemsWithImages] = useToggle(true);
  const [isMainCarouselChecked, toggleMainCaruselBackground] = useToggle(true);

  const {
    value: itemsAmount,
    onInputChange: onItemsAmountChange,
  } = useInput({ defaultValue: '' });

  return {
    isItemsWithImagesChecked,
    toggleItemsWithImages,
    isMainCarouselChecked,
    toggleMainCaruselBackground,
    onItemsAmountChange,
    itemsAmount: Number(itemsAmount || 1),
  };
};
