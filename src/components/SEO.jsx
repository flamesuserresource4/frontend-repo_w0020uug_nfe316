import { Helmet } from 'react-helmet-async';

export default function SEO() {
  const site = {
    name: 'TrueMinds Innovations Ltd',
    url: 'https://trueminds.example.com',
    description: 'Empowering African businesses with modern IT solutions — web, mobile, security, cloud, and training.',
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    sameAs: [],
    logo: site.url + '/logo.png',
    description: site.description,
  };

  return (
    <Helmet>
      <title>{site.name} — Modern IT Solutions</title>
      <meta name="description" content={site.description} />
      <meta name="theme-color" content="#057834" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${site.name} — Modern IT Solutions`} />
      <meta property="og:description" content={site.description} />
      <meta property="og:url" content={site.url} />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
}
