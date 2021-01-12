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
  "Referral (text)",
  "Other (text)",
]

const _statuses = [
  "contacted",
  "followed up",
  "scheduled trial class",
  "attended trial class",
  "signed up",
  "not signed up",
  "active",
  "inactive",
]

const _status = [
  "active",
  "inactive",
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
  active: false
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
//[+add_default+]

module.exports = {
  bugs,
  website,
  server,
  _contact_methods: toSelect(_contact_methods),
  _lead_sources: toSelect(_lead_sources),
  _status: toSelect(_status),
  _statuses: toSelect(_statuses),
  _kind: toSelect(_kind),
  _group_periods,
  _individual_periods,
  defaultStudent,
  defaultTeacher,
  defaultCourse,
  defaultLevel,
  defaultHistory,
  defaultPrice,
  defaultSchedule,
  defaultSubscription,
//[+export_default+]
};
