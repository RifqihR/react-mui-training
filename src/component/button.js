import React, { useState } from "react";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function Mui(){
    const [flag, setFlag] = useState(false)
    const [username, setUsername] = useState({
        name: "",
        password: ""
    })
    const data = []
    
    return(
        <div>
            <Button
            variant="contained"
            onClick={()=> setFlag(true)}
            >click</Button>
            <IconButton>
                <PhotoCamera />
            </IconButton>

            <Modal
                open={flag}
                onClose={false}
                aria-labelledy="modal-modal-title"
                aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                             Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                        <box sx ={{width: "100%"}}>

                            <TextField
                                sx={{mt: 2}}
                                fullWidth label = 'username' 
                                variant='outlined'
                                onChange={(e)=> setUsername({
                                    ...username,
                                    name: e.target.value,
                            })}/>

                            <TextField
                                sx={{mt: 2}}
                                fullWidth label = 'Password' 
                                variant='outlined'
                                onChange={(e)=> setUsername({
                                    ...username,
                                    password: e.target.value,
                            })}/>

                        </box>
                        <Button 
                            variant ='contained'
                            color="success"
                            sx={{mt: 5, mr: 1}}
                            onClick={()=> {
                                data.push(username);
                                console.log(data);
                                setFlag(false)}}
                            >Submit
                        </Button>
                        <Button
                        variant="contained"
                        color = 'error'
                        sx={{mt: 5}}

                        onClick={()=> setFlag(false)}>
                            Close
                        </Button>
                        
                    </Box>
             </Modal>

        </div>
    )
}
