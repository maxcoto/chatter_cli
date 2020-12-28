// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Person from "@material-ui/icons/Person";

// views
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";

// students includes
import NewStudent  from "views/Students/NewStudent.js";
import EditStudent from "views/Students/EditStudent.js";
import ShowStudent from "views/Students/ShowStudent.js";
import StudentList from "views/Students/StudentList.js";

// teachers imports
import TeacherEdit from 'views/Teachers/TeacherEdit.js'
import TeacherList from 'views/Teachers/TeacherList.js'
import TeacherNew from 'views/Teachers/TeacherNew.js'
import TeacherShow from 'views/Teachers/TeacherShow.js'
// courses imports
import CourseEdit from 'views/Courses/CourseEdit.js'
import CourseList from 'views/Courses/CourseList.js'
import CourseNew from 'views/Courses/CourseNew.js'
import CourseShow from 'views/Courses/CourseShow.js'
// levels imports
import LevelEdit from 'views/Levels/LevelEdit.js'
import LevelList from 'views/Levels/LevelList.js'
import LevelNew from 'views/Levels/LevelNew.js'
import LevelShow from 'views/Levels/LevelShow.js'

// histories imports
import HistoryEdit from 'views/Histories/HistoryEdit.js'
import HistoryList from 'views/Histories/HistoryList.js'
import HistoryNew from 'views/Histories/HistoryNew.js'
import HistoryShow from 'views/Histories/HistoryShow.js'
// prices imports
import PriceEdit from 'views/Prices/PriceEdit.js'
import PriceList from 'views/Prices/PriceList.js'
import PriceNew from 'views/Prices/PriceNew.js'
import PriceShow from 'views/Prices/PriceShow.js'
// schedules imports
import ScheduleEdit from 'views/Schedules/ScheduleEdit.js'
import ScheduleList from 'views/Schedules/ScheduleList.js'
import ScheduleNew from 'views/Schedules/ScheduleNew.js'
import ScheduleShow from 'views/Schedules/ScheduleShow.js'
// subscriptions imports
import SubscriptionEdit from 'views/Subscriptions/SubscriptionEdit.js'
import SubscriptionList from 'views/Subscriptions/SubscriptionList.js'
import SubscriptionNew from 'views/Subscriptions/SubscriptionNew.js'
import SubscriptionShow from 'views/Subscriptions/SubscriptionShow.js'
//[+add_includes+]

const routes = [
  { path: "/dashboard", component: DashboardPage, layout: "", name: "Dashboard", icon: Dashboard },
  { path: "/user",      component: UserProfile,   layout: "", name: "Profile",   icon: AccountCircle,  bottom: true },
  
  // students routes
  { path: "/students/new",      component: NewStudent,  layout: "", hidden: true },
  { path: "/students/:id/edit", component: EditStudent, layout: "", hidden: true },
  { path: "/students/:id",      component: ShowStudent, layout: "", hidden: true },
  { path: "/students",          component: StudentList, layout: "", name: "Students", icon: Person },

  
  // teachers routes
  { path: '/teachers/new',      component: TeacherNew,  layout: '', hidden: true },
  { path: '/teachers/:id/edit', component: TeacherEdit, layout: '', hidden: true },
  { path: '/teachers/:id',      component: TeacherShow, layout: '', hidden: true },
  { path: '/teachers',          component: TeacherList, layout: '', name: 'Teachers', icon: Dashboard },
  
  // courses routes
  { path: '/courses/new',      component: CourseNew,  layout: '', hidden: true },
  { path: '/courses/:id/edit', component: CourseEdit, layout: '', hidden: true },
  { path: '/courses/:id',      component: CourseShow, layout: '', hidden: true },
  { path: '/courses',          component: CourseList, layout: '', name: 'Courses', icon: Dashboard },
  
  // levels routes
  { path: '/levels/new',      component: LevelNew,  layout: '', hidden: true },
  { path: '/levels/:id/edit', component: LevelEdit, layout: '', hidden: true },
  { path: '/levels/:id',      component: LevelShow, layout: '', hidden: true },
  { path: '/levels',          component: LevelList, layout: '', name: 'Levels', icon: Dashboard },
  
  
  // histories routes
  { path: '/histories/new',      component: HistoryNew,  layout: '', hidden: true },
  { path: '/histories/:id/edit', component: HistoryEdit, layout: '', hidden: true },
  { path: '/histories/:id',      component: HistoryShow, layout: '', hidden: true },
  { path: '/histories',          component: HistoryList, layout: '', name: 'Histories', icon: Dashboard },
  
  // prices routes
  { path: '/prices/new',      component: PriceNew,  layout: '', hidden: true },
  { path: '/prices/:id/edit', component: PriceEdit, layout: '', hidden: true },
  { path: '/prices/:id',      component: PriceShow, layout: '', hidden: true },
  { path: '/prices',          component: PriceList, layout: '', name: 'Prices', icon: Dashboard },
  
  // schedules routes
  { path: '/schedules/new',      component: ScheduleNew,  layout: '', hidden: true },
  { path: '/schedules/:id/edit', component: ScheduleEdit, layout: '', hidden: true },
  { path: '/schedules/:id',      component: ScheduleShow, layout: '', hidden: true },
  { path: '/schedules',          component: ScheduleList, layout: '', name: 'Schedules', icon: Dashboard },
  
  // subscriptions routes
  { path: '/subscriptions/new',      component: SubscriptionNew,  layout: '', hidden: true },
  { path: '/subscriptions/:id/edit', component: SubscriptionEdit, layout: '', hidden: true },
  { path: '/subscriptions/:id',      component: SubscriptionShow, layout: '', hidden: true },
  { path: '/subscriptions',          component: SubscriptionList, layout: '', name: 'Subscriptions', icon: Dashboard },
  //[+add_routes+]





];

export default routes;
