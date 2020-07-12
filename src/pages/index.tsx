import React from 'react';

import App from '../App';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Hero from './sections/Hero/Hero';
import Protection from './sections/Protection/Protection';
import Sources from './sections/Sources/Sources';
import Charts from './sections/Charts/Charts';
import Cta from './sections/Cta/Cta';

const Index = () => (
  <Layout>
    <App>
      <Seo />
      <Hero />
      <Charts />
      <Cta />
      <Protection />
      <Sources />
    </App>
  </Layout>
);

export default Index;
