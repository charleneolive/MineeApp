import sizes from "./sizes"

export default {
    PasswordChangeFields:{
        width:"50%",
        margin:"0 auto",
        flexDirection:"column",
        display:"flex",
        fontFamily:"Helvetica Neue, sans-serif",
        [sizes.down("xs")]:{
            width:"70%"
        },
        
    },
    PasswordChange: {
        paddingBottom:"2rem"
    }
}