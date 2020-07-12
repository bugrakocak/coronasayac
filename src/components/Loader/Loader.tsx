import React, { FC } from 'react';
import cx from 'classnames';

import './c-loader.scss';

interface Props {
  className?: string;
}

const Loader: FC<Props> = ({ className }) => {
  return <div className={cx('c-loader', className)}>Loading...</div>;
};

export default Loader;
