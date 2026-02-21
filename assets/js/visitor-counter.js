// Visitor Counter for Cloud Resume
const API_URL = "/api/visitor";

async function initVisitorCounter() {
  try {
    const response = await fetch(API_URL, { method: "GET" });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    const visitCount = Number(data.views ?? 0);

    updateCounterDisplay(visitCount);
  } catch (error) {
    console.error("Error updating visitor counter:", error);
    updateCounterDisplay(0);
  }
}

function updateCounterDisplay(count) {
  const counterElement = document.getElementById("visitor-count");
  if (counterElement) {
    counterElement.textContent = Number(count).toLocaleString();
  }
}

document.addEventListener("DOMContentLoaded", initVisitorCounter);