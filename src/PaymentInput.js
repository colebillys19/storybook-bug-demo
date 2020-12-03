/**
 * text input conditionally enabled/disabled via checkbox
 */

import React, { useState } from 'react';
import { Checkbox, TextField } from '@material-ui/core';

import iconDictionary from './utils/iconDictionary';

// * iconDictionary import pattern
const checkedIcon = iconDictionary('approved', { iconState: 'active', style: 'paymentInput' });
const uncheckedIcon = iconDictionary('unapproved', { iconState: 'default', style: 'paymentInput' });

// * standard import pattern
// import CheckedIcon from './utils/icons/checkedIcon.svg';
// import UncheckedIcon from './utils/icons/uncheckedIcon.svg';

// * renaming import pattern (works but prefer to use iconDictionary)
// import { checked as checkedIcon } from './utils/icons/checkedIcon.svg';
// import { unchecked as uncheckedIcon } from './utils/icons/uncheckedIcon.svg';

const PaymentInput = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <Checkbox
        checked={isChecked}
        checkedIcon={checkedIcon}
        icon={uncheckedIcon}
        // checkedIcon={<CheckedIcon />}
        // icon={<UncheckedIcon />}
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
