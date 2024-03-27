import { BiLogOut } from "react-icons/bi";

const LogoutButton = () => {
  return (
    <div className="my-auto flex items-center gap-6 justify-end">
      Logout <BiLogOut className="w-6 h-6 text-accent cursor-pointer" />
    </div>
  );
};
export default LogoutButton;
