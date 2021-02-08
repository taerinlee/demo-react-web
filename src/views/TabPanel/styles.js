import {
  createStyles,
  makeStyles
} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => createStyles({
  tab: {
    marginLeft: theme.spacing(1),
    backgroundColor: 'transparent',
    border: theme.spacing(0),
    color: theme.palette.text.hint
  },
  tabActive: {
    fontWeight: theme.typography.fontWeightBold,
    marginLeft: theme.spacing(1),
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: theme.palette.primary.dark
  }
}));
