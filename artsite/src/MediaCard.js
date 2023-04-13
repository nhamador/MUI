import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { height, textAlign } from '@mui/system';

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
  p: '1vw',
};

export default function MediaCard({name, id, medium,size,primarycolor}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
<Card
  sx={{
    height: '23vw',
    width: '23vw',
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
      height= "full"
      width = "full"
      image= {`./art/compressed/${id}.jpg`}
      alt={ `${name}`}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `./art/compressed/${id}.JPG`;
      }}
    />
    </CardActionArea>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CardMedia
          component="img"
          //in final version of site I want the img here to be higher quality and larger
          image= {`./art/compressed/${id}.jpg`}
          alt= { `${name}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `./art/compressed/${id}.JPG`;
          }}
        />
        <Typography id="modal-modal-description" sx=
        {{
            mt: 2,
            align: 'left',
            fontSize: 
            {
              xs: '.8rem',
              sm: '1rem',
              md: '1rem',
              lg: '1rem',
              xl: '1rem',
          },
          }}>
            {name} <br />
            {medium} <br />
            {size}
        </Typography>
        
      </Box>
    </Modal>

    </Card>
  );
}
