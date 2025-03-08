import "./SearchResultCard.css";
import { Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { CardMedia } from "@mui/material";

const SearchResultCard = ({ id, result }) => {
  return (
    <CardActionArea>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardMedia
          component="img"
          style={{ width: "150px", height: "150px" }}
          image={`http://localhost:3000/images/${result.logo_url}`}
          alt={result.name}
        />
        <div style={{ flex: "1", textAlign: "center" }}>
          <CardContent>
            <Typography variant="h6">{result.name}</Typography>
            <Typography variant="body2">{result.description}</Typography>
          </CardContent>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2">{result.phone_number}</Typography>
            <Typography variant="body2">{result.email}</Typography>
          </CardContent>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2">{result.city}</Typography>
            <Typography variant="body2">{result.province}</Typography>
            <Typography variant="body2">{result.address}</Typography>
            <Typography variant="body2">{result.postal_code}</Typography>
          </CardContent>
        </div>
      </Card>
    </CardActionArea>
  );
};

export default SearchResultCard;
