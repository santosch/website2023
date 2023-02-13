export default function Head() {
    const url = 'https://sebastian-antosch.de/';    
    const title = 'Sebastian Antosch';
    const description = 'Sebastian Antosch ist Softwareentwickler (Web, Frontend/Full-Stack) und UI-Enthusiast aus Augsburg.';
    const banner = '/assets/images/socialbanner.jpg';
        

    return (
        <>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>

            <title>{title}</title>

            <link rel="canonical" href={url}/>

            <meta name="description"
                  content={description}
            />
            <meta name="author" content="Sebastian Antosch"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Sebastian Antosch"/>
            <meta name="twitter:description"
                  content={description}
            />
            <meta name="twitter:image" content={banner}/>

            <meta property="og:title" content={title} />
            <meta property="og:url" content={url}/>
            <meta property="og:image"
                  content={url + banner}
            />
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="630"/>
            <meta property="og:image:type" content="image/jpeg"/>
            <meta property="og:description"
                  content={description}
            />
            <meta property="og:site_name" content="sebastian-antosch.de"/>
            <meta property="og:type" content="profile"/>
            <meta property="profile:first_name" content="Sebastian"/>
            <meta property="profile:last_name" content="Antosch"/>
            <meta property="profile:gender" content="male"/>
            <meta property="fb:profile_id" content="100001049514269"/>
            <meta property="fb:admins" content="100001049514269"/>

            <meta itemProp="name" content="Sebastian Antosch"/>
            <meta itemProp="description"
                  content={description}
            />
            <meta itemProp="image" content={banner}/>


            <link rel="apple-touch-icon"
                  sizes="180x180"
                  href="/assets/icons/apple-touch-icon.png"
            />
            <link rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="/assets/icons/favicon-32x32.png"
            />
            <link rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="/assets/icons/favicon-16x16.png"
            />
            <link rel="manifest"
                  href="/assets/icons/site.webmanifest"
            />
            <link rel="mask-icon"
                  href="/assets/icons/safari-pinned-tab.svg"
                  color="#00bbff"
            />
            <link rel="shortcut icon"
                  href="/assets/icons/favicon.ico"
            />
            <meta name="msapplication-TileColor"
                  content="#222222"
            />
            <meta name="msapplication-config"
                  content="/assets/icons/browserconfig.xml"
            />
            <meta name="theme-color"
                  content="#222222"
            />
        </>
    )
}
