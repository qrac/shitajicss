import Head from "next/head"
import pjt from "../../project.json"

export default () => {
  return (
    <Head>
      <title key="title">{pjt.site.title}</title>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
      />
      <meta
        property="format-detection"
        content="telephone=no, email=no, address=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        key="description"
        property="description"
        content={pjt.site.description}
      />
      <meta property="og:title" content={pjt.site.title} />
      <meta property="og:description" content={pjt.site.description} />
      <meta property="og:url" content={pjt.site.url} />
      <meta property="og:image" content={pjt.site.url + "/ogp.png"} />
      <meta property="og:site_name" content={pjt.site.title} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:creator" content={"@" + pjt.site.twitter_id} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Lobster&display=swap"
      />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}
