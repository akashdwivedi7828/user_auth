import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import axios from "axios"
const OtpModal = (props) => {
   const [enteredOtp, setOtp] = React.useState("")
   React.useEffect(() => {
        alert("Please copy otp", props.otp)
   }, [])
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

      let checkOtp = async () => {
        let payload = {
            otp: enteredOtp,
            number: props.number
        }
        let res = await axios.post("http://localhost:8001/api/user/signup/verify", payload)
        console.log("@akd", res)
        if(res.status == 200) {
            
            alert("User registered successfully")
            props.handleClose()

        }
        else {
            alert("Entered Otp is incorrect")
        }
      }

  return (
    <div>
    <div>
      {/* <Button onClick={props.handleOpen}>Open modal</Button> */}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>  
          <Input placeholder='Enter otp' value={enteredOtp} onChange={(e) => setOtp(e.target.value)} />
          <Button onClick={checkOtp}>Verify otp</Button>
        </Box>
      </Modal>
    </div>
 
    </div>
  )
}

export default OtpModal