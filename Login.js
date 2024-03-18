// Import necessary libraries
import React from 'react';
import {  useFormik} from 'formik';
import { setUser} from '../redux/AppSlice';
import { useDispatch} from 'react-redux';
const Login =({onLoginSuccess})=>{
    const dispatch = useDispatch();

    
    const formik = useFormik({
    initialValues: {
        name: '',
        password: '',
    },

 onSubmit: values => {
   const isCheckDetail = CheckDetail(values.name ,values.password);
   if(isCheckDetail){
    console.log("login Successfull");
    onLoginSuccess();
    dispatch(setUser({name:values.name,password:values.password}));
   } else{
    console.log("invalid");
   }
 },
 validate:values =>{
    const errors = {};
    if(!values.name){
        errors.name = 'please filled';
    }
    if(!values.password){
        errors.password = 'please filled';
    }
    return errors;
 },
})
const CheckDetail=(enterName,enterPassword) =>{
    const correctName = 'khushi';
    const correctPassword = '123456';
    return enterName === correctName && enterPassword=== correctPassword

}
   



  return (
    <form onSubmit = {formik.handleSubmit}>
        <label htmlFor='name'>Name

        </label>
        <input
        type='text'
        id='name'
        name='name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}/>
      
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
        
        <br></br>
        <label htmlFor='password'>password</label>

<input
type='text'
id='Password'
name='password'
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.password}/>
{formik.touched.password && formik.errors.password && <div>{formik.errors.name}</div>}
<br></br>
<button type = 'Submit'>Submit</button>
    </form>
  );
};

// App component that renders the LoginForm



export default Login;
