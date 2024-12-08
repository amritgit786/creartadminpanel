import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import PageHeader from "../PageHeader/PageHeader";
import AddEmployee from "../../Pages/Employee/AddEmployee";
import AllEmployee from "../../Pages/Employee/AllEmployee";
import AddState from "../../Pages/State/AddState";
import AllStates from "../../Pages/State/AllStates";
import AddCity from "../../Pages/City/AddCity";
import AllCities from "../../Pages/City/AllCities";
import AddArea from "../../Pages/Area/AddArea";
import AllArea from "../../Pages/Area/AllArea";
import AttendanceList from "../../Pages/Attendance/AttendanceList";
import AddWorkShifts from "../../Pages/WorkShifts/AddWorkShifts";
import ListWorkShifts from "../../Pages/WorkShifts/ListWorkShifts";
import ListExpanses from "../../Pages/Expanses/ListExpanses";
import LeaveRequest from "../../Pages/Leaves/LeaveRequest";
import LeavesInfo from "../../Pages/Leaves/LeavesInfo";
import Holiday from "../../Pages/Leaves/Holiday";
const Layout = () => {
  return (
    <>
      <div className="page">
        <Header />
        <Navbar />
        <div className="page-wrapper">
          <PageHeader />

          <div className="page-body">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/addemployee" element={<AddEmployee />} />
              <Route path="/listemployee" element={<AllEmployee />} />
              <Route path="/addstate" element={<AddState />} />
              <Route path="/liststate" element={<AllStates />} />
              <Route path="/addcity" element={<AddCity />} />
              <Route path="/listcity" element={<AllCities />} />
              <Route path="/addarea" element={<AddArea />} />
              <Route path="/listarea" element={<AllArea />} />
              <Route path="/attendancelist" element={<AttendanceList />} />
              <Route path="/addworkshift" element={<AddWorkShifts />} />
              <Route path="/listworkshift" element={<ListWorkShifts />} />
              <Route path="/expanselist" element={<ListExpanses />} />
              <Route path="/leaverequest" element={<LeaveRequest />} />
              <Route path="/leavesinfo" element={<LeavesInfo />} />
              <Route path="/holidaylist" element={<Holiday />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
