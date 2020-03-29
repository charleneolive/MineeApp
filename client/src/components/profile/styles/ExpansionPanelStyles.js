import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    expansionPanelSummary:{
        backgroundColor:"#212121",
        color:"#F6f6f6",
        display:"flex",
    },
    expansionPanelHeading:{
      marginRight:"2rem"
    },
    expansionPanelDetails:{
      display:"flex",
      flexDirection:"column"
    }
}));

export default useStyles;