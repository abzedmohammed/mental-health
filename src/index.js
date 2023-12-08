import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { persistor, store } from './app/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<BrowserRouter>
				{/* <React.StrictMode> */}
					<App />
					<Toaster
						position='top-center'
						reverseOrder={false}
						gutter={8}
						containerClassName=''
						containerStyle={{}}
						toastOptions={{
							// Define default options
							className: '',
							duration: 5000,
							style: {
								background: '#363636',
								color: '#fff',
							},

							// Default options for specific types
							custom: {
								duration: 5000,
							},
						}}
					/>
				{/* </React.StrictMode> */}
			</BrowserRouter>
		</PersistGate>
	</Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
