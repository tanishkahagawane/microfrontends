#### 1. Fundamentals

## 1. What are Micro Frontends? Why would you use them?

Interview answer:

Micro Frontends are an architectural approach in which a large frontend application is divided into smaller, independent frontend applications. Each application is responsible for a specific business feature and can be developed, tested, deployed, and maintained independently.

They extend the microservices concept to the frontend.

For example, in an e-commerce application, we could divide the frontend into:

E-commerce Application

App Shell — common layout, navigation and routing

Products - React app A

Cart -React app B

Checkout - React app C

Each feature can have its own codebase, team and release process.

Why would you use them?

- Independent deployments: The cart team can release changes without rebuilding and deploying the entire frontend, provided the integration contracts remain compatible.
- Team autonomy: Different teams can own different business domains.
- Technology flexibility: Teams may use different frameworks when justified.
- Scalability: Teams can work on separate features in parallel.
- Maintainability: Smaller, clearly owned codebases can be easier to understand and test.

Real-world example: If the checkout team needs to release a payment fix urgently, it can deploy the checkout application independently instead of releasing the whole e-commerce frontend.

Key interview point: Micro Frontends primarily solve organizational scaling and independent delivery challenges. They are not automatically better for every application.

## 2. How are Micro Frontends different from Microservices?

Interview answer:

Microservices apply the principle of independent services to the backend, whereas Micro Frontends apply it to the user interface.

| Aspect               | Micro Frontends                                         | Microservices                                       |
| -------------------- | ------------------------------------------------------- | --------------------------------------------------- |
| Layer                | Frontend / UI                                           | Backend / business services                         |
| Main responsibility  | UI features and user interactions                       | Business logic and data processing                  |
| Typical technologies | React, Angular, Vue                                     | Node.js, Java, Go, Python, etc.                     |
| Communication        | Events, shared contracts, APIs, routing                 | HTTP, REST, GraphQL, messaging, RPC                 |
| Deployment           | Frontend assets or independently hosted UI applications | Backend services and containers                     |
| Example              | Product catalog UI                                      | Product catalog API                                 |
| Main concern         | UI composition, user experience, browser performance    | Service communication, data consistency, resilience |

How they work together:

Micro Frontends
(Product UI · Cart UI · Checkout UI)
| |
API Gateway / Backend APIs
|
Microservices
(Product service · Order service · Payment service)

For example, the product Micro Frontend displays products and calls the product API, while the order Microservice handles order processing.

Important: Micro Frontends and Microservices are independent architectural choices. You can have Micro Frontends with a monolithic backend, or a monolithic React frontend with Microservices behind it.

## 3. What are the advantages and disadvantages of Micro Frontends?

Interview answer:

Micro Frontends offer organizational flexibility and independent delivery, but they introduce additional architectural and operational complexity.

## Advantages

- Independent deployment: Teams can release features separately.
- Team ownership: Clear boundaries and responsibilities.
- Parallel development: Multiple teams can work simultaneously.
- Technology flexibility: Different frameworks can coexist when needed.
- Isolated development and testing: Feature teams can build and test their applications independently.
- Incremental migration: A legacy frontend can be replaced feature by feature.

## Disadvantages

- Operational complexity: More build pipelines, deployments, monitoring and infrastructure.
- Performance overhead: Duplicate dependencies, JavaScript bundles and network requests can increase load time.
- Shared state challenges: Authentication, cart state and cross-feature communication need clear contracts.
- UI inconsistency: Teams may implement different styles or interaction patterns.
- Testing complexity: End-to-end tests must verify integration across independently developed features.
- Versioning and compatibility: Changes to shared APIs, events or component contracts can break consumers.
- Debugging difficulty: Failures may involve multiple applications and deployment versions.

How can we minimize the disadvantages?

- Establish a shared design system and reusable component library.
- Define clear ownership and communication contracts.
- Share common dependencies carefully and monitor bundle size.
- Implement centralized logging, monitoring and error handling.
- Automate integration, contract and end-to-end testing.
- Agree on authentication, routing and state-management standards.

Strong interview conclusion: Micro Frontends reduce coordination bottlenecks between teams, but they can increase complexity for the platform and individual developers.

## 4. When would you choose Micro Frontends over a monolithic React application?

Interview answer:

I would choose Micro Frontends when the application is large enough that independent ownership, deployment and team autonomy provide more value than the complexity of splitting the frontend.

