import { PencilAltIcon } from "@heroicons/react/solid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { grey } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const inheritLineHeightStyle = {
  lineHeight: "inherit",
};

export default function EmployeeCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <PencilAltIcon width={24} height={24} />
          </IconButton>
        }
        title={
          <Box>
            <Typography variant="overline" sx={inheritLineHeightStyle}>
              #IDXXX
            </Typography>
            <Typography
              variant="h6"
              sx={inheritLineHeightStyle}
              color="primary.dark"
            >
              Employee Name
            </Typography>
          </Box>
        }
        subheader="Employee Position"
      ></CardHeader>
      <CardContent
        sx={{
          p: "12px 20px",
          backgroundColor: grey[100],
          "&.MuiCardContent-root:last-child": {
            pb: "12px",
          },
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Address name
        </Typography>
      </CardContent>
    </Card>
  );
}
