import Button from 'components/Button/Button';
import { useState } from 'react';
import { setNewPassword } from '../../api/authApi';
import PasswordInput from 'components/InputPassword/InputPassword';
import Icon from 'components/Icon/Icon';
import Icons from '../../img/sprite.svg';
import Header from 'components/Title/Title';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await setNewPassword(password);
    setPassword('');
  };

  return (
    <>
      <Icon iconPath={Icons + '#icon-qencode'} width={178} height={32} />
      <Header title={'Create new Password?'} />
      <form onSubmit={handleSubmit}>
        <PasswordInput
          value={password}
          onChange={handlePasswordChange}
          placeholder="New Password"
        />
        <PasswordInput
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          placeholder="Confirm Password"
        />
        <Button type="submit" label="Reset password" />
      </form>
    </>
  );
}

export default ResetPassword;
