import { ReactSVG } from "react-svg";

type Props = {
  name: "like";
};

const Icon = ({ name }: Props) => {
  return (
    <ReactSVG
      src={`icons/${name}.svg`}
      wrapper="span"
      onError={(error) => console.error({ error })}
    />
  );
};

export default Icon;
