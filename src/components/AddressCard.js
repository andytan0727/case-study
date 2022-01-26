import { PencilAltIcon } from "@heroicons/react/solid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function AddressCard() {
  return (
    <Card
      sx={{
        maxWidth: 436,
        borderRadius: "20px",
      }}
    >
      <CardHeader
        sx={{
          pb: "16px",
        }}
        action={
          <IconButton aria-label="settings">
            <PencilAltIcon width={24} height={24} />
          </IconButton>
        }
        title={
          <Typography variant="h6" color="primary.dark">
            Address Name
          </Typography>
        }
      />
      <CardContent
        sx={{
          pt: 0,
          "&.MuiCardContent-root:last-child": {
            pb: "16px",
          },
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Unit Block/Building Address
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Street Address
        </Typography>
        <Typography variant="body1" color="text.secondary">
          XXXXX Country Address
        </Typography>
      </CardContent>
    </Card>
  );
}
