import React from 'react';
import Head from 'next/head';

type MetaInfoProps = {
  readonly title?: string;
  readonly description?: string;
};

const MetaInfo: React.FC<MetaInfoProps> = React.memo(({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta property='og:title' content={title} />
    <meta name='description' content={description} />
    <meta property='og:description' content={description} />
  </Head>
));

MetaInfo.displayName = 'MetaInfo';

export default MetaInfo;
