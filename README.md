# MemoraAI Attestation Service

This repository contains a Node.js server implementation for **MemoraAI**, which uses **TrueNetwork** to perform secure and verifiable attestations for events and user interactions. This system allows users to create on-chain attestations for events, leveraging decentralized infrastructure for scalability and trust.

---

## **Overview**

### **What is MemoraAI?**
MemoraAI is a platform that enhances the way users interact with memories, events, and experiences by creating attestations for these interactions. It integrates with **TrueNetwork**, a decentralized network, to ensure that all event-related data is immutable, transparent, and securely stored on-chain.

### **Why TrueNetwork?**
**TrueNetwork** plays a pivotal role in MemoraAI by:
- Providing a robust API for managing attestations on a decentralized ledger.
- Ensuring transparency and immutability of event data.
- Facilitating easy integration with blockchain networks for creating on-chain proofs.
- Enabling secure disconnection from the network once operations are complete, minimizing risks of persistent connections.

---

## **Features**

1. **Event Attestations**
   - Create secure, on-chain attestations for events with geolocation data.
   - Includes details such as event name, description, coordinates, and user address.

2. **Decentralized Network Integration**
   - Utilizes TrueNetwork's API to connect, create, and verify attestations seamlessly.

3. **Dynamic Event Data**
   - Accepts dynamic event data through a REST API endpoint.

4. **Simple Architecture**
   - Built with Express.js for simplicity and scalability.
   - Modular structure for easy extension and maintenance.

---

## **How TrueNetwork Powers MemoraAI**

TrueNetwork acts as the backbone for MemoraAI by enabling decentralized and secure interactions with blockchain technology:

- **Attestation Creation:** TrueNetwork’s API allows MemoraAI to create verifiable proofs for user-generated events, ensuring trust and authenticity.
- **Immutability:** By leveraging TrueNetwork, MemoraAI guarantees that event data cannot be altered once attested, preserving the integrity of memories.
- **Scalability:** TrueNetwork’s decentralized nature ensures that MemoraAI can handle a large volume of events without compromising on performance or reliability.
- **Ease of Use:** TrueNetwork provides a simple API interface that abstracts the complexities of interacting directly with blockchain networks.

