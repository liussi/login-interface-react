import Button from 'components/Button/Button';
import EmailInput from 'components/InputEmail/InputEmail';
import { useState } from 'react';
import { resetPassword } from '../../api/authApi';
import Icons from '../../img/sprite.svg';
import Icon from 'components/Icon/Icon';
import Header from 'components/Title/Title';

function ForgotPasswordForm() {
  const [email, setEmail] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await resetPassword(email);
    setEmail('');
  };

  return (
    <>
      <Icon iconPath={Icons + '#icon-qencode'} width={178} height={32} />
      <Header title={'Forgot Password?'} />
      <form onSubmit={handleSubmit}>
        <EmailInput
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />

        <Button type="submit" label="Send" />
        <Button type="submit" label="Cancel" />
      </form>
    </>
  );
}

export default ForgotPasswordForm;
