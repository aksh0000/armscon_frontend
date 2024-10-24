import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Workshops.css'
import { Button } from '@mui/material';
import Footer from '../components/Footer.js'
import ActivityCard from '../components/ActivityCard';
import fullday_workshops from '../data/fullday';
import halfday_data from '../data/halfday';


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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main id="frf">
    <Box sx={{ width: '100%' }} id="workshops_container">
        <h1 id="heading_">
            Workshops
        </h1>
        <p id="subheading_">We offer more than 20+ workshops in the feild of mdeical sciences at PGIMS Rohtak..</p>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' ,position:'sticky',top:'0px',background:'black',color:'white'}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" scrollButtons={false} variant='scrollable' indicatorColor="secondary" textColor='secondary'>
          <Tab label="Full day" {...a11yProps(0)} sx={{color:'white'}}/>
          <Tab label="Half day" {...a11yProps(1)} sx={{color:'white'}}/>
          <Tab label="Nursing" {...a11yProps(2)} sx={{color:'white'}}/>
          <Tab label="Physiotherapy" {...a11yProps(3)} sx={{color:'white'}}/>
          <Tab label="Dental" {...a11yProps(4)} sx={{color:'white'}}/>
          <Tab label="Extra" {...a11yProps(4)} sx={{color:'white'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        {
          fullday_workshops && fullday_workshops.map(index=><ActivityCard name={index.name}venue={index.venue}time={index.time}about={index.about}date={index.date}head_coordinator={index.hc}email_of_hc={index.email_of_hc} image={index.image}/>)
        }
          
          
      
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      {
          halfday_data && halfday_data.map(index=><ActivityCard name={index.name}venue={index.venue}time={index.time}about={index.about}date={index.date}head_coordinator={index.hc}email_of_hc={index.email_of_hc} image={index.image}/>)
        }
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
    </main>
  );
}
