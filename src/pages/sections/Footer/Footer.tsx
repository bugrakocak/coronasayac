import React from 'react';

const style = {
  opacity: '0.8',
};

const Footer = () => (
  <footer className="u-background-color-primary u-padding-ends-xlarge">
    <div className="container">
      <h3 className="u-color-white u-margin-ends-0">Corona Sayaç</h3>
      <p style={style} className="u-font-size-medium u-color-white u-margin-top">
        Ülkemizde Corona Virüs (COVID-19) her geçen gün daha fazla yayılıyor. Corona Sayaç bu
        yayılmaya dikkat çekmek ve toplumumuzu bilinçlendirmek için hazırlanmıştır. Veriler sağlık
        bakanlığının açıkladığı verilerdir.
      </p>
    </div>
  </footer>
);

export default Footer;