| Choose Micro Frontends when...                                  | Prefer a monolithic React app when...                  |
| --------------------------------------------------------------- | ------------------------------------------------------ |
| Multiple teams own separate business domains.                   | One small or medium-sized team owns the product.       |
| Features need independent release cycles.                       | Features can be released together.                     |
| The codebase has genuine organizational or domain boundaries.   | Features share a lot of logic and state.               |
| Teams need autonomy over their build and development processes. | A single build and deployment pipeline is sufficient.  |
| A gradual migration from legacy UI is required.                 | The application is relatively new and straightforward. |

Example:

Imagine a banking platform with separate teams responsible for accounts, payments, loans and investments. Each team owns its roadmap and needs to deploy independently. Micro Frontends may be a good fit.

For a startup building a dashboard with five pages and one React team, a modular monolithic React application would usually be simpler and more efficient.

What I would say in an interview:

"I wouldn't introduce Micro Frontends just because an application is large or the codebase has many components. I would first use a well-structured React monolith with feature-based modules. If independent team ownership, deployment requirements and domain boundaries justify the extra complexity, I would consider Micro Frontends."

This answer demonstrates that you understand the trade-offs rather than treating Micro Frontends as a default solution.

## 5. What are the different ways to implement Micro Frontends?

Interview answer:

There are several ways to implement Micro Frontends, depending on when the applications are integrated and how they are composed.

