import { BundleCarousel, IBundleCarouselProps } from 'src/components/BundleCarousel';
import { useFetch } from 'src/hooks/useFetch';
import { useSettingsForm } from 'src/hooks/useSettingsForm';
import { SettingsForm } from 'src/components/SettingsForm';
import { ErrorComponent } from 'src/components/ErrorComponent';
import './App.css'


function App() {
  const {
    isItemsWithImagesChecked,
    toggleItemsWithImages,
    isMainCarouselChecked,
    toggleMainCaruselBackground,
    onItemsAmountChange,
    itemsAmount,
  } = useSettingsForm();

  const { data, loading, error, featchWithError } = useFetch<IBundleCarouselProps[]>({
    withBackground: isMainCarouselChecked,
    withImage: isItemsWithImagesChecked,
    productsCount: itemsAmount,
  });

  if (data?.[0].items?.length) {
    console.log(
      `%c the amount of fetched products is = ${data?.[0].items?.length}`,
      "color:white; background: #00AA00; padding:5px; font-weght: bold; text-transform: uppercase",
    );
  }

  return (
    <>
      {error && <ErrorComponent text="OOPS!... Something went wrong! Please refresh the page!" />}
      {!error && (<BundleCarousel isLoading={!!loading} {...(data ? data[0] : {})} />)}
      <SettingsForm
        isItemsWithImagesChecked={isItemsWithImagesChecked}
        toggleItemsWithImages={toggleItemsWithImages}
        isMainCarouselChecked={isMainCarouselChecked}
        toggleMainCaruselBackground={toggleMainCaruselBackground}
        onItemsAmountChange={onItemsAmountChange}
        itemsAmount={itemsAmount}
        featchWithError={featchWithError}
      />
    </>
  )
}

export default App
