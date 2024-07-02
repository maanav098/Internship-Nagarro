// this is the default homepage of the website the user will land on this page once he logs in to the website

import "../App.css";
import DrawerAppBar from "../navbar_materialui/material";
import React, { useEffect, useState } from "react";
import { getUserProfile } from "../controller.tsx/imagesController";
import strings from "../localization/en";




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
        setError(strings.error); 
      }
    };

    fetchProfile();
  }, [setProfile,setError]);



  



  if (error) {
    return <div>{strings.error}{error}</div>;
  }

  if (!profile) {
    return <div>{strings.loading}</div>;
  }

  return (
    
    <div>
      <DrawerAppBar />
      <header>
        <div>
          <h1 className="text">{strings.homepage_h1}</h1>
        </div>
      </header>
      <p className="text">{strings.homepage_p1}</p>
      <h2 className="text">{strings.user}</h2>
      <i className="text">
        {strings.unsplash_username}
        {profile.username}
      </i>
      <p className="text">
        Name: {profile.first_name} {profile.last_name}
      </p>
      </div>

    
  );
};

export default Homepage;


