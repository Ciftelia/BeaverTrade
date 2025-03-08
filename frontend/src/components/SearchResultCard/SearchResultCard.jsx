// To build this component, we need to know the structure of the data that we will be receiving from the API.
// For now, go by the Figma sample for Threadco.
// Try to build a copy of it, it doesn't need to be perfect, just has to contain most or all of the data.
import "./SearchResultCard.css";

const SearchResultCard = ({ id, result }) => {
  return (
    <>
      <br></br>
      <div>
        <img src={`http://localhost:3000/images/${result.logo_url}`}></img>
        <div>{result.name}</div>
        <div>{result.description}</div>
        <div>{result.phone_number}</div>
        <div>{result.email}</div>
        <div>
          <div>{result.city}</div>
          <div>{result.province}</div>
          <div>{result.address}</div>
          <div>{result.postal_code}</div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default SearchResultCard;
