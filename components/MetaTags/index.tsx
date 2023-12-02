import React from "react";

type MetaTagsProps = {
  siteUrl: string;
  title: string;
  description: string;
};

const MetaTags = ({ siteUrl, title, description }: MetaTagsProps) => (
  <>
    {/* Social media card tags. Generated with https://metatags.io: */}
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />

    {/* Open Graph / Facebook: */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={siteUrl} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="cpbitmap-social-media-card.png" />

    {/* Twitter: */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={siteUrl} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content="cpbitmap-social-media-card.png" />

    {/* Favicon tags. Generated with https://realfavicongenerator.net: */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="favicons/favicon-16x16.png"
    />
    <link rel="manifest" href="favicons/site.webmanifest" />
    <link
      rel="mask-icon"
      href="favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#2b5797" />
    <meta name="theme-color" content="#ffffff" />
  </>
);

export default MetaTags;