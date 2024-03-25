
import { Routes,Route } from "react-router-dom";
import Homepage from './component/pages/Homepage'
import Aboutpage from './component/pages/Aboutpage'
import Registerpage from './component/pages/Authpages/Registerpage/Registerpage.jsx'
import Loginpage from './component/pages/Authpages/Loginpage/Loginpage.jsx'
import PagenotFound from './component/pages/PagenotFound.jsx'
import Contact from "./component/pages/Contact.jsx";
import PrivacyPolicy from "./component/pages/PrivacyPolicy.jsx";
import DashBoard from "./component/pages/User/DashBoard.jsx";
import Privateroute from "./component/Routes/Privateroute.jsx";
import ForgotPasswordpage from "./component/pages/Authpages/Forgotpasswordpage/ForgotPasswordpage.jsx";
import AdminDashboard from "./component/pages/Admin/AdminDashboard.jsx";
import Adminroute from "./component/Routes/Adminroute.jsx";
import CreateCategory from "./component/pages/Admin/CreateCategory.jsx";
import Users from "./component/pages/Admin/Users.jsx";
import CreateProduct from "./component/pages/Admin/CreateProduct.jsx";
import Profile from "./component/pages/User/Profile.jsx";
import Orders from "./component/pages/User/Orders.jsx";

function App() {
  return (
    <>
   <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/about" element={<Aboutpage/>}/>
    <Route path="/dashboard" element={<Privateroute/>}>
     <Route path="user" element={<DashBoard/>}/>
     <Route path="user/profile" element={<Profile/>}/>
     <Route path="user/orders" element={<Orders/>}/>

    </Route>
    <Route path="/dashboard" element={<Adminroute/>}>
      <Route path="admin" element={<AdminDashboard/>}/>
      <Route path="admin/create-category" element={<CreateCategory/>}/>
      <Route path="admin/create-product" element={<CreateProduct/>}/>
      <Route path="admin/users" element={<Users/>}/>
    </Route>
    <Route path="/register" element={< Registerpage />}/>
    <Route path="/Forgot-Password" element={< ForgotPasswordpage />}/>

    <Route path="/login" element={<Loginpage/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/policy" element={<PrivacyPolicy/>}/>
   
    <Route path="*" element={<PagenotFound/>}/>

    
   </Routes>
 
    </>
 
  );
}

export default App;
