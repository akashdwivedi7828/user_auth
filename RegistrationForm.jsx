import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import "../App.css"
import { connect } from 'react-redux'
import { setData } from '../Redux/Action';
import OtpModal from './OtpModal';


const RegistrationForm = (props) => {
    const [formData, setFormData] = React.useState({name: '', email: '', password: '', number: '', zipCode: ''})
    const [open, setOpen] = React.useState(false);
    const [otp, setOtp] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let handleInputchange = (e) => {
       let {value, name} = e.target
       console.log("@aks", formData, props)
       setFormData( {...formData, [name]: value})
       console.log("@akd", formData, props)
     }

     const handleSubmit = async (e) => { 
        e.preventDefault()
        
       let res = await props.setData(formData)
       console.log("@www", res)
       if(res.status == 200) {
        setOpen(true)
        setOtp(res.data.otp)
       }
       
      }
    return (
        <div style={{ width: "30rem", margin: "2rem auto" }}>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                        m: 1,
                        // height: 480,
                        width: 500
                    },
                }}
            >

                <Paper variant="outlined" square >
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#dfcfbe", color: "#001a33", marginBottom: "2rem" }}>
                        <h1>Signup</h1>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div><TextField name='name' value={formData.name} onChange={(e) => handleInputchange(e)} id="outlined-basic" label="Name" variant="outlined" type='text' /></div>
                        <div><TextField name='email' value={formData.email} onChange={(e) => handleInputchange(e)} id="outlined-basic" label="Email" variant="outlined" type='text' /></div>
                        <div><TextField name='password' value={formData.password} onChange={(e) => handleInputchange(e)} id="outlined-basic" label="Password" variant="outlined" type='text' /></div>
                        <div><TextField name='number' value={formData.number} onChange={(e) => handleInputchange(e)} id="outlined-basic" label="Phone" variant="outlined" type='text' /></div>
                        <div><TextField name='zipCode' value={formData.zipCode} onChange={(e) => handleInputchange(e)} id="outlined-basic" label="Zip Code" variant="outlined" type='text' /></div>
                        <div><input value='SUBMIT' type='submit'/></div>
                    </form>
                </Paper>
            </Box>
            {
                open ? <OtpModal open={open} handleClose= {handleClose} otp={otp} number={formData.number}/> : ""
            }
        </div>

    )
}
const mapStateToProps = state => {
    console.log("@@state", state)
    return {
        formData: state.formData
        // taggedUsers: state.app?.taggedUsers
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    setData: (formData) => dispatch(setData(formData))
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm)

