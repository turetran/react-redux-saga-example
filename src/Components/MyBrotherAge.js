import React, { Component } from 'react';
import { connect } from 'react-redux'
import {ChangeMyAgeSaga} from '../Actions'

class MyBrotherAge extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.changeMyAge(Number(e.target.value) - 5)
    }

    render() {
        return (
            <div>
                My Brother Age: <input type='text' value={this.props.myage} onChange={this.handleChange}/> (myage + 5)
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {    
        myage: Number(state.ChangeMyAge.myage) + 5 
  }}

const mapDispatchToProps = dispatch => {
  return {
        changeMyAge: (myage) => dispatch(ChangeMyAgeSaga(myage))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps    
)(MyBrotherAge);
