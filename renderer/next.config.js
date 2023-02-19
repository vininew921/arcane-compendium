module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.target = 'electron-renderer';
        }

        return config;
    },
    i18n: {
        locales: ['en', 'pt', 'pseudo'],
        defaultLocale: 'pt',
    },
};
