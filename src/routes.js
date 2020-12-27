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
  //[+add_routes+]




];

export default routes;
