const Card = ({ targetSearch }) => {
  return (
    <div>
      {targetSearch.map((gif, index) => (
        <img
          key={index}
          src={gif.images.original.url}
          alt={gif.images.original.frames}
        />
      ))}
    </div>
  );
};

export default Card;
