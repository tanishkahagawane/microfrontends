# React Microfrontends

A practical demonstration of **Microfrontend Architecture** using **React, TypeScript, Vite, and Module Federation**. This project explores how to break a frontend monolith into independently deployable applications while maintaining a seamless user experience.

## 📌 Overview

This project consists of a host application and two independent microfrontends: Products and Cart. The host acts as the application shell, dynamically loading remote modules at runtime.

### Architecture

| Application      | Responsibility                                            | Port   |
| ---------------- | --------------------------------------------------------- | ------ |
| **Host / Shell** | Main entry point, layout, routing, and remote integration | `3000` |
| **Products MF**  | Product-related UI and functionality                      | `3001` |
| **Cart MF**      | Shopping cart functionality and state management          | `3002` |

```text
                    ┌──────────────────────┐
                    │    Host / Shell      │
                    │    React + Vite      │
                    │      Port 3000       │
                    └──────────┬───────────┘
                               │
                  Module Federation
                     Runtime Loading
                       ┌───────┴───────┐
                       │               │
             ┌─────────▼──────┐ ┌──────▼─────────┐
             │  Products MF   │ │    Cart MF     │
             │  React + Vite  │ │  React + Vite  │
             │   Port 3001    │ │   Port 3002    │
             └────────────────┘ └────────────────┘
```

## 🛠️ Tech Stack

- **React** — Component-based UI development
- **TypeScript** — Type safety and maintainable code
- **Vite** — Fast development server and build tooling
- **Module Federation** — Runtime integration of independently built applications
- **React Router** — Navigation across application boundaries
- **Vite Module Federation Plugin** — Federation configuration and remote module integration

## 🚀 Key Concepts Covered

### 1. Module Federation

Expose components from remote applications and consume them in the host at runtime. This allows teams to develop, build, and deploy frontend modules independently.

### 2. Shared Dependencies

Configure shared libraries, such as React and React DOM, to reduce duplication and maintain compatible runtime instances across the host and remote applications.

### 3. Routing

Integrate independent microfrontends into a cohesive navigation experience using React Router, while keeping application boundaries clear.

### 4. Cross-Microfrontend Communication

Establish shared contracts and communication patterns to synchronize state and business logic between microfrontends, such as product selection and cart updates.

### 5. Independent Deployments

Structure applications around domain boundaries so that individual microfrontends can evolve and be deployed independently, subject to their integration contracts.

### 6. Resilience and Error Handling

Consider how the host should respond when a remote application or federated module is unavailable, helping prevent failures from unnecessarily disrupting the entire user experience.

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm or another compatible package manager
- Basic knowledge of React, TypeScript, and Vite

### 1. Set Up the Applications

Create or clone the three applications:

- `host` — the main shell application
- `products` — the Products microfrontend
- `cart` — the Cart microfrontend

Each application should have its own Vite configuration and dependencies.

### 2. Configure Module Federation

Install and configure a compatible Vite Module Federation plugin in each application.

In the host, configure the remote entry points for the Products and Cart applications. In the remote applications, expose the components that the host needs to consume.

Ensure that the remote URLs and exposed module names match the actual federation configuration.

### 3. Configure TypeScript

Add a `remote.d.ts` declaration file in the host to provide TypeScript module declarations for remote components where required.

Define the exposed module names and their exported component types to improve type safety during development.

### 4. Load Remote Components

Use React's `lazy` and `Suspense` to load remote components dynamically and provide a loading fallback while modules are being resolved.

Add suitable error handling for failed remote imports and unavailable remote applications.

### 5. Run the Applications

Start each application using its configured development script:

| Application | URL                     |
| ----------- | ----------------------- |
| Host        | `http://localhost:3000` |
| Products MF | `http://localhost:3001` |
| Cart MF     | `http://localhost:3002` |

Run the host and both remote applications simultaneously. Verify that the remote entry points are accessible and that the host can load the exposed components.

> **Note:** Exact commands, package versions, federation settings, and remote entry URLs depend on the implementation in each application's `package.json` and `vite.config.ts`.

## 🏗️ System Design Principles

### Boundaries

Organize microfrontends around business domains, with clear ownership and responsibility for each application.

### Contracts

Define stable interfaces for exposed components, shared types, and cross-application communication. Avoid unnecessary coupling to internal implementation details.

### Resilience

Plan for remote loading failures, network issues, and incompatible deployments. Use loading states, error boundaries, and fallback experiences where appropriate.

### Independent Delivery

Allow teams to develop and release their applications independently while maintaining compatibility between the host and remote modules.

### Shared Dependencies

Manage common dependencies carefully to balance bundle size, runtime compatibility, and independent development.

## 🎯 Learning Outcomes

By exploring this project, you will learn how to:

- Design a React-based microfrontend architecture.
- Integrate host and remote applications using Module Federation.
- Share dependencies across separately built applications.
- Coordinate routing and state across microfrontend boundaries.
- Apply domain-driven boundaries and shared contracts.
- Handle remote loading failures and design for resilience.
- Understand the trade-offs between a frontend monolith and microfrontends.

## 📚 Reference

This project is based on the following video tutorial:

**React Microfrontends Crash Course 2026**

🎥 [Watch the video on YouTube](https://www.youtube.com/watch?v=JnK1fgBxIY8)
