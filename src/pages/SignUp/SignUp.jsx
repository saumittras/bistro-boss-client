import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const naviget = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUer = result.user;
      console.log(loggedUer);
      updateUserProfile(data.name, data.photo)
        .then(() => {
          console.log("User Profile Information is updated");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          naviget("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign Up now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    name="name"
                    {...register("name", { required: true })}
                    placeholder="Full Name"
                    className="input input-bordered"
                    required
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Full name is required
                    </p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="name"
                    name="photo"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    className="input input-bordered"
                    required
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      Photo URL is required
                    </p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", { required: true })}
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-600" role="alert">
                      email is required
                    </p>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$&*])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  {errors.password?.type === "required" && (
                    <p role="alert" className="text-red-600">
                      Enter your valid password is required
                    </p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p role="alert" className="text-red-600">
                      Password Must be at least 6 characters
                    </p>
                  )}

                  {errors.password?.type === "maxLength" && (
                    <p role="alert" className="text-red-600">
                      Passward must be les then 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p role="alert" className="text-red-600">
                      Password must contain at least one uppercase, one lower
                      case, one number and one special character.
                    </p>
                  )}
                  <label className="label">
                    <p>
                      Already have an account?<Link>Login</Link>
                    </p>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
