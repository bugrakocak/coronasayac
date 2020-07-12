import React, { FC } from 'react';
import cx from 'classnames';

import './c-ghostButton.scss';

interface Props {
  className?: string;
  text: string;
  onClick?: JSX.IntrinsicElements['button']['onClick'];
  theme?: 'primary' | 'secondary' | 'tertiary';
  isActive?: boolean;
}

const GhostButton: FC<Props> = ({ className, onClick, text, theme = 'primary', isActive }) => {
  return (
    <button
      className={cx(
        'c-ghostButton',
        {
          [`c-ghostButton--${theme}`]: theme,
          [`is-active`]: isActive,
        },
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default GhostButton;
