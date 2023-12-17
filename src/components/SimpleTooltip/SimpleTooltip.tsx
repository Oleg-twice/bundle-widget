import { ReactNode, useState } from 'react';
import classNames from 'classnames';
import './SimpleTooltip.scss';

const NAME_SPACE = 'simple-tooltip';

interface ITooltipProps {
  text: string,
  children: ReactNode,
  className?: string,
}

const Tooltip = ({ text, children, className }: ITooltipProps) => {
  let timeout: string | number | NodeJS.Timeout | undefined;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div className={classNames(NAME_SPACE, className)}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && <span className={`${NAME_SPACE}__tooltip-text`}>{text}</span>}
    </div>
  );
}

export default Tooltip;