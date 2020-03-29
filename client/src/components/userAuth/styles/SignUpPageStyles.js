import sizes from "./sizes"

export default {
    SignUpTotal:{
        backgroundColor:"#f6f6f6",
        fontFamily:"Helvetica Neue, sans-serif",
        position: "absolute",
        width:"100% !important",
        height:"100% !important",
        overflow:"auto"

    },
    SignUpForm:{

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
    SignUpFields:{
        width:"50%",
        margin:"0 auto",
        flexDirection:"column",
        display:"flex",
        [sizes.down("xs")]:{
            width:"70%"
        },
        
    },
    SignUp: {
        
        paddingBottom:"2rem"
    }
}