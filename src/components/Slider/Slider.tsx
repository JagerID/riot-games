import PersonageCard from "../Card/Personage/PersonageCard";
import "./styles.sass";

interface Personage {
  name: string;
  birthCountry: string;
  abilities: Array<string>;
  photo: string;
}

interface Props {
  personages: Array<Personage>;
}

const Slider = ({ personages }: Props) => {
  return (
    <section className="slider">
      {personages?.map((personage) => (
        <PersonageCard personage={personage} />
      ))}
    </section>
  );
};

export default Slider;
