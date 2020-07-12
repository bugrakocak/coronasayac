import React from 'react';
import cx from 'classnames';

import './c-twitterButton.scss';

interface Props {
  className?: string;
  text: string;
}

const TwitterButton = ({ className, text = '' }: Props) => {
  if (typeof window === 'undefined') {
    return <div />;
  }

  const width = 600;
  const height = 350;
  const left = window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2;
  const top = window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2;
  const config = { width, height, left, top };
  const keys = Object.keys(config) as Array<keyof typeof config>;
  const features = keys.map(key => `${key}=${config[key]}`).join(', ');

  const url = 'https://coronasayac.com';

  const handleClick = () => {
    window.open(`https://twitter.com/share?url=${url}&text=${text}`, '', features);
  };

  return (
    <button type="button" onClick={handleClick} className={cx('c-twitterButton', className)}>
      <svg width="40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <defs />
        <path
          fill="#fff"
          d="M15.362 30.159C24.796 30.159 29.956 22.343 29.956 15.565C29.956 15.343 29.956 15.122 29.941 14.902C30.9448 14.1759 31.8114 13.2768 32.5 12.247C31.5639 12.6618 30.5708 12.9338 29.554 13.054C30.6247 12.4129 31.4261 11.4047 31.809 10.217C30.8022 10.8144 29.7006 11.2355 28.552 11.462C27.7787 10.6396 26.7559 10.0951 25.6419 9.91267C24.5279 9.73021 23.3848 9.91999 22.3895 10.4526C21.3943 10.9853 20.6023 11.8311 20.1362 12.8592C19.6701 13.8873 19.5558 15.0404 19.811 16.14C17.7718 16.0377 15.7768 15.5078 13.9556 14.5845C12.1345 13.6613 10.5278 12.3654 9.24 10.781C8.58409 11.9101 8.3832 13.2468 8.67823 14.5189C8.97326 15.791 9.74202 16.9028 10.828 17.628C10.0117 17.6038 9.21328 17.3836 8.5 16.986C8.5 17.007 8.5 17.029 8.5 17.051C8.50032 18.2352 8.91026 19.3828 9.66028 20.2993C10.4103 21.2157 11.4542 21.8445 12.615 22.079C11.8599 22.2849 11.0676 22.315 10.299 22.167C10.6268 23.1861 11.2649 24.0774 12.1241 24.716C12.9833 25.3547 14.0206 25.7089 15.091 25.729C13.2747 27.1564 11.0311 27.9313 8.721 27.929C8.3129 27.9282 7.9052 27.9035 7.5 27.855C9.84564 29.3602 12.5749 30.1587 15.362 30.155"
        />
      </svg>
      <span className="u-margin-left-xsmall">Tweet At</span>
    </button>
  );
};

export default TwitterButton;
