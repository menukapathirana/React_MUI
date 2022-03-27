import { createTheme } from "@material-ui/core";
import { blue } from "@mui/material/colors";

export const theme = createTheme({
    palette:{
        primary:{
            main:blue[500],
        },
    },
    myButton:{
        backgroundColor:"read",
        color:"white",
        border:"1px solid black"
    }
})