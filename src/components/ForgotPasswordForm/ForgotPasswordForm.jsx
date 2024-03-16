
import React from 'react';
import EmailInput from 'components/InputEmail/InputEmail';
import Icons from '../../img/sprite.svg';
import Icon from 'components/Icon/Icon';
import Header from 'components/Title/Title';
import CustomButton from 'components/Button/Button';
import { resetPasswordUser } from '../../redux/auth/operations';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';



function ForgotPasswordForm() {
  const dispatch = useDispatch();

   const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Email is required')
        .min(15, 'Email must be at least 15 characters')
        .max(512, 'Email must be at most 512 characters'),
    }),
    onSubmit: async (values, { resetForm }) => {
   
const response = await dispatch(resetPasswordUser({ email: values.email }));
        if (response.payload) {
          toast.success(
            'You have been successfully logged in! Your session is now active.'
          );
          resetForm();
           navigate('/reset-password');
        } else {
          toast.error('Login failed. Please try again.');
        }
    
    },
  });

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <>
      <Icon iconPath={Icons + '#icon-qencode'} width={178} height={32} />
      <Header title={'Forgot Password?'} />
      <form onSubmit={formik.handleSubmit}>
        <EmailInput
          value={formik.values.email}
          onChange={e => formik.setFieldValue('email', e.target.value)} 
          onBlur={formik.handleBlur}
          placeholder="Enter your email"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <CustomButton type="submit" label="Send" />
        <CustomButton type="button" label="Cancel" onClick={handleCancel} />
      </form>
    </>
  );
}

export default ForgotPasswordForm;
