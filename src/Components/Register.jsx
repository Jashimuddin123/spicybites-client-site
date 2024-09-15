import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const { createUser,user } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('onsubmit here',data);
    const { email, password } = data;

    createUser(email, password)
    .then(result => {
      console.log(result.user);
      const user = {email}
      fetch('http://localhost:5000/user',{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(res=> res.json())
      .then(data=>{
        console.log('data here is',data);
        if(data.insertedId){
  Swal.fire({
        icon: 'success',
        title: 'Registration Successful!',
        text: 'User created successfully',
        showConfirmButton: false,
        timer: 1500
      });
        }
        
      })
    
    })
    .catch(error => {
      setRegisterError(error.message);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.message,
        showConfirmButton: true,
      });
    });
  
  };

    return (
        <div>
               {/* <Helmet>
            <title>Register here</title>
          </Helmet> */}
          <div className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10 mt-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="text-xl font-semibold" htmlFor="email">
                Name:
              </label>
              <br />
              <input
                className="input input-bordered w-full mt-2"
                type="text"
                id="name"
                name="name"
                {...register("name", { required: true })}
                required
              />
                  {errors.name && <span>This field is required</span>}
              <br />
              <br />
              <label className="text-xl font-semibold" htmlFor="email">
                PhotoURL:
              </label>
              <br />
              <input
                className="input input-bordered w-full mt-2"
                type="photo"
                id="photo"
                name="photo"
                {...register("photo", { required: true })}
                required
              />
               {errors.photo && <span>This field is required</span>}
              <br />
              <br />
              <label className="text-xl font-semibold" htmlFor="email">
                Email:
              </label>
              <br />
              <input
                className="input input-bordered w-full mt-2"
                type="email"
                id="email"
                name="email"
                {...register("email", { required: true })}
                required
              />
                {errors.email && <span>This field is required</span>}
              <br />
              <br />
    
              <label className="text-xl font-semibold" htmlFor="password">
                Password:
              </label>
              <br />
              <input
                className="input input-bordered w-full mt-2"
                type="password"
                id="password"
                name="password"
                {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long"
                    },
                    validate: {
                      hasUpperCase: value =>
                        /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                      hasLowerCase: value =>
                        /[a-z]/.test(value) || "Password must contain at least one lowercase letter"
                    }
                  })}
              />
                {errors.password&& <span>This field is required</span>}
              <br />
              <br />
    
              <button className="bg-amber-900 text-white rounded py-2 w-full mt-4">Register</button>
              {registerError && <p className="text-red-500 mt-2">{registerError}</p>}
            </form>
    
            <p className="my-4 text-lg">
              Already Have an Account?Please got to{" "}
              <Link className="text-blue-800 underline font-semibold" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      );
};

export default Register;