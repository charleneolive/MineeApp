import React from 'react';
import useStyles from './styles/ExpansionPanelStyles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {v4 as uuidv4} from 'uuid';
import Button from '@material-ui/core/Button';

export default function SimpleExpansionPanel({content,state,setState,type,removePanel}) {
  const classes = useStyles();

  const onRemove=(e)=>{
    removePanel(content.heading)
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel key={uuidv4()}>
        <ExpansionPanelSummary
          className={classes.expansionPanelSummary}
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>
          <Typography className={classes.expansionPanelHeading}>{content.heading}</Typography>
          </div>
          <div>
          <Typography className={classes.expansionPanelHeading}>{content.start_date} to {content.end_date}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <div>
          <Typography>
            {content.body}
          </Typography>
          </div>
          <div>
          <Button variant="outlined" onClick={onRemove}>Delete</Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}