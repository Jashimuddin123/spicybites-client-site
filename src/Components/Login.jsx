import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
// import { ImGithub } from "react-icons/im";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const Login = () => {
  const { signInUser,googleLogin } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data); // Logs email and password to the console
    const { email, password } = data;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "You have successfully logged in.",
          showConfirmButton: false,
          timer: 1500,
        });
        // Optionally, you can redirect the user after successful login
        // history.push('/dashboard'); // Assuming you have history available
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
          showConfirmButton: true,
        });
      });


   
  };

  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  // social media authentication function here
  
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    
    <div>
      
<Helmet>
  <title>
    login
  </title>
</Helmet>
      <div className="lg:w-2/4 md:w-2/4 mx-auto shadow-2xl p-10 mt-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="text-xl font-semibold" htmlFor="email">
            Email:
          </label>
          <br />
          <input
            className="input input-bordered w-full mt-2"
            type="email"
            id="email"
            name="email"
            placeholder="Write Your Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="text-lg text-red-800">This field is required</span>}
          <br />
          <br />

          <div className="relative">
            <label className="text-xl font-semibold" htmlFor="password">
              Password:
            </label>
            <br />
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Write Your Password"
              className="input input-bordered w-full mt-2"
              {...register("password", { required: true })}
            />
            <span className="absolute right-3 top-12 cursor-pointer" onClick={togglePasswordVisibility}>
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && <span className="text-lg text-red-800">This field is required</span>}
          </div>
          <br />

          <input
            className="bg-green-600 mb-4 text-white rounded py-2 w-full mt-4"
            type="submit"
            value="Login"
          />
   
        </form>
        <button
  className="px-8 w-96 mx-auto text-center py-2 rounded border border-gray-400 flex justify-center items-center gap-4"
  onClick={handleGoogleLogin}
>
  <FcGoogle className="text-center" />
  <p className="text-center">Sign in With Google</p>
</button>

        <p className="my-4 mx-auto w-96 text-lg">
          If you do not register? please{" "}
          <Link className="text-blue-800 underline font-semibold" to="/register">
            Register
          </Link>
        </p>
       
      </div>
    </div>
  );
};

export default Login;
