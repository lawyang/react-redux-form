import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  })

class Snacks extends Component {



    render(){
        return(
            <div>
                <pre>{ JSON.stringify(this.props.reduxState )}</pre>
                <h1>hello</h1>
                <ul>
                    {/* {this.props.reduxState.map(snackie => 
                    <li>Name: {snackie}</li>)} */}
                </ul>
            </div>
        )
    }

}

export default connect(mapReduxStateToProps)(Snacks)