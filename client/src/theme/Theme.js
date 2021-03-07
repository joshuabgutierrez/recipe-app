import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
	typography: {
		fontFamily: [ 'Poppins', 'sans-serif' ].join(','),
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500
	},
	palette: {
		primary: {
			main: '#eb4a36'
		}
	},
	overrides: {
		MuiSelect: {
			select: {
				'&:focus': {
					backgroundColor: '#fff',
					borderColor: '#000'
				}
			}
		},
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: '#fff'
				}
			}
		}
	}
});

export default theme;
