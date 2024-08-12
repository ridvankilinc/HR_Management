import { request } from "./request";

const invitation = async (data: { email: string; role: string }) => {
  const result = await request(
    `${import.meta.env.VITE_API_BASE_URL}/auth/invite`,
    "POST",
    data
  );
  return result;
};

const authenticate = async (data: { email: string; password: string }) => {
  const result = await request(
    `${import.meta.env.VITE_API_BASE_URL}/auth/authenticate`,
    "POST",
    data
  );
  return result;
};

const registerUser = async (data: {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  password: string;
}) => {
  const result = await request(
    `${import.meta.env.VITE_API_BASE_URL}/auth/complete-register`,
    "POST",
    data
  );
  return result;
};

export const authService = {
  invitation,
  authenticate,
  registerUser,
};
