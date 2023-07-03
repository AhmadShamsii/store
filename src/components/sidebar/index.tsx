import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  BarChartOutlined,
  DribbbleOutlined,
  DatabaseOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const Sidebar = () => {
  const location = useLocation();

  const handleClick = (e) => {
    //
  };
  return (
    <Layout>
      <Sider
        width={240}
        style={{
          height: "100vh",
          position: "fixed",
          backgroundColor: "white",
          paddingTop: "80px",
          fontSize: "20px",
        }}
      >
        <Menu
          style={{
            fontSize: "15.5px",
            backgroundColor: "white",
          }}
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={handleClick}
        >
          <Menu.Item
            style={{ backgroundColor: "#f8f9fa" }}
            key="/analytics"
            icon={<BarChartOutlined />}
          >
            <Link to="/analytics">Dashboard</Link>
          </Menu.Item>
          <Menu.Item
            style={{ backgroundColor: "#f8f9fa" }}
            key="/analytics/products"
            icon={<DribbbleOutlined />}
          >
            <Link to="/analytics/products">Products</Link>
          </Menu.Item>
          <Menu.Item
            style={{ backgroundColor: "#f8f9fa" }}
            key="/analytics/customers"
            icon={<UserOutlined />}
          >
            <Link to="/analytics/customers">Customers</Link>
          </Menu.Item>
          <Menu.Item
            style={{ backgroundColor: "#f8f9fa" }}
            key="/analytics/category"
            icon={<DatabaseOutlined />}
          >
            <Link to="/analytics/orders">Orders</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};
export default Sidebar;
