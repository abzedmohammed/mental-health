import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { message } from 'antd';
import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL;

const initialState = {
	authLoading: false,
	user: {},
	isLoggedIn: false,
};

export const register = createAsyncThunk('authSlice/login', async (data) => {
	const res = await axios.post(
		`${url}/usr/post_authenticate_user.action`,
		data,
	);
	return res.data;
});

export const login = createAsyncThunk('authSlice/login', async (data) => {
	const res = await axios
		.post(`${url}/dj-rest-auth/login/`, data)
		.then((res) => res)
		.catch((err) => err.response.data);
	return res;
});

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.user = {};
			state.isLoggedIn = false;
		},
	},
	extraReducers: (builder) => {
		builder

			.addCase(login.pending, (state) => {
				state.authLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.authLoading = false;
			})
			.addCase(login.rejected, (state) => {
				state.authLoading = false;
				state.user = {};
				state.isLoggedIn = false;
			});
	},
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
