import React from 'react';

import { coughing, wash, crowd, nohand, call } from '../../../images/icons/index';

import ListCard from '../../../components/ListCard/ListCard';

import './protection.scss';

const Protection = () => {
  return (
    <div className="protection" id="protection">
      <div className="container">
        <h2 className="protection__title u-color-white">Nasıl Korunuruz?</h2>
        <div className="row row--small-gutter u-margin-top-medium">
          <div className="col col--lg-6 u-display-flex@lg-up u-margin-top-small">
            <ListCard number="01" src={wash} alt="wash">
              Ellerinizi ve bileklerinizi sık sık en az 20 saniye boyunca sabunlu suyla yıkayın.
            </ListCard>
          </div>
          <div className="col col--lg-6 u-display-flex@lg-up u-margin-top-small">
            <ListCard number="02" src={crowd} alt="crowd">
              Toplu taşıma araçlarından ve kalabalık yerlerden uzak durun. Mecbur olmadıkça
              evinizden dışarıya çıkmayın.
            </ListCard>
          </div>
          <div className="col col--lg-6 u-display-flex@lg-up u-margin-top-small">
            <ListCard number="03" src={nohand} alt="nohand">
              Ağzınıza, burnunuza, gözlerinize ve saçlarınıza mümkün olduğunca dokunmamaya çalışın.
            </ListCard>
          </div>
          <div className="col col--lg-6 u-display-flex@lg-up u-margin-top-small">
            <ListCard number="04" src={coughing} alt="coughing">
              Hapşururken ve öksürürken ağzınızı ve burnunuzu mutlaka kapatınız. Eğer peçete yoksa
              iç kolunuzu kullanınız.
            </ListCard>
          </div>
          <div className="col col--lg-6 u-display-flex@lg-up u-margin-top-small">
            <ListCard number="05" src={call} alt="call">
              Ateşiniz, öksürüğünüz, nefes güçlüğünüz varsa bir sağlık birimine başvurunuz.
            </ListCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protection;
