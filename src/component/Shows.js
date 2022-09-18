import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import "./component.css";
const Shows = (props) => {
  let baseUrl = `https://api.tvmaze.com/search/shows?q=${props.inpVal}`;
  const [state, setstate] = useState([]);

  // console.log(`https://api.tvmaze.com/search/shows?q=${props.inpVal}`)  https://api.tvmaze.com/search/people?q=akon
  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      setstate(res.data);
    });
  }, [props.inpVal]);
  return (
    <div className="Allitem">
      {state.map((item, index) => {
        return (
          <div className="allItems" key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image={
                    item.show.image
                      ? item.show.image.original
                      : "https://static.tvmaze.com/uploads/images/original_untouched/297/743857.jpg"
                  }
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.show.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Shows;
