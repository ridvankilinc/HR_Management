import { UseMutateFunction, useMutation, useQueryClient } from "react-query";
import { Employee } from "../types/types";
import {
  AuthResponse,
  authService,
  SignInCredentials,
  SignUpCredentials,
} from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type IUseSignUp = UseMutateFunction<
  Employee,
  Error,
  SignUpCredentials,
  unknown
>;

type IUseSignIn = UseMutateFunction<
  AuthResponse,
  Error,
  SignInCredentials,
  unknown
>;

export function useSignUp(): [IUseSignUp, string | null] {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const { mutate: signUpMutation } = useMutation<
    Employee,
    Error,
    SignUpCredentials,
    unknown
  >((credentials) => authService.signUp(credentials), {
    onSuccess: (data) => {
      queryClient.setQueryData("user", data);
      navigate("/");
      setError(null);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  return [signUpMutation, error];
}

export function SignIn(): [IUseSignIn, string | null] {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const { mutate: signInMutation } = useMutation<
    AuthResponse,
    Error,
    SignInCredentials,
    unknown
  >((credentials) => authService.signIn(credentials), {
    onSuccess: (data) => {
      queryClient.setQueryData("user", data.employee);
      localStorage.setItem("token", data.token);
      navigate("/");
      setError(null);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  return [signInMutation, error];
}
