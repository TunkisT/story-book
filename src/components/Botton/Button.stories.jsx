import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const primary = () => <Button color='primary'>Save changes</Button>;
export const success = () => <Button color='success'>Save and continue</Button>;
export const danger = () => <Button color='danger'>Cancel</Button>;
