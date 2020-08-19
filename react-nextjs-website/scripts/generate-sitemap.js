const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(
    async() => {
        const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

        // Ignore Next.js specific files (e.g., _app.js) and API routes.
        const pages = await globby([
            '../out/**/*.html',
            '!../out/*-pre-formik.html'
        ]);
        const sitemap = `
            <?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                ${pages
                    .map((page) => {
                    const path = `${page
                        .replace('out', '')
                        .replace('../', '')}`;
                    const route = path === '/index.html' ? '' : path;

                    return `
                            <url>
                                <loc>
                                    ${`https://legalservebedford.co.uk${route}`}
                                </loc>
                            </url>
                        `;
                    })
                    .join('')}
            </urlset>
        `;

        // If you're not using Prettier, you can remove this.
        const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: 'html'
        });

        fs.writeFileSync('../out/sitemap.xml', formatted);

        console.log('Sitemap generated at out/sitemap.xml!');
    }
)();