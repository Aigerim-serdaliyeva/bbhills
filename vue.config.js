const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/sass/config.scss";`
            }
        }
    },
    // configureWebpack: {
    //     plugins: [
    //         new CopyWebpackPlugin([{
    //             from: 'src/assets/images',
    //             to: path.resolve(__dirname, 'build')
    //           }]),
    //         new ImageminPlugin({
    //             disable: process.env.NODE_ENV !== 'production', // Disable during development
    //             pngquant: ({quality: '40-60'}),
    //             plugins: [imageminMozjpeg({quality: 80})]
    //         })
    //     ]
    // }
};

