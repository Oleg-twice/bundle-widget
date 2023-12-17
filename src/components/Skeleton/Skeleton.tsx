import './Skeleton.scss';

const NAME_SPACE = 'skeleton';

const Skeleton = () => (
  <div className={NAME_SPACE}>
    <div className={`${NAME_SPACE}__wrapper`}>
      <p className={`${NAME_SPACE}__loading-text text-white`}>Loading!...</p>
      <div className={`${NAME_SPACE}__image`}></div>
      <div className={`${NAME_SPACE}__image`}></div>
      <div className={`${NAME_SPACE}__image`}></div>
      <div className={`${NAME_SPACE}__image`}></div>
    </div>
  </div>
);

export default Skeleton;
