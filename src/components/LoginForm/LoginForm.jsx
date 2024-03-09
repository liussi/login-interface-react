import React, { useState } from 'react';
import { createAccessToken, login } from '../../api/authApi';
import Button from 'components/Button/Button';
import EmailInput from 'components/InputEmail/InputEmail';
import PasswordInput from 'components/InputPassword/InputPassword';
import Icons from '../../img/sprite.svg';
import Icon from 'components/Icon/Icon';
import Header from 'components/Title/Title';
import { Networks, StyleForm, StyledLink, StyledNetworks, StyledTitle, StyledWrapBtn, WordBesideLink, Wrapper } from './LoginForm.styled';
import { AppContainerWrap } from 'styled/GlobalStyled';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      if (!showPasswordInput) {
        // await createAccessToken(email);
        setShowPasswordInput(true);
      } else {
        // await login(email, password);
        console.log('Login successful'); // Тут можна обробити успішний логін
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Something went wrong', error);
    }
  };

  return (
    <AppContainerWrap>
      <Icon iconPath={Icons + '#icon-qencode'} width={178} height={32} />
      <Header title={'Log in to your account'} />
      <StyledWrapBtn>
        <Networks>
          Google
          <StyledNetworks>
            <Icon iconPath={Icons + '#icon-google'} width={18} height={18} />
          </StyledNetworks>
        </Networks>
        <Networks>
          Github
          <StyledNetworks>
            <Icon iconPath={Icons + '#icon-git'} width={18} height={18} />
          </StyledNetworks>
        </Networks>
      </StyledWrapBtn>
      <WordBesideLink> OR </WordBesideLink>
      <StyleForm onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          onChange={handleEmailChange}
          placeholder="Work email"
        />
        {showPasswordInput && (
          <PasswordInput
            value={password}
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        )}
        <Wrapper>
          <StyledLink to="/forgot-password">Forgot your password?</StyledLink>
        </Wrapper>
        <Button type="submit" label="Log in to Qencode" />
      </StyleForm>
      <StyledTitle>Is your company new to Qencode? </StyledTitle>
      <StyledLink to="/">Sign up</StyledLink>
    </AppContainerWrap>
  );
}

export default Login;
