import "./SearchResultCard.css";
import { Card, CardContent, Typography } from "@mui/material";

const SearchResultCard = ({ id, result }) => {
  return (
    // <>
    //   <br></br>
    //   <div>
    //     <div className="main_info">
    //       <img src={`http://localhost:3000/images/${result.logo_url}`}></img>
    //       <div>{result.name}</div>
    //       <div>{result.description}</div>
    //     </div>
    //     <div className="Contact">
    //       <div>{result.phone_number}</div>
    //       <div>{result.email}</div>
    //     </div>
    //     <div className="location">
    //       <div>{result.city}</div>
    //       <div>{result.province}</div>
    //       <div>{result.address}</div>
    //       <div>{result.postal_code}</div>
    //     </div>
    //   </div>
    //   <br></br>
    // </>
    <>
      <Card>
        <CardContent>
          <Typography variant="h6">{result.name}</Typography>
          <Typography variant="body2">{result.description}</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SearchResultCard;
