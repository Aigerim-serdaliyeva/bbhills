module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/test" : "/",
    css: {
        loaderOptions: {
            sass: {
                data: `@import "@/assets/sass/config.scss";`
            }
        }
    }
};
