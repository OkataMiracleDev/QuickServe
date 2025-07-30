  document.addEventListener("DOMContentLoaded", () => {
    const sorterButtons = document.querySelectorAll(".sort-btn");
    const providers = document.querySelectorAll(".provider");

    sorterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const selected = button.getAttribute("data-sort");

        // 1. Highlight active sorter
        sorterButtons.forEach(btn => {
          btn.classList.remove("bg-[#6b5ff2]", "text-[#F5F5FA]");
          btn.classList.add("bg-gray-300");
          btn.querySelector("p").classList.remove("text-[#F5F5FA]");
          btn.querySelector("p").classList.add("text-black");
        });

        button.classList.remove("bg-gray-300");
        button.classList.add("bg-[#6b5ff2]");
        button.querySelector("p").classList.remove("text-black");
        button.querySelector("p").classList.add("text-[#F5F5FA]");

        // 2. Show only matching providers
        providers.forEach(provider => {
          const status = provider.getAttribute("data-status");

          const matches =
            selected === "all" ||
            (selected === "upcoming" && (status === "upcoming" || status === "confirmed")) ||
            selected === status;

          provider.style.display = matches ? "flex" : "none";

          // 3. Adjust buttons based on status
          const cancelBtn = provider.querySelector(".cancel");
          const viewDetails = provider.querySelector(".view-details");

          if (status === "completed" || status === "cancelled") {
            if (cancelBtn) cancelBtn.style.display = "none";
            if (viewDetails) viewDetails.classList.replace("w-10/12", "w-full");
          } else {
            if (cancelBtn) cancelBtn.style.display = "flex";
            if (viewDetails) viewDetails.classList.replace("w-full", "w-10/12");
          }
        });
      });
    });

    // Trigger first button by default
    sorterButtons[0].click();
  });
