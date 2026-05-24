import React, { useState } from "react";

import Sidebar from "./components/Sidebar";

import ProductsCreate from "./pages/ProductsCreate";
import AllProducts from "./pages/AllProducts";
import { FaBars } from "react-icons/fa";

function Admin() {
  const [activePage, setActivePage] = useState("dashboard");
  const [openSidebar, setOpenSidebar] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case "create-product":
        return <ProductsCreate />;

      case "all-products":
        return <AllProducts />;

      default:
        return (
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-dark">Welcome Admin 👋</h1>

            <p className="text-muted text-lg">
              Manage your ecommerce application easily.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-primary">
                <h2 className="text-muted font-medium">Total Products</h2>

                <h1 className="text-4xl font-bold text-dark mt-2">120</h1>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-secondary">
                <h2 className="text-muted font-medium">Total Orders</h2>

                <h1 className="text-4xl font-bold text-dark mt-2">85</h1>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-accent">
                <h2 className="text-muted font-medium">Revenue</h2>

                <h1 className="text-4xl font-bold text-dark mt-2">₹45K</h1>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="min-h-screen flex bg-light">
      {/* Sidebar */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
      />

      {/* Main Content */}
      <div className="flex-1">
        {/* MOBILE TOPBAR */}
        <div className="lg:hidden bg-white shadow-md p-4 flex items-center">
          <button onClick={() => setOpenSidebar(true)}>
            <FaBars size={24} />
          </button>

          <h1 className="ml-4 text-xl font-bold">Admin Panel</h1>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-4 md:p-8">{renderPage()}</div>
      </div>
    </section>
  );
}

export default Admin;
