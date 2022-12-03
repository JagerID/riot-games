import classNames from "classnames";
import "./styles.sass";

interface Personage {
  name: string;
  birthCountry: string;
  abilities: Array<string>;
  photo: string;
  light?: boolean;
}

type Props = {
  personage: Personage;
  light?: boolean;
};

const PersonageCard = ({ personage }: Props) => {
  const cardStyle = {
    background: `url(${personage.photo}) center / cover no-repeat, ${
      personage.light ? "#F8F8F8" : "#1F2326"
    }`,
  };
  return (
    <article className="personage-card" style={cardStyle}>
      <div className="personage-info">
        <span className="birth-country">{personage.birthCountry}</span>
        <h2
          className={classNames("personage-name", {
            light: personage.light,
          })}
        >
          {personage.name}
        </h2>
      </div>
      <div
        className="abilities"
        style={{ background: `${personage.light && "#F8F8F8"}` }}
      >
        {personage.abilities?.map((abilitie) => (
          <img src={abilitie} alt="" />
        ))}
      </div>
    </article>
  );
};

export default PersonageCard;
