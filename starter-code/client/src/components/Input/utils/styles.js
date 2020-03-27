import React from 'react';
import styled from 'styled-components';

export const InputBase = styled.input`
  width: 100%;
  box-sizing: border-box;
  background-color: #1a535c;
  color: #f7fff7;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid #4ecdc4;
  text-align: center;
  font-family: 'rubik';
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #${props => (props.errors[props.name]?.message ? 'EE6055' : 'f7fff7')};
  }
`;

export const SelectBase = styled.select`
  -moz-appearance: none;
  appearance: none;
  -webkit-border-radius: 0; /* Safari 3-4, iOS 1-3.2, Android 1.6- */
  -moz-border-radius: 0; /* Firefox 1-3.6 */
  border-radius: 0;
  text-align-last: center;
  width: 100%;
  box-sizing: border-box;
  background-color: #1a535c;
  color: #f7fff7;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-bottom: 1px solid #4ecdc4;
  text-align: center;
  font-family: 'rubik';
  :focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #${props => (props.errors[props.name]?.message ? 'EE6055' : 'f7fff7')};
  }
`;

export const Error = styled.div`
  width: 100%;
  font-size: 0.8rem;
  text-align: center;
  padding: 5px;
  color: #ee6055;
  margin: 5px;
`;
