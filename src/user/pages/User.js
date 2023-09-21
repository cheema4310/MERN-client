import React from "react";

import UsersList from "../components/UsersList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "khabib",
      image:
        "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default User;
