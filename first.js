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
const fetchapi = () => {
  fetch("https://i.imgur.com/sBtunwK.jpeg")
    .then((response) => {
      console.log(response);
      return response.blob();
    })
    .then((blob) => {
      console.log(blob);
      document.getElementById("image").src = URL.createObjectURL(blob);
    });
};
