import React from 'react';
import {
    Box,
    Grid,
    Tabs,
    Tab,
    Typography,
} from '@material-ui/core';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Breadcrumb from './../../component/Breadcrumb';
import { gridSpacing } from '../../store/constant';



function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
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
  

const Local = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <React.Fragment>
            <Breadcrumb title={"Local"}>
                <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
                    Home
                </Typography>
                <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
                    Local
                </Typography>
            </Breadcrumb>
            <Grid container spacing={gridSpacing}>
                <Grid item>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs 
                          value={value} 
                          textColor="primary"
                          indicatorColor="primary"
                          onChange={handleChange} 
                          aria-label="basic tabs example">
                            <Tab label="System" {...a11yProps(0)} />
                            <Tab label="Services" {...a11yProps(1)} />
                            <Tab label="Configuration" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                    Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                    Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                    Item Three
                    </TabPanel>
            
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Local;
