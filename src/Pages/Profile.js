import React from "react";
import { useNavigate ,useParams} from "react-router-dom";

function Profile() {
  let navigate = useNavigate();
  let {username}=useParams();
  return (
    <div>
      thsi is profile page for {username}!
      <button onClick={() => navigate("/about")}>change to about page</button>
    </div>
  );
}

export default Profile;
