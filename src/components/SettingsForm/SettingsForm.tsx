
import { ChangeEvent, memo } from 'react';
import { SimpleTooltip } from '../SimpleTooltip';
import './SettingsForm.scss';

const NAME_SPACE = 'settings-form';

interface ISettingsFormProps {
  toggleItemsWithImages: () => void,
  isItemsWithImagesChecked: boolean,
  toggleMainCaruselBackground: () => void,
  isMainCarouselChecked: boolean,
  onItemsAmountChange: (e: ChangeEvent<HTMLInputElement>) => void,
  featchWithError: () => void,
  itemsAmount: number,
}

const SettingsForm = memo(
  ({
    toggleItemsWithImages,
    isItemsWithImagesChecked = true,
    toggleMainCaruselBackground,
    isMainCarouselChecked = true,
    onItemsAmountChange,
    featchWithError,
    itemsAmount,
  }: ISettingsFormProps) => {

    return (
      <div className={NAME_SPACE}>
        <h1 className={`${NAME_SPACE}__title`}>Bundle Carousel Widget Settings</h1>

        <div className={`${NAME_SPACE}__row ${NAME_SPACE}__group`}>
          <SimpleTooltip
            className="mr-1"
            text={`
              If you uncheck this checkbox,
              you will receive products without images
              and be able to see image placeholders!
            `}
          >
            <input
              id="toggleItemsWithImages"
              type="checkbox"
              checked={isItemsWithImagesChecked}
              onChange={toggleItemsWithImages}
            />
            <label htmlFor="toggleItemsWithImages">Featch items with images?</label>          
          </SimpleTooltip>
          <SimpleTooltip
            text={`
              If you uncheck this checkbox,
              you will fetch bundle without background image
              and be able to see default beackground!
            `}
          >
            <input
              id="toggleMainCaruselBackground"
              type="checkbox"
              checked={isMainCarouselChecked}
              onChange={toggleMainCaruselBackground}
            />
            <label htmlFor="toggleMainCaruselBackground">Fetch product with background?</label>
          </SimpleTooltip>
        </div>

        <SimpleTooltip
          className={`${NAME_SPACE}__last-tooltip`}
          text={`
            Notice that maximum acceptable amount of items is equal to 50,
            so you can fetch more than 50 to check how many items presented inside the widget!
          `}
        >
          <div className={`${NAME_SPACE}__row ${NAME_SPACE}__group`}>
            <label htmlFor="itemsAmount">Amount of items</label>
            <input
              id="itemsAmount"
              type="number"
              min="1"
              max="100"
              value={itemsAmount}
              onChange={onItemsAmountChange}
              disabled={false}
            />
          </div>
        </SimpleTooltip>

        <button className={`${NAME_SPACE}__button`} onClick={featchWithError}>
          Fetch with ERROR
        </button> 
      </div>
    );
  }
);

export default SettingsForm;