[Introduction to Remix | Reflect](https://images.openai.com/static-rsc-4/hociZc4v_Su5KOkNuKo3pbK1QfBuAUKR1b8KFJ9ybMYU3Gu5V1gunW6PQ0ZBf-rjquJzgXsGbnp7h0-m5RoSJt_OLdYM84Le67VaCvLrs9O9Rz2YnB-KWtnnQoYFl_F5xN-wwVN3Bxn7IO3YASbmnd3nvQtlJ-rLHGzmJZ7IHHM?purpose=inline)

1\. Route-based composition

Each Micro Frontend owns a route or group of routes. A central router directs users to the appropriate application.

Example: `/products` belongs to the product app, while `/checkout` belongs to the checkout app.

Best for: strong feature boundaries and separate page ownership.

[SumTotal UI customization: Use Dashboards to Optimize User Experience](https://images.openai.com/static-rsc-4/p2fGetHAK-TGVVAPEtN3NsfnAHDyrVXO8i77jVznw9buVbdXNCp_ryTvhip5fk3IimT8S7V9qNEfOVbq2AX3WmRyjcAg_mPXkp5eXH03TPf8z5F123Wy_kBw7Ud7BQE-SU0U1w9L_P8ggOU-l_ugzdDki60rwclBANgtLOUgje4?purpose=inline)

2\. Web Components

Each team exposes a custom HTML element, which the host application embeds in the page. Frameworks can differ behind the component boundary.

Example: `<product-list></product-list>`

Best for: framework-neutral component boundaries and reusable UI modules.

[Advanced JavaScript Modules Explained: Building Clean, Reusable, and Flexible Code](https://images.openai.com/static-rsc-4/ya3w_iyb94TnsWGgQDP1oq2e4SgEGkroIifJ3ZQMaOvs_8sLWI3twGmqR_Bh-f_3nWHNZ7zlqy-zjiO2WE17yM8WiK_Xcd7SQTd4zYInjg4WIUVT-FI5MV9N9yC3wrUSOkjQTdd5yru41ewxkyuQKjtjZoQsd9g4sUREFaKhVOM?purpose=inline)

3\. Module Federation

A bundler such as Webpack 5 allows an application to expose modules that another application loads at runtime. The host can consume remote components or modules.

Example: a host React application loads a remote `ProductPage` component.

Best for: runtime sharing of components and dependencies between applications.

[Micro Frontend Framework Guide: Technical Integrations | Trend Micro (US)](https://images.openai.com/static-rsc-4/ymWv4xNAGA_XxBkRNKD35-ChFMCNc0vA1pCNqoV0Nrfk0O8vH7-yi_GDjGyST03TyokAWSNRw5aDCVvYUiAZcv6z1HMp5TXm87_8YRhy4GxiB2pYFpaScqW6Ml0siII-ao24HQMDkRfUQw6Bfom4sm09BuRKJGe-rLXXQftaDJ8?purpose=inline)

4\. Build-time package integration

Each team publishes its feature as a package. The main application installs the package and bundles it during the build.

Example: `@company/product-feature`.

Best for: reuse and modular development when independent runtime deployment is not essential.

[Micro Applications and Decomposition of UI | by Anil Sharma | trillo-platform | Medium](https://images.openai.com/static-rsc-4/W7XRxjfhAUtn6gMqoHllAOwbNcW1cfv3hVXsHHPG26j1F_4xTKtCYfwUxuUbFdJFi-1-ambr5ygtqsez4Jwp86rtQCm96cYqlYT5wG1jqfndmO8qgFvXZmTOKXI4q4a5yzw-QuNB6vrYj6VxAmblLntHmXsKi554vtd3EaeWCsk?purpose=inline)

5\. Server-side composition

A server or edge layer combines HTML fragments from multiple frontend applications before sending the page to the browser.

Best for: server-rendered experiences and cases where initial rendering or SEO is important.

[Che cos’è una Single Page Application (SPA)](https://images.openai.com/static-rsc-4/ZAMfDP3SIkMRARgWu-KMKC3tX7qTRN4jfuwVhe837lol1PJXyGBrq6rKqs8HD5Wjti1K6_QqSbntibdleVukO8wFELcJeeFoahnqF1y-B3hRoAJkev0raD6e1oVywdB3A1nuBBxrUkIXYestKwVgbkRgTyHiHCTTcFqxwjwBgzg?purpose=inline)

6\. Build-time or deployment-time page composition using separate applications

Independently built pages can be assembled through routing, reverse proxies or static-site generation. Navigation may load a separate document for each application.

Best for: loosely coupled pages that don't need seamless client-side composition.

Other approaches include iframe-based isolation and client-side composition frameworks such as single-spa.

React interview tip: Be ready to explain Module Federation, route-based composition, and build-time package integration in greater detail. These approaches highlight the main differences in deployment, coupling and runtime behavior.

## 6. What is the difference between build-time and runtime integration?

Interview answer:

Build-time integration combines frontend modules or packages during the application's build process. Runtime integration loads or composes independently deployed frontend applications while the application is running.

## Build-time integration

Product package + Cart package

Build / bundle

One deployable frontend

- Dependencies are resolved when building the application.
- The host generally needs a rebuild to consume an updated package version.
- Simpler runtime behavior and deployment architecture.
- Less runtime independence between feature teams.

  ## Runtime integration

  Host application

  Load remote application

  Render feature at runtime

- Remote modules or applications can be loaded while the user is using the application.
- A remote can often be updated without rebuilding the host, if its contract remains compatible.
- Supports independent deployment.
- Requires fallback behavior, compatibility management and runtime error handling.

| Aspect              | Build time                                | Runtime                             |
| ------------------- | ----------------------------------------- | ----------------------------------- |
| Integration happens | During build                              | During application execution        |
| Updating a feature  | Usually rebuild and redeploy the consumer | Can deploy the remote independently |
| Coupling            | Often tighter                             | Can be looser with stable contracts |
| Runtime complexity  | Usually lower                             | Usually higher                      |
| Example             | npm package consumed by React             | Webpack Module Federation remote    |

React example — build time:

```
import { ProductList } from "@company/products";

export default function App() {
  return <ProductList />;
}
```

The package is installed and bundled into the application during its build.

React example — runtime with Module Federation:

```
import React, { Suspense, lazy } from "react";

const ProductPage = lazy(
  () => import("products/ProductPage")
);

export default function App() {
  return (
    <Suspense fallback={<p>Loading products...</p>}>
      <ProductPage />
    </Suspense>
  );
}
```

Here, `products/ProductPage` is a federated module exposed by a remote application and configured in the bundler. It is not an ordinary npm import unless the federation setup defines that remote.

Important nuance: Runtime integration does not guarantee independent deployments, and build-time integration does not automatically make a project a Micro Frontend architecture. The key distinction is when composition occurs and how independently the parts can be released.

## 7. What is an App Shell in Micro Frontends?

Interview answer:

An App Shell is the main application framework or container that provides the common structure of the user interface and coordinates the Micro Frontends.

It typically owns global navigation, layout, routing, authentication integration, shared design-system elements, error handling and loading states.

App Shell(Navigation/Auth/Routing)
|
Feature mounting / composition
Products MFE (Product page) / Orders MFE(Order history)

Responsibilities of the App Shell:

- Provides a consistent header, navigation and page layout.
- Determines which Micro Frontend should render for a route.
- Coordinates authentication and session-related information.
- Defines shared UI standards and application-wide error handling.
- Manages loading states and integration boundaries.

What should NOT go into the App Shell?

It should not contain all the business logic of every feature. For example, product filtering belongs to the product application, and order-history logic belongs to the orders application.

How would you implement it in React?

The shell might use React Router to select routes and Module Federation to load remote components. Another implementation could use `single-spa` to register and mount independently built applications.

Key point: The App Shell coordinates the applications; it should not become a new monolith containing all their responsibilities.

## 8. How do you divide a large application into Micro Frontends?

Interview answer:

I would divide the application based on business capabilities, domain boundaries and team ownership rather than splitting it by technical layers such as components, hooks or API calls.

For example, in an e-commerce application, I might define:

| Micro Frontend   | Responsibilities                                        |
| ---------------- | ------------------------------------------------------- |
| Product Catalog  | Product listing, search, filtering and product details  |
| Shopping Cart    | Cart items, quantities and totals                       |
| Checkout         | Delivery information, payment UI and order confirmation |
| Account          | Profile, addresses and account settings                 |
| Order Management | Order history, tracking and returns                     |

### My approach, step by step

1. Identify business domains. Understand the product requirements and identify cohesive features that have clear responsibilities.
2. Map ownership to teams. Each Micro Frontend should ideally have a team that can develop, test and deploy it independently.
3. Define boundaries and contracts. Decide which routes each application owns, which APIs it uses, and how it communicates with other features.
4. Establish shared capabilities. Provide a design system, authentication integration, logging, monitoring and common tooling. Avoid sharing too much business-specific code.
5. Choose a composition strategy. Select routing, Module Federation, Web Components, server-side composition or another approach based on the actual requirements.
6. Plan state management. Keep feature-specific state inside its owning application. Share only necessary cross-feature information through well-defined interfaces.
7. Set up independent delivery and testing. Give each feature a build pipeline, unit tests, integration tests and clear deployment ownership.
8. Monitor and iterate. Measure performance, reliability and team delivery speed. Adjust boundaries if too much cross-application coordination emerges.

### How would you handle shared state?

This is a common follow-up question in frontend interviews.

I would avoid using a single global Redux store for every Micro Frontend because that can create tight coupling.

Instead:

- Local state: Use React state or feature-specific state management for data owned by one application.
- Shared authentication: Use a documented authentication/session contract.
- Cross-feature events: Use custom events or a typed event contract for loosely coupled communication.
- Server data: Prefer backend APIs or a shared data-fetching strategy for canonical business data.
- URL state: Use routes and query parameters for navigation state that should survive refreshes or be shareable.

For example, when a user adds a product to the cart, the product application could emit a `cart:item-added` event containing the necessary product identifier and quantity. The cart application listens for that event and updates its view or fetches the latest cart from the backend.

The backend should remain the source of truth for important business data such as prices, inventory and orders.

### What mistakes would you avoid?

- Splitting every React component into a separate Micro Frontend.
- Creating boundaries that force frequent cross-team communication.
- Duplicating shared dependencies without considering performance.
- Allowing every team to implement its own authentication and design system.
- Sharing internal component state across application boundaries.
- Ignoring compatibility, monitoring and end-to-end testing.

Strong interview conclusion: I would aim for high cohesion within each Micro Frontend and low coupling between Micro Frontends. Each one should represent a meaningful business capability that a team can own independently.

## Quick revision: 8 questions in one minute

| Question                              | Main point to remember                                                                       |
| ------------------------------------- | -------------------------------------------------------------------------------------------- |
| 1. What are Micro Frontends?          | Independently developed and potentially independently deployed frontend applications.        |
| 2. Micro Frontends vs Microservices?  | UI architecture vs backend service architecture.                                             |
| 3. Advantages and disadvantages?      | Team autonomy and delivery speed vs complexity and performance overhead.                     |
| 4. When should you use them?          | When organizational and deployment needs justify the extra complexity.                       |
| 5. Implementation methods?            | Routing, Web Components, Module Federation, package integration and server-side composition. |
| 6. Build time vs runtime?             | Integration during compilation vs composition while the application runs.                    |
| 7. What is an App Shell?              | The common container for layout, navigation and orchestration.                               |
| 8. How do you divide the application? | By business domains, clear ownership and stable contracts.                                   |

---

#### 2. React + Module Federation ⭐

# React + Webpack Module Federation — Interview Answers (9–18)

These are interview-ready answers for a Frontend Developer role, with React code examples, practical architecture diagrams, and important follow-up points.

## 9. What is Webpack Module Federation?

Interview answer:

Webpack Module Federation is a feature introduced in Webpack 5 that allows multiple separately built JavaScript applications to share code and load modules from one another at runtime.

In a Micro Frontend architecture, one React application can expose a component, and another React application can consume that component without bundling a copy of its source code into the host at build time.

For example, an e-commerce platform might have:

Host Application (Main React app · Navigation · Routing)
|
Loads remote modules at runtime
|
Products Remote (ProductList) /Cart Remote(CartWidget)

Why use Module Federation?

- Independently deployable frontend features.
- Runtime loading of components from remote applications.
- Sharing of dependencies such as React and ReactDOM.
- Reduced duplication when compatible dependencies are shared.
- Independent build pipelines for different teams.

Example: The product team deploys a new `ProductList` implementation. The host can load the updated remote without rebuilding, provided the host's remote configuration and the exposed module's contract remain compatible.

Important: Module Federation is not a complete Micro Frontend architecture by itself. You still need to design routing, authentication, communication, deployment, monitoring and failure handling.

## 10. How does Module Federation work internally?

Interview answer:

Module Federation works by allowing one Webpack build to expose modules and another build to consume them at runtime. The builds exchange module information and coordinate access to shared dependencies through a runtime mechanism.

The main pieces are:

1. Remote entry: A JavaScript file, commonly `remoteEntry.js`, that provides the remote's module interface.
2. Exposes: The modules or components the remote makes available.
3. Remotes: The remote applications or module containers a host can access.
4. Shared scope: A mechanism for managing shared dependencies such as React.
5. Runtime loading: The host loads the remote container, initializes it and requests the exposed module.

1\. Host application starts

2\. Load remoteEntry.js

Remote module metadata and container interface

3\. Initialize shared scope

Resolve compatible shared dependencies

4\. Load exposed module

For example, products/ProductList

5\. Render the React component

A simplified sequence of operations looks like this:

- The host requests the remote entry script.
- The remote entry exposes a container interface.
- The host initializes the remote with its shared dependency scope.
- The host requests a specific exposed module.
- The remote provides the module's factory, and the runtime obtains its exports.
- React renders the returned component.

What happens behind the scenes?

Webpack generates runtime code that coordinates module loading, chunk loading and dependency sharing. The remote entry does not normally contain every remote component's code; it can refer to additional chunks that must be downloaded.

Key interview point: Module Federation is more than dynamically importing a JavaScript file. It provides a runtime mechanism for loading modules across independently compiled builds and coordinating shared dependencies.

## 11. What are Host and Remote applications?

Interview answer:

In Module Federation, the Host is the application that consumes modules from other applications, while a Remote is an application that exposes modules for other applications to consume.

| Host application                             | Remote application                           |
| -------------------------------------------- | -------------------------------------------- |
| Consumes exposed modules                     | Exposes modules                              |
| Defines remote configuration                 | Defines exposed modules                      |
| Usually controls the main application layout | Owns its feature's UI and business logic     |
| Loads remote modules at runtime              | Publishes remote entry and associated chunks |
| Can consume multiple remotes                 | Can be consumed by multiple hosts            |

For example, a shopping platform could have a shell application that loads products, cart and account features from separate remotes.

A remote can also act as a host for another remote. These roles are determined by the federation configuration, not by a permanent property of the application.

Simple configuration example:

Host:

```
new ModuleFederationPlugin({
  name: "host",
  remotes: {
    products:
      "products@http://localhost:3001/remoteEntry.js",
  },
});
```

Remote:

```
new ModuleFederationPlugin({
  name: "products",
  filename: "remoteEntry.js",
  exposes: {
    "./ProductList": "./src/ProductList",
  },
});
```

Here, `host` consumes a module exposed by `products`.

Key point: Host and Remote describe the application's role in a federation relationship. They do not necessarily describe which application is larger or more important.

## 12. How do you expose a React component from one application and consume it in another?

Interview answer:

I would configure Module Federation in the remote application to expose the React component, then configure the host to reference that remote and dynamically import the exposed module.

Let's walk through an example using two React applications.

Example setup: Webpack 5, React and ReactDOM, using the standard ModuleFederationPlugin.

### Step 1: Create the remote component

In the Products application:

```
// src/ProductList.jsx

import React from "react";

export default function ProductList() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>Laptop</li>
        <li>Headphones</li>
      </ul>
    </div>
  );
}
```

### Step 2: Expose the component

Configure the Products application's Webpack setup:

```
// webpack.config.js

const { ModuleFederationPlugin } =
  require("webpack").container;

module.exports = {
  // Other Webpack configuration...

  output: {
    publicPath: "auto",
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",

      exposes: {
        "./ProductList": "./src/ProductList",
      },

      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.0.0",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.0.0",
        },
      },
    }),
  ],
};
```

The remote publishes its container entry and exposes the component as `./ProductList`.

### Step 3: Configure the host

In the Host application's Webpack configuration:

```
new ModuleFederationPlugin({
  name: "host",

  remotes: {
    products:
      "products@http://localhost:3001/remoteEntry.js",
  },

  shared: {
    react: {
      singleton: true,
      requiredVersion: "^18.0.0",
    },
    "react-dom": {
      singleton: true,
      requiredVersion: "^18.0.0",
    },
  },
});
```

This example assumes the remote is served at port `3001` and that the host and remote use compatible React versions. The host and remote also need the appropriate entry points and development-server configuration.

### Step 4: Consume the remote component

```
// src/App.jsx

import React, { Suspense, lazy } from "react";

const ProductList = lazy(
  () => import("products/ProductList")
);

export default function App() {
  return (
    <div>
      <h1>My Shopping Application</h1>

      <Suspense fallback={<p>Loading products...</p>}>
        <ProductList />
      </Suspense>
    </div>
  );
}
```

### What happens when the application runs?

1. The host starts.
2. The user navigates to the page containing the product list.
3. React requests the remote module through the dynamic import.
4. Webpack loads the remote entry and any required chunks.
5. The remote component is resolved and rendered by React.

Important: `React.lazy()` handles lazy component loading, and `Suspense` displays a loading fallback. Neither one alone handles all network failures or incompatible remote versions; those need additional error handling.

## 13. How do you share React and ReactDOM between Micro Frontends?

Interview answer:

I would configure React and ReactDOM as shared dependencies in Module Federation. For React applications that render federated components into the same React tree, I would generally configure compatible versions as singletons.

For example:

```
shared: {
  react: {
    singleton: true,
    requiredVersion: "^18.0.0",
  },

  "react-dom": {
    singleton: true,
    requiredVersion: "^18.0.0",
  },
}
```

### Why share React?

If each Micro Frontend loads a separate React instance, it can increase the JavaScript bundle size and cause problems when components cross React instance boundaries.

A common example is the Invalid Hook Call error, which can occur when a component uses a different React instance from the one expected by the renderer.

Sharing compatible React and ReactDOM instances helps avoid these issues.

### How does it work?

- `shared` identifies dependencies that can be shared across builds.
- `singleton: true` requests one shared instance for that dependency within the relevant federation share scope.
- `requiredVersion` declares the acceptable dependency version range.
- Webpack's runtime negotiates available shared versions according to the configured sharing rules.

### Should every dependency be shared?

No. I would prioritize dependencies that are large or need to be shared for correctness, such as React and ReactDOM.

For smaller utility libraries, sharing might add unnecessary coupling or version constraints. Sometimes bundling a small dependency independently is a better choice.

Interview takeaway: Share React and ReactDOM when multiple federated components participate in the same React rendering context, and align versions across teams wherever possible.

## 14. What happens if two Micro Frontends use different React versions?

Interview answer:

Using different React versions can cause dependency negotiation issues, duplicate React instances, increased bundle size and potentially runtime errors. The exact outcome depends on the versions, the federation configuration and how the applications are composed.

Consider these scenarios:

| Scenario                                                                   | Possible result                                                  |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Same compatible version, shared singleton                                  | Usually the simplest setup                                       |
| Compatible but different minor versions                                    | May work if the versions satisfy the configured requirements     |
| Incompatible versions with a singleton                                     | Version warnings or runtime failures, depending on configuration |
| Different React instances in the same rendering context                    | Potential invalid hook calls or other React compatibility issues |
| Separate applications using different React versions with strict isolation | Can work, but needs careful integration and testing              |

### How would I solve this?

Option 1: Align React versions.

Keep React and ReactDOM on compatible versions across applications. This is generally my preferred approach when components are shared within one React tree.

Option 2: Configure shared dependency versions carefully.

```
shared: {
  react: {
    singleton: true,
    strictVersion: true,
    requiredVersion: "^18.0.0",
  },

  "react-dom": {
    singleton: true,
    strictVersion: true,
    requiredVersion: "^18.0.0",
  },
}
```

With strict version enforcement, incompatible versions can cause loading to fail rather than silently accepting a version outside the required range. This can improve safety but requires reliable deployment and compatibility practices.

Option 3: Isolate the applications.

If two teams must use incompatible React versions, I would consider stronger boundaries, such as Web Components with separate rendering roots or iframe isolation. This changes how components communicate and how styles, events and dependencies are managed.

Important nuance: `singleton: true` does not magically make incompatible React versions compatible. It controls sharing within the relevant scope, and version negotiation still matters.

## 15. What are `singleton`, `requiredVersion`, and `shared` dependencies in Module Federation?

Interview answer:

These options control how dependencies are shared between the Host and Remote applications.

## 1. `shared`

Specifies dependencies that participating builds can share instead of always bundling their own copies.

```
shared: ["react", "react-dom"]
```

This is useful for common libraries and framework dependencies.

## 2. `singleton`

Requests a single shared instance of a dependency within the applicable share scope.

```
react: {
  singleton: true
}
```

This is particularly important for React when federated components use the host's React renderer.

## 3. `requiredVersion`

Specifies the semantic version range a build requires for the shared dependency.

```
react: {
  requiredVersion: "^18.0.0"
}
```

This communicates compatibility requirements to the federation runtime.

### Combined configuration

```
shared: {
  react: {
    singleton: true,
    requiredVersion: "^18.0.0",
    strictVersion: true,
  },

  "react-dom": {
    singleton: true,
    requiredVersion: "^18.0.0",
    strictVersion: true,
  },
}
```

Here's what the options mean together:

- `shared`: React participates in dependency sharing.
- `singleton`: Webpack should use a single shared React instance in the relevant scope.
- `requiredVersion`: The consumer declares the acceptable React version range.
- `strictVersion`: An incompatible version can result in a runtime error instead of being accepted.

One important detail is that `requiredVersion` does not install or upgrade React. It defines a compatibility requirement for runtime dependency resolution.

Good interview answer: "I use `shared` to avoid unnecessary duplication, `singleton` when multiple federated components need the same framework instance, and `requiredVersion` to declare compatibility constraints."

## 16. How would you dynamically load a Remote application at runtime?

Interview answer:

I would use runtime remote configuration when the remote URL needs to be determined dynamically, for example based on the deployment environment, tenant, feature flag or remote version.

There are two common approaches.

### Approach A: Runtime configuration with a known remote

The host can read a remote URL from runtime configuration rather than hardcoding the URL into the build.

For example, a configuration file served alongside the host might contain:

```
{
  "products": "https://cdn.example.com/products/remoteEntry.js"
}
```

The host can then use the configured URL to load the remote through a runtime-aware federation setup.

### Approach B: Dynamic remote resolution

Webpack Module Federation supports promise-based remote definitions, which can resolve a remote container dynamically.

A simplified configuration pattern is:

```
remotes: {
  products: `promise new Promise(resolve => {
    const url =
      window.runtimeConfig.productsRemoteUrl;

    const script = document.createElement("script");

    script.src = url;
    script.onload = () => {
      resolve({
        get: request => window.products.get(request),
        init: arg => {
          try {
            return window.products.init(arg);
          } catch (e) {
            // Handle duplicate initialization
          }
        }
      });
    };

    document.head.appendChild(script);
  })`
}
```

This is an illustrative pattern, not a complete production-ready implementation. In particular, it needs explicit handling for script load errors, timeouts, remote identity, initialization and trust validation. The remote's global name must match the configured application.

The application can then consume the remote normally:

```
const ProductPage = React.lazy(
  () => import("products/ProductPage")
);
```

### Why use dynamic loading?

- Different remote URLs for development, staging and production.
- Feature flags or tenant-specific frontend implementations.
- Controlled rollout of remote versions.
- Independent deployments without rebuilding the host.

Security consideration: Never load arbitrary remote URLs from untrusted input. A remote script executes code in the page's JavaScript context and should be treated as trusted application code.

## 17. What happens if a Remote application is unavailable?

Interview answer:

If a remote is unavailable, the host may fail to load its remote entry, fail to download one of its chunks, or fail while resolving or rendering the exposed component.

I would design the host so that a failure in one Micro Frontend does not unnecessarily crash the entire application.

### How I would handle it

1. Add an error boundary around the remote component to catch rendering errors.
2. Show a fallback UI instead of leaving a blank page.
3. Handle loading failures from the dynamic import and provide retry or recovery options.
4. Configure timeouts and monitoring for failed remote requests.
5. Keep independent routes usable when one remote fails.
6. Use deployment health checks and rollback procedures to reduce the impact of bad releases.

### Example: Error boundary

```
import React from "react";

class RemoteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <p>Feature temporarily unavailable.</p>;
    }

    return this.props.children;
  }
}

export default RemoteErrorBoundary;
```

Use it with a lazily loaded remote:

```
<Suspense fallback={<p>Loading products...</p>}>
  <RemoteErrorBoundary>
    <ProductPage />
  </RemoteErrorBoundary>
</Suspense>
```

### Important React detail

An error boundary handles errors during rendering and related lifecycle work in its descendant tree. It does not, by itself, catch every rejected dynamic import or network failure.

To cover those failures, I would also handle the lazy import's rejected promise, for example with a controlled retry strategy, and show an appropriate fallback after retries are exhausted.

Interview takeaway: "I design Micro Frontends for graceful degradation. If the recommendations remote fails, users should still be able to access checkout or their account wherever those features are independent."

## 18. How do you handle versioning of Remote applications?

Interview answer:

I would version remote deployments independently while maintaining compatibility between the host and the remote. The key is to avoid making the host depend on an unstable remote deployment URL or an incompatible exposed module.

### Common strategies

| Strategy                        | How it works                                                  | Best use                                                       |
| ------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------------- |
| Immutable versioned URLs        | Each release has its own remote entry and assets              | Reliable rollbacks and reproducible releases                   |
| Stable remote URL               | The URL points to the current approved release                | Simple deployments where latest-version behavior is acceptable |
| Runtime manifest                | A configuration file maps remote names to approved URLs       | Environment-specific deployments and controlled rollouts       |
| Semantic versioning             | Releases communicate backward-compatible and breaking changes | Coordinating exposed APIs and contracts                        |
| Canary or blue-green deployment | Gradually routes users to a new release                       | Safer production rollouts                                      |

### Example: Versioned remote URL

```
https://cdn.example.com/products/1.4.0/remoteEntry.js
https://cdn.example.com/products/1.5.0/remoteEntry.js
```

A runtime manifest can map the `products` remote to a particular release. If version `1.5.0` introduces a breaking change, the team can continue pointing the host to `1.4.0` until compatibility is verified.

### My deployment strategy

- Publish immutable assets for each release.
- Keep the remote's exposed module names and contracts stable when possible.
- Use a runtime manifest to control which version the host loads.
- Test host-remote compatibility in CI/CD before production rollout.
- Use canary deployments and monitor loading errors and application performance.
- Retain a known-good version for rollback.
- Apply caching rules carefully: versioned assets can be cached aggressively, while mutable manifests need appropriate cache invalidation.

Important distinction: Module Federation does not automatically provide a complete version management or rollback system. Those capabilities must be implemented through your deployment platform, manifest/configuration strategy and release process.

## Final revision: Questions 9–18

| Question                                      | One-line answer                                                                                            |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| 9. What is Module Federation?                 | A Webpack 5 feature for exposing and consuming modules across independently built applications at runtime. |
| 10. How does it work internally?              | A remote container exposes modules, and the runtime loads those modules and resolves shared dependencies.  |
| 11. Host vs Remote?                           | The Host consumes modules; the Remote exposes them.                                                        |
| 12. Expose and consume a component?           | Configure `exposes` in the remote, `remotes` in the host, and dynamically import the exposed module.       |
| 13. How do you share React?                   | Configure React and ReactDOM under `shared`, often using `singleton: true`.                                |
| 14. Different React versions?                 | They can cause dependency conflicts, duplicate instances or runtime errors.                                |
| 15. `singleton`, `requiredVersion`, `shared`? | They control shared dependency registration, single-instance preference and version compatibility.         |
| 16. Dynamic remote loading?                   | Resolve a remote URL at runtime using a runtime manifest or dynamic remote configuration.                  |
| 17. Remote unavailable?                       | Handle loading and rendering failures with retries, fallbacks, error boundaries and monitoring.            |
| 18. Remote versioning?                        | Use immutable releases, compatibility contracts, runtime manifests and controlled rollouts.                |

My advice for the interview: Be especially prepared to explain questions 12–17 using code and real-world scenarios. Interviewers often use them to check whether you understand runtime dependency sharing, React compatibility and production failure handling—not just the Module Federation configuration syntax.
