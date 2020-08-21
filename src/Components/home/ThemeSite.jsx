import React, { Component } from 'react';

class ThemeSite extends Component {
    render() {
        return (
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <a href={this.props.url}><img src={this.props.imgPath} width="100"/></a>
                <span className='mt-2'>{this.props.title}</span>
            </div>
        );
    }
}

export default ThemeSite;