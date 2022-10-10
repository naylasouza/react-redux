import React from "react";
import { connect } from "react-redux";
import { actions } from "../actions/counter"

const Counter = ({counter, decrement,increment }) => {
    return(
        <><h1> Counter: {counter} </h1><ul>
            <li><button onClick={decrement}>Decremente</button></li>
            <li><button onClick={increment}>Incremente</button></li>
        </ul></>
    )
}

const mapStateToProps = state => ({
    counter: state.counterReducers.counter
})

const mapDispatchToProps = dispatch => ({
    decrement: () => dispatch(actions.decrement()),
    increment: () => dispatch(actions.increment())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);