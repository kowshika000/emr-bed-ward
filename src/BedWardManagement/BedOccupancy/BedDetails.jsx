import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import BedIcon from "@mui/icons-material/Bed";
import { useDispatch, useSelector } from "react-redux";
import { bedOccupancy } from "../../Redux/slice/bed/bedSlice";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BedDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedBed, setSelectedBed] = useState(null);

  const fromTab = location.state?.fromTab;

  const { data } = useSelector((state) => state?.bedAndWard?.allBed);
  console.log("bed data", data);

  useEffect(() => {
    dispatch(bedOccupancy());
  }, []);

  const filters = [
    { label: "All", color: "#000000" },
    { label: "VACANT", color: "#81C784" },
    { label: "ADMITTED", color: "#4FC3F7" },
    { label: "Pre Discharge", color: "#FFAB91" },
    { label: "Patient Reservation", color: "#F06292" },
    { label: "Blocked", color: "#BDBDBD" },
  ];

  // Filter the bed data based on the selected filter
  const filteredBeds =
    activeFilter === "All"
      ? data
      : data.filter((bed) => bed.bedStatus === activeFilter);

  // Group beds by ward
  const groupedBeds = filteredBeds.reduce((acc, bed) => {
    if (!acc[bed.wardName]) {
      acc[bed.wardName] = [];
    }
    acc[bed.wardName].push(bed);
    return acc;
  }, {});

  const handleSelectBed = (bed) => {
    if (bed.bedStatus === "VACANT") {
      setSelectedBed(bed);

      // Navigate to Registration Page with Bed Details
      navigate(`/secure/registration?tab=${fromTab}`, {
        state: { selectedBed: bed },
      });
    } else {
      alert("Only vacant beds can be selected!");
    }
  };

  return (
    <Box p={3} sx={{ backgroundColor: "#eef2f6", minHeight: "100vh" }}>
      <Box
        sx={{
          mb: 4,
          p: 2,
          backgroundColor: "#fff",
          boxShadow: 2,
          borderRadius: 2,
        }}
      >
        {/* Title Section */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <h6>Bed Details</h6>
          <Typography variant="body1" sx={{ color: "#757575" }}>
            Total Beds: <strong>{filteredBeds.length}</strong>
          </Typography>
        </Box>

        {/* Filter Section */}
        <Box display="flex" gap={2} flexWrap="wrap">
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
      </Box>

      {/* Bed Icons Section - Display grouped by ward */}
      {Object.keys(groupedBeds).map((wardName, index) => (
        <Box
          key={index}
          sx={{
            mb: 3,
            p: 2,
            backgroundColor: "#fff",
            boxShadow: 2,
            borderRadius: 2,
          }}
        >
          <h6 sx={{ mb: 2 }}>Ward: {wardName}</h6>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {groupedBeds[wardName].map((bed, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  backgroundColor: "#f9f9f9",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  margin: "10px",
                  cursor: "pointer",
                  // maxWidth: "150px",
                  padding: "10px",
                  border: `2px solid ${
                    filters.find((filter) => filter.label === bed.bedStatus)
                      ?.color || "black"
                  }`,
                }}
                onClick={() => handleSelectBed(bed)}
              >
                <BedIcon
                  sx={{
                    fontSize: "50px",
                    color:
                      filters.find((filter) => filter.label === bed.bedStatus)
                        ?.color || "black",
                  }}
                />
                <Box>
                  <Typography variant="body1">Ward: {bed.wardType}</Typography>
                  <Typography variant="body2">
                    Room: {bed.roomNoOrName}
                  </Typography>
                  <Typography variant="body2">Bed No: {bed.bedNo}</Typography>{" "}
                  {/* <Typography variant="body2">Type: {bed.bedType}</Typography> */}
                  <Typography variant="body2">Rate: {bed.rate}</Typography>
                  {/* <Typography variant="body2">Status: {bed.status}</Typography> */}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default BedDetails;
