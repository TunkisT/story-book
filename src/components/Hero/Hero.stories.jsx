import React from 'react';
import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
};

export const title = () => (
  <Hero color='primary' type='title'>
    Success Hero
  </Hero>
);
export const subtitle = () => (
  <Hero color='danger' type='subtitle'>
    Success subtitle
  </Hero>
);
