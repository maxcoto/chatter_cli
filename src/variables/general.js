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

//[++] add default
const _frecuency = [
  "1 Month",
  "3 Months",
  "6 Months",
  "Hours"
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
  status: ""
}

// default teacher export
const defaultTeacher = {
  first_name: '',
  last_name: '',
  email: '',
  status: '',
}
// default course export
const defaultCourse = {
  name: '',
  classroom_link: '',
  meet_link: '',
  event_id: '',
  max_students: 0,
  level_id: 0,
  level: {},
  teacher_id: 0,
  teacher: {},
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
  level: {},
  kind: '',
  period: '',
  frecuency: '',
  amount: '',
}
// default schedule export
const defaultSchedule = {
  //[++] tabulation
  course_id: 0,
  course: {},
  recurrent_at: '',
  duration: '',
}
// default subscription export
const defaultSubscription = {
student: '',
course: '',
kind: '',
start_date: '',
renewal_date: '',
period: '',
price: '',
hours_left: '',
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
  _frecuency: toSelect(_frecuency),
  _kind: toSelect(_kind),
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
