import React, { useState } from "react";
import { Tabs } from "antd";
import WardOccupancy from "../BedWardManagement/WardOccupancy/WardOccupancy";
import BedOccupancy from "../BedWardManagement/BedOccupancy/BedOccupancy";

const { TabPane } = Tabs;

const HeaderWithTabs = ({ navigate }) => {
  const [activeTab, setActiveTab] = useState("ward-occupancy");

  return (
    <div
      className="p-3 mb-5"
      style={{ width: "100%", height: "100%", overflow: "auto" }}
    >
      <Tabs activeKey={activeTab} onChange={setActiveTab} type="card">
        <TabPane tab="Ward Occupancy" key="ward-occupancy">
          <WardOccupancy navigate={navigate} />
        </TabPane>
        <TabPane tab="Bed Occupancy" key="bed-occupancy">
          <BedOccupancy />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default HeaderWithTabs;
