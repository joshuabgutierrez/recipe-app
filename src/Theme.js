import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ED254E'
		},
		secondary: {
			main: '#000000'
		}
	},

	typography: {
		fontFamily: [ 'Nunito', 'sans-serif' ].join(',')
	}
});

export default theme;
