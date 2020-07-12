/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import ogImage from '../images/og-image.png';

const Seo: FC = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const siteUrl = 'https://coronasayac.com';
  const metaDescription = site.siteMetadata.description;
  const metaTitle = site.siteMetadata.title;
  const ogImageLink = `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      <html lang="tr" />
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImageLink} />

      <meta property="twitter:card" content="summary" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={ogImageLink} />
    </Helmet>
  );
};

export default Seo;
