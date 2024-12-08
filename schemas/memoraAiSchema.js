import { Schema, Text } from "@truenetworkio/sdk";

// Create the Memora Schema
const memoraAiSchema = Schema.create({
  eventName: Text,
  eventDescription: Text,
  latitude: Text,
  longitude: Text,
  userAddress: Text,
});

export default memoraAiSchema;
