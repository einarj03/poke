const initNavbarScroll = () => {
  const navbar = document.querySelector(".lower-navbar");
  if (navbar) {
    let prevScrollpos = window.pageYOffset;
    const navbarSpace = document.querySelector('.navbar-space');
    window.addEventListener('scroll', (event) => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        navbar.style.bottom = "0";
      } else {
        navbar.style.bottom = "-60px";
      }
      prevScrollpos = currentScrollPos;
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
        navbar.style.bottom = "-60px";
      } else if ($(window).scrollTop() == 0) {
        navbar.style.bottom = "0";
      }
    });
  }
}

export { initNavbarScroll };
