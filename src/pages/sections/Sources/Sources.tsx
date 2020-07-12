import React, { FC } from 'react';
import cx from 'classnames';

import Source from '../../../components/Source/Source';

import './sources.scss';

interface Props {
  className?: string;
}

const sourceData = [
  {
    title: 'T.C. Sağlık Bakanlığı',
    link: 'https://hsgm.saglik.gov.tr',
    description: 'https://hsgm.saglik.gov.tr',
  },
  {
    title: 'World Health Organization ',
    link: 'https://www.who.int',
    description: 'https://www.who.int',
  },
  {
    title: 'Centers of Disease Control',
    link: 'https://www.cdc.gov',
    description: 'https://www.cdc.gov',
  },
];

const Sources: FC<Props> = ({ className }) => {
  return (
    <div className={cx('sources', className)}>
      <div className="container">
        <h3 className="u-color-white u-margin-ends-0">Kaynaklar</h3>
        <div className="row u-margin-top-small">
          <div className="col col--lg-6">
            {sourceData.map(s => (
              <Source
                className="u-margin-top-xsmall"
                key={s.title}
                link={s.link}
                title={s.title}
                description={s.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources;
