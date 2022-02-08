const closedrawer = () => {
  document.getElementById("navbar").style.width = "0px";
  document.getElementById("close-navbar").style.width = "50px";
  document.getElementById("hide-icon").style.display = "block";
};

const opendrawer = () => {
  document.getElementById("navbar").style.width = "300px";
  document.getElementById("close-navbar").style.width = "0px";
  document.getElementById("hide-icon").style.display = "none";
};
