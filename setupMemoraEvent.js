import memoraAiSchema from "./schemas/memoraAiSchema.js";
import { getTrueNetworkInstance } from "./true-network/true.config.js";

export const setupAndAttestMemoraEvent = async (eventData = null) => {
  try {
    // Default event data if none is provided
    const defaultEventData = {
      eventName: "EthIndia2024",
      eventDescription: "Exclusive EthIndia 2024",
      latitude: "127.112",
      longitude: "37.5665",
      userAddress: "iLVDid7RvLmzBctjcb8ZH58BC7MchK5gDaKFqGWnKVoGW4y",
    };

    const finalEventData = eventData || defaultEventData;

    const api = await getTrueNetworkInstance();

    // Create attestation
    const output = await memoraAiSchema.attest(
      api,
      finalEventData.userAddress,
      finalEventData
    );

    console.log("Attestation Transaction Hash:", output);

    // Disconnect from the network
    await api.network.disconnect();
  } catch (error) {
    console.error("Failed to create attestation:", error);
  }
};
