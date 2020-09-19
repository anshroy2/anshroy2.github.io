import React, { Component } from 'react';
function Link(props) {
    console.log(props.info);
    return (
        <a href={props.info.href} className='Links'>
            {props.info.text}
        </a>
    );
}
export { Link };