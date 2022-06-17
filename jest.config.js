const preset = require('@stencil/core/testing/jest-preset');

module.exports = {
    ...preset,
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.stories.tsx'],
    moduleNameMapper: {
        ...preset.moduleNameMapper,
    },
};
