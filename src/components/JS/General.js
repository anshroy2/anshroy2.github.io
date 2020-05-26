import React, { Component } from 'react';
function Link(props) {
    return (
        <a href={props.href} className='Links'>
            {props.text}
        </a>
    );
}
export { Link };