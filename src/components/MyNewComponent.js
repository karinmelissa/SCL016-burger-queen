import React, { Component } from 'react';
import { Link } from '@reach/router'

class MyNewComponent extends Component {
    render() {
        return <div className="whiteText">This is our first class component.
        <Link to ="/home">Home</Link>
        </div>;
    }
}
    
export default MyNewComponent;