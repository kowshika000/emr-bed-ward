import { Dialog, DialogContent, Box, Typography, Button } from "@mui/material";

const BedDetailMdl = ({ handleClose }) => {
  // Static data for the bed details
  const bedData = {
    ward: "ER",
    room: "Emergency Observation",
    bedNo: "BED1",
    bedType: "Bed Electronic",
    rate: "5 AED",
  };

  return (
    <Dialog fullWidth open={true} onClose={handleClose} maxWidth="sm">
      <DialogContent>
        <Box sx={{ padding: 2, backgroundColor: "#fff", borderRadius: 1 }}>
          <Typography variant="h6" align="center" sx={{ marginBottom: 2 }}>
            Bed Management Details
          </Typography>

          {/* Simple layout for the bed details */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="body1">
              <strong>Ward:</strong> {bedData.ward}
            </Typography>
            <Typography variant="body1">
              <strong>Room:</strong> {bedData.room}
            </Typography>
            <Typography variant="body1">
              <strong>Bed No:</strong> {bedData.bedNo}
            </Typography>
            <Typography variant="body1">
              <strong>Bed Type:</strong> {bedData.bedType}
            </Typography>
            <Typography variant="body1">
              <strong>Rate:</strong> {bedData.rate}
            </Typography>
          </Box>

          {/* Simple close button */}
          <Box sx={{ textAlign: "center", marginTop: 2 }}>
            <Button variant="outlined" color="primary" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BedDetailMdl;
