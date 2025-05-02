import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({ title, keywords, path, description }) => {
  const baseUrl = "https://rajib-fakir.netlify.app";
  const fullUrl = `${baseUrl}${path || ''}`;
  const image = `${baseUrl}/Images/favicon.ico`;
  return (<>
    <Helmet>
      {/* Title and Description */}
      <title>{title ? `${title} || Rajib-Fakir` : 'Rajib-Fakir'}</title>
      <meta name="description" content={description || "Learn more about our React application, features, and team on this page."} />
      <meta name="keywords" content={keywords || "React, Web Development, SEO, Rajib Fakir"} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Favicon */}
      <link rel="icon" href={image} type="image/x-icon" />

      {/* Open Graph */}
      <meta property="og:title" content={title ? `${title} | Rajib-Fakir` : 'Rajib-Fakir'} />
      <meta property="og:description" content={description || "Discover everything about our website and team."} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} | Rajib-Fakir` : 'Rajib-Fakir'} />
      <meta name="twitter:description" content={description || "Learn more about our React application, features, and team."} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Viewport & Language */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en" />

      {/* Author & Theme Color */}
      <meta name="author" content="Rajib-Fakir" />
      <meta name="theme-color" content="#ffffff" />
   <meta name="robots" content="index, follow" />
   
   <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Rajib fakir",
      "url":fullUrl
    })
  }}
></script>
    </Helmet>
   
 </> );
};

export default Seo;
