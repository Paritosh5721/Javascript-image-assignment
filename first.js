const closedrawer = () => {
  if (window.innerWidth <= 1024) {
    document.getElementById("navbar").style.height = "0px";
    document.getElementById("menulist").style.display = "none";
    return;
  }
  document.getElementById("navbar").style.width = "0px";
  document.getElementById("close-navbar").style.width = "50px";
  document.getElementById("hide-icon").style.display = "block";
};

const handleOpenClose = () => {
  document.getElementById("navbar").style.height === "0px"
    ? opendrawer()
    : closedrawer();
};

const opendrawer = () => {
  if (window.innerWidth <= 1024) {
    document.getElementById("navbar").style.height = "fit-content";
    document.getElementById("menulist").style.display = "block";
    return;
  }
  document.getElementById("navbar").style.width = "300px";
  document.getElementById("close-navbar").style.width = "0px";
  document.getElementById("hide-icon").style.display = "none";
};

const fetchimage = () => {
  fetch(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
  )
    .then((response) => {
      console.log(response);
      return response.blob();
    })
    .then((blob) => {
      console.log(blob);
      document.getElementById("image").src = URL.createObjectURL(blob);
    });
};
