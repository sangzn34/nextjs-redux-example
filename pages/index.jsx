import React from 'react';
import { connect, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { decrementCounter, incrementCounter } from '../redux/actions/counterActions';

const App = (props) => {
    const counter = useSelector(state => state.counter.value)
    const router = useRouter()
    const click = () => {
        router.push('/link')
    }
    return (
        <div>
            <button onClick={click}>link</button>
            <button onClick={props.incrementCounter}>Increment</button>
            <button onClick={props.decrementCounter}>Decrement</button>
            <h1>{counter}</h1>
        </div>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

