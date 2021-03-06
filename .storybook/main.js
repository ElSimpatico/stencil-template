const { resolve } = require('path');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-addon-themes',
    ],
    framework: '@storybook/html',
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        const tsxRule = config.module.rules.find((rule) =>
            'a.tsx'.match(rule.test),
        );

        if (tsxRule) {
            const options = tsxRule.use[0].options;
            options.plugins = [
                [
                    '@babel/plugin-transform-react-jsx',
                    {
                        prgama: 'h',
                    },
                ],
                ...options.plugins,
            ];
        }

        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: resolve(__dirname, '../src'),
        });

        // Return the altered config
        return config;
    },
};
