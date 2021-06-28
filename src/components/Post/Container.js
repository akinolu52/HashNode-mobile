import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from './Text';
import styled from 'styled-components/native';
import { color } from '@utils';
import { format } from 'date-fns';
import { Action } from './Action';

export const Post = ({ post }) => {
  return (
    <StyledPostContainer>
      <TouchableOpacity onPress={() => null}>
        <StyledPostHeader>
          <Image source={{ uri: post?.author?.photo }} />
          <StyledAuthorName>{post?.author?.name}</StyledAuthorName>
          <StyledDate> - {format(new Date(post?.dateAdded), 'dd MMM')}</StyledDate>
        </StyledPostHeader>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => null}>
        <StyledPostBody>
          <StyledPostTitle>{post?.title}</StyledPostTitle>
          <StyledPostOverview>{post?.brief?.substr(0, 110)}...</StyledPostOverview>
        </StyledPostBody>

        <StylePostImage source={{ uri: post?.coverImage }} />
      </TouchableOpacity>

      <Action />

    </StyledPostContainer>
  );
};

const StyledPostContainer = styled.View`
  background: transparent;
  marginBottom: 20px;
  overflow: hidden;
`;
const StyledPostHeader = styled.View`
  flexDirection: row;
  alignItems:center;
  marginBottom: 10px;
`;

const Image = styled.Image`
  width: 30px;
  height: 30px;
  borderRadius: 30px;
  marginRight: 8px;
`;

const StylePostImage = styled.Image`
  width: 100%;
  height: 150px;
  borderRadius: 5px;
  marginTop: 5px;
`;

const StyledAuthorName = styled.Text`
  fontWeight: 500;
  fontSize: 15px;
  lineHeight: 17.71px;
  color: ${props => props.theme.mode === 'dark' ? color._WHITE : color._BLACK_2};
`;

const StyledDate = styled.Text`
  fontSize: 15px;
  lineHeight: 17.71px;
  color: ${props => props.theme.mode === 'dark' ? color._WHITE : color._BLACK_2};
`;

const StyledPostBody = styled.View`
  background: transparent;
  overflow: hidden;
`;

const StyledPostTitle = styled.Text`
  fontSize: 25px;
  fontWeight: 500;
  lineHeight: 36px;
  letterSpacing: 0.000625px;
  marginBottom: 5px;
  color: ${props => props.theme.mode === 'dark' ? color._WHITE : color._BLACK_2};
`;

const StyledPostOverview = styled.Text`
    fontSize: 16px;
    fontWeight: 400;
    lineHeight: 25px;
    letterSpacing: -0.001875px;
    color: ${props => props.theme.mode === 'dark' ? color._WHITE : color._BLACK_2};
`;



