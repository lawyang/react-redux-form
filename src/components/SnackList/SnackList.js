import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapReduxStateToProps = (reduxState) => ({
    reduxState
  })

class Snacks extends Component {



    render(){
        console.log(this.props.reduxState)
        return(
            <div>
                <pre>{ JSON.stringify(this.props.reduxState )}</pre>

                <ul>
                    {/* { this.props.reduxState.map(snackie => 
                    <li>Name: {snackie.snack}</li> )} */}
                </ul>
            </div>
        )
    }

}

export default connect(mapReduxStateToProps)(Snacks)