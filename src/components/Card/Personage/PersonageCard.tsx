import "./styles.sass";

interface Personage {
  name: string;
  birthCountry: string;
  abilities: Array<string>;
  photo: string;
}

type Props = {
  personage: Personage;
  light?: boolean;
};

const PersonageCard = ({ personage, light }: Props) => {
  const style = {
    background: `url(${personage.photo}) center / cover no-repeat, #1F2326`,
  };
  return (
    <article className="personage-card" style={style}>
      <div className="personage-info">
        <span className="birth-country">{personage.birthCountry}</span>
        <h2 className="personage-name">{personage.name}</h2>
      </div>
      <div className="abilities">
        {personage.abilities?.map((abilitie) => (
          <img
            src={abilitie}
            alt=""
            // style={
            //   light
            //     ? {
            //         filter: "invert(100%)",
            //       }
            //     : {}
            // }
          />
        ))}
      </div>
    </article>
  );
};

export default PersonageCard;
