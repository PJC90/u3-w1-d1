import { Component } from "react";

class ImageComponent extends Component{
    render(){
        return (
        <img src={this.props.link} alt={this.props.alt} style={{marginTop:"15px"}}/>
        )
    }
}

export default ImageComponent