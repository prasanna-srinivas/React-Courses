import React from "react";
import {useForm} from 'react-hook-form';

function ReactHookForm(){
    const{register, handleSubmit, formState : {errors}} = useForm();

    const  onSubmit = (data) =>{
        console.log('form submitted with data',data);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>User Name:</label>
                <input 
                {...register("username",{
                    required:"user name is required",
                    minLength:{value:5, message : "User name must be 5 charater"}
                })}
                />
                {errors.username && <p style={{color: 'red'}}>{errors.username.message} </p>}
            </div>

            <div>
                <label>Email:</label>
                <input
                {...register("email",{
                    required:"Email is required",
                    pattern:{value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Invalid email format"}
                })}
                
                />
                {errors.email && <p style={{color:"red"}}>{errors.email.message} </p>}
            </div>
            <button>submit</button>
        </form>    
    )

}
export default ReactHookForm;