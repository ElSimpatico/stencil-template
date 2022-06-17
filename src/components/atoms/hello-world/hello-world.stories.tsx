/** @jsx h */
/** @jsxRuntime classic */

import { h } from '@stencil/core';
import mdx from './hello-world.mdx';

export default {
    title: 'Components/HelloWorld',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const Template = (args): JSX.Element => (
    <ui-helloworld {...args}></ui-helloworld>
);

export const HelloWorldDefault = Template.bind({});

HelloWorldDefault.args = {
    name: '',
};

HelloWorldDefault.parameters = {
    docs: {
        source: {
            code: '<ui-helloworld></ui-helloworld>',
            language: 'tsx',
            type: 'auto',
        },
    },
};
