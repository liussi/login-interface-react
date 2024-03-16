import React, { useState } from 'react';
import EmailInput from 'components/InputEmail/InputEmail';
import PasswordInput from 'components/InputPassword/InputPassword';
import Icons from '../../img/sprite.svg';
import Icon from 'components/Icon/Icon';
import Header from 'components/Title/Title';
import {
  Networks,
  StyleErrorMessage,
  StyleForm,
  StyledLink,
  StyledNetworks,
  StyledTitle,
  StyledWrapBtn,
  WordBesideLink,
  Wrapper,
} from './LoginForm.styled';
import { AppContainerWrap } from 'styled/GlobalStyled';
import { useAuth } from '../../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/auth/operations';

import {  useFormik } from 'formik';
import * as Yup from 'yup';
import CustomButton from 'components/Button/Button';


function Login() {
  const dispatch = useDispatch();
  const { token } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },

    onSubmit: async (values, { resetForm }) => {
      const response = await dispatch(loginUser(values));

      if (response.payload) {
        toast.success(
          'You have been successfully logged in! Your session is now active.'
        );
       resetForm();
      } else {
        toast.error('Login failed. Please try again.');
      }
    },

    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required')
        .min(15, 'Email must be at least 15 characters')
        .max(512, 'Email must be at most 512 characters'),
      password: Yup.string()
        .required('Password is required')
        .min(5, 'Password must be at least 5 characters')
        .max(512, 'Password must be at most 512 characters'),
    }),
  });
  // test+ui@qencode.com
  // C4aLE2dRM7QE5mT*

  return (
    <AppContainerWrap>
      <Icon iconPath={Icons + '#icon-qencode'} width={178} height={32} />
      <Header title={'Log in to your account'} />
      <StyledWrapBtn>
        <Networks type="button">
          Google
          <StyledNetworks>
            <Icon iconPath={Icons + '#icon-google'} width={18} height={18} />
          </StyledNetworks>
        </Networks>
        <Networks type="button">
          Github
          <StyledNetworks>
            <Icon iconPath={Icons + '#icon-git'} width={18} height={18} />
          </StyledNetworks>
        </Networks>
      </StyledWrapBtn>
      <WordBesideLink> OR </WordBesideLink>
      <StyleForm onSubmit={formik.handleSubmit}>
        <EmailInput
          value={formik.values.email}
          onChange={e => formik.setFieldValue('email', e.target.value)}
          placeholder="Work email"
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <StyleErrorMessage>{formik.errors.email}</StyleErrorMessage>
        ) : null}
        <PasswordInput
          value={formik.values.password}
          onChange={e => formik.setFieldValue('password', e.target.value)} 
          placeholder="Password"
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <StyleErrorMessage>{formik.errors.password}</StyleErrorMessage>
        ) : null}
        <Wrapper>
          <StyledLink to="/forgot-password">Forgot your password?</StyledLink>
        </Wrapper>
        <CustomButton type="submit" label="Log in to Qencode" />
      </StyleForm>
      <StyledTitle>Is your company new to Qencode? </StyledTitle>
      <StyledLink to="/">Sign up</StyledLink>
      <ToastContainer />
    </AppContainerWrap>
  );
}

export default Login;
