"use client";
import React, { useState } from "react";

const Tables = ({ orders }) => {
  const [selectedBranch, setSelectedBranch] = useState("All");
  const [selectedService, setSelectedService] = useState("All");
  const [completed, setCompleted] = useState(0);
  const [completedList, setCompletedList] = useState([]);

  const uniqueBranches = [...new Set(orders.map((order) => order.branch))];
  const uniqueServices = [...new Set(orders.map((order) => order.service))];

  const handleBranchChange = (e) => {
    setSelectedBranch(e.target.value);
  };

  const handleServiceChange = (e) => {
    setSelectedService(e.target.value);
  };

  const handleClick = (e) => {
    if (!completedList.includes(orderId)) {
        setCompleted(completed + 1);
        setCompletedList([...completedList, e.target.value]);
  };

  const filteredOrders =
    selectedBranch === "All"
      ? orders
      : orders.filter(
          (order) => order.branch === "Colombo" || selectedBranch === "All"
        );

  const filteredOrders2 =
    selectedService === "All"
      ? orders
      : orders.filter((order) => order.service === selectedService);

  console.log("Orders:", orders);
  console.log("Unique Branches:", uniqueBranches);
  console.log("Selected Branch:", selectedBranch);
  console.log("Filtered Orders:", filteredOrders);
  return (
    <div className="fixed-x-auto">
      <div className="max-w mx-auto">
        <div className="max-w flex justify-between">
          <div className="mb-4">
            <label className="mr-2">Filter by Branch:</label>
            <select value={selectedBranch} onChange={handleBranchChange}>
              <option value="">All Branches</option>
              {uniqueBranches.map((branch) => (
                <option key={branch} value={branch}>
                  {branch}
                </option>
              ))}
            </select>
          </div>
          <div className="flex gap-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <div>{completed}</div>
            <button className="">
              Mark as Complete
            </button>
          </div>
        </div>
        <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4"></th>
              <th scope="col" className="px-6 py-3">
                ORDER ID
              </th>
              <th scope="col" className="px-6 py-3">
                CUSTOMER
              </th>
              <th scope="col" className="px-6 py-3">
                ADDED BY
              </th>
              <th scope="col" className="px-6 py-3">
                REFERENCE
              </th>
              <th scope="col" className="px-6 py-3">
                BRANCH
              </th>
              <th scope="col" className="px-6 py-3">
                SERVICE
              </th>
              <th scope="col" className="px-6 py-3">
                STATUS
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover-bg-gray-600"
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${order.id}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        onClick={handleClick}
                    />
                    <label
                      htmlFor={`checkbox-table-search-${order.id}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.id}
                </th>
                <td className="px-6 py-4">
                  {order.customer.name} - {order.customer.city}
                </td>
                <td className="px-6 py-4">{order.addedby}</td>
                <td className="px-6 py-4">{order.reference}</td>
                <td className="px-6 py-4">{order.branch}</td>
                <td className="px-6 py-4">{order.service}</td>
                <td className="flex items-center px-6 py-4 space-x-3">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    {order.status}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;
