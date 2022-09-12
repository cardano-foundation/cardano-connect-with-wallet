import { createUseStyles } from 'react-jss';

export const useButtonStyles = createUseStyles({
  dropdown: {
    width: 160,
    fontWeight: 'bold',
    position: 'relative',
    display: 'inline-block',
    paddingBottom: 8,
    '&:hover $menu': {
      display: 'block',
    },
    '&:hover $button': {
      backgroundColor: '#0538AF',
      color: 'white',
    },
  },
  button: {
    padding: 16,
    cursor: 'pointer',
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    border: '1px solid #0538AF',
    borderRadius: '16px',
    color: '#0538AF',
    backgroundColor: 'white',
  },
  menu: {
    display: 'none',
    position: 'absolute',
    marginTop: 8,
    fontFamily: 'sans-serif',
    width: '100%',
    zIndex: 1,
    '& span': {
      color: '#0538AF',
      padding: '12px 16px',
      textDecoration: 'none',
      borderTop: '1px solid #0538AF',
      borderLeft: '1px solid #0538AF',
      borderRight: '1px solid #0538AF',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
    '& span:first-child': {
      border: '1px solid #0538AF',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      borderBottom: 'none',
    },
    '& span:last-child': {
      border: '1px solid #0538AF',
      borderBottomLeftRadius: 16,
      borderBottomRightRadius: 16,
    },
    '& span:hover': {
      backgroundColor: 'rgba(5, 56, 175, 0.1)',
    },
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  disabled: {
    padding: 16,
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    border: '1px solid #333',
    borderRadius: '16px',
    color: '#333',
    backgroundColor: '#eee',
  },
});
