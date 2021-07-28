import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';
import { persistStore } from 'reduxjs-toolkit-persist';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blueGrey, orange } from '@material-ui/core/colors';

let persistor = persistStore(store);

const theme = createTheme({
	palette: {
		background: {
			default: blueGrey[500],
		},
		text: {
			primary: '#ffffff',
		},
		primary: {
			light: orange[300],
			main: orange[500],
			dark: orange[800],
			contrastText: '#ffffff',
		},
		secondary: {
			light: blueGrey[300],
			main: blueGrey[500],
			dark: blueGrey[800],
			contrastText: '#ffffff',
		},
		contrastThreshold: 3,
		tonalOffset: 0.2,
	},
});

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ThemeProvider theme={theme}>
				<App persistor={persistor} />
			</ThemeProvider>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
