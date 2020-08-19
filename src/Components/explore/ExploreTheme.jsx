import React, { Component } from 'react';

class ExploreTheme extends Component {
    constructor(props){
        super(props)
        // this.hangleClick = this.hangleClick.bind(this)
    }

    // hangleClick() {
    //     this.props.onClick(this.props.title);
    // }

    render() {
        return (
            <div onClick={this.hangleClick} className='d-flex flex-column justify-content-around align-items-center' width="90">
                <img className='rounded-circle' src={this.props.imgPath} width="87"/>
                <span className='mt-2'>{this.props.title}</span>
            </div>
        );
    }
}

export default ExploreTheme;