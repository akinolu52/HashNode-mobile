import React from 'react';
import { Text as AppText, StyleSheet } from 'react-native';
import { color } from '@utils';
import styled from 'styled-components/native';

export const Text = ({ style, ...props }) => (
  <StyledText {...props} style={style}>{props.children}</StyledText>
);

const StyledText = styled.Text`
  color: ${props => props.theme.mode === 'dark' ? color._WHITE : color._BLACK_2} ;
`;
