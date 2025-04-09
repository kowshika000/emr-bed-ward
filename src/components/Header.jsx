import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs } from "antd";
import WardOccupancy from "../BedWardManagement/WardOccupancy/WardOccupancy";
import BedOccupancy from "../BedWardManagement/BedOccupancy/BedOccupancy";

const { TabPane } = Tabs;

const HeaderWithTabs = ({ navigate }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = searchParams.get("tab") || "ward-occupancy";
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Update activeTab when query param changes
  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleTabChange = (key) => {
    setActiveTab(key);
    setSearchParams({ tab: key }); // Update URL query param
  };

  return (
    <div
      className="p-3 mb-5"
      style={{ width: "100%", height: "100%", overflow: "auto" }}
    >
      <Tabs activeKey={activeTab} onChange={handleTabChange} type="card">
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
