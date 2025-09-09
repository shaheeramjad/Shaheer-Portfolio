import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import io from "socket.io-client";
import Title from "../layouts/Title";

const SystemMonitor = () => {
  const [systemData, setSystemData] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    network: 0,
    cpuHistory: [],
    memoryHistory: [],
    alerts: [],
  });
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000";
    const socket = io(apiUrl);

    socket.on("connect", () => {
      setIsConnected(true);
      console.log("Connected to System Monitor Server");
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
      console.log("Disconnected from System Monitor Server");
    });

    socket.on("systemUpdate", (data) => {
      setSystemData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const formatChartData = (cpuHistory, memoryHistory) => {
    const maxLength = Math.max(cpuHistory.length, memoryHistory.length);
    const data = [];

    for (let i = 0; i < maxLength; i++) {
      data.push({
        time: i,
        CPU: cpuHistory[i]?.value || 0,
        Memory: memoryHistory[i]?.value || 0,
      });
    }

    return data;
  };

  const getProgressColor = (value, type) => {
    if (type === "cpu" && value > 85) return "bg-red-500";
    if (type === "memory" && value > 90) return "bg-red-500";
    if (value > 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  const ProgressBar = ({ label, value, type }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 p-4 rounded-lg border border-gray-700"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium">{label}</span>
        <span className="text-designColor font-bold">{value}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className={`h-3 rounded-full ${getProgressColor(value, type)}`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );

  const MetricCard = ({ title, value, unit, icon }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center"
    >
      <div className="text-3xl text-designColor mb-2">{icon}</div>
      <h3 className="text-gray-300 text-sm mb-1">{title}</h3>
      <p className="text-2xl font-bold text-white">
        {value} <span className="text-sm text-gray-400">{unit}</span>
      </p>
    </motion.div>
  );

  return (
    <section
      id="systemmonitor"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="REAL-TIME MONITORING"
          des="System Performance Dashboard"
        />
      </div>

      {/* Connection Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-8 text-center"
      >
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
            isConnected
              ? "bg-green-900 text-green-300"
              : "bg-red-900 text-red-300"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              isConnected ? "bg-green-500" : "bg-red-500"
            }`}
          />
          {isConnected ? "Connected to Server" : "Disconnected from Server"}
        </div>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center max-w-3xl mx-auto"
      >
        <p className="text-gray-400 text-lg leading-relaxed">
          This real-time system monitoring dashboard demonstrates backend data
          streaming using
          <span className="text-designColor"> Express.js</span>,
          <span className="text-designColor"> Socket.IO</span>, and
          <span className="text-designColor"> React</span>. The server simulates
          system metrics and broadcasts updates every 2 seconds via WebSocket
          connections.
        </p>
      </motion.div>

      {/* Alerts */}
      {systemData.alerts && systemData.alerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {systemData.alerts.map((alert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-900 border border-red-600 text-red-200 px-4 py-3 rounded-lg mb-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                <span>
                  {alert.message} ({alert.value}%)
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <MetricCard
          title="CPU Usage"
          value={systemData.cpu}
          unit="%"
          icon="🖥️"
        />
        <MetricCard
          title="Memory"
          value={systemData.memory}
          unit="%"
          icon="💾"
        />
        <MetricCard
          title="Disk Usage"
          value={systemData.disk}
          unit="%"
          icon="💿"
        />
        <MetricCard
          title="Network"
          value={systemData.network}
          unit="Mbps"
          icon="🌐"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* CPU & Memory History Chart */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-800 p-6 rounded-lg border border-gray-700"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            CPU & Memory Usage History
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={formatChartData(
                systemData.cpuHistory,
                systemData.memoryHistory
              )}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                  color: "#F3F4F6",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="CPU"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="Memory"
                stroke="#3B82F6"
                strokeWidth={2}
                dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h3 className="text-xl font-semibold text-white mb-4">
            Current System Status
          </h3>
          <ProgressBar label="CPU Usage" value={systemData.cpu} type="cpu" />
          <ProgressBar
            label="Memory Usage"
            value={systemData.memory}
            type="memory"
          />
          <ProgressBar label="Disk Usage" value={systemData.disk} type="disk" />
          <ProgressBar
            label="Network Speed"
            value={systemData.network}
            type="network"
          />
        </motion.div>
      </div>

      {/* Technical Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-6 rounded-lg border border-gray-700"
      >
        <h3 className="text-xl font-semibold text-white mb-4">
          Technical Implementation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300">
          <div>
            <h4 className="text-designColor font-semibold mb-2">
              Backend Stack:
            </h4>
            <ul className="space-y-1">
              <li>• Express.js server with Socket.IO</li>
              <li>• Real-time data simulation every 2s</li>
              <li>• WebSocket broadcasting</li>
              <li>• Alert system for threshold monitoring</li>
            </ul>
          </div>
          <div>
            <h4 className="text-designColor font-semibold mb-2">
              Frontend Features:
            </h4>
            <ul className="space-y-1">
              <li>• React with Socket.IO client</li>
              <li>• Recharts for data visualization</li>
              <li>• Framer Motion animations</li>
              <li>• Responsive design with Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SystemMonitor;
