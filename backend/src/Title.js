import React from 'react';

class Title extends React.Component {
    constructor(){
        super();
        this.state = {
            title : "Nokia",
            subTitle : ""
        }
    }

    render(){
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h1>{this.state.subTitle}</h1>
            </div>
        );
    }
}

export default Title;