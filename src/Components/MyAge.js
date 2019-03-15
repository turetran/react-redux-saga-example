import React, { Component } from 'react';
import { connect } from 'react-redux'
import {ChangeMyAgeSaga} from '../Actions'

class MyAge extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.changeMyAge(e.target.value)
    }

    render() {
        return (
            <div>
                My Age: <input type='text' value={this.props.myage} onChange={this.handleChange}/>
                <br/>
                Changes: {this.props.changes}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {    
        myage: state.ChangeMyAge.myage,
        changes: state.ChangeMyAge.changes
  }}

const mapDispatchToProps = dispatch => {
  return {
        changeMyAge: (myage) => dispatch(ChangeMyAgeSaga(myage))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps    
)(MyAge);
