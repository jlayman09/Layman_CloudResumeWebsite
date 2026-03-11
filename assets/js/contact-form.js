document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const payload = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    status.textContent = "Sending...";

    try {

      const response = await fetch(
        "https://2mjxe77wqklk5cxebj3f66lfgm0prwmo.lambda-url.us-east-1.on.aws/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      status.textContent = "Message sent successfully!";
      form.reset();

    } catch (err) {

      status.textContent = "Error sending message.";

    }

  });

});