import MyCourses from './Dashboard/Student/MyCourses'
import PaymentData from "./Dashboard/Student/PaymentData"
import PaymentInvoice from "./Dashboard/Student/PaymentInvoice"
import Profile from "./Dashboard/Profile"
import Departments from "./Dashboard/Student/Departments"
import Contact from "./Dashboard/Contact"
import Faqs from "./Dashboard/Faqs"

import ControlBoard from './Dashboard/Teacher/ControlBoard'
import Courses from './Dashboard/Teacher/Courses'
import CreateCourse from './Dashboard/Teacher/CreateCourse'
import CourseManagement from './Dashboard/Teacher/CourseManagement'
import Chapters from './Dashboard/Teacher/Chapters'
import CreateChapter from './Dashboard/Teacher/CreateChapter'
import CourseEdit from './Dashboard/Teacher/CourseEdit'
import AddLecture from './Dashboard/Teacher/AddLecture'
import AddTextLecture from './Dashboard/Teacher/AddTextLecture'
import AddVideoLecture from './Dashboard/Teacher/AddVideoLecture'
import AddSummary from './Dashboard/Teacher/AddSummary'
import AddTest from './Dashboard/Teacher/AddTest'
import Summaries from './Dashboard/Teacher/Summaries'

import AccountManagement from './Dashboard/Admin/AccountManagement'
import ConfirmPayment from './Dashboard/Admin/ConfirmPayment'
import FrequentEntry from './Dashboard/Admin/FrequentEntry'
import Lectures from './Dashboard/Admin/Lectures'
import Permissions from './Dashboard/Admin/Permissions'
import Statistics from './Dashboard/Admin/Statistics'
import SearchResult from './Dashboard/Admin/SearchResult'
import DepartmentCourse from './Dashboard/DepartmentCourse'
import Logout from "./Auth/Logout"

const routes = [
    // student
    { path: '/dashboard/my-courses', exact: true, name: 'MyCourses', component: MyCourses },
    { path: '/dashboard/payment-info', exact: true, name: 'PaymentData', component: PaymentData },
    { path: "/dashboard/payment", exact: true, name: 'PaymentInvoice', component: PaymentInvoice },
    { path: "/dashboard/profile/edit", exact: true, name: 'Profile', component: Profile },
    { path: "/dashboard/departments", exact: true, name: 'Departments', component: Departments },
    { path: "/dashboard/contact", exact: true, name: 'Contact', component: Contact },
    { path: "/dashboard/FAQs", exact: true, name: 'Faqs', component: Faqs },

    // teacher
    { path: '/dashboard/teacher/course/:id', exact: true, name: 'CourseManagement', component: CourseManagement},
    { path: '/dashboard/teacher', exact: true, name: 'ControlBoard', component: ControlBoard },
    { path: '/dashboard/courses', exact: true, name: 'Courses', component: Courses },
    { path: '/dashboard/course/create', exact: true, name: 'CreateCourse', component: CreateCourse },
    { path: '/dashboard/department/:id/course', exact: true, name: 'DepartmentCourse', component: DepartmentCourse },
    { path: '/dashboard/course/:id/lectures', exact: true, name: 'Chapters', component: Chapters},
    { path: '/dashboard/course/:id/add-unit', exact: true, name: 'CreateChapter', component: CreateChapter},
    { path: '/dashboard/course/:id/add-lecture/video', exact: false, name: 'AddVideoLecture', component: AddVideoLecture},    
    { path: '/dashboard/course/:id/add-lecture/text', exact: false, name: 'AddTextLecture', component: AddTextLecture},    
    { path: '/dashboard/course/:id/summaries', exact: true, name: 'Summaries', component: Summaries},    
    { path: '/dashboard/course/:id/add-lecture', exact: true, name: 'AddLecture', component: AddLecture},    
    { path: '/dashboard/course/:id/add-summary', exact: true, name: 'AddSummary', component: AddSummary},    
    { path: '/dashboard/course/:id/quiz/add', exact: true, name: 'AddTest', component: AddTest},
    { path: '/dashboard/course/:id', exact: true, name: 'CourseEdit', component: CourseEdit},
    

    // admin
    { path: '/dashboard/admin/confirm-payment', exact: true, name: 'ConfirmPayment', component: ConfirmPayment },
    { path: '/dashboard/admin/teachersRequests', exact: true, name: 'Lectures', component: Lectures },
    { path: '/dashboard/admin/roles', exact: true, name: 'Permissions', component: Permissions },
    { path: '/dashboard/admin/duplicated-login', exact: true, name: 'FrequentEntry', component: FrequentEntry },
    { path: '/dashboard/admin/search-result', exact: true, name: 'SearchResult', component: SearchResult },
    { path: '/dashboard/admin/account-management', exact: true, name: 'AccountManagement', component: AccountManagement },
    { path: '/dashboard/admin', exact: true, name: 'Statistics', component: Statistics },

    // Logout
    { path: '/login', exact: true, name: 'Logout', component: Logout },
]

export default routes
