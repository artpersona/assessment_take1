import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../../assets/images/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../shared/contexts/AuthContext";
const pages = ["Products", "Pricing", "Blog"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { loggedUser, logoutUser } = useAuthContext();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" style={{ backgroundColor: "white" }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ fill: "#035ac4" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div>
            <img src={logo} alt="avatar" className="logo" />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              LOVE
            </Typography>
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {loggedUser?.admin && (
              <Link to="/applicants" style={{ textDecoration: "none" }}>
                <Button
                  key={1}
                  sx={{ my: 2, color: "#035ac4", display: "block" }}
                >
                  List of Applicants
                </Button>
              </Link>
            )}
            {!loggedUser?.admin && (
              <>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  <Button
                    key={1}
                    sx={{ my: 2, color: "#035ac4", display: "block" }}
                  >
                    Home
                  </Button>
                </Link>
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <Button
                    key={2}
                    sx={{ my: 2, color: "#035ac4", display: "block" }}
                  >
                    Services Offered
                  </Button>
                </Link>
                <Link to="/contact" style={{ textDecoration: "none" }}>
                  <Button
                    key={3}
                    sx={{ my: 2, color: "#035ac4", display: "block" }}
                  >
                    Contact Information
                  </Button>
                </Link>

                <Link to="/tech-stack" style={{ textDecoration: "none" }}>
                  <Button
                    key={4}
                    sx={{ my: 2, color: "#035ac4", display: "block" }}
                  >
                    Technology Stack
                  </Button>
                </Link>

                {loggedUser && (
                  <Link to="/form" style={{ textDecoration: "none" }}>
                    <Button
                      key={5}
                      sx={{ my: 2, color: "#035ac4", display: "block" }}
                    >
                      LTO-ADL-Form21
                    </Button>
                  </Link>
                )}
              </>
            )}

            {loggedUser ? (
              <Button
                key={4}
                sx={{ my: 2, color: "#035ac4", display: "block" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  key={5}
                  sx={{ my: 2, color: "#035ac4", display: "block" }}
                >
                  Login
                </Button>
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
