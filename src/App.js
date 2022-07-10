import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/navbar";
import Home from "./components/home";
import SignupForm from "./components/signupForm";
import ForgotPassword from "./components/forgotPassword";
import NotFound from "./components/notfound";
import Dashboard from "./components/dashboard";
import ChangePassword from "./components/changePasswordForm";
import Quotations from "./components/quotations";
import QuotationForm from "./components/quotationForm";
import LoginForm from "./components/loginForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

// async function componentDidMount() {
//   // pending > resolved (success) OR rejected (failure)
//   const { data: posts } = await axios.get(apiEndPoint);
//   this.setState({ posts });
// }

// handleAdd = async () => {
//   const obj = { title: "a", body: "b" };
//   const { data: post } = await axios.post(apiEndPoint, obj);
// };

// handleUpdate = async () => {
//   post.title = "UPDATED";
//   const { data } = await axios.put(apiEndPoint + "/" + post.id, post);
// };

// handleDelete = async () => {
//   const originalPosts = this.state.posts;

//   const posts = this.state.posts.filter((p) => p.id !== post.id);
//   this.setState({ posts });

//   try {
//     const { data } = await axios.delete(apiEndPoint + "/" + post.id);
//   } catch (error) {
//     alert("Something failed while deleting a post!");
//     this.setState({ posts: originalPosts });
//   }
// };

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route exact path="/not-found" element={<NotFound />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Quotations />} />
            <Route path="/dashboard/quotations" element={<Quotations />} />
            <Route
              path="/dashboard/quotations/:id"
              element={<QuotationForm />}
            />
            <Route
              path="/dashboard/changepassword"
              element={<ChangePassword />}
            />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
