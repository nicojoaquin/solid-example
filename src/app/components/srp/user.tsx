import React from "react";

type User = {
  email: string;
  name: { firstname: string };
  address: {
    city: string;
  };
};

function User({ email, name: { firstname } }: User) {
  return (
    <div>
      <p>{email}</p>
      <p>{firstname}</p>
    </div>
  );
}

export default User;
