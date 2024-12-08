import memoraAiSchema from "./schemas/memoraAiSchema.js";
import { getTrueNetworkInstance } from "./true-network/true.config.js";
// import { getTrueNetworkInstance } from "./true-network/true.config.ts";

const setupAndAttestMemoraEvent = async () => {
  try {
    // User's wallet address
    const userWallet = "iLVDid7RvLmzBctjcb8ZH58BC7MchK5gDaKFqGWnKVoGW4y";

    const api = await getTrueNetworkInstance();

    // Event data for attestation
    const eventData = {
      eventName: "EthIndia2024",
      eventDescription: "Exclusive EthIndia 2024",
      latitude: "127.112",
      longitude: "37.5665",
      userAddress: userWallet,
    };

    // Create attestation
    const output = await memoraAiSchema.attest(api, userWallet, eventData);

    console.log("Attestation Transaction Hash:", output);

    // Disconnect from the network
    await api.network.disconnect();
  } catch (error) {
    console.error("Failed to create attestation:", error);
  }
};

// Execute the function
setupAndAttestMemoraEvent();
