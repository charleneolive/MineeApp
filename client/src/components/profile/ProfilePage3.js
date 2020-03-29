import React from 'react';
import SimpleExpansionPanel from './ExpansionPanel'
import {Grid,Typography,Button} from '@material-ui/core';
import FormDialog from './ProfileAddForm';
import useStyles from './styles/ProfilePage3Styles';
import {uuid} from 'uuidv4'

export default function ProfilePage3({state,setState,name,category,type}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    
  };
  const removePanel =(heading) => {
    setState(prevState=> ({
      ...prevState,
      [type]:[...prevState[type].filter(item=>
        item.heading!==heading
      )]
    })
    )
  }
  return (
      <>
      <div>
      <div className={classes.profilePage3}>
      <Typography variant="h6" gutterBottom>
        {name}
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>add</Button>
      </div>
      {open &&<FormDialog setOpen={setOpen} open={open} state={state} setState={setState} category={category} type={type}/>}
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        {category.map((conten,i)=>(
          <SimpleExpansionPanel key={uuid()} content={conten} state={state} setState={setState} type={type} removePanel={removePanel}/>
        ))}
        </Grid>
      </Grid>
      </>
  );
}