import React from 'react';
// import './empty.css'

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../redux/actions';

function Brain() {

    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.isLogged);

    return (
        <div>
            <h1 onClick={() => dispatch(toggle())}>{loggedIn ? '🧠' : '💀'}</h1>
        </div>
    );
}

export default Brain;
