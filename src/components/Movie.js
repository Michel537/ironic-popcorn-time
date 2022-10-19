function details({ details, callbackToDelete, genres }) {
  return (
    <div key={details.id} className="details">
      <h1>{details.title}</h1>
      {details.imgURL ? (
        <img src={details.imgURL} alt={details.title} />
      ) : (
        "Image not available"
      )}
      <p>Year: {details.year}</p>
      <p>Genres:</p>
      {genres.map( (genre) => {
        return <p>{genre}</p>
      })}
      <p>Rating: {details.rating}</p>
      {details.rating >= 8 && <p> RECOMMEND </p>}
      <button
        onClick={() => {
            callbackToDelete(details.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default details;
