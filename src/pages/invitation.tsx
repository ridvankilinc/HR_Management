import { useState } from "react";
import { Button, Input } from "../components/Auth/components";
import { useInvitationMutation } from "../hooks/useAuth";

const InvitationPage = () => {
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("user");

  const { mutate: invitation } = useInvitationMutation();

  const handleInvitation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      email: email,
      role: role,
    };

    invitation(payload);
  };

  return (
    <div className="bg-red-500 h-screen w-screen">
      <form onSubmit={handleInvitation}>
        <Input
          placeholder="Email"
          type="text"
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
        <Button name="submit" />
      </form>
    </div>
  );
};

export default InvitationPage;
