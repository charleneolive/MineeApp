import sizes from "./sizes"

export default {
    MembersPageTotal:{
        backgroundColor:"inherit",
        position: "absolute",
        width:"100% !important",
        height:"100% !important",
        overflow:"auto"
    },
    MembersPageForm:{
        marginTop:"5rem",
        marginBottom:"5rem",
        width:"70%",
        margin:"0 auto",
        textAlign:"center",
        [sizes.down("xs")]:{
            width:"70%"
        },
    },
    Register:{
        textAlign:"center",
        marginBottom:"3rem",
        [sizes.down("xs")]:{
            fontSize:"3rem"
        },
        
    },
    MembersPageItems:{
        display:"flex",
        justifyContent:"space-evenly",
        [sizes.down("xs")]:{
            flexDirection:"column"
        },
    },

    MemberLink:{
        paddingRight:"9rem",
        paddingLeft:"9rem",
        fontSize:"2rem",
        [sizes.down("lg")]:{
            paddingRight:"6rem",
            paddingLeft:"6rem",
            fontSize:"2rem"
        },
        [sizes.down("xs")]:{
            paddingRight:"4rem",
            paddingLeft:"4rem",
            fontSize:"1rem"
        },
    },
    MemberText:{
        fontFamily:"Helvetica Neue, sans-serif",
        color:"#434343"
    }

}