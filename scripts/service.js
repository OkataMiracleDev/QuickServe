  // Date and time selector
  document.addEventListener('DOMContentLoaded', () => {
    const timeButtons = document.querySelectorAll('.time-selector-btn-container .time');
    const dateElement = document.querySelector('.date-selector-btn .date');
    const bookerBtn = document.querySelector('.booker-btn');
    const bookerText = bookerBtn.querySelector('p');

    timeButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Reset styling on all time buttons
        timeButtons.forEach(btn => {
          btn.classList.remove('bg-[#6b5ff2]');
          btn.classList.add('bg-gray-200');
          // Reset text color
          const p = btn.querySelector('p');
          p.classList.remove('text-white');
          p.classList.add('text-gray-600');
        });

        // Style clicked button
        button.classList.remove('bg-gray-200');
        button.classList.add('bg-[#6b5ff2]');
        const clickedP = button.querySelector('p');
        clickedP.classList.remove('text-gray-600');
        clickedP.classList.add('text-white');

        // Get selected time
        const selectedTime = clickedP.textContent.trim();

        // Parse & format date
        const rawDate = dateElement.textContent.trim();
        const parsedDate = new Date(rawDate);
        const mm = String(parsedDate.getMonth() + 1).padStart(2, '0');
        const dd = String(parsedDate.getDate()).padStart(2, '0');
        const yy = String(parsedDate.getFullYear()).slice(-2);
        const formattedDate = `${mm}/${dd}/${yy}`;

        // Update booker button styling and text
        bookerBtn.classList.remove('bg-[#e7e7e7]');
        bookerBtn.classList.add('bg-[#6b5ff2]');
        bookerText.classList.remove('text-gray-400');
        bookerText.classList.add('text-white');
        bookerText.textContent = `Book ${formattedDate} at ${selectedTime}`;
      });
    });
  });
