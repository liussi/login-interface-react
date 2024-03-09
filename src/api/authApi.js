import axios from 'axios';
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

export async function login(email, password) {
    const url = 'https://auth-qa.qencode.com/v1/auth/login';
    const body = { email, password };

    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export async function resetPassword(email) {
    const url = 'https://auth-qa.qencode.com/v1/auth/password-reset';
    const body = { email };

    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export async function setNewPassword(token, secret, password,password_confirm) {
    const url = 'https://auth-qa.qencode.com/v1/auth/password-set';
    const body = { token, secret, password ,password_confirm};

    try {
        const response = await axios.post(url, body);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}
