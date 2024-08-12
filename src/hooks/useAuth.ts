import { useMutation, useQueryClient } from "react-query";
import { authService } from "../services/auth";

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.registerUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(["register"]);
    },
  });
};

export const useAuthenticateMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.authenticate, {
    onSuccess: () => {
      queryClient.invalidateQueries(["authenticate"]);
    },
  });
};

export const useInvitationMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.invitation, {
    onSuccess: () => {
      queryClient.invalidateQueries(["invite"]);
    },
  });
};
