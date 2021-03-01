// ##############################
// // // Tasks for TasksCard - see Dashboard view
// #############################

var bugs = [
  'Sign contract for "What are conference organizers afraid of?"',
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  "Create 4 Invisible User Experiences you Never Knew About"
];
var website = [
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];
var server = [
  "Lines From Great Russian Literature? Or E-mails From My Boss?",
  "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",
  'Sign contract for "What are conference organizers afraid of?"'
];


function toSelect(list){
  return list.map(function(item){ return { id: item, name: item } })
}

const _contact_methods = [
  "email",
  "facebook message",
  "instagram message",
  "phone call",
  "prueba de inglés form",
  "website - reserve class form",
  "website - consultation form",
  "visit in person",
  "whatsapp message"
]

const _lead_sources = [
  "Facebook",
  "Instagram",
  "Google",
  "MercadoLibre",
  "Referral",
  "Other",
]

const _statuses = [
  "contacted",
  "followed up",
  "scheduled trial class",
  "attended trial class",
  "signed up",
  "no response",
  "not signed up"
]

const _status = [
  { id: true, name: "active" },
  { id: false, name: "dropped" },
]

const _kind = [
  "Group",
  "Individual",
]

const _group_periods = [
  { id: 1, name: "1 Month"  },
  { id: 3, name: "3 Months" },
  { id: 6, name: "6 Months" }
]

const _individual_periods = [
  { id: 6,  name: "6 Hours"  },
  { id: 8,  name: "8 Hours"  },
  { id: 12, name: "12 Hours" },
  { id: 16, name: "16 Hours" }
]

// default stats export
const defaultStats = {
  current_active_students: 0,
  new_students_this_week: 0,
  new_students_this_month: 0,
  dropped_students_this_week: 0,
  dropped_students_this_month: 0,
  hours_of_class_this_month: 0,
  teacher_pay_due_this_month: 0,
  overdue_subscriptions: []
}

// default users per month
const defaultStudentsPerMonth = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
  ]
}

// default levels
const defaultLevels = {
  labels: ["B", "E", "P", "I", "U", "A"],
  series: [10, 20, 20, 10, 20, 20]
}

// default levels
const defaultTime = {
  labels: ["1 month", "1-3 months", "3-6 months", "6-12 months", "12+ months"],
  series: [10, 20, 20, 40, 10]
}

// default student export
const defaultStudent = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  contact_method: "",
  lead_source: "",
  objectives: "",
  notes: "",
  level_id: 0,
  level: {},
  status: "",
  active: false,
  history: [],
  schedules: []
}

// default teacher export
const defaultTeacher = {
  first_name: '',
  last_name: '',
  email: '',
  active: false,
}
// default course export
const defaultCourse = {
  name: '',
  classroom_link: '',
  max_students: 1,
  level_id: 0,
  teacher_id: 0,
}
// default level export
const defaultLevel = {
  order: '',
  name: '',
}

// default history export
const defaultHistory = {
  //[++] refs
  teacher_id: 0,
  teacher: {},
  calendar_id: '',
  event_id: '',
  duration: '',
  started_at: '',
}
// default price export
const defaultPrice = {
  level_id: 0,
  kind: '',
  period: 0,
  amount: 0,
}
// default schedule export
const defaultSchedule = {
  //[++] tabulation
  recurrent_at: '',
  duration: '',
}
// default subscription export
const defaultSubscription = {
  student_id: 0,
  course_id: 0,
  kind: '',
  start_date: '',
  renewal_date: '',
  period: 0,
  price: '',
  hours_left: 0,
}
// default trial export
const defaultTrial = {
  student_id: 0,
  course_id: 0,
  class_date: ''
}

//[+add_default+]

module.exports = {
  bugs,
  website,
  server,
  _contact_methods: toSelect(_contact_methods),
  _lead_sources: toSelect(_lead_sources),
  _statuses: toSelect(_statuses),
  _kind: toSelect(_kind),
  _status,
  _group_periods,
  _individual_periods,
  defaultStats,
  defaultStudentsPerMonth,
  defaultLevels,
  defaultTime,
  defaultStudent,
  defaultTeacher,
  defaultCourse,
  defaultLevel,
  defaultHistory,
  defaultPrice,
  defaultSchedule,
  defaultSubscription,
  defaultTrial,
//[+export_default+]
};
