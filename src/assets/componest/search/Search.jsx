const Search = ({ setValue }) => {
  let timeOut;

  const submit = (e) => {
    if (timeOut !== undefined) clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      setValue(e.target.value);
    }, 1000);
  };

  return (
    <div>
      <input placeholder="busca...." type="search" onKeyUp={submit} />
    </div>
  );
};

export default Search;
