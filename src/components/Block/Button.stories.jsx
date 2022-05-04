import React from 'react';
import Block from './Block';

export default {
  title: 'Block',
  component: Block,
};

export const primary = () => <Block color='primary'>Some text</Block>;
export const success = () => <Block color='success'>Some more text</Block>;
export const danger = () => <Block color='danger'>Now more text again</Block>;
