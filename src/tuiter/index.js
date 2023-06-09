import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import NotificationsScreen from "./notifications-screen";
import MoreScreen from "./more-screen";
import ListsScreen from "./lists-screen";
import MessagesScreen from "./messages-screen";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

const store = configureStore(
  { reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer } });

function Tuiter() {
  return (
    <Provider store={store}>
      <Nav />
      <div className="row">
        <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
          <NavigationSidebar />
        </div>
        <div className="col-7 col-sm-10 col-md-10 col-lg-7 col-xl-7 col-xxl-7">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/notifications" element={<NotificationsScreen />} />
            <Route path="/lists" element={<ListsScreen />} />
            <Route path="/messages" element={<MessagesScreen />} />
            <Route path="/more" element={<MoreScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/register" element={<RegisterScreen />} />
          </Routes>
        </div>
        <div className="col-3 col-lg-3 col-xl-3 col-xxl-3 d-none d-lg-block">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter
