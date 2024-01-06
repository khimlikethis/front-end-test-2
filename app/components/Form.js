"use client";
import { useForm } from "react-hook-form";

function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data)

    return (
        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">Register Form</h2>
            </div>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Firstname:</span>
                </div>
                <input type="text" placeholder="Firstname" className="input input-bordered w-full" {...register('firstname', { required: 'Firstname is required' })} />
                <div className="label">
                    <span className="label-text-alt text-error">{errors.firstname && <p>{errors.firstname.message}</p>}</span>
                </div>
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Lastname:</span>
                </div>
                <input type="text" placeholder="lastname" className="input input-bordered w-full" {...register('lastname', { required: 'Lastname is required' })} />
                <div className="label">
                    <span className="label-text-alt text-error">{errors.lastname && <p>{errors.lastname.message}</p>}</span>
                </div>
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Email:</span>
                </div>
                <input type="email" placeholder="email" className="input input-bordered w-full" {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })} />
                <div className="label">
                    <span className="label-text-alt text-error">{errors.email && <p>{errors.email.message}</p>}</span>
                </div>
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Username:</span>
                </div>
                <input type="text" placeholder="username" className="input input-bordered w-full" {...register('username', { required: 'Username is required' })} />
                <div className="label">
                    <span className="label-text-alt text-error">{errors.username && <p>{errors.username.message}</p>}</span>
                </div>
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text">Password:</span>
                </div>
                <input type="password" placeholder="password" className="input input-bordered w-full" {...register('password', { required: 'Password is required' })} />
                <div className="label">
                    <span className="label-text-alt text-error">{errors.password && <p>{errors.password.message}</p>}</span>
                </div>
            </label>

            <div className="form-control">
                <div className="label">
                    <span className="label-text">หัวข้อความสนใจ :</span>
                </div>
                <label className="label cursor-pointer">
                    <span className="label-text">React</span> 
                    <input type="checkbox" {...register('interests')} value="React" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Next.js</span> 
                    <input type="checkbox" {...register('interests')} value="Next.js" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Laravel</span> 
                    <input type="checkbox" {...register('interests')} value="Laravel" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">GraphQL</span> 
                    <input type="checkbox" {...register('interests')} value="GraphQL" />
                </label>
                <label className="label cursor-pointer">
                    <span className="label-text">Nest.js</span> 
                    <input type="checkbox" {...register('interests')} value="Nest.js" />
                </label>
            </div>

            <button className="btn btn-primary w-full" type="submit">Submit</button>
        </form>
       </div>
    );
}

export default Form;