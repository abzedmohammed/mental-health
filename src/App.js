import React, { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
	const { isLoggedIn } = useSelector((state) => state.auth);
	const [isUserLoggedIn, setisUserLoggedIn] = useState(isLoggedIn);

	useEffect(() => {}, [isUserLoggedIn]);

	useEffect(() => {
		setisUserLoggedIn(isLoggedIn);
	}, [isLoggedIn]);

	console.log(isUserLoggedIn);

	if (isUserLoggedIn) {
		return (
			<>
				<h1>We are logged in</h1>
			</>
		);
	}

	return (
		<>
			<Routes>
				<Route path='*' element={<Navigate to='/account/login' replace />} />
				<Route exact path='/account/login' element={<Login />} />
				<Route exact path='/account/register' element={<Register />} />
			</Routes>
		</>
	);
}

export default App;
