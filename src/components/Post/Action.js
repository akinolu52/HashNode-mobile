import React, { useContext } from 'react';
import { Text } from './Text';
import styled from 'styled-components/native';
import { feed, color } from '@utils';
import { format } from 'date-fns';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from 'styled-components';

export const Action = () => {
    // const post = feed[0];
    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext.mode === 'dark';

    // console.log('singleFeed -> ' + JSON.stringify(singleFeed));
    return (
        <StyledPostContainer>

            <Ionicons
                name='thumbs-up-outline'
                size={30}
                color={!isDarkMode ? color._BLACK_1 : color._WHITE}
            />
            <Ionicons
                name='chatbubble-outline'
                size={30}
                color={!isDarkMode ? color._BLACK_1 : color._WHITE}
            />
            <Ionicons
                name='share-outline'
                size={30}
                color={!isDarkMode ? color._BLACK_1 : color._WHITE}
            />
            <Ionicons
                name='bookmark-outline'
                size={30}
                color={!isDarkMode ? color._BLACK_1 : color._WHITE}
            />
            <Ionicons
                name='ellipsis-horizontal-outline'
                size={30}
                color={!isDarkMode ? color._BLACK_1 : color._WHITE}
            />
        </StyledPostContainer>
    );
};
const StyledPostContainer = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    marginTop: 10px;
    marginBottom: 4px;
`;