import "./Point.css";

type PointProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  isLegalMove?: boolean;
};

function Point({ children, onClick, isLegalMove }: PointProps) {
  return (
    <div className="point" onClick={onClick}>
      {isLegalMove && <div className="move-indicator" />}
      {children}
    </div>
  );
}

export default Point;