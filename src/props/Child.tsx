interface ChildProps {
  color: "red";
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      Color is {color}.
      <br />
      <br />
      <button onClick={onClick}>Button</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      Color is {color}.
      <br />
      <br />
      <button onClick={onClick}>Button</button>
    </div>
  );
};
