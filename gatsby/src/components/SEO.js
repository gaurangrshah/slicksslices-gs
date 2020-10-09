import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ children, location, description, title, image }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
          description
          twitter
        }
      }
    }
  `);
  return (
    <Helmet titleTempalte={`%s - ${site.siteMetadata.title}`}>
      <html lang="en" />
      <title>{title}</title>
      {/* Fav icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="alternate icon" href="/favicon.ico" />
      {/* Meta Tags */}
      <meta name="viewport" content="width=device-width" initial-scale={1.0} />
      <meta charSet="utf-8" />
      <meta name="description" content={site.siteMetadata.description} />
      {/* Open Graph */}
      {location && <meta property="og:url" content={location.href} />}
      <meta property="og:image" content={image || 'logo.svg'} />
      <meta key="ogtitle" property="og:title" content={title} />
      <meta property="og:site_name" content={title} key="ogsitename" />
      <meta property="og:description" content={description} key="ogdesc" />
      {/* overwrite existing or add additional meta tags via children */}
      {children}
    </Helmet>
  );
}

export default SEO;
