import { useState } from "react";
import logo from "../../../public/assets/img/logo.png";
import { Button, Input } from "./components";
import {} from "../../hooks";
import { useRegisterMutation } from "../../hooks/useAuth";

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { mutate: registerUser } = useRegisterMutation();

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      email: email,
      password: password,
    };

    registerUser(payload);
  };

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
            <form onSubmit={handleRegister}>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between">
                    <Input
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      placeholder="First Name"
                    />
                    <Input
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <Input
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    type="text"
                    placeholder="Date Of Birth"
                  />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Activation Code"
                  />
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
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
