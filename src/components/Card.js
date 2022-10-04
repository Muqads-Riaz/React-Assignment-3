
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';


function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="200"
        image={props.img}
        alt="Image"
      />
      
        <p className='fs-6 mt-2 px-2'>{props.text}</p>
        <h5 className=' px-2'><strong>{props.Price}</strong></h5>
        <p className='text-secondary px-2' style={{ fontSize:'12px' }}>{props.address}</p>
     
    </Card>
  );
}
export default MediaCard;
