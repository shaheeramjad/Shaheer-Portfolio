export const articles = [
  {
    slug: "think-like-an-engineer",
    category: "Engineering mindset",
    title: "Think Like an Engineer, Not Just a Programmer",
    description:
      "The mindset shift from collecting technologies to understanding systems, evaluating trade-offs, and solving unfamiliar problems.",
    published: "August 2, 2026",
    readingTime: "5 min read",
    intro:
      "When I started learning software engineering, I believed success came from knowing more technologies. I spent countless hours learning frameworks, databases, cloud services, and design patterns. Every time a new tool became popular, I felt like I had to learn it immediately.",
    sections: [
      {
        paragraphs: [
          "Over time, I noticed something interesting.",
          "The engineers I admired most were not necessarily the ones who knew every framework. They were the ones who stayed calm when they faced unfamiliar problems. They asked better questions. They broke problems into smaller pieces. Most importantly, they understood why something worked instead of simply knowing that it did.",
          "That completely changed how I approach learning.",
        ],
      },
      {
        heading: "The Difference Between Knowing and Understanding",
        paragraphs: [
          "There is a huge difference between following a tutorial and understanding the reasoning behind it.",
          "For example, most developers know that caching improves application performance. But fewer people stop to ask why it works, when it should be used, and what new problems it might introduce.",
          "The moment you understand the reasoning behind a solution, you stop depending on memorization.",
          "Instead of remembering answers, you start building the ability to discover them.",
          "That is a skill that remains valuable no matter which technology becomes popular next.",
        ],
      },
      {
        heading: "Everything in Software Is Connected",
        paragraphs: [
          "One lesson that changed the way I think is that software systems are never isolated.",
          "A small change in one service can affect databases, APIs, monitoring, memory usage, deployment pipelines, and even the experience of end users.",
          "Something as simple as introducing a cache can improve response times while also creating stale data, increasing memory usage, and making debugging more difficult.",
          "Every decision has consequences.",
          "Good engineers think beyond the first result and consider what might happen next.",
        ],
      },
      {
        heading: "Don't Celebrate Metrics Too Quickly",
        paragraphs: [
          "Imagine deploying a new feature and seeing CPU usage drop by 30 percent.",
          "At first glance, it sounds like a success.",
          "But what if requests are failing before they reach your application? What if users are seeing errors instead of responses?",
          "Metrics without context can be misleading. Before celebrating improvements, I think it is important to ask a simple question.",
        ],
        callout:
          "What evidence proves that users are actually having a better experience?",
        after:
          "Numbers become meaningful only when they tell the complete story.",
      },
      {
        heading: "Ask Better Questions",
        paragraphs: [
          "Whenever I get stuck on a technical problem, I try to avoid jumping directly into solutions.",
          "Instead, I ask myself questions like these.",
        ],
        bullets: [
          "What problem am I actually trying to solve?",
          "What assumptions am I making?",
          "What evidence supports my conclusion?",
          "What could happen if this change fails?",
          "How will this affect other parts of the system?",
        ],
        after:
          "These questions often lead to better solutions than immediately searching for another code snippet.",
      },
      {
        heading: "Technology Will Change. Thinking Will Not.",
        paragraphs: [
          "Programming languages evolve. Frameworks come and go. New tools appear every year.",
          "The ability to think clearly is what stays relevant. Companies are not only hiring people who can write code.",
          "They are looking for engineers who can understand systems, evaluate trade-offs, solve unfamiliar problems, and make thoughtful decisions.",
          "That is the kind of engineer I want to become.",
          "Every project I build reminds me that learning another framework is useful, but learning how to think is what creates long-term value.",
        ],
      },
      {
        heading: "Final Thoughts",
        paragraphs: [
          "One of the biggest mindset shifts in my software engineering journey has been realizing that coding is only part of the job.",
          "Engineering is about understanding problems deeply enough to design reliable solutions.",
          "The more I learn, the more I believe that great engineers are not defined by the number of technologies on their résumé. They are defined by the quality of their thinking.",
        ],
        callout:
          "What mindset has made the biggest difference in your engineering journey? I would love to hear your perspective",
      },
    ],
  },
  {
    slug: "event-driven-microservices-kubernetes",
    category: "Architecture",
    title: "Building event-driven microservices with Kubernetes",
    description:
      "A practical architecture guide to service decomposition, asynchronous communication, CQRS, eventual consistency, and Kubernetes deployment.",
    published: "July 1, 2026",
    readingTime: "12 min read",
    originalUrl:
      "https://www.linkedin.com/pulse/building-event-driven-microservices-kubernetes-practical-amjad-fmhqf/",
    intro:
      "As modern applications continue to grow in complexity, traditional monolithic architectures often struggle to meet the demands of scalability, maintainability, and independent deployment. A change in one component can impact unrelated parts of the system, making development slower and increasing operational risk.",
    sections: [
      {
        paragraphs: [
          "Event-driven microservices address these challenges by decomposing applications into independent services that communicate asynchronously through events rather than direct API calls. This architectural approach enables teams to develop, deploy, and scale services independently while improving resilience and reducing coupling between system components.",
          "This article explores the fundamental concepts behind event-driven microservices, including service decomposition, asynchronous communication, CQRS, eventual consistency, and Kubernetes-based deployment. A simple blog application demonstrates how these concepts work together. The application itself is not the focus; it serves as a practical architectural case study.",
        ],
      },
      {
        heading: "Why event-driven microservices?",
        paragraphs: [
          "Monolithic applications are often the preferred choice for small projects because they are easy to build and deploy. However, as applications evolve, several architectural challenges begin to emerge.",
        ],
        subsections: [
          {
            heading: "Tight coupling",
            paragraphs: [
              "Business logic, data access, and presentation layers frequently become interconnected. A seemingly minor change in one feature can unintentionally affect unrelated components, making the system increasingly difficult to maintain.",
            ],
          },
          {
            heading: "Limited scalability",
            paragraphs: [
              "In a monolithic architecture, scaling usually means replicating the entire application, even when only one component experiences increased demand. This leads to inefficient resource utilization and higher infrastructure costs.",
            ],
          },
          {
            heading: "Synchronous dependencies",
            paragraphs: [
              "Services that rely heavily on synchronous communication become tightly dependent on one another. If one service becomes unavailable or experiences high latency, failures can quickly propagate throughout the system.",
            ],
          },
          {
            heading: "Diverse data requirements",
            paragraphs: [
              "Different consumers often require different representations of the same data. Operational services typically work with normalized data optimized for transactions, while user interfaces and reporting systems require aggregated, denormalized views optimized for reading.",
            ],
          },
        ],
        after:
          "Event-driven microservices address these challenges by allowing services to own their business capabilities and communicate through events instead of tightly coupled synchronous interactions.",
      },
      {
        heading: "Core components of an event-driven architecture",
        paragraphs: [
          "Although implementations vary, most event-driven microservices architectures include the following components.",
        ],
        subsections: [
          {
            heading: "Client applications",
            paragraphs: [
              "Clients initiate requests by interacting with backend services through APIs. These clients may be web applications, mobile applications, or external systems.",
            ],
          },
          {
            heading: "API Gateway or Kubernetes Ingress",
            paragraphs: [
              "An API Gateway or Kubernetes Ingress acts as the entry point into the system, routing incoming requests to the appropriate microservice while hiding internal infrastructure details.",
            ],
          },
          {
            heading: "Independent microservices",
            paragraphs: [
              "Each microservice is responsible for a single business capability and maintains its own logic and data. Typical services might include user management, order processing, inventory, payments, notifications, or moderation.",
              "Because services operate independently, they can be developed, tested, deployed, and scaled without impacting the rest of the system.",
            ],
          },
          {
            heading: "Event bus or message broker",
            paragraphs: [
              "Instead of invoking other services directly, microservices publish events describing changes in state. An event bus or message broker distributes these events to every interested consumer, enabling asynchronous communication and reducing direct dependencies between services.",
              "Common production technologies include Apache Kafka, RabbitMQ, NATS, and AWS EventBridge.",
            ],
          },
          {
            heading: "Read models",
            paragraphs: [
              "Rather than querying multiple services for every request, dedicated read models aggregate information from published events into structures optimized for querying.",
              "This separation allows applications to provide fast, efficient reads while keeping write operations focused on business logic.",
            ],
          },
        ],
      },
      {
        heading: "Understanding the event flow",
        paragraphs: [
          "Consider a simple blog platform. When a user creates a post, the Posts Service validates and stores the data before publishing a PostCreated event.",
          "The Event Bus distributes this event to all subscribed services. A Query Service consumes the event and updates its read model, while other services may ignore it if it is not relevant to their responsibilities.",
          "When a user submits a comment, the Comments Service stores the comment with a Pending status and publishes a CommentCreated event.",
          "The Moderation Service consumes the event, evaluates the comment, and publishes a CommentModerated event indicating whether the comment has been approved or rejected.",
          "The Comments Service then updates the comment status and emits a CommentUpdated event. Finally, the Query Service consumes these events to maintain an aggregated, read-optimized representation of posts and their associated comments.",
          "Although this example uses a blogging platform, the same architectural workflow applies to domains such as e-commerce, banking, logistics, healthcare, and IoT systems.",
        ],
      },
      {
        heading: "Key architectural patterns",
        subsections: [
          {
            heading: "Microservices by business capability",
            paragraphs: [
              "Each service owns a specific business domain and is responsible for its own functionality and data. Examples include user management, orders, payments, inventory, notifications, and analytics.",
              "This separation promotes maintainability and allows teams to evolve services independently.",
            ],
          },
          {
            heading: "Event-driven communication",
            paragraphs: [
              "Rather than making direct service-to-service calls, services communicate through events. This significantly reduces coupling and allows new services to subscribe to existing events without requiring changes to existing components.",
              "For example, adding analytics, auditing, or notification services may only require subscribing to previously published events.",
            ],
          },
          {
            heading: "CQRS",
            paragraphs: [
              "Command Query Responsibility Segregation separates write operations from read operations. Write models handle business transactions, while read models maintain optimized views specifically designed for querying and presentation.",
              "This separation simplifies business logic and improves scalability for read-heavy applications.",
            ],
          },
          {
            heading: "Eventual consistency",
            paragraphs: [
              "Unlike monolithic systems that often rely on immediate consistency, event-driven architectures embrace eventual consistency.",
              "Once an event is published, downstream services update their local state asynchronously until the entire system reaches a consistent state. Although updates are not instantaneous, this model significantly improves scalability and resilience.",
            ],
          },
          {
            heading: "Read projections",
            paragraphs: [
              "Read projections aggregate events into data structures optimized for client applications. Instead of joining data from multiple services at runtime, applications query these projections directly, resulting in lower latency and an improved user experience.",
            ],
          },
          {
            heading: "Containerization and Kubernetes",
            paragraphs: [
              "Microservices are commonly packaged as Docker containers and orchestrated using Kubernetes. This infrastructure allows each service to operate independently while simplifying deployment and operations.",
            ],
            bullets: [
              "Service discovery.",
              "Load balancing.",
              "Automatic scaling.",
              "Self-healing.",
              "Rolling updates.",
              "High availability.",
            ],
          },
        ],
      },
      {
        heading: "Benefits of event-driven microservices",
        subsections: [
          {
            heading: "Independent deployment",
            paragraphs: ["Each service can be deployed without requiring changes to the rest of the system."],
          },
          {
            heading: "Improved scalability",
            paragraphs: ["Only the services experiencing increased demand need additional resources."],
          },
          {
            heading: "Better fault isolation",
            paragraphs: ["Failures are typically isolated within individual services, reducing the likelihood of cascading system failures."],
          },
          {
            heading: "Greater flexibility",
            paragraphs: ["New capabilities can often be introduced by subscribing to existing events rather than modifying existing services."],
          },
          {
            heading: "Faster development",
            paragraphs: ["Small, focused services enable development teams to work independently with fewer merge conflicts and shorter release cycles."],
          },
        ],
      },
      {
        heading: "Challenges and tradeoffs",
        subsections: [
          {
            heading: "Eventual consistency",
            paragraphs: ["Data may temporarily differ across services until all events have been processed."],
          },
          {
            heading: "Increased operational complexity",
            paragraphs: ["Managing multiple services requires robust monitoring, logging, observability, and deployment automation."],
          },
          {
            heading: "Reliable event delivery",
            paragraphs: ["Production systems require durable messaging platforms capable of handling retries, failures, ordering, and persistence."],
          },
          {
            heading: "Distributed data management",
            paragraphs: ["Since each service owns its own data, implementing distributed transactions becomes significantly more complex than in monolithic systems."],
          },
        ],
      },
      {
        heading: "When should you use event-driven microservices?",
        paragraphs: ["This architecture is particularly suitable when:"],
        bullets: [
          "Different business domains evolve independently.",
          "High scalability is required.",
          "Teams deploy services independently.",
          "Business processes are naturally asynchronous.",
          "Systems need to integrate with multiple downstream consumers.",
          "High availability and resilience are important.",
        ],
        callout:
          "For smaller applications or teams, a monolithic architecture may remain the simpler and more practical choice until complexity justifies decomposition.",
      },
    ],
  },
  {
    slug: "vcpkg-libffi-windows-metacall",
    category: "Open source",
    title: "Investigating how vcpkg builds libffi on Windows",
    description:
      "An investigation into vcpkg's evolving libffi build process, its current Autotools workflow on Windows, and the architectural tradeoffs considered while contributing to MetaCall.",
    published: "June 30, 2026",
    readingTime: "8 min read",
    originalUrl:
      "https://www.linkedin.com/pulse/investigating-how-vcpkg-builds-libffi-windows-while-metacall-amjad-z2vqf/",
    intro:
      "When contributing to MetaCall, I was assigned a seemingly straightforward task: help bring libffi support to the Windows CI pipeline without introducing a dependency on vcpkg.",
    sections: [
      {
        paragraphs: [
          "At first glance, it looked like a simple engineering task. The pull request discussion pointed to an older vcpkg implementation that supposedly built libffi using CMake, so I expected to reuse the same idea inside MetaCall's existing ExternalProject_Add infrastructure.",
          "A few hours later, I realized the story was much more interesting.",
        ],
        callout: "The implementation everyone was referring to no longer existed.",
      },
      {
        heading: "The challenge",
        paragraphs: [
          "MetaCall already builds several third-party dependencies from source using CMake.",
          "The objective was to do something similar for libffi:",
        ],
        bullets: [
          "Avoid introducing vcpkg as a CI dependency.",
          "Keep Windows builds lightweight.",
          "Integrate naturally with MetaCall's existing build system.",
          "Support modern versions of libffi.",
        ],
        after:
          "The obvious starting point was investigating how vcpkg solved the same problem.",
      },
      {
        heading: "Step 1: Following the old references",
        paragraphs: [
          "The original pull request referenced an old vcpkg CMakeLists.txt.",
          "Except it had disappeared. The file returned 404.",
        ],
        callout: "Did vcpkg stop building libffi this way?",
      },
      {
        heading: "Step 2: Digging through history",
        paragraphs: [
          "Instead of assuming the old implementation still existed somewhere, I started reading the current vcpkg port files.",
          "That's when I discovered something I hadn't expected. The libffi port had been completely redesigned.",
          "The old CMake-based implementation had been replaced with an Autotools-based workflow. This wasn't a small refactor. It was an entirely different build strategy.",
        ],
      },
      {
        heading: "Step 3: Understanding the current build",
        paragraphs: [
          "The current vcpkg port doesn't compile libffi using CMake. Instead, it:",
        ],
        bullets: [
          "Downloads the official libffi release.",
          "Applies a Windows-specific patch.",
          "Creates an MSYS2 environment.",
          "Installs Autoconf, Automake, Libtool, Make, and Binutils.",
          "Wraps MSVC tools so they behave like a GNU compiler.",
          "Runs ./configure.",
          "Executes make.",
          "Installs the library.",
          "Performs Windows-specific fixes afterward.",
        ],
        after:
          "From a maintenance perspective, this makes perfect sense because vcpkg stays close to upstream. But it also means reproducing the same build outside vcpkg requires bringing in nearly the entire Unix build ecosystem.",
      },
      {
        heading: "Step 4: Looking at the alternative",
        paragraphs: [
          "The pull request also referenced the newlawrence/Libffi repository. Initially, it looked promising because it contained a CMake build.",
          "However, after investigating further, I found that it:",
        ],
        bullets: [
          "Targets libffi 3.2.1.",
          "Hasn't kept pace with upstream releases.",
          "Focuses primarily on MSVC x86 and x64.",
          "Is maintained independently rather than by the libffi project.",
        ],
        after:
          "That made it unsuitable as a long-term solution for MetaCall.",
      },
      {
        heading: "The real tradeoff",
        paragraphs: [
          "At this point, the discussion wasn't really about libffi anymore. It became a question of engineering tradeoffs.",
          "There are essentially three possible approaches.",
        ],
        subsections: [
          {
            heading: "Approach 1: Use vcpkg",
            advantages: [
              "Official and actively maintained by the vcpkg team.",
              "Minimal implementation effort.",
              "Automatically handles downloading, patching, building, and installing libffi.",
              "Easier to keep up with new libffi releases.",
            ],
            disadvantages: [
              "Introduces a package manager dependency.",
              "Doesn't align with projects that prefer building all third-party libraries themselves.",
              "Adds an additional toolchain requirement to the CI pipeline.",
            ],
          },
          {
            heading: "Approach 2: Reproduce vcpkg's current build process",
            advantages: [
              "Closely follows the official upstream libffi build process.",
              "Uses the same approach as modern vcpkg.",
              "Reduces the likelihood of platform-specific behavior differences.",
            ],
            disadvantages: [
              "Requires an MSYS2 environment.",
              "Depends on Autoconf, Automake, Libtool, Make, and other Unix build tools.",
              "Significantly increases CI setup complexity.",
              "Nearly recreates much of the infrastructure that vcpkg already provides.",
            ],
          },
          {
            heading: "Approach 3: Maintain a native CMake build",
            advantages: [
              "No dependency on vcpkg or MSYS2.",
              "Integrates naturally with MetaCall's existing ExternalProject_Add workflow.",
              "Keeps the Windows CI lightweight.",
              "Provides complete control over the build process.",
            ],
            disadvantages: [
              "The project becomes responsible for maintaining the CMake build scripts.",
              "Requires updates whenever libffi changes its source layout or build requirements.",
              "Adds long-term maintenance effort.",
            ],
          },
        ],
        callout:
          "Ironically, trying to avoid vcpkg by reproducing its implementation would introduce almost the same infrastructure that vcpkg already manages.",
      },
      {
        heading: "My takeaway",
        paragraphs: [
          "One lesson stood out during this investigation:",
        ],
        callout:
          "Open-source projects evolve much faster than blog posts, pull requests, and Stack Overflow answers.",
        after:
          "An implementation that was correct a few years ago may no longer reflect how a project works today. Instead of relying on historical references, I found it much more valuable to inspect the current source, understand why it changed, and evaluate the tradeoffs before proposing a solution.",
      },
    ],
  },
  {
    slug: "building-reports-that-scale",
    category: "Engineering",
    title: "From 10 minutes to 30 seconds: building reports that scale",
    description:
      "The practical decisions behind a reusable reporting flow that handles more than 10,000 records.",
    published: "July 26, 2026",
    readingTime: "6 min read",
    intro:
      "Reporting looks simple until the data grows. A feature that works well for a few hundred rows can become one of the slowest workflows in a business application. This is how I approached that problem without turning the reporting layer into a separate product.",
    sections: [
      {
        heading: "Start by measuring the whole path",
        paragraphs: [
          "The first mistake is optimizing the PDF library before knowing where the time goes. Report generation crosses several boundaries: the database query, API serialization, network transfer, client transformation, layout, and file creation.",
          "I measured each stage independently. That made the bottleneck visible and gave every change a number to beat. It also prevented a faster renderer from hiding an inefficient query.",
        ],
      },
      {
        heading: "Shape data for the report",
        paragraphs: [
          "A report does not need the same object graph as an interactive screen. I projected only the fields required by the document, removed unnecessary tracking, and kept aggregation close to the database.",
          "This reduced memory pressure and payload size. More importantly, it made the data contract explicit: the report received a purpose-built model instead of a collection of application entities.",
        ],
        bullets: [
          "Select only required columns.",
          "Avoid loading related entities that never appear in the output.",
          "Perform totals and grouping at the most efficient layer.",
          "Use stable ordering so repeated exports remain predictable.",
        ],
      },
      {
        heading: "Design the renderer as a pipeline",
        paragraphs: [
          "The reusable part was not a single report template. It was a small pipeline with clear stages for fetching, normalization, layout, pagination, and export. Individual reports supplied their columns and formatting rules while the pipeline handled the expensive mechanics.",
          "That separation made performance fixes available to every report and reduced the risk of each module inventing a slightly different export flow.",
        ],
      },
      {
        heading: "Treat performance as a product outcome",
        paragraphs: [
          "The final result reduced a roughly ten minute workflow to about thirty seconds for datasets above 10,000 records. The important outcome was not the percentage alone. A report moved from something users avoided to something they could use during normal work.",
          "Good optimization changes behavior. Measure the technical improvement, but connect it to the task a user can now complete.",
        ],
      },
    ],
  },
  {
    slug: "practical-role-based-access-control",
    category: "Architecture",
    title: "Practical role-based access control in business software",
    description:
      "A maintainable approach to permissions, API boundaries, and secure workflows as a product grows.",
    published: "July 26, 2026",
    readingTime: "7 min read",
    intro:
      "Role-based access control often begins as a small collection of conditionals. As modules and teams grow, those conditions spread across the interface and API until nobody can confidently explain who can do what. A durable system starts with permissions as a domain concept.",
    sections: [
      {
        heading: "Roles are bundles, permissions are decisions",
        paragraphs: [
          "Administrator, manager, and operator are useful labels for people. They are not precise authorization rules. The API should decide whether a user can approve a purchase, edit a ledger entry, or view a branch based on explicit permissions.",
          "Roles can bundle those permissions for convenient administration. This keeps business language readable while allowing exceptions without creating new roles for every edge case.",
        ],
      },
      {
        heading: "Enforce policy at the server boundary",
        paragraphs: [
          "Hiding a button is useful interface behavior, but it is not security. Every protected operation must be authorized on the server using trusted identity and current permissions.",
          "I prefer a consistent policy layer close to the API boundary. Business services can then assume that identity and scope have already been verified, while sensitive domain rules remain inside the domain itself.",
        ],
        bullets: [
          "Authenticate identity before resolving permissions.",
          "Check both the action and the resource scope.",
          "Deny access by default.",
          "Record meaningful security events for later review.",
        ],
      },
      {
        heading: "Make permissions easy to inspect",
        paragraphs: [
          "Authorization becomes safer when developers and administrators can understand it. Use stable permission names, document their intent, and avoid duplicating policy logic in controllers.",
          "Tests should describe the matrix in business language. A test that says a branch accountant cannot approve a company-wide adjustment communicates more than a test focused only on an HTTP status.",
        ],
      },
      {
        heading: "Plan for change",
        paragraphs: [
          "Permissions change as organizations change. Keep role assignments in data, version important policy changes, and design audit records so they explain who acted, on which resource, and under which scope.",
          "The goal is not the largest authorization framework. It is a small, explicit system that continues to be understandable after the fifth new module and the twentieth customer request.",
        ],
      },
    ],
  },
  {
    slug: "finding-slow-entity-framework-queries",
    category: "Performance",
    title: "Finding slow Entity Framework queries before users do",
    description:
      "A repeatable workflow for profiling, query shaping, indexing, and validating API performance.",
    published: "July 26, 2026",
    readingTime: "6 min read",
    intro:
      "Slow endpoints are rarely fixed by one clever line of code. The dependable approach is to reproduce the behavior, observe the generated SQL, reduce unnecessary work, and validate the result under realistic data volume.",
    sections: [
      {
        heading: "Reproduce before changing",
        paragraphs: [
          "Begin with the endpoint, parameters, user scope, and dataset size that trigger the issue. Capture response time and query count. Without a baseline, an optimization can feel faster while simply moving work elsewhere.",
          "Development databases are often too small to reveal production behavior. A query that scans a few hundred rows locally may scan millions for a customer, so test data distribution matters as much as row count.",
        ],
      },
      {
        heading: "Read the SQL, not only the LINQ",
        paragraphs: [
          "LINQ is an expressive way to describe a query, but the database executes SQL. Inspect the generated statement and its execution plan. Look for repeated queries, wide selections, scans, expensive sorting, and joins introduced by eager loading.",
          "This step turns vague performance work into a concrete database problem. It also tells you whether the right fix belongs in query shaping, an index, caching, or the API contract.",
        ],
        bullets: [
          "Use projections for read-only response models.",
          "Apply filters before materializing data.",
          "Disable tracking when entities will not be updated.",
          "Avoid accidental query loops and oversized includes.",
        ],
      },
      {
        heading: "Cache only stable work",
        paragraphs: [
          "Caching is useful when the same expensive result is requested repeatedly and a short delay in freshness is acceptable. It is not a substitute for a poorly shaped query.",
          "Define ownership, expiry, and invalidation before adding a cache. If the team cannot explain when a value becomes stale, the performance gain may create a correctness problem.",
        ],
      },
      {
        heading: "Validate the outcome",
        paragraphs: [
          "After each change, compare query count, database time, API time, memory use, and returned data. In one production system, query optimization and targeted caching reduced API response time by 40 percent.",
          "Keep the measurement in monitoring or a regression test where possible. The best performance fix is one the codebase can protect.",
        ],
      },
    ],
  },
];
