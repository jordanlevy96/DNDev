import React from 'react';
// import './empty.css'
import Folder from '../Folder';

export default class Nav extends React.Component {
    render() {
      return (
        <Folder root="Material Plane" contents={["Forgotten Realms", "Eberron", "Distant Stars"]}></Folder>
      );
    }
}