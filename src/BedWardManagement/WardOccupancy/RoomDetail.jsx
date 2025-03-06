import { useParams, useLocation } from "react-router-dom";
import React, { useState } from "react";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BedDetailMdl from "./BedDetailMdl";

// Dummy bed data for illustration
const bedsData = [
  {
    roomNumber: 123,
    category: "Normal",
    bedType: "Bed Electronic",
    status: "Vacant",
    ward: "ER",
    room: "Emergency Observation",
  },
  {
    roomNumber: 124,
    category: "Isolation",
    bedType: "Neonatal Warmer Bed",
    status: "Admitted",
    ward: "ER",
    room: "Emergency Observation",
    bedNo: "BED1",
    rate: "5 AED",
  },
  {
    roomNumber: 125,
    category: "Intensive care",
    bedType: "Operating Table",
    status: "Pre Discharge",
    ward: "ER",
    room: "Emergency Observation",
    bedNo: "BED1",
    rate: "5 AED",
  },
  {
    roomNumber: 126,
    category: "Normal",
    bedType: "Resuscitation Bed",
    status: "Patient Reservation",
    ward: "ER",
    room: "Emergency Observation",
    bedNo: "BED1",
    rate: "5 AED",
  },
  // Add more beds as needed
];

const RoomDetails = () => {
  const { name } = useParams();
  const location = useLocation();
  const { wardName } = location.state;

  console.log("name:", wardName);

  const [roomCategory, setRoomCategory] = useState("");
  const [bedType, setBedType] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showBedDetails, setShowBedDetails] = useState(false);
  const [selectedBed, setSelectedBed] = useState(null); // For storing selected bed

  const roomCategories = ["Normal", "Isolation", "Intensive care"];
  const bedTypes = [
    "Bed Electronic",
    "Resuscitation Bed",
    "Neonatal Warmer Bed",
    "Bed Bassinet",
    "Bed Incubator",
    "Bed Stretcher",
    "Operating Table",
  ];

  const filters = [
    { label: "All", color: "#000000" },
    { label: "Vacant", color: "#81C784" },
    { label: "Admitted", color: "#4FC3F7" },
    { label: "Pre Discharge", color: "#FFAB91" },
    { label: "Patient Reservation", color: "#F06292" },
    { label: "Blocked", color: "#BDBDBD" },
  ];

  const handleSearch = () => {
    alert(
      `Room Category: ${roomCategory || "Not Selected"}\nBed Type: ${
        bedType || "Not Selected"
      }`
    );
  };

  const handleShowBedDetails = (bed) => {
    setSelectedBed(bed);
    setShowBedDetails(true);
  };

  const handleCloseBedDetails = () => {
    setShowBedDetails(false);
  };

  const filteredBeds = bedsData.filter((bed) => {
    const isCategoryMatch = roomCategory ? bed.category === roomCategory : true;
    const isTypeMatch = bedType ? bed.bedType === bedType : true;
    const isStatusMatch = activeFilter === "All" || bed.status === activeFilter;

    return isCategoryMatch && isTypeMatch && isStatusMatch;
  });

  // Function to determine icon color based on status
  const getIconColor = (status) => {
    switch (status) {
      case "Vacant":
        return "#81C784"; // Mint Green
      case "Admitted":
        return "#4FC3F7"; // Aqua Blue
      case "Pre Discharge":
        return "#FFAB91"; // Peach
      case "Patient Reservation":
        return "#F06292"; // Light Pink
      case "Blocked":
        return "#BDBDBD"; // Warm Gray
      default:
        return "#000000"; // Default Black
    }
  };

  return (
    <Box p={1}>
      <h6>Bed Management - {name} Ward</h6>

      <Box
        mt={3}
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 2,
          justifyContent: "space-between",
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "15px",
          borderRadius: "12px",
          margin: "20px auto",
        }}
      >
        <FormControl fullWidth size="small" sx={{ width: "20%" }}>
          <InputLabel id="room-category-label">Room Category</InputLabel>
          <Select
            labelId="room-category-label"
            value={roomCategory}
            onChange={(e) => setRoomCategory(e.target.value)}
            label="Room Category"
          >
            {roomCategories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Bed Type Dropdown */}
        <FormControl fullWidth size="small" sx={{ width: "20%" }}>
          <InputLabel id="bed-type-label">Bed Type</InputLabel>
          <Select
            labelId="bed-type-label"
            value={bedType}
            onChange={(e) => setBedType(e.target.value)}
            label="Bed Type"
          >
            {bedTypes.map((type, index) => (
              <MenuItem key={index} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            sx={{
              alignSelf: { xs: "stretch", sm: "flex-start" },
              // width: { sm: "30%" },
            }}
          >
            Search
          </Button>
        </Box>
      </Box>

      {/* Filters */}
      <Box display="flex" gap={3} my={3}>
        {filters.map((filter) => (
          <Typography
            key={filter.label}
            variant="body1"
            sx={{
              cursor: "pointer",
              padding: "5px 10px",
              borderRadius: "10px",
              fontSize: "small",
              backgroundColor:
                activeFilter === filter.label ? filter.color : "transparent",
              color: activeFilter === filter.label ? "#fff" : filter.color,
              border: `1px solid ${filter.color}`,
              fontWeight: activeFilter === filter.label ? "bold" : "normal",
              transition: "all 0.3s ease", // Smooth transition effect
              "&:hover": {
                backgroundColor:
                  activeFilter !== filter.label ? filter.color : filter.color,
                color: "#fff",
                transform: "scale(1.05)", // Hover effect for buttons
              },
            }}
            onClick={() => setActiveFilter(filter.label)}
          >
            {filter.label}
          </Typography>
        ))}
      </Box>

      {/* Display all filtered beds in a single card */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f9f9f9",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "15px",
          borderRadius: "12px",
          margin: "20px auto",
        }}
      >
        {/* <Typography variant="h6">Beds in {name} Ward</Typography> */}
        <Box
          sx={{
            marginTop: "10px",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            // justifyContent: "space-between",
          }}
        >
          {filteredBeds.length > 0 ? (
            filteredBeds.map((bed, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "10px",
                  padding: "10px",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                  "&:hover": { backgroundColor: "#f1f1f1" },
                  // width:"50%"
                }}
                onClick={() => handleShowBedDetails(bed)}
              >
                <BedIcon
                  sx={{ fontSize: "40px", color: getIconColor(bed.status) }}
                />

                <Box>
                  <Typography variant="body1">Ward: {bed.ward}</Typography>
                  <Typography variant="body2">Room: {bed.room}</Typography>
                  <Typography variant="body2">
                    Bed No: {bed.bedNo}
                  </Typography>{" "}
                  <Typography variant="body2">Type: {bed.bedType}</Typography>
                  <Typography variant="body2">Rate: {bed.rate}</Typography>
                  {/* <Typography variant="body2">Status: {bed.status}</Typography> */}
                </Box>
              </Box>
            ))
          ) : (
            <Typography>No beds available matching the filters.</Typography>
          )}
        </Box>
      </Box>

      {showBedDetails && (
        <BedDetailMdl bed={selectedBed} handleClose={handleCloseBedDetails} />
      )}
    </Box>
  );
};

export default RoomDetails;
