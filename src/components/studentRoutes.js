import DefaultLayout from './Dashboard/DefaultLayout'
import MyCourses from './Dashboard/Student/MyCourses'
import PaymentData from "./Dashboard/Student/PaymentData"
import PaymentInvoice from "./Dashboard/Student/PaymentInvoice"
import Profile from "./Dashboard/Profile"
import Departments from "./Dashboard/Student/Departments"
import Contact from "./Dashboard/Contact"
import Faqs from "./Dashboard/Faqs"
import Logout from "./Auth/Logout"
// import Dashboard from "@material-ui/icons/Dashboard";

import ImportContacts from '@material-ui/icons/ImportContacts'
import Payment from "@material-ui/icons/Payment"
import CloudUpload from "@material-ui/icons/CloudUpload"
import Person from "@material-ui/icons/Person"
import ViewModule from "@material-ui/icons/ViewModule"
import HeadsetMic from "@material-ui/icons/HeadsetMic"
import Help from "@material-ui/icons/Help"
import ExitToApp from '@material-ui/icons/ExitToApp'

const routes = [
    { 
        path: '/dashboard/my-courses', 
        exact: true, 
        icon: ImportContacts, 
        rtlName: "مقرراتي", 
        name: 'MyCourses', 
        component: MyCourses, 
        layout: "" 
    },
    {  
         path: '/dashboard/payment-info', 
         exact: true, 
         icon: Payment, 
         rtlName: "بيانات السداد", 
         name: 'PaymentData', 
         component: PaymentData,
         layout: ""
    },
    {
        path: "/dashboard/payment",
        name: "PaymentInvoice",
        rtlName: "إرسال الإيصال",
        icon: CloudUpload,
        component: PaymentInvoice,
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
