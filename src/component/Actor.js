import React,{useEffect,useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from "axios";
import './component.css'
const Actor = (props) => {
    let baseUrl = `https://api.tvmaze.com/search/people?q=${props.inpVal}` 
    const [state, setstate] = useState([]);

    useEffect(() => {
        axios.get(baseUrl).then((res)=>{
            setstate(res.data)
        })
    }, [props.inpVal])
    return (
      <div className="Allitem">
        {

       state.map((item , index)=>{
        console.log(item)
       return <div className="allItems" key={index}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="340"
          image={item.person.image ? item.person.image.original : "https://static.tvmaze.com/uploads/images/original_untouched/297/743857.jpg"}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.person.name}
          </Typography>
        </CardContent> 
      </CardActionArea>
    </Card>
        </div>
       })
        }
    </div>
  )
}

export default Actor;