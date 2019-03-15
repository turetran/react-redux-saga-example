import React, { Component } from 'react';
import { connect } from 'react-redux'
import {ChangeMyAge} from '../Actions'

class MyChildAge extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.changeMyAge(Number(e.target.value) + 20)
    }

    render() {
        return (
            <div>
                My Child Age: <input type='text' value={this.props.myage} onChange={this.handleChange}/> (myage - 20)
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {    
        myage: Number(state.ChangeMyAge.myage) - 20 
  }}

const mapDispatchToProps = dispatch => {
  return {
        changeMyAge: (myage) => dispatch(ChangeMyAge(myage))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps    
)(MyChildAge);
