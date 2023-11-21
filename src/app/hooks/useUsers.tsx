import { useEffect, useState } from "react";
import useFetchData, { primitiveFetch } from "./useFetchData";

//Dependency Inversion Principle - High-level modules should not depend on low-level modules, both should depend on abstractions.

type UserT = {
  email: string;
  name: { firstname: string };
  address: {
    city: string;
  };
};

//bad
export function useUsersBad() {
  const [users, setUsers] = useState<UserT[]>([]);

  const fetchUsers = async () => {
    const response = await fetch("https://fakestoreapi.com/users");
    const data: UserT[] = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users };
}

//good
export default function useUsers() {
  const { data } = useFetchData<UserT[]>(
    "https://fakestoreapi.com/users",
    primitiveFetch
  );

  return { users: data ?? [] };
}
