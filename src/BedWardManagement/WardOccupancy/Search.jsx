import React from "react";
import { Grid, TextField, Typography, Box, Button } from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
// import { useNavigate } from "react-router-dom";
import bedManagementData from "../../components/data";

const getWardData = (data) => {
  const groupedData = {};

  data.forEach((bed) => {
    if (!groupedData[bed.wardType]) {
      groupedData[bed.wardType] = { total: 0, statuses: {} };
    }

    groupedData[bed.wardType].total++;
    groupedData[bed.wardType].statuses[bed.status] =
      (groupedData[bed.wardType].statuses[bed.status] || 0) + 1;
  });

  return Object.entries(groupedData).map(([wardType, { total, statuses }]) => {
    const chartData = Object.entries(statuses).map(([status, count]) => ({
      name: status,
      value: (count / total) * 100, // Calculate percentage
    }));

    return { wardType, chartData };
  });
};

// Updated colors for pie chart
const colors = {
  Vacant: "#81C784", // Mint Green
  Admitted: "#4FC3F7", // Aqua Blue
  "Pre Discharge": "#FFAB91", // Peach
  "Patient Reservation": "#F06292", // Light Pink
  Blocked: "#BDBDBD", // Warm Gray
};

const WardPieChart = ({ wardType, chartData, onClick }) => (
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
      {wardType}
    </Typography>
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[entry.name]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `${value.toFixed(2)}%`} />
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
    </ResponsiveContainer>
  </Box>
);

const Search = ({navigate}) => {
  // const navigate = useNavigate();
  const wardData = getWardData(bedManagementData);

  const handleNavigate = (wardType) => {
    navigate(`/secure/bedandward/${wardType}`, { state: { wardType } });
  };

  return (
    <Box p={3} sx={{ backgroundColor: "#eef2f6", minHeight: "100vh" }}>
      {/* Search and Filters */}
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
            <TextField type="date" size="small" />
            <Button size="small" variant="contained" color="primary">
              Search
            </Button>
          </Box>
        </div>
        <Box display="flex" gap={3}>
          {Object.entries(colors).map(([status, color]) => (
            <Typography
              key={status}
              variant="body1"
              sx={{ color, cursor: "pointer" }}
            >
              {status}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Ward Pie Charts */}
      <Grid container spacing={3}>
        {wardData.map(({ wardType, chartData }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <WardPieChart
              wardType={wardType}
              chartData={chartData}
              onClick={() => handleNavigate(wardType)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Search;
