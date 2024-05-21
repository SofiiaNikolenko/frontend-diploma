import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import AddTripForm from '../../components/UserSections/AddTripForm/AddTripForm';
import AllUserTrips from '../../components/UserSections/AllUserTrips/AllUserTrips';
import UpdateTrip from '../../components/UserSections/UpdateTrip/UpdateTrip';

import { Container } from './User.style';

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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

const User = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="user tabs"
            centered
          >
            <Tab label="Add Trip" {...a11yProps(0)} />
            <Tab label="All Trips" {...a11yProps(1)} />
            <Tab label="Update Trip" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <AddTripForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <AllUserTrips />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <UpdateTrip />
        </CustomTabPanel>
      </Box>
    </Container>
  );
};

export default User;
