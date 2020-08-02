import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Num of Cakes: { numOfCakes } </h2>
            <button onClick={ () => dispatch(buyCake()) }>BUY</button>
        </div>
    )
}

export default HookCakeContainer
