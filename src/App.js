import React, { Switch } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import AdminLayout from "./components/layouts/adminLayout";
import Signin from "./components/screesn/Signin";
import Signup from "./components/screesn/Signup";
import Dashboard from "./components/screesn/dashboard";
import AllUsers from "./components/screesn/Users/AllUsers";

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Signin />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route element={<AdminLayout />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="all-users" element={<AllUsers/>} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

function PrivateRoutes() {
  return (
    <div>
      <h1>PrivateRoutes</h1>
    </div>
  );
}
function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
function Blogs() {
  return (
    <div>
      <h1>Blogs</h1>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
}
function NoPage() {
  return (
    <div className="h-full">
      <div class="v-center bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div class="max-w-max mx-auto">
          <main class="sm:flex">
            <p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
              404
            </p>
            <div class="sm:ml-6">
              <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p class="mt-1 text-base text-gray-500">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  to="/"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {" "}
                  Go back home{" "}
                </Link>
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {" "}
                  Contact support{" "}
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
