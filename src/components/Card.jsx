import "../assets/Styles/card.css";

const Cards = ({ data }) => {
  return (
    <div className="card">
      <div className="card-front">
        <img className="card-image" src={data.images.main} alt="" />
        <p className="card-title">{data.name.first} </p>
      </div>
      <div className="card-back">
        <div className="card-back-text">
          <h2 className="card-title">More information</h2>
          <p>{data.age}</p>
        </div>
      </div>
    </div>
  );
};
export default Cards;
