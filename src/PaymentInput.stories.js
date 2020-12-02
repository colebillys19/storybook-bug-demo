import React from 'react';

import PaymentInput from './PaymentInput';

/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'PaymentInput',
  component: PaymentInput,
};

const Template = (args) => <PaymentInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
