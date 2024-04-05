const Episode = ({ data }) => {
  return (
    <>
      <div>
        {data.map((episode) => {
          return (
            <div key={episode.title} className="episodes">
              <p>Episode {episode.number.slice(0, 3)}</p>
              <h2>Title : {episode.title}</h2>
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
