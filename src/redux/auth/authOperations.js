import axios from 'axios';
import authActions from './authActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());

    axios.post('/users/signup', credentials).then(({ data }) => {
        token.set(data.token)
        dispatch(authActions.registerSuccess(data))
    }
    ).catch(({ message }) =>
        dispatch(authActions.registerError(message)));

    // try {
    //     const response = await axios.post('/users/signup', credentials);

    //     token.set(response.data.token);
    //     dispatch(authActions.registerSuccess(response.data));
    // } catch (error) {
    //     dispatch(authActions.registerError(error.message));
    // }
};



const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());

    axios.post('/users/login', credentials).then(({ data }) => {
        token.set(data.token)
        dispatch(authActions.loginSuccess(data))
    }
    ).catch(({ message }) =>
        dispatch(authActions.loginError(message)));

    // try {
    //     const response = await axios.post('/users/login', credentials);

    //     token.set(response.data.token);
    //     dispatch(authActions.loginSuccess(response.data));
    // } catch (error) {
    //     dispatch(authActions.loginError(error.message));
    // }
};


const logOut = () => dispatch => {
    dispatch(authActions.logoutRequest());

    axios.post('/users/logout').then(() => {
        token.unset()
        dispatch(authActions.logoutSuccess())
    }
    ).catch(({ message }) =>
        dispatch(authActions.logoutError(message)));

    // try {
    //     await axios.post('/users/logout');

    //     token.unset();
    //     dispatch(authActions.logoutSuccess());
    // } catch (error) {
    //     dispatch(authActions.logoutError(error.message));
    // }
};


const getCurrentUser = () => (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return;
    }

    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest());

    axios.get('/users/current').then(({ data }) => {

        dispatch(authActions.getCurrentUserSuccess(data))
    }
    ).catch(({ message }) =>
        dispatch(authActions.getCurrentUserError(message)));

    // try {
    //     const response = await axios.get('/users/current');

    //     dispatch(authActions.getCurrentUserSuccess(response.data));
    // } catch (error) {
    //     dispatch(authActions.getCurrentUserError(error.message));
    // }
};

export default { register, logOut, logIn, getCurrentUser };