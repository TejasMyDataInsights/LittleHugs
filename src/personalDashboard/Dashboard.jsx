import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import RightHandSide from "../components/RightHandSide";

export default function Dashboard() {
  const [username, setUsername] = useState("Sethulakshmi");

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Main />

      {/* Right Sidebar */}
      <RightHandSide />
    </div>
  );
}
