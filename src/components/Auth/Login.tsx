import { useState } from "react";
import logo from "../../../public/assets/img/logo.png";
import { Button, Input } from "./components";
import { useAuthenticateMutation } from "../../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: authenticate } = useAuthenticateMutation();

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    authenticate(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("token", data.token);
          console.log("Login success");
        },
        onError: (error) => {
          console.error("Login failed: ", error);
        },
      }
    );
  };

  return (
    <div className="h-dvh w-screen background-login bg-background flex flex-col p-6">
      <img src={logo} alt="logo" className="w-40 h-10 self-start" />
      <div className="container max-w-96 mt-8 lg:max-w-[28rem] m-auto">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5 pr-10">
            <h1 className="text-white font-bold text-2xl">
              Welcome Back, Trailblazer!
            </h1>
            <p className="text-white text-opacity-80">
              We are excited to have your back. Log in now and access your
              account.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <form action="">
              <div className="flex flex-col gap-14">
                <div className="flex flex-col gap-6">
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                  />
                  <div className="flex flex-col gap-3">
                    <Input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                    />
                    <div className="flex justify-between items-center text-white text-sm text-opacity-80">
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <p className="cursor-pointer hover:text-white">
                          Remember me
                        </p>
                      </div>
                      <div>
                        <p className="cursor-pointer hover:text-white">
                          Forgot your password?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button onClick={handleSignIn} name="Log In" />
              </div>
            </form>
            <p className="text-white text-sm text-center text-opacity-80">
              Don't have an account yet?{" "}
              <a className="text-white font-bold cursor-pointer">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
