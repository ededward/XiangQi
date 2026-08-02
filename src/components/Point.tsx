type PointProps = {
  children?: React.ReactNode;
};

function Point({ children }: PointProps) {
  return (
    <div className="point">
      {children}
    </div>
  );
}

export default Point;