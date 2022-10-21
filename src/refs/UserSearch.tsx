import { useEffect, useRef, useState } from "react";

const users = [
  { name: "Sarah", age: 18 },
  { name: "Alex", age: 25 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    setUser(foundUser);
  };

  return (
    <>
      <p>User Search</p>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <p>
        {user?.name}, {user?.age}
      </p>
    </>
  );
};

export default UserSearch;
