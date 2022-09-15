import { createUseStyles } from 'react-jss';

export const useListStyles = createUseStyles({
  menu: {
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
});
