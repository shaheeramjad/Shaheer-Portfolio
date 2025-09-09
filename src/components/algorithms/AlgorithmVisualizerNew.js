import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Title from "../layouts/Title";

const AlgorithmVisualizer = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("bubble");
  const [selectedCategory, setSelectedCategory] = useState("sorting");
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(100);
  const [array, setArray] = useState([]);
  const [comparing, setComparing] = useState([]);
  const [sorted, setSorted] = useState([]);
  const [grid, setGrid] = useState([]);

  const GRID_SIZE = 20;
  const START_NODE = { row: 5, col: 5 };
  const END_NODE = { row: 15, col: 15 };

  // Initialize array for sorting
  const generateArray = useCallback(() => {
    const newArray = [];
    for (let i = 0; i < 50; i++) {
      newArray.push(Math.floor(Math.random() * 300) + 10);
    }
    setArray(newArray);
    setComparing([]);
    setSorted([]);
  }, []);

  useEffect(() => {
    generateArray();
  }, [generateArray]);

  // Sorting Algorithms
  const bubbleSort = async () => {
    const arr = [...array];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (!isRunning) return;

        setComparing([j, j + 1]);
        await new Promise((resolve) => setTimeout(resolve, 200 - speed));

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
        }
      }
      setSorted((prev) => [...prev, n - 1 - i]);
    }
    setSorted((prev) => [...prev, 0]);
    setComparing([]);
  };

  const mergeSort = async () => {
    const arr = [...array];

    const merge = async (arr, left, mid, right) => {
      const leftArr = arr.slice(left, mid + 1);
      const rightArr = arr.slice(mid + 1, right + 1);
      let i = 0,
        j = 0,
        k = left;

      while (i < leftArr.length && j < rightArr.length) {
        setComparing([left + i, mid + 1 + j]);
        await new Promise((resolve) => setTimeout(resolve, 200 - speed));

        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        setArray([...arr]);
        k++;
      }

      while (i < leftArr.length) {
        arr[k] = leftArr[i];
        setArray([...arr]);
        i++;
        k++;
      }

      while (j < rightArr.length) {
        arr[k] = rightArr[j];
        setArray([...arr]);
        j++;
        k++;
      }
    };

    const mergeSortHelper = async (arr, left, right) => {
      if (left < right) {
        const mid = Math.floor((left + right) / 2);
        await mergeSortHelper(arr, left, mid);
        await mergeSortHelper(arr, mid + 1, right);
        await merge(arr, left, mid, right);
      }
    };

    await mergeSortHelper(arr, 0, arr.length - 1);
    setSorted(Array.from({ length: arr.length }, (_, i) => i));
    setComparing([]);
  };

  const quickSort = async () => {
    const arr = [...array];

    const partition = async (arr, low, high) => {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        setComparing([j, high]);
        await new Promise((resolve) => setTimeout(resolve, 200 - speed));

        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          setArray([...arr]);
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      setArray([...arr]);
      return i + 1;
    };

    const quickSortHelper = async (arr, low, high) => {
      if (low < high) {
        const pi = await partition(arr, low, high);
        setSorted((prev) => [...prev, pi]);
        await quickSortHelper(arr, low, pi - 1);
        await quickSortHelper(arr, pi + 1, high);
      }
    };

    await quickSortHelper(arr, 0, arr.length - 1);
    setSorted(Array.from({ length: arr.length }, (_, i) => i));
    setComparing([]);
  };

  // Pathfinding Algorithms
  const bfs = async () => {
    const newGrid = grid.map((row) =>
      row.map((node) => ({ ...node, isVisited: false, isPath: false }))
    );
    const queue = [START_NODE];
    const visitedNodes = [];
    const parent = {};

    while (queue.length > 0) {
      if (!isRunning) return;

      const current = queue.shift();

      if (
        newGrid[current.row][current.col].isVisited ||
        newGrid[current.row][current.col].isWall
      )
        continue;

      newGrid[current.row][current.col].isVisited = true;
      visitedNodes.push(current);
      setGrid([...newGrid]);

      await new Promise((resolve) => setTimeout(resolve, 200 - speed));

      if (current.row === END_NODE.row && current.col === END_NODE.col) {
        // Reconstruct path
        const pathNodes = [];
        let pathNode = current;
        while (pathNode) {
          pathNodes.unshift(pathNode);
          pathNode = parent[`${pathNode.row}-${pathNode.col}`];
        }

        for (const node of pathNodes) {
          newGrid[node.row][node.col].isPath = true;
          setGrid([...newGrid]);
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        return;
      }

      const neighbors = [
        { row: current.row - 1, col: current.col },
        { row: current.row + 1, col: current.col },
        { row: current.row, col: current.col - 1 },
        { row: current.row, col: current.col + 1 },
      ];

      for (const neighbor of neighbors) {
        if (
          neighbor.row >= 0 &&
          neighbor.row < GRID_SIZE &&
          neighbor.col >= 0 &&
          neighbor.col < GRID_SIZE &&
          !newGrid[neighbor.row][neighbor.col].isVisited &&
          !newGrid[neighbor.row][neighbor.col].isWall
        ) {
          queue.push(neighbor);
          parent[`${neighbor.row}-${neighbor.col}`] = current;
        }
      }
    }
  };

  const dfs = async () => {
    const newGrid = grid.map((row) =>
      row.map((node) => ({ ...node, isVisited: false, isPath: false }))
    );
    const stack = [START_NODE];
    const visitedNodes = [];
    const parent = {};

    while (stack.length > 0) {
      if (!isRunning) return;

      const current = stack.pop();

      if (
        newGrid[current.row][current.col].isVisited ||
        newGrid[current.row][current.col].isWall
      )
        continue;

      newGrid[current.row][current.col].isVisited = true;
      visitedNodes.push(current);
      setGrid([...newGrid]);

      await new Promise((resolve) => setTimeout(resolve, 200 - speed));

      if (current.row === END_NODE.row && current.col === END_NODE.col) {
        // Reconstruct path
        const pathNodes = [];
        let pathNode = current;
        while (pathNode) {
          pathNodes.unshift(pathNode);
          pathNode = parent[`${pathNode.row}-${pathNode.col}`];
        }

        for (const node of pathNodes) {
          newGrid[node.row][node.col].isPath = true;
          setGrid([...newGrid]);
          await new Promise((resolve) => setTimeout(resolve, 50));
        }
        return;
      }

      const neighbors = [
        { row: current.row - 1, col: current.col },
        { row: current.row + 1, col: current.col },
        { row: current.row, col: current.col - 1 },
        { row: current.row, col: current.col + 1 },
      ];

      for (const neighbor of neighbors.reverse()) {
        if (
          neighbor.row >= 0 &&
          neighbor.row < GRID_SIZE &&
          neighbor.col >= 0 &&
          neighbor.col < GRID_SIZE &&
          !newGrid[neighbor.row][neighbor.col].isVisited &&
          !newGrid[neighbor.row][neighbor.col].isWall
        ) {
          stack.push(neighbor);
          parent[`${neighbor.row}-${neighbor.col}`] = current;
        }
      }
    }
  };

  const runAlgorithm = async () => {
    setIsRunning(true);

    if (selectedCategory === "sorting") {
      switch (selectedAlgorithm) {
        case "bubble":
          await bubbleSort();
          break;
        case "merge":
          await mergeSort();
          break;
        case "quick":
          await quickSort();
          break;
        default:
          break;
      }
    } else if (selectedCategory === "pathfinding") {
      switch (selectedAlgorithm) {
        case "bfs":
          await bfs();
          break;
        case "dfs":
          await dfs();
          break;
        default:
          break;
      }
    }

    setIsRunning(false);
  };

  const resetVisualization = () => {
    setIsRunning(false);
    if (selectedCategory === "sorting") {
      generateArray();
    }
  };

  const algorithms = {
    sorting: [
      { id: "bubble", name: "Bubble Sort", complexity: "O(n²)" },
      { id: "merge", name: "Merge Sort", complexity: "O(n log n)" },
      { id: "quick", name: "Quick Sort", complexity: "O(n log n)" },
    ],
  };

  return (
    <section
      id="algorithmvisualizer"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="ALGORITHM VISUALIZATION"
          des="Interactive Algorithm Learning Platform"
        />
      </div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center max-w-3xl mx-auto"
      >
        <p className="text-gray-400 text-lg leading-relaxed">
          This interactive algorithm visualizer demonstrates various sorting
          algorithms using <span className="text-designColor">React</span>,
          <span className="text-designColor"> Framer Motion</span>, and
          <span className="text-designColor"> advanced state management</span>.
          Watch algorithms come to life with step-by-step animations and
          real-time visualization.
        </p>
      </motion.div>

      {/* Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 bg-gray-800 p-6 rounded-lg border border-gray-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedAlgorithm(algorithms[e.target.value][0].id);
                resetVisualization();
              }}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2"
              disabled={isRunning}
            >
              <option value="sorting">Sorting Algorithms</option>
            </select>
          </div>

          {/* Algorithm Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Algorithm
            </label>
            <select
              value={selectedAlgorithm}
              onChange={(e) => setSelectedAlgorithm(e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2"
              disabled={isRunning}
            >
              {algorithms[selectedCategory].map((alg) => (
                <option key={alg.id} value={alg.id}>
                  {alg.name} - {alg.complexity}
                </option>
              ))}
            </select>
          </div>

          {/* Speed Control */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Speed: {speed}ms
            </label>
            <input
              type="range"
              min="10"
              max="190"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full"
              disabled={isRunning}
            />
          </div>

          {/* Control Buttons */}
          <div className="flex gap-2">
            <button
              onClick={runAlgorithm}
              disabled={isRunning}
              className="flex-1 bg-designColor hover:bg-designColor/80 disabled:bg-gray-600 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              {isRunning ? "Running..." : "Start"}
            </button>
            <button
              onClick={resetVisualization}
              className="flex-1 bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </motion.div>

      {/* Visualization Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 p-6 rounded-lg border border-gray-700"
      >
        {selectedCategory === "sorting" ? (
          <div className="h-96 flex items-end justify-center gap-1 overflow-x-auto">
            {array.map((value, index) => (
              <motion.div
                key={index}
                className={`min-w-[8px] max-w-[15px] flex-1 ${
                  comparing.includes(index)
                    ? "bg-red-500"
                    : sorted.includes(index)
                    ? "bg-green-500"
                    : "bg-designColor"
                }`}
                style={{ height: `${value}px` }}
                animate={{ height: `${value}px` }}
                transition={{ duration: 0.1 }}
              />
            ))}
          </div>
        ) : (
          <div
            className="grid gap-1"
            style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
          >
            {grid.map((row, rowIndex) =>
              row.map((node, colIndex) => (
                <motion.div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-6 h-6 border border-gray-600 ${
                    node.isStart
                      ? "bg-green-500"
                      : node.isEnd
                      ? "bg-red-500"
                      : node.isWall
                      ? "bg-gray-900"
                      : node.isPath
                      ? "bg-yellow-500"
                      : node.isVisited
                      ? "bg-blue-500"
                      : "bg-gray-700"
                  }`}
                  initial={{ scale: 1 }}
                  animate={{ scale: node.isVisited || node.isPath ? 1.1 : 1 }}
                  transition={{ duration: 0.1 }}
                />
              ))
            )}
          </div>
        )}
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-gray-800 p-6 rounded-lg border border-gray-700"
      >
        <h3 className="text-xl font-semibold text-white mb-4">
          Legend & Technical Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-designColor font-semibold mb-2">
              {selectedCategory === "sorting"
                ? "Sorting Colors:"
                : "Pathfinding Colors:"}
            </h4>
            <div className="space-y-2 text-sm">
              {selectedCategory === "sorting" ? (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-designColor"></div>
                    <span className="text-gray-300">Unsorted elements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500"></div>
                    <span className="text-gray-300">Currently comparing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500"></div>
                    <span className="text-gray-300">Sorted elements</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500"></div>
                    <span className="text-gray-300">Start node</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500"></div>
                    <span className="text-gray-300">End node</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-900"></div>
                    <span className="text-gray-300">Wall</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500"></div>
                    <span className="text-gray-300">Visited</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-500"></div>
                    <span className="text-gray-300">Shortest path</span>
                  </div>
                </>
              )}
            </div>
          </div>
          <div>
            <h4 className="text-designColor font-semibold mb-2">
              Implementation Features:
            </h4>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>• Async/await for smooth animations</li>
              <li>• React hooks for state management</li>
              <li>• Framer Motion for transitions</li>
              <li>• Configurable animation speed</li>
              <li>• Real-time algorithm visualization</li>
              <li>• Interactive controls and feedback</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AlgorithmVisualizer;
