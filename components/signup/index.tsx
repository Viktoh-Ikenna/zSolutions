import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import { CreateUser } from '../../redux/auth/auth';
import { useDispatch } from 'react-redux';
import ReactLoading from 'react-loading';
import useTheme from '../../hooks/useTheme';

const style = {
  position: 'absolute' as 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5

};

export default function SignUp({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();
  const theme = useTheme()
  const handleChange = (name: string, val: string) => {
    setData((prev: any) => ({ ...prev, [name]: val }))
  }

  const handleSave = () => {
    if (!data) {
      toast.error("Pls, Input Something !");
      return
    }
    else if (data.email === "" || !data.email || data.username === "" || !data.username || data.password === "" || !data.password) {
      toast.error("Pls, Make Sure All The Field Are Filled !");
      return
    }
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email))) {
      toast.error("Pls, input a valid email!");
      return
    }
    setLoading(true)
    dispatch<any>(CreateUser(data))
    .then(res=>{
      setLoading(false)
      setOpen(false)
      if(res.status){
        toast.success(res.message);
      } else{
        toast.error(res.message);
      }
    })
  }
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
            Signup
          </Typography>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" style={{ marginTop: 15 }} onChange={(e) => handleChange('username', e.target.value)} label="UserName" variant="outlined" />
            <TextField id="outlined-basic" style={{ marginTop: 15 }} onChange={(e) => handleChange('email', e.target.value)} label="Email" variant="outlined" />
            <TextField id="outlined-basic" type={'password'} style={{ marginTop: 15 }} onChange={(e) => handleChange('password', e.target.value)} label="Password" variant="outlined" />
            <Button variant="contained" onClick={handleSave} style={{ marginTop: 15 }} >
              {
                loading ? <ReactLoading type={'balls'} color={"white"} height={20} width={20} /> : "Login"
              }

            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
