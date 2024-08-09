import { useMutation, useQuery, useQueryClient } from "react-query";
import { authService } from "../services/authService";

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.registerUser, {
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      queryClient.invalidateQueries(["register"]);
    },
    onError: (error) => {
      console.error("Registration failed:", error);
    },
  });
};

export const useCompleteRegistrationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.completeRegistiration, {
    onSuccess: () => {
      queryClient.invalidateQueries(["register"]);
    },
  });
};

export const useAuthenticateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.authenticate, {
    onSuccess: () => {
      queryClient.invalidateQueries(["autenticate"]);
    },
  });
};

export const useActivateAccountQuery = () => {
  return useQuery(["activate-account"], authService.activateAccount);
};
