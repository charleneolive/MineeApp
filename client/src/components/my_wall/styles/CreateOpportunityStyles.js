const styles = theme => ({
    CreateOpportunity:{
      width:"100% ",
      textAlign:"center"

    },
    CreateOpportunityForm: {
        margin:"0 auto",
        width:"50%",
        justifyContent:"center",
        display:"flex",
        flexDirection:"column",
        '& > *': {
          margin: theme.spacing(1),

        },
      },
      CreateOpportunityButton:{
        margin:"0 auto",
        width: '25ch',
      },
      formControl: {
        margin: "theme.spacing(1)",
        width:"100%"
      }
})

export default styles