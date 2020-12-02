import React from 'react';
import styled from 'styled-components';

import CheckedIcon from './icons/checkedIcon.svg';
import UncheckedIcon from './icons/uncheckedIcon.svg';
import iconStyle from './iconStyle';

const iconDictionary = (name, { ...options }) => {
  const { iconState, style, ...propsToPassDown } = options;

  const icons = {
    active: { approved: CheckedIcon },
    default: { unapproved: UncheckedIcon },
  };

  const status = iconState || 'default';
  
  const styling = iconStyle[style] || {};
  
  const IconToRender = icons[status][name];
  
  const StyledIcon = styled(IconToRender)({ ...styling });
  
  return <StyledIcon {...propsToPassDown} />;
};

export default iconDictionary;
