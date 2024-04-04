import Card from "../components/Card";

const Person = ({ data, setSelectedCharacter }) => {
  return (
    <div>
      <p
        onClick={() => {
          setSelectedCharacter(character.id);
        }}
      >
        {data.name.first}
      </p>
    </div>
  );
};
export default Person;
