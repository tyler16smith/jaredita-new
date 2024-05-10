import Head from 'next/head'

interface DocumentHeaderProps {
  title?: string
  iconPath?: string
  description?: string
  ogType?: string
  ogImage?: string
}

const DocumentHeader: React.FC<DocumentHeaderProps> = ({
  title,
  iconPath,
  description,
  ogType,
  ogImage,
}) => {
  const url = typeof window !== 'undefined' ? window.location.href : ''
  return (
    <Head>
      <title>{title ?? 'Jaredita Foundation'}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <link rel="icon" href={iconPath ?? '/icons/indonesian-flag.png'} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title ?? 'Jaredita Foundation'} />
      <meta property="og:type" content={ogType ?? 'website'} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content={ogImage ?? iconPath ?? '/icons/indonesian-flag.png'}
      />
      <meta property="og:description" content={description ?? 'Helping young people in Indonesia get an education'} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="Jaredita Foundation" />
      <meta name="twitter:title" content={title ?? 'Jaredita Foundation'} />
      <meta name="twitter:description" content={description ?? 'Jaredita Foundation'} />
      <meta
        name="twitter:image"
        content={ogImage ?? iconPath ?? '/icons/indonesian-flag.png'}
      />
    </Head>
  )
}

export default DocumentHeader
