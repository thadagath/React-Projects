import React from "react";

const ProfileCard = ({ data }) => {
  return (
    <div className="profile-card">
      <img className="profile-pic" src={data.profilePic} alt={data.name} />
      <div className="profile-name">{data.name}</div>
      <div className="profile-email">{data.email}</div>
      <div className="profile-phone">{data.phone}</div>
    </div>
  );
};

export default ProfileCard;
