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


const contactMethods = [
  { id: "email", name: "email" },
  { id: "facebook message", name: "facebook message" },
  { id: "instagram message", name: "instagram message" },
  { id: "phone call", name: "phone call" },
  { id: "prueba de inglés form", name: "prueba de inglés form" },
  { id: "website - reserve class form", name: "website - reserve class form" },
  { id: "website - consultation form", name: "website - consultation form" },
  { id: "visit in person", name: "visit in person" },
  { id: "whatsapp message", name: "whatsapp message" }
]

const leadSources = [
  { id: "Facebook", name: "Facebook" },
  { id: "Instagram", name: "Instagram" },
  { id: "Google", name: "Google" },
  { id: "MercadoLibre", name: "MercadoLibre" },
  { id: "Referral (text)", name: "Other (text)" },
  { id: "Other (text)", name: "Other (text)" }
]

const levels = [
  { id: "beginner", name: "beginner" },
  { id: "elementary", name: "elementary" },
  { id: "pre intermediate", name: "pre intermediate" },
  { id: "intermediate", name: "intermediate" },
  { id: "upper intermediate", name: "upper intermediate" },
  { id: "advanced", name: "advanced" }
]

const statuses = [
  { id: "contacted", name: "contacted" },
  { id: "followed up", name: "followed up" },
  { id: "scheduled trial class", name: "scheduled trial class" },
  { id: "attended trial class", name: "attended trial class" },
  { id: "signed up", name: "signed up" },
  { id: "not signed up", name: "not signed up" },
  { id: "active", name: "active" },
  { id: "inactive", name: "inactive" }
]

const _status = [
  { id: "active", name: "active" },
  { id: "inactive", name: "inactive" }
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
  level: "",
  status: ""
}

// default teacher export
const defaultTeacher = {
first_name: '',
last_name: '',
email: '',
status: '',
}
//[+add_default+]

module.exports = {
  // these 3 are used to create the tasks lists in TasksCard - Dashboard view
  bugs,
  website,
  server,
  contactMethods,
  leadSources,
  levels,
  _status,
  statuses,
  defaultStudent,
  defaultTeacher,
//[+export_default+]
};
