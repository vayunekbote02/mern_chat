import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="flex items-center justify-end gap-6 my-auto">
      {!loading ? (
        <>
          Logout{" "}
          <BiLogOut
            className="w-6 h-6 cursor-pointer text-accent"
            onClick={logout}
          />
        </>
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;
