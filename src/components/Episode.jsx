const Episode = ({ data }) => {
  return (
    <>
      <div>
        {data.map((episode) => {
          return (
            <div key={episode.title} className="episodes">
              <h2>Episode {episode.number.slice(0, 3)}</h2>
              <h3>Title : {episode.title}</h3>
              <p>Writers : {episode.writers}</p>
              <p>Original Air Date : {episode.originalAirDate}</p>
              <p>Description : {episode.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Episode;
