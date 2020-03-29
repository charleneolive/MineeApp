import sizes from "./sizes"

export default {
    PasswordForgetPageTotal:{
        backgroundColor:"#f6f6f6",
        position: "absolute",
        width:"100% !important",
        height:"100% !important",
        fontFamily:"Helvetica Neue, sans-serif"
        
    },
    PasswordForgetForm:{
        marginTop:"10rem",
        width:"50%",
        display:"flex",
        margin:"0 auto",
        flexDirection:"column",
        textAlign:"center",
        paddingBottom:"10rem",
        [sizes.down("xs")]:{
            width:"80%"
        },
    },
    PasswordForgetFields:{
        width:"50%",
        margin:"0 auto",
        flexDirection:"column",
        textAlign:"center",
        display:"flex",
        [sizes.down("xs")]:{
            width:"70%"
        },
        
    },
    PasswordForget: {
        
        paddingBottom:"2rem"
    }
}