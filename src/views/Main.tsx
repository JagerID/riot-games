import Slider from "../components/Slider/Slider";
import data from "../data/personages.json";
import "./styles.sass";

const Main = () => {
  return (
    <main>
      <Slider personages={data.personages} />
    </main>
  );
};

export default Main;
