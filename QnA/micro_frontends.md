### 🔥 Top Micro Frontends Interview Questions

#### 1. Fundamentals

1. **What are Micro Frontends? Why would you use them?**
2. **How are Micro Frontends different from Microservices?**
3. **What are the advantages and disadvantages of Micro Frontends?**
4. **When would you choose Micro Frontends over a monolithic React application?**
5. **What are the different ways to implement Micro Frontends?**
6. **What is the difference between build-time and runtime integration?**
7. **What is an App Shell in Micro Frontends?**
8. **How do you divide a large application into Micro Frontends?**

#### 2. React + Module Federation ⭐

9. **What is Webpack Module Federation?**
10. **How does Module Federation work internally?**
11. **What are Host and Remote applications?**
12. **How do you expose a React component from one application and consume it in another?**
13. **How do you share React and ReactDOM between Micro Frontends?**
14. **What happens if two Micro Frontends use different React versions?**
15. **What are `singleton`, `requiredVersion`, and `shared` dependencies in Module Federation?**
16. **How would you dynamically load a Remote application at runtime?**
17. **What happens if a Remote application is unavailable?**
18. **How do you handle versioning of Remote applications?**

#### 3. Communication ⭐

19. **How should Micro Frontends communicate with each other?**
20. **Would you use Redux across Micro Frontends? Why or why not?**
21. **How can you share authentication state between Micro Frontends?**
22. **How would you implement communication using Custom Events?**
23. **How do you share data without tightly coupling Micro Frontends?**
24. **How would you handle cross-MFE navigation?**
25. **How do you share a global user/session context?**

#### 4. Routing

26. **How do you implement routing in a Micro Frontend architecture?**
27. **How would React Router work across multiple Micro Frontends?**
28. **Who should own the routing—the shell or individual Micro Frontends?**
29. **How do you handle deep links and browser refreshes?**
30. **How would you handle authentication-protected routes across MFEs?**

#### 5. State Management

31. **Should each Micro Frontend have its own Redux store?**
32. **When should state be local vs shared?**
33. **How would you share Redux state between Micro Frontends?**
34. **What problems can arise from having a global store?**
35. **How would you synchronize state between independently deployed applications?**

#### 6. Deployment & DevOps

36. **What does independent deployment mean in Micro Frontends?**
37. **How would you deploy a React Micro Frontend independently?**
38. **How do you roll back a single Micro Frontend?**
39. **How do you handle CDN/cache issues with Remote Entry files?**
40. **How would you implement CI/CD for multiple Micro Frontends?**
41. **How do you manage environment-specific Remote URLs?**

#### 7. Performance ⭐

42. **What are the performance challenges of Micro Frontends?**
43. **How can you prevent loading unnecessary Micro Frontends?**
44. **How does code splitting help Micro Frontends?**
45. **How would you lazy-load a Remote React application?**
46. **What happens when multiple MFEs load the same dependency?**
47. **How would you optimize initial page load?**

#### 8. Styling & UI

48. **How do you prevent CSS conflicts between Micro Frontends?**
49. **Would you use CSS Modules, Shadow DOM, or styled-components? Why?**
50. **How would you share a design system between Micro Frontends?**
51. **How do you ensure all MFEs have a consistent UI?**
52. **How do you handle different versions of a shared UI component library?**

#### 9. Error Handling & Security

53. **How do you handle a failed Micro Frontend gracefully?**
54. **How would you implement an Error Boundary around a Remote?**
55. **What security risks exist in Module Federation?**
56. **Can a malicious Remote compromise the Host application?**
57. **How do you validate or control which Remote applications can be loaded?**

#### 10. Scenario-Based Questions ⭐⭐⭐

These are particularly common for **senior React / frontend architect interviews**:

58. **You have a large e-commerce application. How would you split it into Micro Frontends?**

59. **The Checkout team wants to deploy independently from the Product team. How would you design the architecture?**

60. **Two MFEs need to share the logged-in user's information. How would you implement it?**

61. **Your Remote application is down in production. What should the user see?**

62. **Two Micro Frontends require different versions of the same npm package. How would you handle it?**

63. **Your application has 10 Micro Frontends and initial load has become slow. How would you optimize it?**

64. **One team wants React 18 while another wants a newer React version. Can both coexist? What are the trade-offs?**

65. **How would you migrate a large existing React monolith to Micro Frontends without rewriting everything?**

66. **How would you design Micro Frontends so that teams can work independently without creating excessive coupling?**

---

### 💻 A very common coding/design question

You may be asked:

> **"Design a React Micro Frontend architecture for an e-commerce application."**

A good answer would discuss something like:

```text
                    ┌─────────────────┐
                    │    App Shell     │
                    │   / Container    │
                    └────────┬────────┘
                             │
          ┌──────────────────┼──────────────────┐
          │                  │                  │
          ▼                  ▼                  ▼
     Product MFE        Cart MFE          Checkout MFE
          │                  │                  │
          └──────────────────┼──────────────────┘
                             │
                       Shared Services
                    Auth / Design System
```

Then explain:

- **Shell** → global layout, authentication, navigation
- **Product MFE** → product/catalog functionality
- **Cart MFE** → shopping cart
- **Checkout MFE** → checkout/payment
- **Shared libraries** → React, UI components, utilities
- **Communication** → events/API contracts rather than excessive shared state
- **Deployment** → each MFE independently deployable
- **Failure isolation** → Error Boundaries + fallbacks

### ⭐ If you're preparing for a senior React interview

I'd prioritize these **10 questions**:

1. What problem do Micro Frontends solve?
2. Explain **Webpack Module Federation**.
3. Host vs Remote?
4. How do you share dependencies like React?
5. How do MFEs communicate?
6. How do you manage shared state?
7. How do you handle routing?
8. How do you handle a failed Remote?
9. How do you optimize MFE performance?
10. **Design a production-ready React Micro Frontend architecture.**
