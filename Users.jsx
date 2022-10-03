import React from 'react'
import { useTable } from "react-table";
import { connect } from 'react-redux'
import { getData } from '../Redux/Action';

const Users = (props) => {
    const [users, setUsers] = React.useState([])
   React.useEffect(() => {
        props.getData()
        console.log("@data", props.formData)
   }, [props.formData])
   
 

  return (
    <div>    
               <table border= "1" style={{width: "80%", margin: "2rem auto"}}>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Zip code</th>
                    </tr>
                    {props.formData && props.formData.length && props.formData.map((val, key) => {
                    return (
                        <tr key={val._id}>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.zipCode}</td>
                        </tr>
                    )
                    })}
                </table>
      
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
    getData: () => dispatch(getData())
  })
  
  export default connect(mapStateToProps, mapDispatchToProps)(Users)