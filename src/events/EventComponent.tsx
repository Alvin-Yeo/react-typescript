const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.clientX);
  };

  return (
    <>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </>
  );
};

export default EventComponent;
