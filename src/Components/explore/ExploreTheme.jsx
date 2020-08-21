import React, { Component } from 'react';

class ExploreTheme extends Component {
    constructor(props){
        super(props)
        this.hangleClick = this.hangleClick.bind(this)
    }

    hangleClick() {
        this.props.onClick(this.props.title);
    }

    render() {
        return (
            <div id={this.props.title} onClick={this.hangleClick} className='explore-theme d-flex flex-column justify-content-between align-items-center'>
                <img className='rounded-circle' src={this.props.imgPath} width="100"/>
                <span className='mt-2'>{this.props.title}</span>
                <div className='triangle mt-4 hidden'></div>
            </div>
        );
    }
}

export default ExploreTheme;