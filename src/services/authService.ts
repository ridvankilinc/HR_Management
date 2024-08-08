import { Employee } from "../types/types";

export interface SignUpCredentials {
  email: string;
  password: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export interface AuthResponse {
  employee: Employee;
  token: string;
}

export const authService = {
  signUp: async (credentials: SignUpCredentials): Promise<Employee> => {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Failed to sign up request");
    }

    const employee = await response.json();
    return employee;
  },

  signIn: async (credentials: SignInCredentials): Promise<AuthResponse> => {
    const response = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error("Failed to sign in request");
    }

    const data = await response.json();
    return data;
  },
};
