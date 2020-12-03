/**
 * text input conditionally enabled/disabled via checkbox
 */

import React, { useState } from 'react';
import { Checkbox, TextField } from '@material-ui/core';

import iconDictionary from './utils/iconDictionary';

const checkedIcon = iconDictionary('approved', { iconState: 'active', style: 'paymentInput' });
const uncheckedIcon = iconDictionary('unapproved', { iconState: 'default', style: 'paymentInput' });

const PaymentInput = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <Checkbox
        checked={isChecked}
        checkedIcon={checkedIcon}
        icon={uncheckedIcon}
        onChange={() => setIsChecked(!isChecked)}
      />
      <TextField
        disabled={!isChecked}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </div>
  );
};

export default PaymentInput;
