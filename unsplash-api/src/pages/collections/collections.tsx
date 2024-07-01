import React, { useEffect, useState } from "react";
import "./collection.css";
import DrawerAppBar from "../../navbar_materialui/material";
import {
  Collections as fetchCollections,
  getUserProfile,
} from "../../controller.tsx/imagesController"; 
import { Collection } from "../../store/collection-Interface";
import strings from "../../localization/en";

interface UserProfile {
  username: string;
  first_name: string;
  last_name: string;
}

function Collections() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [collections, setCollections] = useState<Collection[]>([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
      } catch (error) {
        setError(strings.error);
      }
    };

    fetchProfile();
  }, []); 

  useEffect(() => {
    if (!profile) return; 

    const loadCollections = async () => {
      try {
        const fetchedCollections = await fetchCollections(profile.username);
        setCollections(fetchedCollections);
      } catch (error) {
        console.error("Error fetching collections:", error);
        setError(strings.error);
      }
    };

    loadCollections();
  }, [profile]); 

  if (error) {
    return (
      <div>
        {strings.error}: {error}
      </div>
    );
  }

  if (!profile || collections.length === 0) {
    return <div>{strings.loading}</div>; 
  }

return (
  <div>
    <DrawerAppBar />
    <p className="text">
      Hi, this is a testing file to check if this is displayed correctly.
    </p>
    <div className="collection-container">
      {collections.map((collection) =>
        collection.preview_photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.urls.regular}
            className="App-logo"
            alt={collection.title}
          />
        ))
      )}
    </div>
  </div>
);

}
export default Collections;
