type Props = {
  width: string;
  height: string;
  left?: string;
  top?: string;
  icon?: string;
};

const Element = ({ width, height, left, top, icon }: Props) => {
  return (
    <div
      style={{
        width,
        height,
        left,
        top,
        position: "absolute",
        background: "#1F2326",
        filter: "opacity(30%)",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {icon && <img src={icon} alt="" />}
    </div>
  );
};

export default Element;
