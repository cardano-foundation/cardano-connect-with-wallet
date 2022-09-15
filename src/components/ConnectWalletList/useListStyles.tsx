import { createUseStyles } from 'react-jss';

export const useListStyles = createUseStyles({
  menu: {
    fontFamily: 'sans-serif',
    maxWidth: 180,
    zIndex: 1,
  },
  item: {
    color: '#0538AF',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderColor: '#0538AF',
    borderStyle: 'solid',
    borderWidth: '1px',
    '&:first-child': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: 'rgba(5, 56, 175, 0.1)',
    },
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
});
