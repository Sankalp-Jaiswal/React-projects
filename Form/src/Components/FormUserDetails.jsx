import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
// import RaisedButton from 'material-ui/RaisedButton'
// import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class FormUserDetails extends Component {
    continue =e =>{
      e.preventDefault();
      this.props.nextStep();  
    }
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
           <AppBar title='Enter user Details'/> 
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetails
