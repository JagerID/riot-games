import classNames from "classnames";
import "./styles.sass";

type Props = {
  fillHeight?: boolean;
  background?: string;
  backgroundColor?: string;
  children?: JSX.Element | JSX.Element[];
};

const Block = ({
  fillHeight,
  background,
  backgroundColor,
  children,
}: Props) => {
  const blockStyle = {
    background: `url(${background}) center / cover, ${backgroundColor}`,
    width: "100%",
  };
  return (
    <div
      className={classNames("block", {
        "fill-height": fillHeight,
      })}
      style={blockStyle}
    >
      {children}
    </div>
  );
};

export default Block;
