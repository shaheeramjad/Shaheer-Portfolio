const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

// Configure CORS for production
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? ["https://shaheerbyhisollabs.me/"]
      : ["http://localhost:3000", "http://localhost:3001"],
  methods: ["GET", "POST"],
  credentials: true,
};

const io = socketIo(server, {
  cors: corsOptions,
  transports: ["websocket", "polling"],
});

app.use(cors(corsOptions));
app.use(express.json());

// Simulation data generators
const generateCPUUsage = () => Math.floor(Math.random() * 71) + 20; // 20-90%
const generateMemoryUsage = () => Math.floor(Math.random() * 66) + 30; // 30-95%
const generateDiskUsage = () => Math.floor(Math.random() * 71) + 10; // 10-80%
const generateNetworkSpeed = () => Math.floor(Math.random() * 100) + 1; // 1-100 Mbps

let systemData = {
  cpu: 45,
  memory: 60,
  disk: 35,
  network: 50,
  timestamp: Date.now(),
};

// Store historical data for charts
let cpuHistory = [];
let memoryHistory = [];

const addToHistory = (array, value, maxLength = 20) => {
  array.push({ value, timestamp: Date.now() });
  if (array.length > maxLength) {
    array.shift();
  }
};

// Simulate system data every 2 seconds
setInterval(() => {
  systemData = {
    cpu: generateCPUUsage(),
    memory: generateMemoryUsage(),
    disk: generateDiskUsage(),
    network: generateNetworkSpeed(),
    timestamp: Date.now(),
  };

  // Add to history
  addToHistory(cpuHistory, systemData.cpu);
  addToHistory(memoryHistory, systemData.memory);

  // Check for alerts
  const alerts = [];
  if (systemData.cpu > 85) {
    alerts.push({
      type: "cpu",
      message: "High CPU usage detected!",
      value: systemData.cpu,
    });
  }
  if (systemData.memory > 90) {
    alerts.push({
      type: "memory",
      message: "High Memory usage detected!",
      value: systemData.memory,
    });
  }

  // Broadcast to all connected clients
  io.emit("systemUpdate", {
    ...systemData,
    cpuHistory,
    memoryHistory,
    alerts,
  });
}, 2000);

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  // Send initial data
  socket.emit("systemUpdate", {
    ...systemData,
    cpuHistory,
    memoryHistory,
    alerts: [],
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`System Monitor Server running on port ${PORT}`);
});
