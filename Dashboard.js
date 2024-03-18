import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {addCount,decreaseCount} from '../redux/countSlice';

const Dashboard=()=> {
    const user = useSelector(state=>state.user);
    const count = useSelector(state=>state.currentCount);
    
    console.log(count);
    const dispatch = useDispatch()
function handleAdd(){
    dispatch(addCount());
}
function handleDecrease(){
    dispatch(decreaseCount());
}

  return (
    <div>
        <h2>welcome to the dashboard,{user.name}</h2>
<p>Name:{user.name}</p>
<p>password:{user.password}</p>
<button onClick={handleDecrease}>-</button>
<h2>{count.currentCount}</h2>
<button onClick={handleAdd}>+</button>


    </div>
  )
}

export default Dashboard;