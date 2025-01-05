import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const captchaRef = useRef(null);
  const [disable, setDisable] = useState(true);
  const navigation = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const { signIn } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successfully",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
      navigation(from, { replace: true });
    });
  };

  const handleValidateCaptca = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login </title>
      </Helmet>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col md:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    ref={captchaRef}
                    onBlur={handleValidateCaptca}
                    placeholder="Type the Captcha above"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control mt-6">
                  <button disabled={disable} className="btn btn-primary">
                    Login
                  </button>
                </div>
                <p>
                  <small>
                    New Here? <Link to="/signup">Create an account</Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
