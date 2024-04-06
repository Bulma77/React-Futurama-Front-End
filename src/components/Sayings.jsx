const Sayings = ({ characters, selectedCharacter }) => {
  return (
    <>
      <div>
        {characters.id === selectedCharacter && (
          <div>
            <h2>{characters.name.first}</h2>
            <img src={characters.images.main} alt={characters.images.main} />
            <h2>Sayings</h2>
            {characters.sayings.map((saying, index) => {
              for (let i = 0; i < saying.length; i++) {
                return <p key={index}>{saying}</p>;
              }
            })}
          </div>
        )}
      </div>
    </>
  );
};
export default Sayings;
