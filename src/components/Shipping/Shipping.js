import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipping.css';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const {user} = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    return (
        <div>
            <form className='shipping-form' onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={user.displayName} {...register("name")} />
            <input defaultValue={user.email} {...register("email", { required: true })} />
             {errors.email && <span className="error">This field is required</span>}      
             <input placeholder="Address" defaultValue="" {...register("Address")} />
             <input placeholder="City" defaultValue="" {...register("City")} />
             <input placeholder="Phone number" defaultValue="" {...register("Phone number")} />
             <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;