import React, { useState } from "react";
import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Mdl(){

    const [flag, setFlag] = useState(false)


    return(
        <div>
            <Modal
                open={true}
                onClose={false}
                aria-labelledy="modal-modal-title"
                aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                             Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.                        </Typography>
                    </Box>
             </Modal>
            
        </div>
    )
} 