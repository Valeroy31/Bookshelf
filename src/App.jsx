import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import PostList from "./Features/Posts/PostList";
import CardsDisplay from "./Pages/CardsDisplay";
import Params from "./Pages/Params";
import Cart from "./Pages/Cart";
import Callback from "./Pages/Callback";
import ProtectedRoute from "./Components/ProtectedRoute";
import BooksDisplay from "./Pages/BooksDisplay";
import AddPostForm from "./Features/Posts/AddPostForm";
import FullPostPage from "./Features/Posts/FullPostPage";
import EditPostForm from "./Features/Posts/EditPostForm";
import AllUsers from "./Features/Users/AllUsers";
import UserPage from "./Features/Users/UserPage";
import PersistLogin from "./Components/PersistLogin";
import Search from "./Pages/Search";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LandingPage />} />

      <Route path="/auth">
        <Route path="users/sign_up" element={<Signup />} />
        <Route path="users/login" element={<Login />} />
        <Route path="/auth/callback" element={<Callback />} />
      </Route>
      <Route path="/posts" element={<PostList />} />
      <Route path="/postAuthors" element={<AllUsers />} />
      <Route path="/author/:id" element={<UserPage />} />
      <Route path="/posts/addPost" element={<AddPostForm />} />
      <Route path="/posts/:id" element={<FullPostPage />} />
      <Route path="/editPost/:id" element={<EditPostForm />} />
      <Route element={<PersistLogin />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Route>

      <Route path="/card/:id" element={<CardsDisplay />} />
      <Route path="/books/:id" element={<BooksDisplay />} />
      <Route path="/search" element={<Search />} />
      <Route path="/params" element={<Params />} />
      <Route path="/cart" element={<Cart />} />
    </Route>
  )
);

export default router;
