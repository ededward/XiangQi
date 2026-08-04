import "./CornerMark.css";

type CornerMarkProps = {
  side?: "full" | "left" | "right";
};

function CornerMark({ side = "full" }: CornerMarkProps) {
  return (
    <div className={`corner-mark ${side}`}>
      <div className="corner top-left" />
      <div className="corner top-right" />
      <div className="corner bottom-left" />
      <div className="corner bottom-right" />
    </div>
  );
}

export default CornerMark;