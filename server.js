import express from "express";
import { setupAndAttestMemoraEvent } from "./setupMemoraEvent.js";

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to trigger attestation
app.post("/attest-event", async (req, res) => {
  try {
    const eventData = req.body; // Optional: Accept dynamic event data

    // Execute the attestation process
    console.log("Initiating attestation...");
    await setupAndAttestMemoraEvent(eventData);

    res
      .status(200)
      .json({ message: "Attestation process completed successfully!" });
  } catch (error) {
    console.error("Error in attestation process:", error);
    res.status(500).json({ error: "Failed to complete attestation process." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
