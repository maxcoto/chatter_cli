// @material-ui/icons
// views
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";

// students includes
import NewStudent  from "views/Students/NewStudent.js";
import EditStudent from "views/Students/EditStudent.js";
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

//[+add_includes+]

const routes = [
  { path: "/dashboard", component: DashboardPage, layout: "", name: "Dashboard" },
  { path: "/user",      component: UserProfile,   layout: "", name: "Profile",   bottom: true },

  // students routes
  { path: "/students/new",      component: NewStudent,  layout: "", hidden: true },
  { path: "/students/:id",      component: EditStudent, layout: "", hidden: true },
  { path: "/students",          component: StudentList, layout: "", name: "Students" },


  // teachers routes
  { path: '/teachers/new',      component: TeacherNew,  layout: '', hidden: true },
  { path: '/teachers/:id/edit', component: TeacherEdit, layout: '', hidden: true },
  { path: '/teachers/:id',      component: TeacherShow, layout: '', hidden: true },
  { path: '/teachers',          component: TeacherList, layout: '', name: 'Teachers' },

  // courses routes
  { path: '/courses/new',      component: CourseNew,  layout: '', hidden: true },
  { path: '/courses/:id/edit', component: CourseEdit, layout: '', hidden: true },
  { path: '/courses/:id',      component: CourseShow, layout: '', hidden: true },
  { path: '/courses',          component: CourseList, layout: '', name: 'Courses' },

  // levels routes
  { path: '/levels/new',      component: LevelNew,  layout: '', hidden: true },
  { path: '/levels/:id/edit', component: LevelEdit, layout: '', hidden: true },
  { path: '/levels/:id',      component: LevelShow, layout: '', hidden: true },
  { path: '/levels',          component: LevelList, layout: '', hidden: true },


  // histories routes
  { path: '/histories/new',      component: HistoryNew,  layout: '', hidden: true },
  { path: '/histories/:id/edit', component: HistoryEdit, layout: '', hidden: true },
  { path: '/histories/:id',      component: HistoryShow, layout: '', hidden: true },
  { path: '/histories',          component: HistoryList, layout: '', hidden: true },

  // prices routes
  { path: '/prices/new',      component: PriceNew,  layout: '', hidden: true },
  { path: '/prices/:id/edit', component: PriceEdit, layout: '', hidden: true },
  { path: '/prices/:id',      component: PriceShow, layout: '', hidden: true },
  { path: '/prices',          component: PriceList, layout: '', hidden: true },

  //[+add_routes+]





];

export default routes;
