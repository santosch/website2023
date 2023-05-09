# Workaround

Normally the 404 page is defined by creating the not-found.tsx
file in the app root. This works for pages served from nextjs.


Unfortunately, in export-mode, always the 404.tsx from the pages dir is exported.
Since we do not use the pages dir, the default 404 page is generated.

Since we serve our page via Apache, we can define per .htaccess which page
is used as 404 page. We just regenerate our 404 page as normal page then,
so we can use normal layout and metadata.

