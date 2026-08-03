type PointProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

function Point({ children, onClick }: PointProps) {
  return (
    <div className="point" onClick={onClick}>
      {children}
    </div>
  );
}

export default Point;