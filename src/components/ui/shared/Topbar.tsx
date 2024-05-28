import { Link, useNavigate } from "react-router-dom";
import { Button } from "../button";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";

function Topbar() {
  const { mutate: signOut, isSuccess } = useSignOutAccount();
  const navigate = useNavigate();
  const { user } = useUserContext();
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);
  return (
    <div className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/assets/images/logo" alt="logo" width={130} height={325} />
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button-ghost"
            onClick={() => signOut}
          >
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
          <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img
              src={user.imageUrl ?? "/assets/images/profile-placeholder.svg"}
              alt="profile"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
