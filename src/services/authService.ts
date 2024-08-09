const registerUser = async (data: { email: string; role: string }) => {
  const response = await fetch("http://localhost:8088/api/v1/auth/invite", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

const completeRegistiration = async (data: {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  password: string;
  activationCode: string;
}) => {
  const response = await fetch(
    "http://localhost:8088/api/v1/auth/complete-register",
    {
      method: "POST",

      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

const authenticate = async (data: { email: string; password: string }) => {
  const response = await fetch("/api/v1/auth/authenticate", {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};

const activateAccount = async () => {
  const response = await fetch("/auth/activate-account", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return await response.json();
};

export const authService = {
  registerUser,
  completeRegistiration,
  authenticate,
  activateAccount,
};
