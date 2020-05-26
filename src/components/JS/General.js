import React, { Component } from 'react';
class Link extends Component {
    render() {
        return (
            <a href={this.props.href} className='Links'>
                {this.props.text}
            </a>
        );
    }
}

export { Link };