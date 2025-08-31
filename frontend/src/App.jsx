import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WebsiteLayout from "./components/WebsiteLayout";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import DashboardLayout from './components/DashboardLayout';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={
          <WebsiteLayout>
            <Home />
          </WebsiteLayout>
        } />
        <Route path="/product/:id" element={
          <WebsiteLayout>
            <ProductDetail />
          </WebsiteLayout>
        } />
        <Route path="/cart" element={
          <WebsiteLayout>
            <Cart />
          </WebsiteLayout>
        } />
        <Route path="/checkout" element={
          <WebsiteLayout>
            <Checkout />
          </WebsiteLayout>
        } />
        <Route path="/products" element={
          <WebsiteLayout>
            <Products />
          </WebsiteLayout>
        } />
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={
          <DashboardLayout>
            <Dashboard />
          </DashboardLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App;