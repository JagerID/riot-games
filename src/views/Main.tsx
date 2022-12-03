import Block from "../components/Block/Block";
import Element from "../components/Element/Element";
import Slider from "../components/Slider/Slider";
import data from "../data/personages.json";
import "./styles.sass";

const Main = () => {
  return (
    <main>
      <Block background="/images/background.png" backgroundColor="#FF4656">
        <Slider personages={data.personages} />
        <Element width="40px" height="8px" left="2%" top="19%" />
        <Element width="8px" height="8px" left="2%" top="80%" />
        <Element width="8px" height="8px" left="10%" top="3%" />
        <Element width="8px" height="8px" left="11.7%" top="3%" />
        <Element width="40px" height="40px" left="17%" top="4%" />
        <Element width="232px" height="8px" left="70%" top="3%" />
        <Element width="24px" height="8px" left="46.8%" top="20%" />
        <Element width="8px" height="8px" left="48%" top="30%" />
        <Element width="24px" height="8px" left="46.8%" top="60%" />
        <Element width="8px" height="8px" left="48%" top="70%" />
        <Element width="40px" height="40px" left="71%" top="35%" />
        <Element width="24px" height="8px" left="76.2%" top="60%" />
        <Element
          width="80px"
          height="80px"
          left="2%"
          top="80%"
          icon="/images/valorant-logo.svg"
        />
        <Element
          width="80px"
          height="8px"
          left="2%"
          top="calc(80% + 80px + 10px)"
        />
        <Element width="232px" height="8px" left="2%" top="96.5%" />
      </Block>
    </main>
  );
};

export default Main;
