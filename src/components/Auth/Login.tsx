import { useState } from 'react';
import logo from '../../../public/assets/img/logo.png';
import { Button, Input } from './components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="bg-mobile sm:bg-desktop bg-base flex h-dvh w-screen flex-col bg-cover p-6">
      <img src={logo} alt="logo" className="h-10 w-40 self-start" />
      <div className="container m-auto mt-8 max-w-96 lg:max-w-[28rem]">
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5 pr-10">
            <h1 className="text-2xl font-bold text-white">
              Welcome Back, Trailblazer!
            </h1>
            <p className="text-white text-opacity-80">
              We are excited to have your back. Log in now and access
              your account.
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
                    <div className="flex items-center justify-between text-sm text-white text-opacity-80">
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
                <Button onClick={() => handleSignIn} name="Log In" />
              </div>
            </form>
            <p className="text-center text-sm text-white text-opacity-80">
              Don't have an account yet?{' '}
              <a className="cursor-pointer font-bold text-white">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
