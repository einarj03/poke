const initNavbarScroll = () => {
  const navbar = document.querySelector(".lower-navbar");
  if (navbar) {
    let prevScrollpos = window.pageYOffset;
    const navbarSpace = document.querySelector('.navbar-space');
    window.addEventListener('scroll', (event) => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.bottom = "0";
        // navbarSpace.style.display = "block";
      } else {
        navbar.style.bottom = "-50px";
        // navbarSpace.style.display = "none";
      }
      prevScrollpos = currentScrollPos;
    });
  }
}

export { initNavbarScroll };
