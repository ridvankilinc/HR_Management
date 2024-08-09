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

const authenticate = async (data: { email: string; password: string }) => {
  const response = await fetch(
    "http://localhost:8088/api/v1/auth/authenticate",
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

export const authService = {
  registerUser,
  authenticate,
};
