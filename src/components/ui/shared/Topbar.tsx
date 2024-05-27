import { Link } from "react-router-dom";
import { Button } from "../button";


function Topbar() {
    

  return (
    <div className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img src="/assets/images/logo" alt="logo" width={130} height={325} />
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost" className="shad-button-ghost" onClick={()=> signOut}>
            <img src="/assets/icons/logout.svg" alt="logout" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
