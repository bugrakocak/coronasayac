import React, { FC } from 'react';
import cx from 'classnames';

import './c-source.scss';

interface Props {
  title: string;
  link: string;
  description: string;
  className?: string;
}

const Source: FC<Props> = ({ title, link, description, className }) => {
  return (
    <a className={cx('c-source', className)} href={link}>
      <span className="c-source__title">{title}</span>
      <span className="c-source__description">{description}</span>
    </a>
  );
};

export default Source;
