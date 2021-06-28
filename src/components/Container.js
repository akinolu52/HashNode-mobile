import React, { useContext } from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { color } from '@utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { Text } from './Text';
import { ThemeContext } from 'styled-components';

export const Container = props => {
    const insets = useSafeAreaInsets();
    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext.mode === 'dark';
    return (
        <>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <StyledHeaderView style={{
                paddingTop: insets.top + 20,
                paddingLeft: insets.left + 15,
                paddingRight: insets.right + 15,
                backgroundColor: isDarkMode ? color._BLACK_1 : color._WHITE,
                // borderWidth: 1,
                // borderColor: 'red',
                marginBottom: 0,
                
            }}>
                <StyledHeaderText>{props.title}</StyledHeaderText>
            </StyledHeaderView>
            <StyledScrollView style={{
                paddingLeft: insets.left + 15,
                paddingRight: insets.right + 15,
                // borderWidth: 1,
                flex: 1,
                // borderColor: 'red',
                backgroundColor: isDarkMode ? color._BLACK_1 : color._WHITE,
            }}>

                <StyledBodyView>
                    {props.children}
                </StyledBodyView>
            </StyledScrollView>
        </>
    );
};

const StyledHeaderText = styled.Text`
    fontSize: 29px;
    fontWeight: 800;
    lineHeight: 40px;
    letterSpacing: 0.000625px;
    color: ${props => props.theme.mode === 'dark' ? color._WHITE : color._GRAY_3}
`;

const StyledHeaderView = styled.View`
    justifyContent: space-between;
    marginBottom: 10px;
`;

const StyledBodyView = styled.View`
    flex: 1;
`;

const StyledScrollView = styled.ScrollView.attrs(() => ({
    contentContainerStyle: {
        height: '100%',
        flex: 1,
    }
}))`height: 100%; flex: 1;`;
// const StyledScrollView = styled.ScrollView`
// backgroundColor: ${props => props.theme.mode === 'dark' ? color._BLACK_1 : color._WHITE} ;
// `;
