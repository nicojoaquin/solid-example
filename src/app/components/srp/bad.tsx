"use client";

//Single Responsibility Principle - Each class should be responsible for a single part or functionality of the system.

import React, { useEffect, useState } from "react";

type User = {
  email: string;
  name: { firstname: string };
  address: {
    city: string;
  };
};

function BadSrp() {
  const [users, setUsers] = useState<User[]>([]);
  const [filtered, setFiltered] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const data: User[] = await response.json();

    setUsers(data);
  };

  const filterUsers = () => {
    setFiltered(users.filter((user) => user.address.city === "kilcoole"));
  };

  const filterAll = () => {
    setFiltered([]);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-2">
        <button onClick={filterAll}>Filter all</button>
        <button onClick={filterUsers}>Filter kilcoole users</button>
      </div>
      <div className="flex justify-center gap-3">
        {!!filtered.length
          ? filtered.map((user, index) => (
              <div className="flex flex-col" key={index}>
                <p>{user.email}</p>
                <p>{user.name.firstname}</p>
              </div>
            ))
          : users.map((user, index) => (
              <div className="flex flex-col" key={index}>
                <p>{user.email}</p>
                <p>{user.name.firstname}</p>
              </div>
            ))}
      </div>
    </div>
  );
}

export default BadSrp;
