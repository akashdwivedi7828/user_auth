// import { SET_DATA } from "./ActionTypes"
import { combineReducers, compose } from 'redux';


let initialState = {
    formData: []
}

const  reducer = (state = initialState, action) => {
  console.log("@payload", state)
    switch (action.type) {
		case "SET_DATA":
      
			return Object.assign({}, state, {
				formData: action.payload
			})
        
        default: 
          return state
    }
}

export default combineReducers({
   reducer
})

