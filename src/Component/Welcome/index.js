import { Component } from "react";
import './index.css'

class Welcome extends Component {
    state = {subscribe: false}

    change = () => {
        console.log(this.state.subscribe)
        this.setState((perv)=>({subscribe:!perv.subscribe}))
        console.log(this.state.subscribe)
    }

    render() {
        const {subscribe} = this.state
        console.log(subscribe)
        const text = !subscribe ? 'Subscribed' : 'Subscribe';
        console.log(text)
        return(
        <div className="bg">
            <h1 className="head">Welcome</h1>
            <p className="para">Thank you! Happy Learning</p>
            <button onClick={this.change} className="btn">{text}</button>
        </div>)
    }
}

export default Welcome