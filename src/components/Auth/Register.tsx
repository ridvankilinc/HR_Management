import { useState } from "react";
import logo from "../../../public/assets/img/logo.png";
import { Button, Input } from "./components";

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div className="h-dvh w-screen bg-background background-login flex flex-col p-6">
      <img src={logo} alt="logo" className="w-40 h-10 self-start" />
      <div className="flex flex-col 8 max-w-96 mt-8 lg:max-w-[28rem] m-auto ">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5 pr-10">
            <h1 className="text-white font-bold text-2xl">Register</h1>
            <p className="text-white text-opacity-80">
              Ready to become part of the exclusive club? Fill in the details
              below, and let the journey begin!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <form action="" className="">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Full Name"
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Adress"
                  />
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                  />
                  <Input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <Button name="Register" />
              </div>
            </form>
            <p className="text-white text-sm text-center text-opacity-80">
              Already have an account?{" "}
              <a className="text-white font-bold cursor-pointer ">Register</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
