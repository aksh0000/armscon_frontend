import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Workshops.css'
import { Button } from '@mui/material';
import Footer from '../components/Footer.js'
import ActivityCard2 from '../components/ActivityCard2';
import events_data from '../data/events';



function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Activities() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}} id="workshops_container">
        <h1 id="heading_">
            Activities
        </h1>
        <p id="subheading_">We offer more than 20+ workshops in the feild of mdeical sciences at PGIMS Rohtak..</p>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,position:'sticky',top:'0px',background:'black',color:'white'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" scrollButtons={false} variant='fullWidth' indicatorColor="secondary" textColor='secondary' sx={{zIndex:1000,background:'black'}}>
          <Tab label="Cultural" {...a11yProps(0)} sx={{color:'white'}}/>
          <Tab label="EVents" {...a11yProps(1)} sx={{color:'white'}}/>
        
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>

        {
          events_data && events_data.map(index=><ActivityCard2 name={index.name} about={index.about} date={index.date} venue={index.venue} hc={index.hc} email_of_hc={index.email_of_hc} image={index.image} subheading={index.subheading}/>)
        }
        
        
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Item Three
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item Three
      </CustomTabPanel>
      <Footer/>
    </Box>
  );
}
