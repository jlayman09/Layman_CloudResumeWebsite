// Visitor Counter for Cloud Resume
const API_URL = "https://o47xiqypuf.execute-api.us-east-1.amazonaws.com/prod";

async function initVisitorCounter() {
    try {
        // First, POST to increment the counter
        const postResponse = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!postResponse.ok) {
            throw new Error(`POST failed with status ${postResponse.status}`);
        }

        const postData = await postResponse.json();

        // Then GET the latest count
        const getResponse = await fetch(API_URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!getResponse.ok) {
            throw new Error(`GET failed with status ${getResponse.status}`);
        }

        const getData = await getResponse.json();
        const visitCount = getData.visitCount || 0;

        // Update the display
        updateCounterDisplay(visitCount);
    } catch (error) {
        console.error("Error updating visitor counter:", error);
        updateCounterDisplay(0);
    }
}

function updateCounterDisplay(count) {
    const counterElement = document.getElementById("visitor-count");
    if (counterElement) {
        counterElement.textContent = count.toLocaleString();
    }
}

// Initialize counter when page loads
document.addEventListener("DOMContentLoaded", initVisitorCounter);
