import "../App.css";
import DrawerAppBar from "../material/material";
import React, { useEffect, useState } from "react";
import { getUserProfile } from "../controller.tsx/imagesController";


interface UserProfile {
  username: string;
  first_name: string;
  last_name: string;
}

const Homepage: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        console.log(data);
        setProfile(data); 
      } catch (error) {
        setError("error"); 
      }
    };

    fetchProfile();
  }, [setProfile,setError]);
  



  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DrawerAppBar />
      <header>
        <div>
          <h1 className="text">HOMEPAGE</h1>
        </div>
      </header>
      <p className="text">
        This is an Unsplash-API demo to fetch random images and normal images...
      </p>
      <h2 className="text">User Profile</h2>
      <i className="text">Unsplash Username: {profile.username}</i>
      <p className="text">
        Name: {profile.first_name} {profile.last_name}
      </p>
    </div>
  );
};

export default Homepage;
