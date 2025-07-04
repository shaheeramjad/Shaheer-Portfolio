import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import architectureImg from "../../assets/images/projects/hAccounts.png";
import architectureImg2 from "../../assets/images/projects/hPharma.png";
import architectureImg3 from "../../assets/images/projects/eArch.png";
import architectureImg4 from "../../assets/images/projects/eFlow.png";

const caseStudies = {
  "hisaber-accounts": {
    title: "HISABER ACCOUNTS",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Executive Summary</h3>
          <ul className="mb-2 text-base">
            <li><b>Project Name:</b> Hisaaber Accounts</li>
            <li><b>Team Size:</b> 2</li>
            <li><b>Industry/Domain:</b> Finance</li>
            <li><b>Project Status:</b> Ongoing</li>
            <li><b>Live Link:</b> <a href="https://hisaaber.com/" className="text-designColor underline">Click Here To Visit</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">1. Project Overview</h4>
          <b>1.1 Background</b>
          <p>The organization is a textile company with multiple manufacturing units and operations in countries like Pakistan and Saudi Arabia. It deals with suppliers for raw materials, produces finished goods, and handles both local sales and international import/export. As the business grew, managing finances and operations manually became inefficient, creating a need for a centralized, secure accounting system.</p>
          <b>1.2 Problem Statement</b>
          <p>Before HisaberAccounts, managing finances in a growing textile business was slow, messy, and hard to control, especially with multiple manufacturing units, suppliers, and international operations. Teams relied on spreadsheets and paperwork to handle daily transactions, inventory, and banking, making it difficult to track activities across branches. Different users had different responsibilities, but there was no proper system to control access or protect sensitive data. Sharing files between departments and countries was not only inefficient but also risky. The company needed a smarter, centralized accounting system to streamline operations, secure data, and support its expanding business.</p>
          <b>1.3 Project Objectives</b>
          <ul className="list-disc ml-6">
            <li><b>Primary Objectives:</b>
              <ul className="list-disc ml-6">
                <li>Build a centralized, secure accounting platform to manage financial transactions, inventory, suppliers, and customers across multiple branches and countries</li>
                <li>Implement role-based access control to ensure that different users (e.g., accountants, managers, auditors) can only access what they need, enhancing both security and accountability.</li>
              </ul>
            </li>
            <li><b>Secondary Objectives:</b>
              <ul className="list-disc ml-6">
                <li>Eliminate manual paperwork and file-based systems by digitizing all financial operations, improving accuracy, and reducing processing time.</li>
                <li>Support multi-company and multi-branch operations, with the ability to scale and integrate future modules like payroll, production, or CRM seamlessly.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">2. Technical Specifications</h4>
          <b>2.1 Technology Stack</b>
          <ul className="list-disc ml-6">
            <li>Frontend: React.js, SCSS, HTML5, CSS3</li>
            <li>Backend: ASP.NET Core 8 - JWT Token Based Authentication & Authorization</li>
            <li>Database: SQL Server</li>
            <li>CI/CD: GitHub Actions (Backend)</li>
            <li>Deployment: Plesk (via FTP)</li>
            <li>Other: Email Service, File Uploads</li>
          </ul>
          <b>2.2 System Architecture</b>
          <p>HisaberAccounts follows a modular and scalable architecture combining modern web technologies with efficient DevOps and backend practices. The system is divided into three main layers: Frontend, Backend, and Infrastructure/DevOps.</p>
          <div className="my-4 flex flex-col items-center">
            <img src={architectureImg} alt="Architecture Diagram" className="w-full max-w-md rounded shadow" />
            <span className="text-sm text-gray-400 mt-2">System Architecture Diagram (Hisaber Accounts)</span>
          </div>
          <ul className="list-disc ml-6">
            <li><b>Frontend (Client Side):</b> Built using React.js, the frontend is hosted under the hisaaber/ path. Users access the application via browser over HTTP/HTTPS, triggering REST API calls to the backend. It handles user interactions and communicates with the backend for all data transactions.</li>
            <li><b>Backend (Server Side):</b> The backend is developed in ASP.NET Core API, organized as HisaberAccountServer/. It exposes RESTful endpoints that handle business logic, authentication, and data processing. It integrates with SQL Server for persistent data storage, email services using SMTP for notifications, and file handling modules for managing uploads like invoices and documents.</li>
            <li><b>DevOps & Hosting:</b> The backend is deployed using GitHub Actions (CI/CD), which automates build and deployment. Final deployment is done via FTP to a Plesk Hosting environment. This setup ensures automated, consistent, and secure deployments.</li>
            <li><b>Database:</b> All transactional and master data (e.g., users, roles, sales, inventory) is stored in a SQL Server database accessed via the backend using secure SQL queries (EF Core).</li>
          </ul>
          <b>2.3 Key Features and Functionality</b>
          <ul className="list-disc ml-6">
            <li><b>Onboarding & Access Management</b>
              <ul className="list-disc ml-6">
                <li>Flexible Login & Registration: Users can sign up, log in, verify emails, and reset passwords securely.</li>
                <li>Change Password with Verification: Users can update their password using a secure code sent to their email.</li>
                <li>Profile Management: Users can update their personal information, including profile picture and display name.</li>
              </ul>
            </li>
            <li><b>Multi-Company Support</b>
              <ul className="list-disc ml-6">
                <li>Company Selection: Users with access to multiple companies can easily switch between them.</li>
                <li>Company Creation & Registration: New users can register a company during onboarding if none exists.</li>
                <li>Company Settings: Manage nominal accounts, users, recent login history, and reset the company state. Import/export Excel for opening balances and nominal accounts.</li>
              </ul>
            </li>
            <li><b>User Roles & Invitations</b>
              <ul className="list-disc ml-6">
                <li>User Invitation System: Existing users can invite others (with specific roles) to join their company. Invited users receive an email to accept or decline.</li>
                <li>Role-Based Access Control: Each user operates within permissions assigned to their role (Admin, Manager, Operator).</li>
              </ul>
            </li>
            <li><b>Sales & Receivables</b>
              <ul className="list-disc ml-6">
                <li>Sales Management: Create and update sales entries, manage customers, and import/export sales data via Excel.</li>
                <li>Receipts: Record customer payments, including batch receipts. Import and export data with Excel support.</li>
              </ul>
            </li>
            <li><b>Purchases & Payables</b>
              <ul className="list-disc ml-6">
                <li>Purchase Management: Add and update purchases, manage supplier information, and handle data import/export.</li>
                <li>Payments: Record supplier payments with support for multiple payments at once. Import/export Excel files.</li>
              </ul>
            </li>
            <li><b>Banking & Transactions</b>
              <ul className="list-disc ml-6">
                <li>Bank Module: Manage bank accounts, bank receipts/payments, transfers, journal vouchers, and reconcile transactions. Export all banking data to Excel.</li>
              </ul>
            </li>
            <li><b>Inventory & Assembly</b>
              <ul className="list-disc ml-6">
                <li>Inventory Management: Add stock and non-stock products manually or via Excel, organize by categories/types. Handle stock adjustments and locations.</li>
                <li>Product Assembly (BOM): Define product recipes, manage job assemblies, and export relevant data in excel.</li>
              </ul>
            </li>
            <li><b>Reports & Analytics</b>
              <ul className="list-disc ml-6">
                <li>Comprehensive Reporting: Access detailed reports including Financial Reports, Customer & Supplier Reports, Product Reports, Bank Reports. All reports support printing and Excel export.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">3. Project Management Approach</h4>
          <b>3.1 Methodology</b>
          <p>We chose the Agile methodology because we were still learning the ins and outs of accounting workflows. Agile gave us the flexibility to build the system step by step, understand business needs along the way, and improve based on real feedback, without needing everything figured out upfront.</p>
          <b>3.2 Tools and Processes</b>
          <ul className="list-disc ml-6">
            <li><b>Version Control:</b> Git (GitHub) - All code was tracked and managed using Git with GitHub for collaboration and CI/CD integration.</li>
            <li><b>Communication:</b> WhatsApp, Zoom & Onsite Meetings - Daily coordination was handled through WhatsApp and Zoom, while regular onsite meetings helped with deeper discussions, business understanding, and feedback.</li>
            <li><b>Testing:</b> Postman & Manual Testing - API testing was done via Postman, and functional testing was performed manually during each sprint.</li>
          </ul>
        </div>
      </div>
    ),
  },
  "hisaber-pharmacy": {
    title: "HISABER PHARMA",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Executive Summary</h3>
          <ul className="mb-2 text-base">
            <li><b>Project Name:</b> Hisaaber Pharma</li>
            <li><b>Team Size:</b> 2</li>
            <li><b>Industry/Domain:</b> Pharmaceutical</li>
            <li><b>Project Status:</b> Completed</li>
            <li><b>Live Link:</b> <a href="https://pharmacy.hisaber.com/" className="text-designColor underline" target="_blank" rel="noopener noreferrer">Click Here To Visit</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">1. Overview</h4>
          <p>Hisaber Pharma is a web-based pharmaceutical business management system designed to streamline and automate the day-to-day operations of pharmacies, distributors, and related businesses. It supports:</p>
          <ul className="list-disc ml-6">
            <li>Branch, company, customer, and distributor management</li>
            <li>Product and stock management</li>
            <li>Sales, returns, and expense tracking</li>
            <li>Ledger and reporting</li>
            <li>Role-based user management</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">2. Key Features</h4>
          <ul className="list-disc ml-6">
            <li><b>Multi-Branch Management</b>
              <ul className="list-disc ml-6">
                <li>Create and manage multiple branches under one system</li>
                <li>Branch-specific product visibility and stock handling</li>
                <li>Seamless branch switching with appropriate access control</li>
              </ul>
            </li>
            <li><b>User Authentication & Role-Based Access</b>
              <ul className="list-disc ml-6">
                <li>Secure login with ASP.NET Identity</li>
                <li>Role-based permissions (e.g., Admin, Salesperson, Manager)</li>
                <li>User profile settings and management</li>
              </ul>
            </li>
            <li><b>Company & Distributor Management</b>
              <ul className="list-disc ml-6">
                <li>Add and manage pharmaceutical companies</li>
                <li>Add distributors with contact and business details</li>
                <li>Link products to respective companies/distributors</li>
              </ul>
            </li>
            <li><b>Product & Stock Management</b>
              <ul className="list-disc ml-6">
                <li>Add and categorize medicines</li>
                <li>Manage batch numbers, expiry dates, and quantities</li>
                <li>Real-time stock updates across branches</li>
                <li>Opening stock entry and low stock alerts</li>
              </ul>
            </li>
            <li><b>Sales Management</b>
              <ul className="list-disc ml-6">
                <li>Invoice generation and printing</li>
                <li>Search by invoice number for quick lookup</li>
                <li>Real-time product-wise and invoice-wise sale tracking</li>
                <li>Discount and tax calculation</li>
              </ul>
            </li>
            <li><b>Return Handling</b>
              <ul className="list-disc ml-6">
                <li>Process returns using original invoice numbers</li>
                <li>Update stock and customer ledger accordingly</li>
                <li>Partial and full return handling</li>
              </ul>
            </li>
            <li><b>Customer & Ledger Management</b>
              <ul className="list-disc ml-6">
                <li>Add and manage customers</li>
                <li>Maintain customer ledger (credit/debit tracking)</li>
                <li>Add payments received from customers</li>
                <li>Automated balance adjustments</li>
              </ul>
            </li>
            <li><b>Expense Tracking</b>
              <ul className="list-disc ml-6">
                <li>Record monthly or branch-specific expenses</li>
                <li>Categorize expenses (e.g., Rent, Utilities, Miscellaneous)</li>
                <li>Expense reporting for financial analysis</li>
              </ul>
            </li>
            <li><b>Comprehensive Reporting</b>
              <ul className="list-disc ml-6">
                <li>Sales reports by branch, product, or date range</li>
                <li>Customer ledger reports</li>
                <li>Expense reports</li>
                <li>Stock reports (available, sold, expired)</li>
              </ul>
            </li>
            <li><b>Additional Functionalities</b>
              <ul className="list-disc ml-6">
                <li>Branch profile settings (logo, address, etc.)</li>
                <li>Invoice printing with pharmacy branding</li>
                <li>Audit trails or activity logs (if implemented)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">3. System Architecture</h4>
          <b>a. High-Level Architecture</b>
          <ul className="list-disc ml-6">
            <li><b>Architecture Type:</b> Client-Server (N-Tier)</li>
            <li><b>Frontend:</b> Built with React.js as a SPA (Single Page Application). Responsible for user interface and user interactions.</li>
            <li><b>Backend:</b> Built with ASP.NET Core Web API. Handles business logic and exposes REST APIs.</li>
            <li><b>Database:</b> SQL Server (or compatible RDBMS). Accessed via Entity Framework Core (EF Core).</li>
          </ul>
          <b>b. Authentication</b>
          <ul className="list-disc ml-6">
            <li>Uses ASP.NET Identity for secure user login, registration, password management, and role-based access control</li>
            <li><b>Authentication Flow:</b>
              <ul className="list-disc ml-6">
                <li>User logs in or registers from the frontend</li>
                <li>Credentials are sent securely to the backend API</li>
                <li>The API validates credentials via ASP.NET Identity</li>
                <li>Issue a JWT Token after authentication</li>
                <li>Token is used for authenticated requests in future sessions</li>
              </ul>
            </li>
          </ul>
          <b>c. Deployment</b>
          <ul className="list-disc ml-6">
            <li><b>Hosting:</b> Deployed on shared hosting, accessible at <a href="https://pharmacy.hisaber.com/" className="text-designColor underline" target="_blank" rel="noopener noreferrer">https://pharmacy.hisaber.com/</a></li>
            <li><b>Deployment Flow:</b>
              <ul className="list-disc ml-6">
                <li>React frontend is built and deployed as static assets</li>
                <li>ASP.NET Core API is published to the same hosting server</li>
                <li>Both layers communicate over HTTPS for secure data exchange</li>
              </ul>
            </li>
          </ul>
          <b>4. Architecture Diagram (Simplified)</b>
          <div className="my-4 flex flex-col items-center">
            <img src={architectureImg2} alt="Architecture Diagram" className="w-full max-w-md rounded shadow" />
            <span className="text-sm text-gray-400 mt-2">System Architecture Diagram (Hisaber Pharmacy)</span>
          </div>
          
        </div>
      </div>
    ),
  },
  "e-medicine": {
    title: "E-Medicine: Healthcare E-Commerce Platform",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
          <p>E-Medicine is a full-stack web application designed for online healthcare product sales. Built using ASP.NET Core 8.0 for the backend and React.js for the frontend, it features session-based authentication and full e-commerce functionality.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Core Features</h4>
          <ul className="list-disc ml-6">
            <li><b>User Management</b>
              <ul className="list-disc ml-6">
                <li>Registration/Login: Email-based authentication</li>
                <li>Role-Based Access: Customer vs Admin</li>
                <li>Profile Management: User data updates</li>
              </ul>
            </li>
            <li><b>Product Catalog</b>
              <ul className="list-disc ml-6">
                <li>Medicine Display: Product listings</li>
                <li>Categories: Medicines, supplements, devices</li>
                <li>Pricing: Unit pricing</li>
              </ul>
            </li>
            <li><b>Shopping Cart System</b>
              <ul className="list-disc ml-6">
                <li>Cart Management: Add/remove items dynamically</li>
                <li>Quantity Control: Real-time updates</li>
                <li>Price Calculation: Automatic total calculation</li>
              </ul>
            </li>
            <li><b>Order Management</b>
              <ul className="list-disc ml-6">
                <li>Order Placement: Unique order IDs</li>
                <li>Status Tracking: Pending → Processing → Shipped</li>
                <li>Order History: Views for both customers and admins</li>
              </ul>
            </li>
            <li><b>Admin Dashboard</b>
              <ul className="list-disc ml-6">
                <li>Customer Management: List and manage users</li>
                <li>Product Management: Inventory control</li>
                <li>Order Processing: Update order status</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Security Implementation</h4>
          <ul className="list-disc ml-6">
            <li>Authentication: Session-based login</li>
            <li>CORS Configuration: Domain-specific access</li>
            <li>Input Validation: Server-side protection</li>
            <li>HTTPS Enforcement: Secured communication</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Deployment Configuration</h4>
          <ul className="list-disc ml-6">
            <li><b>Production Setup</b>
              <ul className="list-disc ml-6">
                <li>Domain: <a href="https://emedicine.hisaaber.com" className="text-designColor underline" target="_blank" rel="noopener noreferrer">https://emedicine.hisaaber.com</a></li>
                <li>SSL: HTTPS enabled</li>
                <li>Frontend: Vite (React)</li>
                <li>Backend: dotnet publish</li>
                <li>Assets: Served from the public folder</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Business Impact</h4>
          <ul className="list-disc ml-6">
            <li><b>Customer Benefits</b>
              <ul className="list-disc ml-6">
                <li>24/7 access to healthcare products</li>
                <li>Simple and secure purchasing experience</li>
                <li>User-friendly interface</li>
              </ul>
            </li>
            <li><b>Operational Benefits</b>
              <ul className="list-disc ml-6">
                <li>Automated order workflow</li>
                <li>Centralized inventory control</li>
                <li>Reduced manual effort</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Future Enhancements</h4>
          <ul className="list-disc ml-6">
            <li><b>Planned Features</b>
              <ul className="list-disc ml-6">
                <li>Payment gateway integration</li>
                <li>Prescription upload</li>
                <li>Email notifications</li>
                <li>Mobile application</li>
              </ul>
            </li>
            <li><b>Technical Improvements</b>
              <ul className="list-disc ml-6">
                <li>JWT authentication</li>
                <li>Microservices architecture</li>
                <li>Real-time order tracking</li>
                <li>CDN for static content</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">System Architecture</h4>
          <ul className="list-disc ml-6">
            <li><b>Architecture Type:</b> Layered Client-Server Architecture</li>
            <li><b>Client Layer:</b> React.js SPA with Bootstrap UI</li>
            <li><b>Presentation Layer:</b> ASP.NET Core Web API with session management</li>
            <li><b>Business Logic Layer:</b> Domain services and controllers</li>
            <li><b>Data Access Layer:</b> Entity Framework Core - Db Context</li>
            <li><b>Data Layer:</b> SQL Server relational database</li>
            <li><b>Communication Pattern:</b> RESTful API with Session-Based Authentication</li>
          </ul>
          <div className="my-4 flex flex-col items-center">
            <img src={architectureImg3} alt="Architecture Diagram" className="w-full max-w-md rounded shadow" />
            <span className="text-sm text-gray-400 mt-2">System Architecture Diagram (E-Medicine)</span>
          </div>
          <div className="my-4 flex flex-col items-center">
            <img src={architectureImg4} alt="Architecture Diagram" className="w-full max-w-md rounded shadow" />
            <span className="text-sm text-gray-400 mt-2">System Flow Diagram (E-Medicine)</span>
          </div>
        </div>
      </div>
    ),
  },
  "i-discuss-coding-forum": {
    title: "IDiscuss - Coding Forum",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Overview</h3>
          <p>CodingForum is a web-based discussion platform designed to support community interaction through threads, comments, and categories. The application is structured into two distinct projects:</p>
          <ul className="list-disc ml-6">
            <li><b>CodingForumBackend:</b> A Web API backend built using .NET 8</li>
            <li><b>CodingForumFrontend:</b> A modern JavaScript-based frontend (likely React, based on structure)</li>
          </ul>
          <p>The solution follows a client-server model, promoting clean separation of responsibilities across layers.</p>
          <a href="https://forum.hisaaber.com/" className="text-designColor underline" target="_blank" rel="noopener noreferrer">Click Here To Visit</a>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Architecture</h4>
          <ul className="list-disc ml-6">
            <li><b>Architecture Type:</b> Layered (N-Tier) + Client-Server</li>
            <li><b>Frontend (React):</b>
              <ul className="list-disc ml-6">
                <li>Handles UI, routing, state management, and API communication</li>
                <li>Uses Axios or Fetch for RESTful calls</li>
                <li>Key Components: Login, Signup, Navbar, ThreadList, ThreadDetail, CommentBox</li>
              </ul>
            </li>
            <li><b>Backend (ASP.NET Core .NET 8):</b>
              <ul className="list-disc ml-6">
                <li>RESTful API with Entity Framework Core</li>
                <li>Controllers: UserController, ThreadController, CommentController, CategoryController</li>
                <li>Models: User, Thread, Comment, Category</li>
                <li>Configuration via appsettings.json</li>
              </ul>
            </li>
            <li><b>Database:</b>
              <ul className="list-disc ml-6">
                <li>Managed via Entity Framework Core</li>
                <li>Likely DBMS: SQL Server</li>
                <li>Normalized schema for user-thread-comment-category relationships</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Data Flow: Creating a New Thread</h4>
          <ol className="list-decimal ml-6">
            <li>User submits new thread form in the UI</li>
            <li>Frontend sends POST request to <code>/api/thread</code></li>
            <li>Backend validates input & saves using EF Core</li>
            <li>Database stores the new thread</li>
            <li>Frontend receives response and updates the thread list</li>
          </ol>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Strengths</h4>
          <ul className="list-disc ml-6">
            <li>Maintainability: Modular design improves code clarity and reusability</li>
            <li>Scalability: Backend and frontend can scale independently</li>
            <li>Testability: API and UI components testable in isolation</li>
            <li>Flexibility: Frontend can be swapped (e.g., with a mobile app) without backend changes</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Potential Improvements</h4>
          <ul className="list-disc ml-6">
            <li>Authentication: Add secure token-based auth (e.g., JWT or OAuth2)</li>
            <li>API Documentation: Integrate Swagger/OpenAPI for interactive API docs</li>
            <li>CI/CD: Set up pipelines for automated build, test, and deploy</li>
            <li>Error Handling: Implement global error response middleware for consistency</li>
          </ul>
        </div>
      </div>
    ),
  },
  "london-restaurant": {
    title: "London Restaurant Website",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Project Overview</h3>
          <p>The React Restaurant Website is a Single Page Application (SPA) developed using React.js, designed to highlight a restaurant's brand, menu, and contact details. Utilizing React Router and Bootstrap, it ensures a responsive, user-friendly experience. The codebase follows front-end best practices for scalability and maintainability.</p>
          <a href="https://londonrestaurant.netlify.app/" className="text-designColor underline" target="_blank" rel="noopener noreferrer">Click Here To Visit</a>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">System Architecture</h4>
          <b>a. Technology Stack</b>
          <ul className="list-disc ml-6">
            <li>Frontend Framework: React.js</li>
            <li>Routing: React Router DOM</li>
            <li>Styling: Bootstrap (with React-Bootstrap components), custom CSS</li>
            <li>Build Tool: Create React App</li>
            <li>Assets: Static images (menu, gallery, branding)</li>
          </ul>
          <b>b. Project Structure</b>
          <ul className="list-disc ml-6">
            <li><b>public/:</b> Static files (HTML, manifest, images)</li>
            <li><b>src/:</b> Organized source code (components, pages, utilities)</li>
            <li>Main logic applied to App.js</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Key Features</h4>
          <ul className="list-disc ml-6">
            <li><b>Navigation & Routing</b>
              <ul className="list-disc ml-6">
                <li>Navbar: Built using React-Bootstrap components for a responsive fixed-top design</li>
                <li>Client-Side Routing: Implemented with Routes and Route from react-router-dom (Home, Menu, About, Contact)</li>
                <li>BrowserRouter: Root-wrapped in index.js for SPA navigation</li>
              </ul>
            </li>
            <li><b>Page Components</b>
              <ul className="list-disc ml-6">
                <li>Home: Landing section with highlights</li>
                <li>Menu: Displays categorized food items (using src/utils/img/)</li>
                <li>About: Details about the restaurant, chefs, and background</li>
                <li>Contact: Contact form or information, possibly with a map</li>
              </ul>
            </li>
            <li><b>Reusable Components</b>
              <ul className="list-disc ml-6">
                <li>ContactInfo, ImageGallery, MenuBtn, Reviews: Modular, reusable components for common UI features</li>
              </ul>
            </li>
            <li><b>Styling</b>
              <ul className="list-disc ml-6">
                <li>Bootstrap Integration: Ensures responsiveness and consistent design</li>
                <li>Custom CSS: Enhances branding and layout styling</li>
              </ul>
            </li>
            <li><b>Asset Management</b>
              <ul className="list-disc ml-6">
                <li>Images and branding assets placed under src/utils/img/ and used throughout the site</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Strengths</h4>
          <ul className="list-disc ml-6">
            <li>Modular Design: Components and pages clearly separated</li>
            <li>Scalability: Easy to add new pages and features</li>
            <li>Responsive UI: Mobile-friendly via Bootstrap</li>
            <li>Maintainability: Clean file structure and reusable components</li>
          </ul>
        </div>
      </div>
    ),
  },
  "clone-myntra": {
    title: "Myntra Clone E-Commerce",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Executive Summary</h3>
          <p>The Myntra Clone is a full-stack e-commerce platform built with a React frontend, Node.js backend, and Redux for state management. It highlights modern web development practices through responsive UI, real-time cart updates, and serverless deployment.</p>
          <a href="https://myntra-clone-ecommerce.netlify.app/" className="text-designColor underline" target="_blank" rel="noopener noreferrer">Click Here To Visit</a>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">1. System Architecture</h4>
          <ul className="list-disc ml-6">
            <li><b>Frontend</b>
              <ul className="list-disc ml-6">
                <li>Framework: React.js</li>
                <li>Build Tool: Vite</li>
                <li>State Management: Redux Toolkit</li>
              </ul>
            </li>
            <li><b>Backend - Static</b>
              <ul className="list-disc ml-6">
                <li>Runtime: Node.js</li>
                <li>Framework: Express.js</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">2. Core Features</h4>
          <ul className="list-disc ml-6">
            <li><b>Product Management</b>
              <ul className="list-disc ml-6">
                <li>Display products with images, ratings, and pricing</li>
                <li>Search functionality for product names and companies</li>
                <li>Responsive grid layout for various devices</li>
              </ul>
            </li>
            <li><b>Shopping Cart</b>
              <ul className="list-disc ml-6">
                <li>Add/Remove items with real-time updates</li>
                <li>Cart persists during navigation</li>
                <li>Cart Summary includes item count and total amount</li>
              </ul>
            </li>
            <li><b>User Interface</b>
              <ul className="list-disc ml-6">
                <li>Modern and responsive design</li>
                <li>Search bar with instant filtering</li>
                <li>Loading states and smooth transitions</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">3. Technical Implementation</h4>
          <ul className="list-disc ml-6">
            <li><b>State Management (Redux Toolkit)</b>
              <ul className="list-disc ml-6">
                <li>Items Slice: Handles product catalog data</li>
                <li>Bag Slice: Manages shopping cart operations</li>
                <li>Search Slice: Controls search input and filtering</li>
                <li>Fetch Status Slice: Tracks loading status</li>
              </ul>
            </li>
            <li><b>API Endpoints</b>
              <ul className="list-disc ml-6">
                <li>GET /items: Retrieve all products</li>
                <li>GET /items/:id: Fetch a single product</li>
              </ul>
            </li>
            <li><b>Data Flow</b>
              <ul className="list-disc ml-6">
                <li>Frontend dispatches Redux actions</li>
                <li>Actions trigger API calls to backend</li>
                <li>State updates reflect changes across components</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">4. Deployment</h4>
          <ul className="list-disc ml-6">
            <li><b>Frontend:</b> Netlify
              <ul className="list-disc ml-6">
                <li>Static site hosting</li>
                <li>Global CDN for fast delivery</li>
                <li>Automatic HTTPS for security</li>
              </ul>
            </li>
            <li><b>Backend:</b> Vercel Serverless
              <ul className="list-disc ml-6">
                <li>Express API deployed as serverless functions</li>
                <li>Read-only API operations (no file persistence)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">5. Key Technologies</h4>
          <table className="min-w-full text-left text-sm border border-gray-300">
            <thead>
              <tr>
                <th className="border px-2 py-1">Component</th>
                <th className="border px-2 py-1">Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-2 py-1">Frontend</td>
                <td className="border px-2 py-1">React.js, Vite, Redux</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Backend</td>
                <td className="border px-2 py-1">Node.js, Express.js</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Styling</td>
                <td className="border px-2 py-1">CSS, Bootstrap</td>
              </tr>
              <tr>
                <td className="border px-2 py-1">Deployment</td>
                <td className="border px-2 py-1">Vercel, Netlify</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">6. Performance & Scalability</h4>
          <ul className="list-disc ml-6">
            <li><b>Current State</b>
              <ul className="list-disc ml-6">
                <li>File-based product data</li>
                <li>Single-server architecture</li>
                <li>Serverless backend with no file-write support</li>
              </ul>
            </li>
            <li><b>Future Enhancements</b>
              <ul className="list-disc ml-6">
                <li>Database Integration: MongoDB or PostgreSQL</li>
                <li>User Authentication: Login & registration system</li>
                <li>Payment Gateway: Secure online payments</li>
                <li>Admin Dashboard: Manage products, orders, and users</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">7. Lessons Learned</h4>
          <ul className="list-disc ml-6">
            <li><b>Strengths</b>
              <ul className="list-disc ml-6">
                <li>Clean component-based architecture</li>
                <li>Efficient state management via Redux Toolkit</li>
                <li>Responsive and intuitive UI design</li>
                <li>Adoption of modern web dev tools and workflows</li>
              </ul>
            </li>
            <li><b>Limitations</b>
              <ul className="list-disc ml-6">
                <li>Serverless backend restricts file operations</li>
                <li>Lack of persistent data storage</li>
                <li>Limited scalability for concurrent users</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  "legacy-code": {
    title: "Modernizing a Legacy School/College Management System",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Executive Summary</h3>
          <ul className="mb-2 text-base">
            <li><b>Project Name:</b> School Management System</li>
            <li><b>Team Size:</b> 2</li>
            <li><b>Industry/Domain:</b> Education</li>
            <li><b>Project Status:</b> Completed</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Overview</h4>
          <p>I worked on enhancing a mission-critical school and college management system deployed in:</p>
          <ul className="list-disc ml-6">
            <li>5 Schools & 2 Colleges</li>
            <li>3 Cities</li>
          </ul>
          <p>The system handled:</p>
          <ul className="list-disc ml-6">
            <li>Student & Staff Management</li>
            <li>Fee Collection & Payroll</li>
            <li>Examination & Library</li>
            <li>Reports & Administration</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Problem Statement</h4>
          <p>The existing fee system lacked flexibility, only supporting total fee amounts, without head-wise breakdowns. This limitation affected financial transparency and reporting. A revamp was needed to support component-wise (tuition, transport, etc.) tracking, automate billing, and improve reconciliation.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">System Architecture</h4>
          <ul className="list-disc ml-6">
            <li><b>Backend</b>
              <ul className="list-disc ml-6">
                <li>Tech Stack: ASP.NET Framework (Monolithic)</li>
                <li>API Layer: RESTful endpoints</li>
                <li>Business Entities: C# core objects</li>
                <li>Data Access: Linq to SQL & ADO.NET</li>
              </ul>
            </li>
            <li><b>Frontend</b>
              <ul className="list-disc ml-6">
                <li>Framework: React.js SPA</li>
                <li>Modules: Feature-based (e.g., Exams, Payroll, Library)</li>
                <li>Styling: CSS/SCSS</li>
              </ul>
            </li>
            <li><b>Database</b>
              <ul className="list-disc ml-6">
                <li>DBMS: SQL Server</li>
                <li>Design: Normalized schema with modular relationships</li>
              </ul>
            </li>
            <li><b>Deployment</b>
              <ul className="list-disc ml-6">
                <li>Environment: Hybrid (On-Premises + Cloud VMs)</li>
                <li>Challenge: Diverse infrastructure required flexible deployment strategies</li>
              </ul>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Key Features</h4>
          <ul className="list-disc ml-6">
            <li>Student Management: Admissions, attendance, promotions, ledger</li>
            <li>Staff Management: Payroll, attendance, leave, arrears</li>
            <li>Fee Management: Head-wise billing, fine rules, concessions</li>
            <li>Exam & Results: Marks entry, grading, reports</li>
            <li>Library: Book issuance and returns</li>
            <li>Reporting: Financial, academic, and administrative</li>
            <li>Invoicing: Branded templates, SMS/email delivery</li>
            <li>Bank Integration: Auto reconciliation with HBL APIs</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Key Contributions</h4>
          <ul className="list-disc ml-6">
            <li><b>Fee System Revamp</b>
              <ul className="list-disc ml-6">
                <li>Implemented head-wise structure</li>
                <li>Automated monthly/annual billing</li>
                <li>Fine & arrear logic with flexible rules</li>
              </ul>
            </li>
            <li><b>Student Management</b>
              <ul className="list-disc ml-6">
                <li>Improved data validation and migration</li>
                <li>Enabled bulk import and updates</li>
                <li>Linked attendance to fee penalties</li>
              </ul>
            </li>
            <li><b>Invoicing</b>
              <ul className="list-disc ml-6">
                <li>Invoice logic supporting scholarships, arrears</li>
                <li>Dynamic templates per institution</li>
                <li>Enabled digital delivery (SMS & email)</li>
              </ul>
            </li>
            <li><b>Reporting</b>
              <ul className="list-disc ml-6">
                <li>Built exportable reports (PDF/Excel)</li>
                <li>Enhanced performance for large datasets</li>
              </ul>
            </li>
            <li><b>Bank Scroll & API Integration</b>
              <ul className="list-disc ml-6">
                <li>Automated bank reconciliation</li>
                <li>Integrated HBL APIs for real-time updates</li>
                <li>Ensured security and data compliance</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  "personal-portfolio": {
    title: "Personal Portfolio Website",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Executive Summary</h3>
          <ul className="mb-2 text-base">
            <li><b>Project Name:</b> Personal Portfolio</li>
            <li><b>Team Size:</b> 1</li>
            <li><b>Industry/Domain:</b> Software Development / Personal Branding</li>
            <li><b>Project Status:</b> Ongoing</li>
            <li><b>Live Link:</b> <a href="https://shaheerbyhisollabs.me/" className="text-designColor underline" target="_blank" rel="noopener noreferrer">Click Here To Visit</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Project Overview</h4>
          <p>This portfolio website is a modern, responsive Single Page Application (SPA) built with React.js and Tailwind CSS. It showcases my professional experience, technical skills, projects, and contact information. The site is designed to provide a seamless user experience, highlight my work, and serve as a central hub for my online presence.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">System Architecture</h4>
          <ul className="list-disc ml-6">
            <li><b>Frontend:</b> React.js (SPA), Tailwind CSS for styling, Framer Motion for animations</li>
            <li><b>Routing:</b> React Router DOM for navigation</li>
            <li><b>Deployment:</b> Static hosting (Netlify, Vercel, or similar)</li>
            <li><b>Assets:</b> Images, project screenshots, and downloadable resume</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Key Features</h4>
          <ul className="list-disc ml-6">
            <li>Home/Banner: Introduction, animated text, and profile photo</li>
            <li>About/Features: Summary of skills, experience, and personal qualities</li>
            <li>Projects: Interactive cards with case studies and images</li>
            <li>Resume: Timeline of education, experience, and achievements</li>
            <li>Testimonials: Client and peer feedback</li>
            <li>Contact: Contact form and social media links</li>
            <li>Responsive Design: Mobile-friendly layout and navigation</li>
            <li>Dark Mode: Consistent color scheme for accessibility</li>
            <li>Animations: Smooth transitions and interactive effects</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Technologies Used</h4>
          <ul className="list-disc ml-6">
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Framer Motion</li>
            <li>React Router DOM</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Netlify/Vercel (for deployment)</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-1">Lessons Learned</h4>
          <ul className="list-disc ml-6">
            <li>Component-based architecture improves maintainability and scalability</li>
            <li>Utility-first CSS (Tailwind) accelerates development and enforces consistency</li>
            <li>Animations and transitions enhance user engagement</li>
            <li>Case study-driven project section demonstrates real-world impact</li>
            <li>Responsive and accessible design is essential for modern web apps</li>
          </ul>
        </div>
      </div>
    ),
  },
};

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const caseStudy = caseStudies[projectId];

  if (!caseStudy) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Case Study Not Found</h2>
        <button className="px-4 py-2 bg-designColor text-white rounded" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="py-20 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">{caseStudy.title}</h2>
      <div className="text-lg mb-8">{caseStudy.content}</div>
      <button className="px-4 py-2 bg-designColor text-black rounded" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default CaseStudy; 