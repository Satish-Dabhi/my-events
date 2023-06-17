// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Box, Button, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from './DataTable';
import AboutUser from './AboutUser';

const Dashboard = ({ userData }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <div id="dashboard">
        <Box sx={{ display: 'flex' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={selectedTab}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: 'divider', height: '100vh' }}
          >
            <Tab label="About Yourself" />
            <Tab label="Your Events" />
            <Tab label="Tab 3" />
          </Tabs>
          <Box sx={{ flexGrow: 1, p: 2 }}>
            {selectedTab === 0 && <AboutUser userData={userData} />}
            {selectedTab === 1 && (
              <>
                <div className="row">
                  <div className="d-flex justify-content-end">
                    <Button variant="contained" size="small" onClick={() => navigate(`/user/add-event`)}>
                      Add Event
                    </Button>
                  </div>
                </div>
                <br />
                <DataTable />
              </>
            )}
            {selectedTab === 2 && <div>Tab 3 Content</div>}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Dashboard;
