

const material = {
  iconbutton: { flexGrow: 1, display: { xs: "none", sm: "flex" } },
  unsplash: { color: "white" },
  box: { display: { xs: "none", sm: "block" } },
  drawer: {
    display: { xs: "block", sm: "none" },
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 240,
    },
  },
};

export default material;
