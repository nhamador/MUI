import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  maxWidth: '400px',
  maxHeight: '80vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MediaCard({name, id, medium,size}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
<Card
  sx={{
    maxHeight: 600,
    width: '23vw',
    maxWidth: 345,
    margin: "1vh",
    backgroundColor: 'gray',
    '&:hover': {
      backgroundColor: 'primary.main',
      opacity: [0.95, 0.9],
      boxShadow: 3,
    },
  }}
>
    <CardActionArea onClick={handleOpen} >
    <CardMedia
      component="img"
      height= "400"
      image= {`./art/${id}.jpg`}
      alt={ `${name}`}
    />
    </CardActionArea>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {name}
        </Typography>
        <CardMedia
          component="img"
          //in final version of site I want the img here to be higher quality and larger
          image= {`./art/${id}.jpg`}
          alt= { `${name}`}
        />
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {medium} <br />
        {size}
        </Typography>
      </Box>
    </Modal>

    </Card>
  );
}
