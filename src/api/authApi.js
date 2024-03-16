import axios from 'axios';

axios.defaults.baseURL = 'https://auth-qa.qencode.com/v1';

export async function createAccessToken(accessId) {
    const url = 'https://auth-qa.qencode.com/v1/auth/access-token';
    const body = { access_id: accessId };

    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export const login = async body => {
  const { data } = await axios.post('auth/login', body);
  return data;
};


export const forgotPassword = async (email, redirectUrl = 'https://auth-qa.qencode.com/password-set') => {
   const response = await axios.post('auth/password-reset', {
      email,
      redirect_url: redirectUrl
    });
    return response.data;
};

export const setNewPassword = async (token, secret, password,password_confirm) => {

      const response = await axios.post('auth/password-set', {
     token, secret, password ,password_confirm
    });
    return response.data;
}

export const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await axios.post('auth/refresh-token', {
      refresh_token: refreshToken
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
}