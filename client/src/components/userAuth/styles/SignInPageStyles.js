import sizes from "./sizes"

export default {
    SignInTotal:{
        backgroundColor:"#f6f6f6",
        position: "absolute",
        width:"100% !important",
        height:"100% !important",
        overflow:"auto",
        fontFamily:"Helvetica Neue, sans-serif",
        

    },
    SignInForm:{

        marginTop:"10rem",
        marginBottom:"10rem",
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
    SignInFields:{
        width:"50%",
        margin:"0 auto",
        flexDirection:"column",
        display:"flex",
        [sizes.down("xs")]:{
            width:"70%"
        },
        
    },
    SignIn: {
        
        paddingBottom:"2rem",
        "&:focus": {
            borderBottom: "dotted 1px @blue",
            outline: "none",
            color: "blue",
            padding: "30px 0",
            animation: "enlarge 400ms",
            webkitAnimation: "enlarge 400ms"
        }
    }
}