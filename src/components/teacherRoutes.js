// import DefaultLayout from '../components/Dashboard/DefaultLayout'
import ControlBoard from './Dashboard/Teacher/ControlBoard'
import Courses from './Dashboard/Teacher/Courses'
import Profile from "./Dashboard/Profile"
import Departments from "./Dashboard/Student/Departments"
import Contact from "./Dashboard/Contact"
import Faqs from "./Dashboard/Faqs"
import Logout from "./Auth/Logout"
// import Dashboard from "@material-ui/icons/Dashboard";

import School from "@material-ui/icons/School"
import ImportContacts from '@material-ui/icons/ImportContacts'
import Person from "@material-ui/icons/Person"
import ViewModule from "@material-ui/icons/ViewModule"
import HeadsetMic from "@material-ui/icons/HeadsetMic"
import Help from "@material-ui/icons/Help"
import ExitToApp from '@material-ui/icons/ExitToApp'

const routes = [
    { 
        path: '/dashboard/teacher', 
        exact: true, 
        icon: School, 
        rtlName: "لوحة التحكم", 
        name: 'ControlBoard', 
        component: ControlBoard, 
        layout: "" 
    },
    { 
        path: '/dashboard/courses', 
        exact: true, 
        icon: ImportContacts, 
        rtlName: "مقرراتي", 
        name: 'Courses', 
        component: Courses, 
        layout: "" 
    },
    {
        path: "/dashboard/profile/edit",
        name: "Profile",
        rtlName: "تعديل الملف الشخصي",
        icon: Person,
        component: Profile,
        layout: ""
    },
    {
        path: "/dashboard/departments",
        name: "Departments",
        rtlName: "الأقسام",
        icon: ViewModule,
        component: Departments,
        layout: ""
    },
    {
        path: "/dashboard/contact",
        name: "Contact",
        rtlName: "الدعم الفني",
        icon: HeadsetMic,
        component: Contact,
        layout: ""
    },
    {
        path: "/dashboard/FAQs",
        name: "Faqs",
        rtlName: "الأسئلة الشائعة",
        icon: Help,
        component: Faqs,
        layout: ""
    },
    {
        path: "/login",
        name: "Logout",
        rtlName: "تسجيل الخروج",
        icon: ExitToApp,
        component: Logout,
        layout: ""
    }
];

export default routes;
