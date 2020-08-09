const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        return config;
    }
};

module.exports = withPlugins([withImages, withSass, withCSS], nextConfig);