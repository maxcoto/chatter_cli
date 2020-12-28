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

const contactMethods = [
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

const leadSources = [
  "Facebook",
  "Instagram",
  "Google",
  "MercadoLibre",
  "Referral (text)",
  "Other (text)",
]

const statuses = [
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
teacher: '',
calendar_id: '',
event_id: '',
duration: '',
started_at: '',
}
//[+add_default+]

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  bugs,
  website,
  server,
  contactMethods: toSelect(contactMethods),
  leadSources: toSelect(leadSources),
  _status: toSelect(_status),
  statuses: toSelect(statuses),
  defaultStudent,
  defaultTeacher,
  defaultCourse,
  defaultLevel,
defaultHistory,
//[+export_default+]
};
