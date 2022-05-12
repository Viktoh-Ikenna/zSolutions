import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute' as 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius:5
};

export default function LoginModal({ open, setOpen }) {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Login
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" style={{marginTop:15}} label="Email" variant="outlined" />
                        <TextField id="outlined-basic" style={{marginTop:15}} label="Password" variant="outlined" />
                        <Button variant="contained" style={{marginTop:15}} >
                            Login
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
