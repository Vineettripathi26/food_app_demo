import React from "react"

class Cbc extends React.Component {
    constructor(props){
        super(props)
        console.log('constructor')
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        console.log('component did mount')
    }

    componentDidUpdate(){
        console.log('component did update')
    }

    componentWillUnmount(){
        console.log('component will unmount')
    }

    handleClick = () =>{
        this.setState({
            count : this.state.count + 1
        })
    }


    render(){
        console.log('render')
        return(
            <>
        <button onClick={this.handleClick}>Increment</button>
        <span>{this.state.count}</span>/
        </>
        )
    }
}

export default Cbc