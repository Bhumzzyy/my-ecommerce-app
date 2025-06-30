import React, { useState } from "react";

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    if (newAddress.trim()) {
      setAddress(newAddress);
    }
    setIsModalOpen(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        className="border border-gray-300 p-2 pr-10 w-full rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;

// v18.17.1
// 9.6.7
