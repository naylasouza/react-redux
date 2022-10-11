import React, {useEffect} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { actions, decrement, increment } from "../actions/counter"


const Counter = () => {
 // const Counter = ({counter, decrement, increment }) => {
    const couterState = useSelector((state) => state.counterReducers.counter);
    const dispatch = useDispatch();

    const batata = () => {
        console.log("batata")
        dispatch(decrement)
    }

    const pipoca = () => {
        console.log("pipoca")
        dispatch(increment)
    }



    return(
        <><h1> Counter: {couterState} </h1><ul>
            <li><button onClick={batata}>Decremente</button></li>
            <li><button onClick={pipoca}>Incremente</button></li>
        </ul></>
    )
}

export default Counter

// const mapStateToProps = state => ({
//     counter: state.counterReducers.counter
// })

// const mapDispatchToProps = dispatch => ({
//     decrement: () => dispatch(actions.decrement()),
//     increment: () => dispatch(actions.increment())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
