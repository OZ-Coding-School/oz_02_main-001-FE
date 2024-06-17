import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage/page";
import LoginPage from "./pages/LoginPage/page";
import SearchPage from "./pages/SearchPage/page";
import NotificationPage from "./pages/NotificationPage/page";
import RecipePage from "./pages/RecipePage/page";
import RecipeListPage from "./pages/RecipeListPage/page";
import RefrigeratorPage from "./pages/RefrigeratorPage/page";
import IngredientsListPage from "./pages/IngredientsListPage/page";
import IngredientSelectionPage from "./pages/IngredientSelectionPage/page";
import RecipeRegistrationPage from "./pages/RecipeRegistrationPage/page";
import BookMarkPage from "./pages/BookMarkPage/page";
import LikedPage from "./pages/LikedPage/page/index";
import ProfilePage from "./pages/ProfilePage/page";
import RecommendedRecipePage from "./pages/RecommendedRecipePage/page";
import ErrorPage from "./pages/ErrorPage";
import SettingPage from "./pages/SettingPage/page";
import ScrollTo from "./utils/ScrollTo";
import ProtectedRoute from "./routes/ProtectedRoute";
import CommonRoute from "./routes/CommonRoute";

function App() {
  return (
    <Router>
      <ScrollTo />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<CommonRoute />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/notice" element={<NotificationPage />} />
            <Route path="/recipe/:recipeId" element={<RecipePage />} />
            <Route path="/recipeList/:categoryId" element={<RecipeListPage />} />
            <Route path="/refrigerator" element={<RefrigeratorPage />} />
            <Route path="/ingredientList" element={<IngredientsListPage />} />
            <Route path="/ingredientSelection" element={<IngredientSelectionPage />} />
            <Route path="/recommendedList" element={<RecommendedRecipePage />} />
            <Route path="/recipeRegistration" element={<RecipeRegistrationPage />} />
            <Route path="/bookmark" element={<BookMarkPage />} />
            <Route path="/liked" element={<LikedPage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
