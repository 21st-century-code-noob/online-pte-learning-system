import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const Buttons = styled(Button)({
    margin: '10px',
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '12px 150px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#3bcbbe',
    borderColor: '#3bcbbe',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#3bcbbe',
      borderColor: '#3bcbbe',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#3bcbbe',
      borderColor: '#3bcbbe',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem #3bcbbe',
    },
  });

  export default Buttons