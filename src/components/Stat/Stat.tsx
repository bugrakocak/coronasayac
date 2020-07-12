import React, { FC } from 'react';
import cx from 'classnames';

import './c-stat.scss';

interface Props {
  count: string;
  text: string;
  theme: 'total' | 'death' | 'recovered';
  className?: string;
}

const Stat: FC<Props> = ({ count, text, theme, className }) => {
  return (
    <div className={cx('c-stat', className, { [`c-stat--${theme}`]: theme })}>
      <div className="c-stat__number">{count}</div>
      <div className="c-stat__text">{text}</div>
    </div>
  );
};

export default Stat;
