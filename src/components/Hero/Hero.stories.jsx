import React from 'react';
import Hero from './Hero';

export default {
  title: 'Hero',
  component: Hero,
};

export const title = () => (
  <Hero
    color='success'
    subtitle='Success subtitle'
    title='Success title'
  ></Hero>
);
