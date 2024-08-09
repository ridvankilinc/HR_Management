import { useState } from "react";
import { Button, Input } from "../components/Auth/components";
import { useRegisterMutation } from "../hooks/useAuth";

const InvitationPage = () => {
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("user");

  const invitationUser = useRegisterMutation();

  const handleClick = async (e: React.MouseEvent) => {
    console.log("handleSignUp function called");
    e.preventDefault();

    try {
      invitationUser({ email, role });
      console.log("log");
    } catch (error) {
      console.log("Error details: ", error);
    }
  };

  return (
    <div className="bg-red-500 h-screen w-screen">
      <Input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        name="users"
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <Button name="submit" onClick={handleClick} />
    </div>
  );
};

export default InvitationPage;
