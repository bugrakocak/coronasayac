import React, { FC } from 'react';
import cx from 'classnames';

import './c-listCard.scss';

interface Props {
  className?: string;
  src: string;
  alt: string;
  number: string;
}

const ListCard: FC<Props> = ({ className, src, alt, number, children }) => {
  return (
    <div className={cx('c-list-card', className)}>
      <img width="96" height="96" src={src} alt={alt} />
      <div className="c-list-card__number">{number}</div>
      <p className="c-list-card__text">{children}</p>
    </div>
  );
};

export default ListCard;
