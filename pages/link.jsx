import React from 'react';
import {connect} from 'react-redux';
import Router from 'next/router'
import {decrementCounter, incrementCounter} from '../redux/actions/counterActions';

const call = () => {
    Router.push('/')
}

class App extends React.Component {

    static getInitialProps({store}) {}

    constructor(props) {
        super(props);
    }

    render() {
        const click = () => {
            call()
        }
        return (
            <div>
                <button onClick={click}>back</button>
                <button onClick={this.props.incrementCounter}>Increment</button>
                <button onClick={this.props.decrementCounter}>Decrement</button>
                <h1>{this.props.counter}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter: state.counter.value
});

const mapDispatchToProps = {
    incrementCounter: incrementCounter,
    decrementCounter: decrementCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

