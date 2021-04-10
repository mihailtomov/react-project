const baseUrl = 'http://localhost:5000/api/auth';

const endpoint = {
    register: `${baseUrl}/register`,
    login: `${baseUrl}/login`,
    validateToken: `${baseUrl}/validate-token`,
}

const postOptions = (data) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
}

const register = ({ username, password, repeatPassword }) => {
    const validateEmpty = username.trim() !== '' && password.trim() !== '' && repeatPassword.trim() !== '';

    const passwordsMatch = password === repeatPassword;

    if (validateEmpty && passwordsMatch) {
        return fetch(endpoint.register, postOptions({ username, password }))
            .then(res => res.json())
    } else {
        return Promise.reject({ message: 'Invalid input!' });
    }
}

const login = ({ username, password }) => {
    const validateEmpty = username.trim() !== '' && password.trim() !== '';

    if (validateEmpty) {
        return fetch(endpoint.login, postOptions({ username, password }))
            .then(res => res.json())
    } else {
        return Promise.reject({ message: 'Invalid input!' });
    }
}

const validateToken = (token) => {
    return fetch(endpoint.validateToken, {
        method: 'GET', 
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => res.json());
}

const authService = {
    register,
    login,
    validateToken,
}

export default authService;