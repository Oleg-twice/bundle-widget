import './ErrorComponent.scss';
const NAME_SPACE = 'error-component';

const ErrorComponent = ({ text }: { text: string }) => (<div className={`${NAME_SPACE} text-red`}>{text}</div>)

export default ErrorComponent;
