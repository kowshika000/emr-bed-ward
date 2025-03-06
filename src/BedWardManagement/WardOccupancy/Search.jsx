import React, { useState, useEffect } from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { wardOccupancy } from "../../Redux/slice/ward/wardSlice";

const colors = {
  Admitted: "#4FC3F7", // Aqua Blue
  "Pre Discharge": "#FFAB91", // Peach
  Vacant: "#81C784", // Mint Green
};

const getWardData = (data) => {
  return data?.map((ward) => ({
    wardName: ward?.wardName,
    chartData: [
      { name: "Admitted", value: ward?.admittedPercentage },
      { name: "Pre Discharge", value: ward?.preDischargePercentage },
      { name: "Vacant", value: ward?.vacantPercentage },
    ],
  }));
};

const WardPieChart = ({ wardName, chartData, onClick }) => (
  <Box
    textAlign="center"
    sx={{
      p: 2,
      boxShadow: 2,
      borderRadius: 2,
      backgroundColor: "#f9f9f9",
      cursor: "pointer",
      "&:hover": { backgroundColor: "#e3f2fd" },
    }}
    onClick={onClick}
  >
    <Typography variant="h6" gutterBottom>
      {wardName}
    </Typography>
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {chartData?.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[entry?.name]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
    </ResponsiveContainer>
  </Box>
);

const Search = ({ navigate }) => {
  const [allWard, setAllWard] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const dispatch = useDispatch();

  const { wardOccupancyData } = useSelector(
    (state) => state.bedAndWard?.allWard || []
  );

  console.log("wardOccupancyData", wardOccupancyData);

  const fetchWardData = (date) => {
    const payload = date ? { date } : {};
    dispatch(wardOccupancy(payload)).then((resultAction) => {
      if (wardOccupancy.fulfilled.match(resultAction)) {
        console.log("API Response Data:", resultAction.payload.data);
        setAllWard(resultAction.payload.data);
      } else {
        console.error("API Error:", resultAction.payload);
      }
    });
  };

  useEffect(() => {
    fetchWardData(); // Fetch initial data without date
  }, [dispatch]);

  const handleSearch = () => {
    fetchWardData(selectedDate); // Fetch data with selected date
  };

  const wardData = getWardData(allWard);

  const handleNavigate = (wardName) => {
    navigate(`/secure/bedandward/${wardName}`, { state: { wardName } });
  };

  return (
    <Box p={3} sx={{ backgroundColor: "#eef2f6", minHeight: "100vh" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          mb: 4,
          p: 2,
          backgroundColor: "#fff",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        <div>
          <h6>Search Bed Occupancy</h6>
          <Box display="flex" gap={3} mt={2}>
            <TextField
              type="date"
              size="small"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </div>
        <Box display="flex" gap={3}>
          {Object.entries(colors).map(([status, color]) => (
            <Typography key={status} variant="body1" sx={{ color }}>
              {status}
            </Typography>
          ))}
        </Box>
      </Box>

      <Grid container spacing={3}>
        {wardData.map(({ wardName, chartData }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WardPieChart
              wardName={wardName}
              chartData={chartData}
              onClick={() => handleNavigate(wardName)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Search;
