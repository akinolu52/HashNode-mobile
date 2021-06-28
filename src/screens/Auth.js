import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Image, TouchableOpacity } from 'react-native';
import { Text, Container } from '@components';
import styled from 'styled-components/native';
import { useAuth, pasteFromClipboard } from '@utils';

function AuthScreen({ navigation }) {
    const [access, setAccess] = useState('ccd886a9-dd11-4822-95d2-17ce0afbf64f');
    const [content, setContent] = useState(null);
    const [showPaste, setShowPaste] = useState(false);
    const { signIn, loading } = useAuth();

    const fetchCopiedText = async () => {
        const _content = await pasteFromClipboard();
        // console.log('_content ', _content);
        if (_content) {
            setShowPaste(true);
            setContent(_content);
        }
    };

    const setCopiedText = () => {
        setShowPaste(false);
        setAccess(content);
    };

    const authenticate = () => {
        if (access) {
            console.log('signin', access)
            signIn(access);
        }
    };

    useEffect(() => {
        fetchCopiedText();
    }, []);


    return (
        <Container>
            <StyledContainer>
                <Logo
                    source={require('../assets/images/logo.png')}
                    resizeMode="contain"
                />
                <StyledInputContainer>
                    <StyledInput
                        placeholder="Access Token"
                        value={access}
                        onChangeText={text => setAccess(text)}
                        placeholderTextColor="#FFF"
                    />
                    {showPaste ? (
                        <StyledInputText onPress={() => setCopiedText()}>Paste</StyledInputText>
                    ) : null}
                </StyledInputContainer>

                <TouchableOpacity onPress={() => authenticate()}>
                    <StyledButton>
                        {loading
                            ? <ActivityIndicator />
                            : <StyledButtonText>Authenticate</StyledButtonText>}
                    </StyledButton>
                </TouchableOpacity>
            </StyledContainer>
        </Container>
    );
}

export { AuthScreen };


const StyledContainer = styled.View`
flex: 1;
paddingBottom: 150px;
justifyContent: flex-end;
`;

const Logo = styled.Image`
    width: 200px;
    height: 50px;
    marginBottom: 30px;
`;

const StyledInputContainer = styled.View`
    justifyContent: space-between;
    flexDirection: row;
    alignItems: center;
    height: 50px;
    width: 100%;
    borderRadius: 5px;
    marginBottom: 10px;
    paddingHorizontal: 10px;
    border: 1px solid white;
`;

const StyledInput = styled.TextInput`
    fontSize: 17px;
    color: #FFF;
`;

const StyledInputText = styled.Text`
    color: #41872C;
    padding: 6px 15px;
    border: 1px solid white;
    borderRadius: 3px;
    fontSize: 14px;
    lineHeight: 19px;
    fontWeight: 600;
`;

const StyledButton = styled.View`
    justifyContent: center;
    alignItems: center;
    height: 55px;
    width: 100%;
    borderRadius: 5px;
    marginTop: 3px;
    marginBottom: 10px;
    paddingHorizontal: 10px;
    color: white;
    backgroundColor: #41872C;
    textAlign: center;
`;

const StyledButtonText = styled.Text`
    color: #FFF;
    borderRadius: 3px;
    fontSize: 17px;
    lineHeight: 22px;
    fontWeight: 600;
    letterSpacing: 1px;
`;