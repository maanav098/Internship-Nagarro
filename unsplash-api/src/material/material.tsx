import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "@mui/material/Link";
import "./material.css";
import { useAuth } from "../store/useAuth";
import material from "./materialstyles";
import strings from "../localization/en";

interface Props {
  window?: () => Window;
}


const navItems = [
  { text: "Photos", path: "Photos" },
  { text: "Random", path: "Random" },
  { text: "LogOut", path: "/login" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = async () => {
    await logout();
  };


  const drawer = (
    <Box className="drawer">
      <Typography variant="h6" className="title">
        <Link href="/" sx={{ color: "white" }}>
          {strings.Unsplash}
        </Link>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              className="drawer"
              href={item.path}
              onClick={item.text === "LogOut" ? handleLogout : undefined}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box className="root">
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={material.iconbutton}
          >
            <Link href="/" sx={material.unsplash}>
              {strings.Unsplash}
            </Link>
          </Typography>
          <Box sx={material.box}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                sx={material.unsplash}
                href={item.path}
                onClick={item.text === "LogOut" ? handleLogout : undefined}
              >
                {item.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={material.drawer}
         
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
}
