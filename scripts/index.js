  // MOBILE NAVIGATION 
  const mobileNavLinks = document.querySelectorAll(".mobile-nav .nav-link");

  function activateMobileLink(link) {
    mobileNavLinks.forEach(l => {
      l.querySelector(".shape-circle").style.backgroundColor = "#ffffff";
      l.querySelector("p").style.color = "gray";
      l.querySelector("iconify-icon").style.color = "gray";
    });

    link.querySelector(".shape-circle").style.backgroundColor = "#6b5ff2";
    link.querySelector("p").style.color = "#6b5ff2";
    link.querySelector("iconify-icon").style.color = "#e7e7e7";
  }

  mobileNavLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      activateMobileLink(link);
      localStorage.setItem("activeNavIndex", index);
    });
  });

  // Restore mobile state on load
  window.addEventListener("DOMContentLoaded", () => {
    const savedMobileIndex = localStorage.getItem("activeNavIndex");
    if (savedMobileIndex !== null && mobileNavLinks[savedMobileIndex]) {
      activateMobileLink(mobileNavLinks[savedMobileIndex]);
    } else if (mobileNavLinks[0]) {
      activateMobileLink(mobileNavLinks[0]);
    }
  });
  

  // PC NAVIGATION 
  const pcNavLinks = document.querySelectorAll(".pc-nav .nav-link");

  function activatePCLink(link) {
    pcNavLinks.forEach(l => {
      l.style.backgroundColor = "";
      l.querySelector("p").style.color = "gray";
      l.querySelector("iconify-icon").style.color = "gray";
    });

    link.style.backgroundColor = "#6b5ff2";
    link.querySelector("p").style.color = "#F5F5FA";
    link.querySelector("iconify-icon").style.color = "#F5F5FA";
  }

  pcNavLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      activatePCLink(link);
      localStorage.setItem("activeSidebarIndex", index);
    });
  });

  // Restore PC state on load
  window.addEventListener("DOMContentLoaded", () => {
    const savedPCIndex = localStorage.getItem("activeSidebarIndex");
    if (savedPCIndex !== null && pcNavLinks[savedPCIndex]) {
      activatePCLink(pcNavLinks[savedPCIndex]);
    } else if (pcNavLinks[0]) {
      activatePCLink(pcNavLinks[0]);
    }
  });
