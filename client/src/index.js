import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './Styles/Theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={theme}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<App />
			</ThemeProvider>
		</MuiThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
