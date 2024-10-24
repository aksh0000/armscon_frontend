import React from 'react'
import { Button } from '@mui/material'
import './Testimonial_card.css'
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });




  function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  }  
export default function Testimonial_card(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div id="Testimonial_card">
        <main>
            <header>
                <section id="dp_holder">
                    <img src={props.image}/>
                </section>
                <section id="details_holder">
                    <h2>{props.name}</h2>
                    <p>{props.position}</p>
                </section>
            </header>
            <hr/>
            <article>
            {props.short_testicle}
            </article>
            <footer>
                <Button variant='outlined' color='secondary'onClick={handleClickOpen}>Read more</Button>
            </footer>
        </main>
        <React.Fragment >
            
        <Dialog
          fullScreen
          
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: 'relative',background:'black' }}>
            <Toolbar >
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <header id="inside_dialog_box">
                <section id="dp_holder">
                    <img src={props.image}/>
                </section>
                <section id="details_holder">
                    <h2>{props.name}</h2>
                    <p>{props.position}</p>
                </section>
            </header>
            </Toolbar>
          </AppBar>
          <Typography sx={{color:'black',width:'90%',margin:'2% auto'}}>
            {props.long_testicle}
          </Typography>
        </Dialog>
        
      </React.Fragment>
    </div>
  )
}

