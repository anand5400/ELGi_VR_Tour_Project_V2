// ---------------------------------------------------------
// MODULE CARD INTERACTIONS (Start Experience + Preview 360)
// ---------------------------------------------------------

// All buttons that trigger actions inside cards
const sceneButtons = document.querySelectorAll(".scene-btn");
// All cards (for selected outline)
const cards = document.querySelectorAll(".scene-card");

// Handle clicks on Start / Preview buttons
sceneButtons.forEach((btn) => {
  // If button is disabled in HTML, ignore
  if (btn.disabled) return;

  btn.addEventListener("click", (e) => {
    e.stopPropagation(); // don’t trigger card click twice

    const sceneKey = btn.dataset.scene;   // e.g. "module1"
    const type = btn.dataset.type;        // "launch" or "preview"

    // Only Module 1 is enabled right now
    if (sceneKey !== "module1") {
      alert("This module is disabled. Only Module 1 is available right now.");
      return;
    }

    if (type === "launch") {
      // Start VR experience
      window.location.href = "module1.html";
    } else if (type === "preview") {
      // Preview 360 – replace with your own viewer / page if needed
      alert("Opening 360° preview for Module 1…");
      console.log("Preview 360 for Module 1");
      // window.location.href = "module1-preview.html";
    }
  });
});

// Highlight enabled card when clicked
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.dataset.enabled === "false") return; // ignore disabled modules
    cards.forEach((c) => c.classList.remove("selected"));
    card.classList.add("selected");
  });
});
