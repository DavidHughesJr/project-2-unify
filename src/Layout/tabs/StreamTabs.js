import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import { NavTab } from "../../Components/muiStyles/LayoutStyles"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StreamingServiceMovies from "../../Components/stream/StreamingServiceMovies";
import StreamingServiceTvShows from "../../Components/stream/StreamingServiceTvShows";


function TabPanel(props) {
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

export default function HomepageTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <NavTab label="Movies" {...a11yProps(0)} />
                    <NavTab label="Series" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <StreamingServiceMovies />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <StreamingServiceTvShows />
            </TabPanel>
        </Box>
    );
}
