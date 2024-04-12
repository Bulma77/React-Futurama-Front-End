import "../assets/Styles/card.css";

const Cards = ({ data, setSelectedCharacter }) => {
  return (
    <div
      className="cards"
      onClick={() => {
        console.log(data.id);
        setSelectedCharacter(data.id);
      }}
    >
      <div className="cards-front">
        <img className="cards-image" src={data.images.main} alt="" />
        <p className="cards-title">
          {data.name.first + " " + data.name.middle + " " + data.name.last}
        </p>
      </div>
      <div className="cards-back">
        <img className="cards-image" src={data.images.main} alt="" />
        <div className="cards-back-text">
          <p className="cards-title">
            {data.name.first + " " + data.name.middle + " " + data.name.last}
          </p>
          <div className="cards-back-details">
            {data.age ? <p>Age : {data.age} </p> : ""}
            {data.gender ? <p>Gender : {data.gender}</p> : ""}
            {data.species ? <p>Species : {data.species}</p> : ""}
            {data.occupation ? <p>{data.occupation}</p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
