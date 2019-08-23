import AccountManagement from './Dashboard/Admin/AccountManagement'
import ConfirmPayment from './Dashboard/Admin/ConfirmPayment'
import FrequentEntry from './Dashboard/Admin/FrequentEntry'
import Lectures from './Dashboard/Admin/Lectures'
import Permissions from './Dashboard/Admin/Permissions'
import Statistics from './Dashboard/Admin/Statistics'
// import SearchResult from './Dashboard/Admin/SearchResult'
import Logout from "./Auth/Logout"

import Payment from "@material-ui/icons/Payment"
import School from "@material-ui/icons/School"
import HowToReg from '@material-ui/icons/HowToReg'
import Group from "@material-ui/icons/Group"
import SupervisorAccount from "@material-ui/icons/SupervisorAccount"
import BarChart from "@material-ui/icons/BarChart"
import ExitToApp from '@material-ui/icons/ExitToApp'



const routes = [
    { 
        path: '/dashboard/admin/confirm-payment', 
        exact: true, 
        icon: Payment, 
        rtlName: "تأكيد السداد", 
        name: 'ConfirmPayment', 
        component: ConfirmPayment, 
        layout: "" 
    },
    { 
        path: '/dashboard/admin/teachersRequests', 
        exact: true, 
        icon: School, 
        rtlName: "طلبات المحاضرين ", 
        name: 'Lectures', 
        component: Lectures, 
        layout: "" 
    },
    { 
        path: '/dashboard/admin/roles', 
        exact: true, 
        icon: HowToReg, 
        rtlName: "الأذونات", 
        name: 'Permissions', 
        component: Permissions, 
        layout: "" 
    },
    { 
        path: '/dashboard/admin/duplicated-login', 
        exact: true, 
        icon: Group, 
        rtlName: "الدخول المتكرر", 
        name: 'FrequentEntry', 
        component: FrequentEntry, 
        layout: "" 
    },
    { 
        path: '/dashboard/admin/account-management', 
        exact: true, 
        icon: SupervisorAccount, 
        rtlName: "إدارة الحسابات", 
        name: 'AccountManagement', 
        component: AccountManagement, 
        layout: "" 
    },
    { 
        path: '/dashboard/admin', 
        exact: true, 
        icon: BarChart, 
        rtlName: "الإحصائيات", 
        name: 'Statistics', 
        component: Statistics, 
        layout: "" 
    },
    {
        path: "/login",
        name: "Logout",
        rtlName: "تسجيل الخروج",
        icon: ExitToApp,
        component: Logout,
        layout: ""
    },
];

export default routes;
