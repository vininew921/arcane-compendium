module.exports = {
    locales: ['en', 'pt', 'pseudo'],
    pseudoLocale: 'pseudo',
    sourceLocale: 'en',
    fallbackLocales: {
        default: 'pt',
    },
    catalogs: [
        {
            path: 'translations/locales/{locale}/messages',
            include: ['pages', 'components'],
        },
    ],
    format: 'po',
};
