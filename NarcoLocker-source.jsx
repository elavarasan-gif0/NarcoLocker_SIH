

/* ─────────────────────────────  DESIGN TOKENS  ───────────────────────────── */

const C = {
  navy:    "#2755A3",
  navy2:   "#173F7A",
  navy3:   "#F3F7FC",
  cyanSoft:"#EAF0FA",
  green:   "#138808",
  greenSoft:"#E8F5E7",
  amber:   "#B8720A",
  amberSoft:"#FFF1DE",
  saffron: "#FF9933",
  saffronSoft:"#FFF1E2",
  indiaGreen:"#138808",
  red:     "#D64545",
  redSoft: "#FBEAE7",
  bg:      "#F3F7FC",
  surface: "#FFFFFF",
  border:  "#D9E2EC",
  border2: "#E8EEF5",
  ink:     "#333333",
  ink2:    "#173F7A",
  muted:   "#6B7280",
  faint:   "#93A0AF",
};

const GRAD = "#2755A3";
const GRAD_SOFT = "#FF9933";

const NL_CSS = `
@keyframes nlIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@keyframes nlFade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes nlPulse{0%,100%{opacity:.55}50%{opacity:1}}
@keyframes nlSweep{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}
.nl-page{animation:nlIn .22s ease-out}
.nl-card{transition:box-shadow .2s ease,border-color .2s ease}
.nl-card:hover{box-shadow:0 4px 16px rgba(23,63,122,.09)}
button{transition:background-color .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,opacity .18s ease,transform .18s ease}
.nl-primary:hover{background:#173F7A !important;box-shadow:inset 0 -3px 0 #FF9933}
.nl-outline:hover{border-color:#2755A3 !important;box-shadow:inset 0 -2px 0 #FF9933}
input:focus,select:focus{border-color:#2755A3 !important;box-shadow:0 0 0 3px rgba(39,85,163,.15)}
button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid #2755A3;outline-offset:2px}
::placeholder{color:#93A0AF}
@media (prefers-reduced-motion: reduce){*{animation:none !important;transition:none !important}}
`;

function TriLine({ h = 3 }) {
  return (
    <div className="flex" style={{ height: h, width: "100%" }}>
      <div style={{ flex: 1, background: "#FF9933" }} />
      <div style={{ flex: 1, background: "#FFFFFF" }} />
      <div style={{ flex: 1, background: "#138808" }} />
    </div>
  );
}

function TriAccent({ w = 46, h = 3, onDark = false }) {
  return (
    <div className="flex overflow-hidden" style={{ width: w, height: h, borderRadius: 2 }}>
      <div style={{ flex: 1, background: "#FF9933" }} />
      <div style={{ flex: 1, background: onDark ? "rgba(255,255,255,.85)" : "#FFFFFF" }} />
      <div style={{ flex: 1, background: "#138808" }} />
    </div>
  );
}

function TriCurves({ corner = "all" }) {
  return (
    <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      preserveAspectRatio="none">
      {(corner === "all" || corner === "tl") && (
        <g opacity="0.14">
          <path d="M-40 90 C 60 10, 140 10, 220 70" stroke="#FF9933" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M-40 112 C 60 32, 140 32, 220 92" stroke="#FFFFFF" strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M-40 134 C 60 54, 140 54, 220 114" stroke="#138808" strokeWidth="10" fill="none" strokeLinecap="round" />
        </g>
      )}
      {(corner === "all" || corner === "br") && (
        <g opacity="0.12" transform="translate(0,0)">
          <path d="M320 420 C 420 480, 520 480, 620 430" stroke="#138808" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M300 448 C 400 508, 500 508, 600 458" stroke="#FFFFFF" strokeWidth="12" fill="none" strokeLinecap="round" />
          <path d="M280 476 C 380 536, 480 536, 580 486" stroke="#FF9933" strokeWidth="12" fill="none" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}

const FONT = `"Inter","Segoe UI",system-ui,-apple-system,"Helvetica Neue",Arial,sans-serif`;
const MONO = `"SFMono-Regular",Consolas,"Roboto Mono",monospace`;

/* ─────────────────────────────  DEMO DATA  ───────────────────────────── */

const HASH_FULL = "A9F4C3D8B21E6740F5C9A2D48E1B73056CF2A9E4D8B1C3A75E9D2B6F4C1A7C21";
const HASH_SHORT = "A9F4…7C21";
const SIG = "SIG-TN-NCB-2291-0F4C9A21D8";

const GPS = { lat: "13.0827° N", lng: "80.2707° E" };

const REF_COLOUR = "#32204A";
const CAP_COLOUR = "#2E1B3F";

const OFFICERS_SEED = [
  {
    id: "TN-NCB-2291",
    name: "Insp. Arjun Selvam",
    rank: "Inspector",
    unit: "Chennai Central Range",
    device: "NarcoLocker-DVC-04471",
    status: "Active",
    lastLogin: "Today · 09:15",
    lastActivity: "Just now · Case NCB/TN/2026/00417",
  },
  {
    id: "TN-NCB-1187",
    name: "SI Karthik Raja",
    rank: "Sub-Inspector",
    unit: "Chennai Central Range",
    device: "NarcoLocker-DVC-03290",
    status: "Active",
    lastLogin: "Today · 08:30",
    lastActivity: "18m ago · Verified evidence",
  },
  {
    id: "TN-NCB-1542",
    name: "SI Divya Prakash",
    rank: "Sub-Inspector",
    unit: "Chennai Central Range",
    device: "NarcoLocker-DVC-05118",
    status: "Active",
    lastLogin: "Today · 07:45",
    lastActivity: "1h ago · Patrol report generated",
  },
  {
    id: "TN-NCB-2054",
    name: "Insp. Meera Nathan",
    rank: "Inspector",
    unit: "Chennai Central Range",
    device: "NarcoLocker-DVC-02941",
    status: "Active",
    lastLogin: "Yesterday · 17:20",
    lastActivity: "34m ago · Case review",
  },
  {
    id: "TN-NCB-0876",
    name: "Const. Ramesh Kumar",
    rank: "Constable",
    unit: "Chennai Central Range",
    device: "NarcoLocker-DVC-01822",
    status: "Inactive",
    lastLogin: "3 days ago",
    lastActivity: "2d ago · Device locked",
  },
];

const OFFICER = OFFICERS_SEED[0];

const SEED_CASES = [
  {
    id: "NCB/TN/2026/00417",
    officerId: "TN-NCB-2291",
    officerName: "Insp. Arjun Selvam",
    date: "15 Sep 2026",
    time: "09:42",
    loc: "Chennai Central Range",
    area: "Park Town Checkpoint",
    result: "match",
    substance: "Heroin",
    dE: 3.8,
    verified: true,
    synced: true,
    hash: HASH_FULL,
    ref: "FIR 412/2026 · Park Town PS",
    pouch: "Marquis reagent pouch",
  },
  {
    id: "NCB/TN/2026/00416",
    officerId: "TN-NCB-2291",
    officerName: "Insp. Arjun Selvam",
    date: "15 Sep 2026",
    time: "08:17",
    loc: "Chennai Central Range",
    area: "Egmore Rail Yard",
    result: "none",
    substance: "—",
    dE: 22.4,
    verified: true,
    synced: true,
    hash: "B7E2A1C9F4085E3D2A6B9C1F8E3D2A7B5E1C9A4D6B2F8E1C3A7D9B4F1C6E8A21",
    ref: "FIR 409/2026 · Egmore RPF",
    pouch: "Marquis reagent pouch",
  },
  {
    id: "NCB/TN/2026/00415",
    officerId: "TN-NCB-1187",
    officerName: "SI Karthik Raja",
    date: "14 Sep 2026",
    time: "21:05",
    loc: "Chennai Central Range",
    area: "Royapuram Docks",
    result: "inconclusive",
    substance: "Undetermined",
    dE: 12.6,
    verified: false,
    synced: true,
    hash: "C3A7D9B4F1C6E8A21B7E2A1C9F4085E3D2A6B9C1F8E3D2A7B5E1C9A4D6B2F8E1",
    ref: "FIR 405/2026 · Harbour PS",
    pouch: "Mecke reagent pouch",
  },
  {
    id: "NCB/TN/2026/00414",
    officerId: "TN-NCB-1542",
    officerName: "SI Divya Prakash",
    date: "14 Sep 2026",
    time: "16:48",
    loc: "Chennai Central Range",
    area: "Anna Salai Patrol",
    result: "match",
    substance: "Amphetamine type",
    dE: 5.1,
    verified: true,
    synced: true,
    hash: "D6B2F8E1C3A7D9B4F1C6E8A21B7E2A1C9F4085E3D2A6B9C1F8E3D2A7B5E1C9A4",
    ref: "FIR 398/2026 · Thousand Lights PS",
    pouch: "Simon's reagent pouch",
  },
  {
    id: "NCB/TN/2026/00413",
    officerId: "TN-NCB-2291",
    officerName: "Insp. Arjun Selvam",
    date: "14 Sep 2026",
    time: "11:30",
    loc: "Chennai Central Range",
    area: "Kilpauk Sector 3",
    result: "none",
    substance: "—",
    dE: 19.7,
    verified: true,
    synced: false,
    hash: "E1C9A4D6B2F8E1C3A7D9B4F1C6E8A21B7E2A1C9F4085E3D2A6B9C1F8E3D2A7B5",
    ref: "FIR 394/2026 · Kilpauk PS",
    pouch: "Marquis reagent pouch",
  },
  {
    id: "NCB/TN/2026/00412",
    officerId: "TN-NCB-2054",
    officerName: "Insp. Meera Nathan",
    date: "13 Sep 2026",
    time: "19:12",
    loc: "Chennai Central Range",
    area: "Triplicane Beat",
    result: "match",
    substance: "Heroin",
    dE: 4.4,
    verified: true,
    synced: true,
    hash: "F8E3D2A7B5E1C9A4D6B2F8E1C3A7D9B4F1C6E8A21B7E2A1C9F4085E3D2A6B9C1",
    ref: "FIR 389/2026 · Triplicane PS",
    pouch: "Marquis reagent pouch",
  },
  {
    id: "NCB/TN/2026/00411",
    officerId: "TN-NCB-1187",
    officerName: "SI Karthik Raja",
    date: "13 Sep 2026",
    time: "14:02",
    loc: "Chennai Central Range",
    area: "Chintadripet Post",
    result: "inconclusive",
    substance: "Undetermined",
    dE: 11.2,
    verified: false,
    synced: true,
    hash: "A4D6B2F8E1C3A7D9B4F1C6E8A21B7E2A1C9F4085E3D2A6B9C1F8E3D2A7B5E1C9",
    ref: "FIR 382/2026 · Chintadripet PS",
    pouch: "Marquis reagent pouch",
  },
  {
    id: "NCB/TN/2026/00410",
    officerId: "TN-NCB-2291",
    officerName: "Insp. Arjun Selvam",
    date: "12 Sep 2026",
    time: "10:55",
    loc: "Chennai Central Range",
    area: "Mount Road Junction",
    result: "none",
    substance: "—",
    dE: 26.9,
    verified: true,
    synced: true,
    hash: "9C1F8E3D2A7B5E1C9A4D6B2F8E1C3A7D9B4F1C6E8A21B7E2A1C9F4085E3D2A6B",
    ref: "FIR 378/2026 · D1 Triplicane PS",
    pouch: "Marquis reagent pouch",
  },
];

const ACTIVITIES_SEED = [
  { id: "ACT-001", officerId: "TN-NCB-2291", action: "Digital record sealed", caseId: "NCB/TN/2026/00417", timestamp: "15 Sep · 09:43", details: "SHA-256 sealed with key SIG-TN-NCB-2291" },
  { id: "ACT-002", officerId: "TN-NCB-2291", action: "Analysis completed", caseId: "NCB/TN/2026/00417", timestamp: "15 Sep · 09:42", details: "Colorimetric CIEDE2000 ΔE 3.8 · Presumptive Match" },
  { id: "ACT-003", officerId: "TN-NCB-2291", action: "Evidence capture", caseId: "NCB/TN/2026/00417", timestamp: "15 Sep · 09:42", details: "Before & after pouch imagery recorded at Park Town" },
  { id: "ACT-004", officerId: "TN-NCB-2291", action: "Case creation", caseId: "NCB/TN/2026/00417", timestamp: "15 Sep · 09:41", details: "FIR 412/2026 initiated on NarcoLocker-DVC-04471" },
  { id: "ACT-005", officerId: "TN-NCB-2291", action: "Officer login", caseId: null, timestamp: "15 Sep · 09:15", details: "Device authentication passed on NarcoLocker-DVC-04471" },
  { id: "ACT-006", officerId: "TN-NCB-1187", action: "Case creation", caseId: "NCB/TN/2026/00415", timestamp: "14 Sep · 21:05", details: "Royapuram Docks container inspection initiated" },
  { id: "ACT-007", officerId: "TN-NCB-1542", action: "Report generation", caseId: "NCB/TN/2026/00414", timestamp: "14 Sep · 16:48", details: "Exported digitally signed PDF report" },
  { id: "ACT-008", officerId: "TN-NCB-2054", action: "Case verification", caseId: "NCB/TN/2026/00412", timestamp: "13 Sep · 19:15", details: "QR evidence bundle verified and validated" },
];

const AUDIT_LOGS_SEED = [
  { id: "AUD-001", timestamp: "15 Sep · 09:43:02", actorId: "TN-NCB-2291", role: "Officer", action: "Digital record sealed", caseId: "NCB/TN/2026/00417", officerId: "TN-NCB-2291", status: "Success", details: "Record sealed with officer key TN-NCB-2291 and queued for sync" },
  { id: "AUD-002", timestamp: "15 Sep · 09:42:41", actorId: "TN-NCB-2291", role: "Officer", action: "Hash generated", caseId: "NCB/TN/2026/00417", officerId: "TN-NCB-2291", status: "Success", details: "SHA-256 computed over evidence bundle (A9F4...7C21)" },
  { id: "AUD-003", timestamp: "15 Sep · 09:42:38", actorId: "TN-NCB-2291", role: "Officer", action: "Image analysed", caseId: "NCB/TN/2026/00417", officerId: "TN-NCB-2291", status: "Success", details: "LAB conversion and CIEDE2000 comparison completed" },
  { id: "AUD-004", timestamp: "15 Sep · 09:42:31", actorId: "TN-NCB-2291", role: "Officer", action: "Evidence captured", caseId: "NCB/TN/2026/00417", officerId: "TN-NCB-2291", status: "Success", details: "Before/after pouch photos written to secure storage" },
  { id: "AUD-005", timestamp: "15 Sep · 09:15:00", actorId: "TN-NCB-2291", role: "Officer", action: "Officer login", caseId: null, officerId: "TN-NCB-2291", status: "Success", details: "TN-NCB-2291 signed in on NarcoLocker-DVC-04471" },
  { id: "AUD-006", timestamp: "15 Sep · 08:30:12", actorId: "NCB-ADMIN-014", role: "Admin", action: "Admin login successful", caseId: null, officerId: null, status: "Success", details: "NCB-ADMIN-014 · Chennai Central Range console" },
  { id: "AUD-007", timestamp: "14 Sep · 21:05:40", actorId: "TN-NCB-1187", role: "Officer", action: "Case created", caseId: "NCB/TN/2026/00415", officerId: "TN-NCB-1187", status: "Success", details: "Case initiated for Royapuram Docks" },
  { id: "AUD-008", timestamp: "14 Sep · 16:50:11", actorId: "TN-NCB-1542", role: "Officer", action: "Report generated", caseId: "NCB/TN/2026/00414", officerId: "TN-NCB-1542", status: "Success", details: "Encrypted evidence report generated for prosecution filing" },
];

const AUDIT = [
  { t: "09:42:31", e: "Evidence captured", d: "Before and after images written to secure device storage" },
  { t: "09:42:38", e: "Image analysed", d: "Perspective correction, LAB conversion, CIEDE2000 comparison" },
  { t: "09:42:41", e: "Hash generated", d: "SHA-256 computed over evidence bundle" },
  { t: "09:42:43", e: "Digital record sealed", d: "Record signed with officer key TN-NCB-2291" },
  { t: "09:43:02", e: "Record synced", d: "Encrypted upload to range evidence server" },
];

const NOTIFICATIONS = [
  { id: 1, sev: "ok", icon: Camera, title: "Evidence successfully captured", body: "NCB/TN/2026/00417 · Before and after images stored", time: "2m ago" },
  { id: 2, sev: "ok", icon: Activity, title: "Analysis completed", body: "Colour comparison finished · Presumptive Match", time: "3m ago" },
  { id: 3, sev: "warn", icon: ShieldAlert, title: "Evidence verification required", body: "NCB/TN/2026/00415 · Pending QR verification", time: "22m ago" },
  { id: 4, sev: "warn", icon: RefreshCw, title: "Pending offline synchronisation", body: "3 records queued on this device", time: "26m ago" },
  { id: 5, sev: "ok", icon: Lock, title: "Digital record successfully sealed", body: "NCB/TN/2026/00417 · SHA-256 hash and signature applied", time: "41m ago" },
  { id: 6, sev: "danger", icon: AlertTriangle, title: "Integrity warning detected", body: "Recomputed hash did not match the sealed record (demo)", time: "1h ago" },
  { id: 7, sev: "ok", icon: FileText, title: "Secure report generated", body: "NCB/TN/2026/00414 · Report ready for export", time: "3h ago" },
];

const RESULT_META = {
  match:        { label: "Presumptive Match", fg: C.green, bg: C.greenSoft, Icon: CircleCheck },
  inconclusive: { label: "Inconclusive",      fg: C.amber, bg: C.amberSoft, Icon: CircleAlert },
  none:         { label: "No Match",          fg: C.muted, bg: C.navy3,     Icon: CircleSlash },
};

const OUTCOME_META = {
  match:        { dE: 3.8,  substance: "Heroin",      capHex: CAP_COLOUR, capLab: "22.4 / 18.9 / −16.2" },
  inconclusive: { dE: 12.6, substance: "Undetermined", capHex: "#5B3A2E",  capLab: "34.1 / 12.7 / 14.8" },
  none:         { dE: 22.4, substance: "—",            capHex: "#8A8F98",  capLab: "41.2 / 2.1 / 3.4" },
};

/* ─────────────────────────────  ADMIN DEMO DATA  ───────────────────────────── */

const ADMIN = {
  name: "R. Meenakshi",
  role: "System Administrator",
  id: "NCB-ADMIN-014",
  unit: "Chennai Central Range",
};
const ADMIN_PASSWORD = "Admin@2026";

const CASE_OFFICER_IDS = OFFICERS_SEED.map((o) => o.id);

const ADMIN_AUDIT = [
  { icon: KeyRound,      sev: "ok",     title: "Admin login successful",          body: `${ADMIN.id} · ${ADMIN.name} · Chennai Central Range console`, time: "Just now" },
  { icon: User,          sev: "ok",     title: "Officer login",                   body: "TN-NCB-2291 · Insp. Arjun Selvam signed in on NarcoLocker-DVC-04471", time: "6m ago" },
  { icon: PlusCircle,    sev: "ok",     title: "Case created",                    body: "NCB/TN/2026/00417 · Park Town Checkpoint", time: "12m ago" },
  { icon: RefreshCw,     sev: "warn",   title: "Case updated",                    body: "NCB/TN/2026/00415 · Result reclassified after review", time: "41m ago" },
  { icon: Fingerprint,   sev: "ok",     title: "Hash verification passed",        body: "NCB/TN/2026/00417 · SHA-256 matched sealed record", time: "1h ago" },
  { icon: AlertTriangle, sev: "danger", title: "Hash verification failed (demo)", body: "NCB/TN/2026/00415 · Recomputed hash did not match sealed record", time: "3h ago" },
];

/* ─────────────────────────────  SHARED DATA SERVICE LAYER  ───────────────────────────── */

/**
 * DataService provides a unified abstraction over persistent storage (localStorage)
 * with graceful in-memory fallback. It connects Officers, Cases, Activities, and Audit Logs
 * using Officer ID as the primary relationship key.
 *
 * Future Backend Architecture Ready:
 *   POST  /auth/login                  -> DataService.getOfficerById(id)
 *   GET   /officers                    -> DataService.getOfficers()
 *   GET   /officers/{officerId}        -> DataService.getOfficerById(id)
 *   GET   /officers/{officerId}/cases  -> DataService.getOfficerCases(id)
 *   GET   /officers/{officerId}/activity -> DataService.getActivities(id)
 *   GET   /cases                       -> DataService.getCases()
 *   POST  /cases                       -> DataService.createCase(data)
 *   PATCH /cases/{caseId}              -> DataService.updateCase(id, data)
 *   GET   /audit-logs                  -> DataService.getAuditLogs()
 */

const STORAGE_KEYS = {
  OFFICERS: "nl_v1_officers",
  CASES: "nl_v1_cases",
  ACTIVITIES: "nl_v1_activities",
  AUDIT: "nl_v1_audit",
};

function safeStorageGet(key, fallback) {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsed = JSON.parse(item);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    }
  } catch (e) {
    /* storage read fallback */
  }
  return fallback;
}

function safeStorageSet(key, value) {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (e) {
    /* storage write fallback */
  }
}

let _cachedOfficers = safeStorageGet(STORAGE_KEYS.OFFICERS, OFFICERS_SEED);
let _cachedCases = safeStorageGet(STORAGE_KEYS.CASES, SEED_CASES);
let _cachedActivities = safeStorageGet(STORAGE_KEYS.ACTIVITIES, ACTIVITIES_SEED);
let _cachedAudit = safeStorageGet(STORAGE_KEYS.AUDIT, AUDIT_LOGS_SEED);

const _subscribers = new Set();
function _notifySubscribers() {
  _subscribers.forEach((cb) => {
    try { cb(); } catch (e) { console.error(e); }
  });
}

const DataService = {
  subscribe(callback) {
    _subscribers.add(callback);
    return () => _subscribers.delete(callback);
  },

  /* Officers */
  getOfficers() {
    return [..._cachedOfficers];
  },

  getOfficerById(officerId) {
    if (!officerId) return null;
    const clean = officerId.trim().toUpperCase();
    return _cachedOfficers.find((o) => (o.id || "").toUpperCase() === clean) || null;
  },

  updateOfficer(officerId, updates) {
    const clean = officerId.trim().toUpperCase();
    _cachedOfficers = _cachedOfficers.map((o) =>
      (o.id || "").toUpperCase() === clean ? { ...o, ...updates } : o
    );
    safeStorageSet(STORAGE_KEYS.OFFICERS, _cachedOfficers);
    _notifySubscribers();
    return this.getOfficerById(officerId);
  },

  addOfficer(officerData) {
    const newOfficer = {
      id: officerData.id || `TN-NCB-${1000 + _cachedOfficers.length}`,
      name: officerData.name,
      rank: officerData.rank || "Constable",
      unit: officerData.unit || "Chennai Central Range",
      device: officerData.device || `NarcoLocker-DVC-0${Math.floor(1000 + Math.random() * 9000)}`,
      status: "Active",
      lastLogin: "Just now",
      lastActivity: "Added to roster",
      ...officerData,
    };
    _cachedOfficers = [newOfficer, ..._cachedOfficers];
    safeStorageSet(STORAGE_KEYS.OFFICERS, _cachedOfficers);

    this.addAuditLog({
      actorId: ADMIN.id,
      role: "Admin",
      action: "Officer registered",
      caseId: null,
      officerId: newOfficer.id,
      status: "Success",
      details: `${newOfficer.rank} ${newOfficer.name} (${newOfficer.id}) enrolled in department roster`,
    });

    _notifySubscribers();
    return newOfficer;
  },

  /* Cases */
  getCases() {
    return [..._cachedCases];
  },

  getOfficerCases(officerId) {
    if (!officerId) return [];
    const clean = officerId.trim().toUpperCase();
    return _cachedCases.filter((c) => (c.officerId || "").toUpperCase() === clean);
  },

  getCaseById(caseId) {
    return _cachedCases.find((c) => c.id === caseId) || null;
  },

  createCase(caseData) {
    if (!caseData.id) throw new Error("Case ID cannot be empty");
    if (_cachedCases.some((c) => c.id === caseData.id)) {
      throw new Error(`Case ID ${caseData.id} already exists.`);
    }

    const fullCase = {
      id: caseData.id,
      officerId: caseData.officerId,
      officerName: caseData.officerName || (this.getOfficerById(caseData.officerId)?.name || "Officer"),
      date: caseData.date,
      time: caseData.time,
      loc: caseData.loc || "Chennai Central Range",
      area: caseData.area || caseData.location || "Field Operation",
      result: caseData.result || "match",
      substance: caseData.substance || "Heroin",
      dE: typeof caseData.dE === "number" ? caseData.dE : 3.8,
      verified: caseData.verified !== undefined ? caseData.verified : true,
      synced: caseData.synced !== undefined ? caseData.synced : true,
      hash: caseData.hash || HASH_FULL,
      ref: caseData.ref || "",
      pouch: caseData.pouch || "Marquis reagent pouch",
      ...caseData,
    };

    _cachedCases = [fullCase, ..._cachedCases];
    safeStorageSet(STORAGE_KEYS.CASES, _cachedCases);

    if (caseData.officerId) {
      this.updateOfficer(caseData.officerId, {
        lastActivity: `Just now · Case ${fullCase.id}`,
      });
    }

    _notifySubscribers();
    return fullCase;
  },

  updateCase(caseId, updates) {
    _cachedCases = _cachedCases.map((c) => (c.id === caseId ? { ...c, ...updates } : c));
    safeStorageSet(STORAGE_KEYS.CASES, _cachedCases);
    _notifySubscribers();
    return this.getCaseById(caseId);
  },

  /* Activities */
  getActivities(officerId = null) {
    if (officerId) {
      const clean = officerId.trim().toUpperCase();
      return _cachedActivities.filter((a) => (a.officerId || "").toUpperCase() === clean);
    }
    return [..._cachedActivities];
  },

  addActivity({ officerId, action, caseId = null, details = "", timestamp = "Just now" }) {
    const act = {
      id: `ACT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      officerId,
      action,
      caseId,
      timestamp,
      details,
    };
    _cachedActivities = [act, ..._cachedActivities];
    safeStorageSet(STORAGE_KEYS.ACTIVITIES, _cachedActivities);
    _notifySubscribers();
    return act;
  },

  /* Audit Logs */
  getAuditLogs(officerId = null) {
    if (officerId) {
      const clean = officerId.trim().toUpperCase();
      return _cachedAudit.filter((a) => (a.officerId || "").toUpperCase() === clean);
    }
    return [..._cachedAudit];
  },

  addAuditLog({ actorId, role, action, caseId = null, officerId = null, status = "Success", details = "", timestamp = "Just now" }) {
    const entry = {
      id: `AUD-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      timestamp,
      actorId,
      role,
      action,
      caseId,
      officerId,
      status,
      details,
    };
    _cachedAudit = [entry, ..._cachedAudit];
    safeStorageSet(STORAGE_KEYS.AUDIT, _cachedAudit);
    _notifySubscribers();
    return entry;
  },

  /* Statistics */
  getOfficerStats(officerId) {
    const oCases = this.getOfficerCases(officerId);
    return {
      total: oCases.length,
      verified: oCases.filter((c) => c.verified).length,
      pending: oCases.filter((c) => !c.verified).length,
      positive: oCases.filter((c) => c.result === "match").length,
      negative: oCases.filter((c) => c.result === "none").length,
      inconclusive: oCases.filter((c) => c.result === "inconclusive").length,
    };
  },

  getSystemStats() {
    return {
      total: _cachedCases.length,
      positive: _cachedCases.filter((c) => c.result === "match").length,
      negative: _cachedCases.filter((c) => c.result === "none").length,
      inconclusive: _cachedCases.filter((c) => c.result === "inconclusive").length,
      activeOfficers: _cachedOfficers.filter((o) => o.status === "Active").length,
      totalOfficers: _cachedOfficers.length,
    };
  },

  /* Reset Demo Seeds */
  resetDemoData() {
    _cachedOfficers = [...OFFICERS_SEED];
    _cachedCases = [...SEED_CASES];
    _cachedActivities = [...ACTIVITIES_SEED];
    _cachedAudit = [...AUDIT_LOGS_SEED];
    safeStorageSet(STORAGE_KEYS.OFFICERS, _cachedOfficers);
    safeStorageSet(STORAGE_KEYS.CASES, _cachedCases);
    safeStorageSet(STORAGE_KEYS.ACTIVITIES, _cachedActivities);
    safeStorageSet(STORAGE_KEYS.AUDIT, _cachedAudit);
    _notifySubscribers();
  },
};

/* ─────────────────────────────  PRIMITIVES  ───────────────────────────── */

function Logo({ size = 36, mono = false, glow = false }) {
  const shell = mono ? "#FFFFFF" : C.navy;
  const mark = mono ? "#FFFFFF" : C.saffron;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-label="NarcoLocker">
      <path
        d="M24 3.5 L41 9.6 V24.2 C41 34.2 33.9 41.9 24 44.5 C14.1 41.9 7 34.2 7 24.2 V9.6 Z"
        fill={shell}
      />
      <path
        d="M24 3.5 L41 9.6 V24.2 C41 34.2 33.9 41.9 24 44.5 Z"
        fill={mono ? "#FFFFFF" : C.navy2}
        opacity={mono ? 0.16 : 1}
      />
      <rect x="15.5" y="22" width="17" height="12.5" rx="2.2" fill="#FFFFFF" />
      <path
        d="M19 22 v-3.6 a5 5 0 0 1 10 0 V22"
        fill="none"
        stroke={mono ? C.navy : C.navy}
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M20.6 28.2 l2.6 2.6 l4.6 -5" fill="none" stroke={C.green} strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round" />
      <rect x="15.5" y="12" width="9" height="1.8" rx="0.9" fill={mark} opacity="0.95" />
      <rect x="15.5" y="16" width="6" height="1.8" rx="0.9" fill={mono ? "#FFFFFF" : C.green} opacity="0.75" />
    </svg>
  );
}

function Wordmark({ mono = false, size = 36, sub, glow = false }) {
  return (
    <div className="flex items-center gap-3">
      <Logo size={size} mono={mono} />
      <div className="leading-tight">
        <div style={{ fontWeight: 700, fontSize: size * 0.52, letterSpacing: "-0.02em", color: mono ? "#FFFFFF" : C.navy }}>
          NarcoLocker
        </div>
        {sub && (
          <div style={{ color: mono ? "rgba(255,255,255,.78)" : C.muted, fontSize: 11.5, letterSpacing: ".04em" }}>
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}

function Card({ children, className = "", style = {}, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`nl-card ${onClick ? "cursor-pointer" : ""} ${className}`}
      style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 10,
        boxShadow: "0 1px 3px rgba(23,63,122,.06)", ...style }}
    >
      {children}
    </div>
  );
}

function CardHead({ title, note, right, icon: Icon }) {
  return (
    <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: `1px solid ${C.border2}` }}>
      <div className="flex items-center gap-2 min-w-0">
        {Icon && <Icon size={15} style={{ color: C.navy }} />}
        <span style={{ color: C.ink2, fontWeight: 650, fontSize: 13.5 }}>{title}</span>
        {note && <span style={{ color: C.faint, fontSize: 12 }} className="truncate">· {note}</span>}
      </div>
      {right}
    </div>
  );
}

function Btn({ children, onClick, variant = "primary", size = "md", full, icon: Icon, iconRight: IR, disabled, type }) {
  const H = size === "sm" ? 34 : size === "lg" ? 48 : 40;
  const pad = size === "sm" ? "0 12px" : size === "lg" ? "0 22px" : "0 16px";
  const fs = size === "sm" ? 12.5 : size === "lg" ? 14.5 : 13.5;
  const styles = {
    primary: { background: C.navy, color: "#fff", border: `1px solid ${C.navy}` },
    accent: { background: C.saffron, color: "#173F7A", border: `1px solid ${C.saffron}`, fontWeight: 700 },
    outline: { background: "#fff", color: C.navy, border: `1px solid ${C.border}` },
    ghost: { background: "transparent", color: C.navy, border: "1px solid transparent" },
    danger: { background: "#fff", color: C.red, border: `1px solid ${C.redSoft}` },
  }[variant];
  return (
    <button
      type={type || "button"}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 rounded-md transition-colors ${
        variant === "primary" ? "nl-primary" : variant === "outline" ? "nl-outline" : ""
      } ${full ? "w-full" : ""}`}
      style={{
        height: H, padding: pad, fontSize: fs, fontWeight: 600, letterSpacing: ".005em",
        opacity: disabled ? 0.45 : 1, cursor: disabled ? "not-allowed" : "pointer", ...styles,
      }}
    >
      {Icon && <Icon size={size === "sm" ? 14 : 16} />}
      {children}
      {IR && <IR size={size === "sm" ? 14 : 16} />}
    </button>
  );
}

function Pill({ children, fg = C.ink2, bg = "#EEF1F5", icon: Icon, dot }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded px-2 py-1"
      style={{ color: fg, background: bg, fontSize: 11.5, fontWeight: 600, whiteSpace: "nowrap" }}
    >
      {dot && <span className="rounded-full" style={{ width: 6, height: 6, background: fg }} />}
      {Icon && <Icon size={12} />}
      {children}
    </span>
  );
}

function Field({ label, value, mono, wide }) {
  return (
    <div className={wide ? "col-span-2" : ""}>
      <div style={{ color: C.faint, fontSize: 11, fontWeight: 600, marginBottom: 3 }}>{label}</div>
      <div style={{ color: C.ink, fontSize: 13.5, fontWeight: 550, fontFamily: mono ? MONO : FONT, wordBreak: "break-all" }}>
        {value}
      </div>
    </div>
  );
}

function CheckRow({ ok = true, label, note, pending, current }) {
  const col = current ? C.saffron : pending ? C.faint : ok ? C.green : C.amber;
  const bg = current ? C.saffronSoft : pending ? "#EEF1F5" : ok ? C.greenSoft : C.amberSoft;
  return (
    <div className="flex items-start gap-2.5 py-1.5">
      <span
        className="inline-flex items-center justify-center rounded-full shrink-0"
        style={{ width: 17, height: 17, marginTop: 1, background: bg, color: col }}
      >
        {current ? <span className="rounded-full" style={{ width: 7, height: 7, background: C.saffron }} />
          : pending ? <Clock size={10} /> : ok ? <Check size={11} strokeWidth={3} /> : <AlertTriangle size={10} />}
      </span>
      <div className="min-w-0">
        <div style={{ color: C.ink, fontSize: 13, fontWeight: current ? 650 : 400 }}>{label}</div>
        {note && <div style={{ color: C.muted, fontSize: 11.5 }}>{note}</div>}
      </div>
    </div>
  );
}

function Input({ label, value, onChange, placeholder, icon: Icon, error, readOnly, type = "text", right }) {
  return (
    <div>
      {label && <div style={{ color: C.ink2, fontSize: 12, fontWeight: 600, marginBottom: 6 }}>{label}</div>}
      <div
        className="flex items-center gap-2 rounded-md px-3"
        style={{
          height: 42, background: readOnly ? C.navy3 : "#fff",
          border: `1px solid ${error ? C.red : C.border}`, transition: "border-color .16s ease, box-shadow .16s ease",
        }}
        onFocus={(e) => { e.currentTarget.style.borderColor = "#2755A3"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(39,85,163,.15)"; }}
        onBlur={(e) => { e.currentTarget.style.borderColor = error ? C.red : C.border; e.currentTarget.style.boxShadow = "none"; }}
      >
        {Icon && <Icon size={15} style={{ color: C.faint }} />}
        <input
          type={type}
          value={value}
          readOnly={readOnly}
          placeholder={placeholder}
          onChange={(e) => onChange && onChange(e.target.value)}
          className="flex-1 outline-none bg-transparent"
          style={{ fontSize: 13.5, color: readOnly ? C.ink2 : C.ink, fontFamily: FONT }}
        />
        {right}
      </div>
      {error && (
        <div className="flex items-center gap-1.5 mt-1.5" style={{ color: C.red, fontSize: 11.5 }}>
          <AlertTriangle size={12} /> {error}
        </div>
      )}
    </div>
  );
}

function Banner({ tone = "info", title, body, icon: Icon }) {
  const map = {
    info: [C.navy, C.cyanSoft, C.border],
    warn: [C.amber, C.amberSoft, "#F0DBB4"],
    ok: [C.green, C.greenSoft, "#C7E5C4"],
    danger: [C.red, C.redSoft, "#EFC9C3"],
  }[tone];
  const I = Icon || (tone === "warn" ? AlertTriangle : tone === "ok" ? ShieldCheck : Info);
  return (
    <div className="flex items-start gap-2.5 rounded-md px-3.5 py-3" style={{ background: map[1], border: `1px solid ${map[2]}` }}>
      <I size={15} style={{ color: map[0], marginTop: 1, flexShrink: 0 }} />
      <div>
        <div style={{ color: map[0], fontSize: 12.5, fontWeight: 650 }}>{title}</div>
        {body && <div style={{ color: C.ink2, fontSize: 12, marginTop: 2, lineHeight: 1.5 }}>{body}</div>}
      </div>
    </div>
  );
}

function Disclaimer() {
  return (
    <div className="flex items-start gap-2.5 rounded-md px-3.5 py-3"
      style={{ background: C.amberSoft, border: "1px solid #F0DBB4" }}>
      <ShieldAlert size={15} style={{ color: C.amber, marginTop: 1, flexShrink: 0 }} />
      <div style={{ color: "#6B4A0C", fontSize: 12, lineHeight: 1.55 }}>
        <strong style={{ fontWeight: 700 }}>Presumptive field-test result only. Laboratory confirmation is required.</strong>
        <div style={{ color: C.ink2, marginTop: 2 }}>
          NarcoLocker is a field screening prototype. It does not provide laboratory-grade identification and must not be
          used as a sole basis for confirmation.
        </div>
      </div>
    </div>
  );
}

function DemoDataPill({ label = "Demo GPS Data" }) {
  return <Pill fg={C.amber} bg={C.amberSoft} icon={Info}>{label}</Pill>;
}

function SectionTitle({ children, sub, right }) {
  return (
    <div className="flex items-end justify-between mb-3">
      <div>
        <h2 style={{ color: C.ink, fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>{children}</h2>
        {sub && <div style={{ color: C.muted, fontSize: 12.5, marginTop: 2 }}>{sub}</div>}
      </div>
      {right}
    </div>
  );
}

/* ─────────────────────────────  EVIDENCE VISUALS  ───────────────────────────── */

function PouchPhoto({ phase = "before", stamp = "15 Sep 2026 · 09:42:31", height = 190 }) {
  const liquid = phase === "before" ? "#EDEAE0" : "#2E1B3F";
  const liquidTop = phase === "before" ? "#F7F5EF" : "#4A2A63";
  return (
    <svg viewBox="0 0 400 250" style={{ width: "100%", height, display: "block", background: "#20262E", borderRadius: 6 }}>
      <defs>
        <linearGradient id={`surf-${phase}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3A424C" />
          <stop offset="1" stopColor="#242A32" />
        </linearGradient>
      </defs>
      <rect width="400" height="250" fill={`url(#surf-${phase})`} />
      {/* reference colour card */}
      <g transform="translate(248,56)">
        <rect width="116" height="140" rx="5" fill="#FAFAF8" stroke="#D8D8D2" />
        <rect x="10" y="10" width="44" height="30" fill="#2E1B3F" />
        <rect x="62" y="10" width="44" height="30" fill="#7A2E2E" />
        <rect x="10" y="46" width="44" height="30" fill="#2C5F3A" />
        <rect x="62" y="46" width="44" height="30" fill="#C9A227" />
        <rect x="10" y="82" width="44" height="30" fill="#FFFFFF" stroke="#E2E2DC" />
        <rect x="62" y="82" width="44" height="30" fill="#1A1A1A" />
        <rect x="10" y="118" width="96" height="12" fill="#EDEDE8" />
        <text x="14" y="127.5" fontSize="8" fill="#5B5B55" fontFamily={MONO}>REF-CARD v2 · NL</text>
      </g>
      {/* test pouch */}
      <g transform="translate(52,44)">
        <rect width="150" height="164" rx="7" fill="#DFE3E7" opacity="0.28" />
        <rect x="8" y="8" width="134" height="148" rx="5" fill="#F2F4F6" opacity="0.5" />
        <rect x="8" y="8" width="134" height="18" fill="#B9C2CB" opacity="0.6" />
        <rect x="26" y="40" width="98" height="104" rx="4" fill={liquid} />
        <rect x="26" y="40" width="98" height="26" rx="4" fill={liquidTop} opacity="0.85" />
        <rect x="26" y="40" width="98" height="104" rx="4" fill="none" stroke="#FFFFFF" opacity="0.28" />
        <text x="30" y="160" fontSize="8.5" fill="#E6EAEE" fontFamily={MONO} opacity="0.85">POUCH · MARQUIS</text>
      </g>
      {/* frame brackets */}
      <g stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.92">
        <path d="M18 34 v-14 h14" /><path d="M382 34 v-14 h-14" />
        <path d="M18 216 v14 h14" /><path d="M382 216 v14 h-14" />
      </g>
      <rect x="0" y="222" width="400" height="28" fill="#000" opacity="0.45" />
      <text x="12" y="240" fontSize="10" fill="#E8EDF2" fontFamily={MONO}>
        {phase === "before" ? "BEFORE REACTION" : "AFTER REACTION"} · {stamp}
      </text>
      <text x="388" y="240" fontSize="10" fill="#FFB266" fontFamily={MONO} textAnchor="end">
        {OFFICER.device.slice(-8)}
      </text>
    </svg>
  );
}

function QR({ size = 148, seed = 417, quiet = 2 }) {
  const n = 25;
  let s = (seed * 7919 + 13) % 2147483647;
  const rnd = () => { s = (s * 1103515245 + 12345) % 2147483648; return (s >>> 8) % 100; };
  const cells = [];
  const inFinder = (r, c) => {
    const box = (R, Cc) => r >= R && r < R + 8 && c >= Cc - 1 && c < Cc + 8;
    return box(0, 0) || box(0, n - 7) || box(n - 8, 0);
  };
  for (let r = 0; r < n; r++)
    for (let c = 0; c < n; c++) {
      const v = rnd();
      if (!inFinder(r, c) && v < 46) cells.push([r, c]);
    }
  const total = n + quiet * 2;
  const u = size / total;
  const finder = (r, c) => (
    <g key={`f${r}${c}`}>
      <rect x={(c + quiet) * u} y={(r + quiet) * u} width={7 * u} height={7 * u} fill={C.navy} />
      <rect x={(c + quiet + 1) * u} y={(r + quiet + 1) * u} width={5 * u} height={5 * u} fill="#fff" />
      <rect x={(c + quiet + 2) * u} y={(r + quiet + 2) * u} width={3 * u} height={3 * u} fill={C.navy} />
    </g>
  );
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ borderRadius: 4, background: "#fff" }}>
      <rect width={size} height={size} fill="#fff" />
      {cells.map(([r, c], i) => (
        <rect key={i} x={(c + quiet) * u} y={(r + quiet) * u} width={u} height={u} fill={C.navy} />
      ))}
      {finder(0, 0)}{finder(0, n - 7)}{finder(n - 7, 0)}
      <rect x={size / 2 - u * 2.6} y={size / 2 - u * 2.6} width={u * 5.2} height={u * 5.2} rx={2} fill="#fff" />
      <rect x={size / 2 - u * 2.1} y={size / 2 - u * 2.1} width={u * 4.2} height={u * 4.2} rx={2} fill={C.navy} />
      <path
        d={`M ${size / 2 - u * 1.2} ${size / 2} l ${u * 0.9} ${u * 0.95} l ${u * 1.7} -${u * 1.9}`}
        stroke={C.navy} strokeWidth={u * 0.55} fill="none" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function Swatch({ hex, label, sub }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded" style={{ width: 46, height: 46, background: hex, border: `1px solid ${C.border}` }} />
      <div>
        <div style={{ color: C.ink, fontSize: 13, fontWeight: 600 }}>{label}</div>
        <div style={{ color: C.muted, fontSize: 11.5, fontFamily: MONO }}>{sub}</div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  SPLASH  ───────────────────────────── */

const BOOT = [
  "Initializing Secure Environment",
  "Verifying Device",
  "Loading Evidence Module",
  "Preparing Evidence Workspace",
  "Secure Session Ready",
];

function Splash({ onDone }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setP((x) => (x >= 100 ? 100 : x + 2.4)), 54);
    const d = setTimeout(onDone, 2450);
    return () => { clearInterval(t); clearTimeout(d); };
  }, [onDone]);
  const stage = Math.min(BOOT.length - 1, Math.floor(p / 21));
  const settled = stage === BOOT.length - 1 && p >= 96;

  return (
    <div className="min-h-screen flex flex-col items-center justify-between py-12 px-6 relative overflow-hidden"
      style={{ background: "#FFFFFF", fontFamily: FONT }}>
      <style>{NL_CSS}</style>
      <TriCurves />
      <div className="relative" style={{ zIndex: 1 }} />

      <div className="flex flex-col items-center text-center relative" style={{ animation: "nlFade .7s ease-out", zIndex: 1 }}>
        <Logo size={84} />
        <div style={{ color: C.navy, fontSize: 32, fontWeight: 700, letterSpacing: "-0.025em", marginTop: 22 }}>
          NarcoLocker
        </div>
        <div style={{ color: C.muted, fontSize: 14, marginTop: 6 }}>
          Digital Companion for Field Drug Testing
        </div>
        <div style={{ color: C.navy2, fontSize: 11.5, letterSpacing: ".22em", marginTop: 18, fontWeight: 650 }}>
          CAPTURE · ANALYSE · VERIFY · RECORD
        </div>

        {/* tricolour sweep */}
        <div className="relative overflow-hidden" style={{ width: 240, height: 4, borderRadius: 2, marginTop: 34 }}>
          <div className="flex" style={{ width: "100%", height: "100%" }}>
            <div style={{ flex: 1, background: "#FF9933" }} />
            <div style={{ flex: 1, background: "#EDEEF2" }} />
            <div style={{ flex: 1, background: "#138808" }} />
          </div>
          <div style={{
            position: "absolute", top: 0, left: 0, width: "40%", height: "100%",
            background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.9), rgba(255,255,255,0))",
            transform: `translateX(${p * 2.6 - 40}%)`, transition: "transform .18s linear",
          }} />
        </div>

        <div style={{ color: C.navy, fontSize: 11, letterSpacing: ".18em", fontWeight: 700, marginTop: 22 }}>
          SECURE GOVERNMENT ACCESS
        </div>

        <div className="flex items-center gap-2" style={{ marginTop: 10, minHeight: 18 }}>
          {settled
            ? <Check size={12} style={{ color: C.green }} strokeWidth={3} />
            : <span className="rounded-full" style={{ width: 6, height: 6, background: C.saffron, animation: "nlPulse 1.1s ease-in-out infinite" }} />}
          <span style={{ color: C.ink2, fontSize: 12 }}>
            {settled ? "Secure Session Ready" : `${BOOT[stage]}…`}
          </span>
        </div>
        <div style={{ color: C.faint, fontSize: 11, marginTop: 6 }}>
          Initializing Secure Evidence Environment…
        </div>
      </div>

      <div className="text-center relative" style={{ zIndex: 1 }}>
        <div className="inline-flex items-center gap-2 rounded-md px-3 py-1.5"
          style={{ border: `1px solid ${C.border}`, color: C.ink2, fontSize: 11.5, background: C.navy3 }}>
          <Lock size={12} style={{ color: C.navy }} /> Secure Evidence Environment
        </div>
        <div style={{ color: C.faint, fontSize: 11.5, marginTop: 14, letterSpacing: ".08em" }}>
          NARCOLOCKER DIGITAL EVIDENCE SYSTEM · v1.0
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  LOGIN  ───────────────────────────── */

function Login({ onLogin }) {
  const [id, setId] = useState(OFFICER.id);
  const [pw, setPw] = useState("••••••••••");
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(true);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const demoOfficers = DataService.getOfficers();
  const currentSelectedOfficer = DataService.getOfficerById(id) || demoOfficers[0];

  const submit = () => {
    if (!id.trim()) return setErr("Officer ID is required.");
    const found = DataService.getOfficerById(id);
    if (!found) {
      return setErr(`Officer ID "${id.trim()}" not found in department roster. Try demo ID TN-NCB-2291.`);
    }
    if (found.status === "Inactive") {
      return setErr(`Officer account ${found.id} is currently inactive. Contact Administrator to activate.`);
    }

    setErr("");
    setBusy(true);
    setTimeout(() => {
      const nowTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      DataService.updateOfficer(found.id, {
        lastLogin: `Today · ${nowTime}`,
        lastActivity: "Active session",
        status: "Active",
      });
      DataService.addActivity({
        officerId: found.id,
        action: "Officer login",
        caseId: null,
        timestamp: "Just now",
        details: `${found.name} signed in on ${found.device}`,
      });
      DataService.addAuditLog({
        actorId: found.id,
        role: "Officer",
        action: "Officer login",
        caseId: null,
        officerId: found.id,
        status: "Success",
        details: `${found.id} · ${found.name} authenticated on ${found.device}`,
      });
      onLogin(found);
    }, 750);
  };

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2 relative" style={{ fontFamily: FONT, background: "#fff" }}>
      <style>{NL_CSS}</style>
      {/* left brand panel */}
      <div className="hidden lg:flex flex-col justify-between p-12 relative overflow-hidden" style={{ background: C.navy }}>
        <TriCurves corner="br" />
        <div className="relative" style={{ zIndex: 1 }}>
          <Wordmark mono size={40} sub="Digital Companion for Field Drug Testing" />
          <div className="mt-3.5"><TriAccent w={64} h={3} onDark /></div>
        </div>
        <div className="relative" style={{ zIndex: 1 }}>
          <div style={{ color: "#fff", fontSize: 30, fontWeight: 700, lineHeight: 1.25, letterSpacing: "-0.02em", maxWidth: 440 }}>
            Field drug screening, recorded as verifiable digital evidence.
          </div>
          <div style={{ color: "rgba(255,255,255,.7)", fontSize: 14, marginTop: 16, maxWidth: 430, lineHeight: 1.65 }}>
            NarcoLocker turns an existing colourimetric test pouch into a time-stamped, hashed and signed evidence record —
            captured on the officer's device, analysed on-device, and verifiable later by anyone with the record.
          </div>
          <div className="grid grid-cols-2 gap-3 mt-9" style={{ maxWidth: 460 }}>
            {[
              [Camera, "Capture", "Pouch and reference card in one frame"],
              [Activity, "Analyse", "LAB colour, CIEDE2000, ΔE00 threshold"],
              [Fingerprint, "Verify", "SHA-256 hash and digital signature"],
              [Database, "Record", "Offline-first, synced when connected"],
            ].map(([I, t, d]) => (
              <div key={t} className="rounded-md p-3.5" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.16)" }}>
                <I size={16} style={{ color: C.saffron }} />
                <div style={{ color: "#fff", fontSize: 13, fontWeight: 650, marginTop: 8 }}>{t}</div>
                <div style={{ color: "rgba(255,255,255,.65)", fontSize: 11.5, marginTop: 3, lineHeight: 1.45 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative" style={{ color: "rgba(255,255,255,.55)", fontSize: 11.5, letterSpacing: ".08em", zIndex: 1 }}>
          NARCOLOCKER FIELD EVIDENCE SYSTEM · TAMIL NADU RANGE
        </div>
      </div>

      {/* right form */}
      <div className="flex items-center justify-center p-6 lg:p-12 min-h-screen lg:min-h-0">
        <div className="w-full" style={{ maxWidth: 420 }}>
          <div className="lg:hidden flex flex-col items-center mb-8">
            <Wordmark size={40} sub="Digital Companion for Field Drug Testing" />
            <div className="mt-3"><TriAccent w={58} h={3} /></div>
          </div>

          <div style={{ color: C.navy2, fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>Secure Government Access</div>
          <div style={{ color: C.muted, fontSize: 13.5, marginTop: 5 }}>Authorised demonstration environment</div>

          <div className="mt-6 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span style={{ color: C.ink2, fontSize: 12, fontWeight: 600 }}>Demo Officer Roster</span>
                <span style={{ color: C.faint, fontSize: 11 }}>Quick Select</span>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {demoOfficers.map((o) => {
                  const on = id.toUpperCase() === o.id.toUpperCase();
                  return (
                    <button
                      key={o.id}
                      type="button"
                      onClick={() => { setId(o.id); setErr(""); }}
                      className="rounded px-2.5 py-1 text-xs"
                      style={{
                        border: `1px solid ${on ? C.navy : C.border}`,
                        background: on ? C.navy3 : "#fff",
                        color: on ? C.navy : C.ink,
                        fontWeight: on ? 700 : 500,
                        transition: "all .15s ease",
                      }}
                    >
                      {o.id} · {o.name.split(" ").slice(-1)[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            <Input label="Officer ID" value={id} onChange={(v) => { setId(v); setErr(""); }} icon={KeyRound}
              placeholder="TN-NCB-0000" error={err} />
            <Input label="Password" value={pw} onChange={setPw} icon={Lock} type={show ? "text" : "password"}
              right={
                <button onClick={() => setShow(!show)} style={{ color: C.faint }} aria-label="Toggle password">
                  {show ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              } />
            <label className="flex items-center gap-2.5 cursor-pointer select-none">
              <span className="inline-flex items-center justify-center rounded"
                onClick={() => setRemember(!remember)}
                style={{ width: 17, height: 17, border: `1px solid ${remember ? C.navy : C.border}`, background: remember ? C.navy : "#fff" }}>
                {remember && <Check size={11} color="#fff" strokeWidth={3} />}
              </span>
              <span style={{ color: C.ink2, fontSize: 12.5 }} onClick={() => setRemember(!remember)}>
                Remember this device
              </span>
            </label>
            <Btn full size="lg" onClick={submit} icon={busy ? RefreshCw : Lock} disabled={busy}>
              {busy ? "Verifying device & credentials…" : "Secure Login"}
            </Btn>
          </div>

          <div className="text-center mt-5" style={{ color: C.muted, fontSize: 12 }}>
            Protected Digital Evidence Environment
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            <Pill fg={C.green} bg={C.greenSoft} icon={Check}>Secure Session</Pill>
            <Pill fg={C.green} bg={C.greenSoft} icon={ShieldCheck}>Device Verification</Pill>
            <Pill fg={C.green} bg={C.greenSoft} icon={Fingerprint}>Evidence Protection</Pill>
          </div>

          <Card className="mt-7 p-4" style={{ background: C.navy3 }}>
            <div style={{ color: C.faint, fontSize: 11, fontWeight: 650, marginBottom: 8 }}>Selected Officer Profile</div>
            <div className="grid grid-cols-2 gap-3">
              <Field label="Officer" value={currentSelectedOfficer.name} />
              <Field label="Police ID" value={currentSelectedOfficer.id} mono />
              <Field label="Unit" value={currentSelectedOfficer.unit} />
              <Field label="Device" value={currentSelectedOfficer.device} mono />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  ROLE SELECTION  ───────────────────────────── */

function RoleSelect({ onOfficer, onAdmin }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ fontFamily: FONT, background: C.bg }}>
      <style>{NL_CSS}</style>
      <div className="w-full nl-page" style={{ maxWidth: 440 }}>
        <div className="flex flex-col items-center text-center mb-8">
          <Wordmark size={44} />
          <div className="mt-3"><TriAccent w={58} h={3} /></div>
          <div style={{ color: C.ink2, fontSize: 15, fontWeight: 650, marginTop: 14 }}>
            Trusted Digital Record for Field Testing
          </div>
          <div style={{ color: C.muted, fontSize: 12.5, marginTop: 4 }}>
            Select how you would like to sign in
          </div>
        </div>

        <div className="space-y-3">
          <Card onClick={onOfficer} className="p-4 flex items-center gap-3.5">
            <span className="inline-flex items-center justify-center rounded-md shrink-0"
              style={{ width: 42, height: 42, background: C.navy3, color: C.navy }}>
              <User size={20} />
            </span>
            <div className="flex-1 min-w-0">
              <div style={{ color: C.ink, fontSize: 14.5, fontWeight: 650 }}>Officer Login</div>
              <div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>Field evidence capture, analysis and case records</div>
            </div>
            <ChevronRight size={17} style={{ color: C.faint }} />
          </Card>

          <Card onClick={onAdmin} className="p-4 flex items-center gap-3.5">
            <span className="inline-flex items-center justify-center rounded-md shrink-0"
              style={{ width: 42, height: 42, background: C.navy3, color: C.navy }}>
              <ShieldCheck size={20} />
            </span>
            <div className="flex-1 min-w-0">
              <div style={{ color: C.ink, fontSize: 14.5, fontWeight: 650 }}>Admin Login</div>
              <div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>Officer oversight, case monitoring and audit trails</div>
            </div>
            <ChevronRight size={17} style={{ color: C.faint }} />
          </Card>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <Pill fg={C.green} bg={C.greenSoft} icon={ShieldCheck}>Secure Environment</Pill>
          <Pill fg={C.green} bg={C.greenSoft} icon={Lock}>Encrypted Access</Pill>
        </div>

        <div className="text-center mt-6" style={{ color: C.faint, fontSize: 11, letterSpacing: ".08em" }}>
          NARCOLOCKER SECURE EVIDENCE PLATFORM · v1.0
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  ADMIN LOGIN  ───────────────────────────── */

function AdminLogin({ onLogin, onBack }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = () => {
    if (!id.trim() || !pw.trim()) { setErr("Admin ID and password are required."); return; }
    if (id.trim().toUpperCase() !== ADMIN.id || pw !== ADMIN_PASSWORD) {
      setErr("Invalid admin credentials. Check the demonstration credentials below.");
      return;
    }
    setErr(""); setBusy(true);
    setTimeout(() => {
      DataService.addAuditLog({
        actorId: ADMIN.id,
        role: "Admin",
        action: "Admin login successful",
        caseId: null,
        officerId: null,
        status: "Success",
        details: `${ADMIN.id} · ${ADMIN.name} · Chennai Central Range console`,
      });
      onLogin();
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ fontFamily: FONT, background: C.bg }}>
      <style>{NL_CSS}</style>
      <div className="w-full nl-page" style={{ maxWidth: 400 }}>
        <div className="flex flex-col items-center mb-7">
          <Wordmark size={42} sub="Digital Companion for Field Drug Testing" />
        </div>

        <Card className="p-6">
          <div className="flex items-center gap-2.5 mb-1">
            <span className="inline-flex items-center justify-center rounded-md"
              style={{ width: 34, height: 34, background: C.navy3, color: C.navy }}>
              <ShieldCheck size={17} />
            </span>
            <div style={{ color: C.navy2, fontSize: 19, fontWeight: 700, letterSpacing: "-0.02em" }}>Admin Login</div>
          </div>
          <div style={{ color: C.muted, fontSize: 12.5, marginTop: 4, marginBottom: 18 }}>
            Restricted access · Authorised administrators only
          </div>

          <div className="space-y-4">
            <Input label="Admin ID / Email" value={id} onChange={(v) => { setId(v); setErr(""); }} icon={KeyRound}
              placeholder="NCB-ADMIN-000" />
            <Input label="Password" value={pw} onChange={(v) => { setPw(v); setErr(""); }} icon={Lock}
              type={show ? "text" : "password"} placeholder="••••••••••"
              right={
                <button onClick={() => setShow(!show)} style={{ color: C.faint }} aria-label="Toggle password">
                  {show ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              } />

            {err && <Banner tone="danger" title="Login failed" body={err} />}

            <Btn full size="lg" onClick={submit} icon={busy ? RefreshCw : Lock} disabled={busy}>
              {busy ? "Verifying…" : "Login"}
            </Btn>
            <button onClick={onBack} className="flex items-center justify-center gap-1.5 w-full"
              style={{ color: C.navy, fontSize: 12.5, fontWeight: 600, height: 36 }}>
              <ChevronLeft size={14} /> Back to Role Selection
            </button>
          </div>
        </Card>

        <Card className="mt-5 p-4" style={{ background: C.navy3 }}>
          <div style={{ color: C.faint, fontSize: 11, fontWeight: 650, marginBottom: 8 }}>Demonstration credentials</div>
          <div className="grid grid-cols-2 gap-3">
            <Field label="Admin ID" value={ADMIN.id} mono />
            <Field label="Password" value={ADMIN_PASSWORD} mono />
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ─────────────────────────────  SHELL  ───────────────────────────── */

const NAV = [
  { k: "home", label: "Home", icon: Home },
  { k: "cases", label: "Cases", icon: FolderClosed },
  { k: "newcase", label: "New Case", icon: PlusCircle, cta: true },
  { k: "security", label: "Security", icon: ShieldCheck },
  { k: "profile", label: "Profile", icon: User },
];

const NOTIF_SEV = {
  ok: { fg: C.green, bg: C.greenSoft },
  warn: { fg: C.amber, bg: C.amberSoft },
  danger: { fg: C.red, bg: C.redSoft },
};

function NotificationBell() {
  const [open, setOpen] = useState(false);
  const alertCount = NOTIFICATIONS.filter((n) => n.sev !== "ok").length;
  const hasDanger = NOTIFICATIONS.some((n) => n.sev === "danger");
  return (
    <div className="relative">
      <button
        className="rounded-md inline-flex items-center justify-center relative"
        style={{ width: 34, height: 34, border: "1px solid rgba(255,255,255,.2)", color: "#fff" }}
        onClick={() => setOpen((o) => !o)}
        aria-label="Notifications"
      >
        <Bell size={15} />
        {alertCount > 0 && (
          <span className="absolute rounded-full" style={{
            top: 4, right: 4, width: 8, height: 8,
            background: hasDanger ? C.red : C.saffron, border: "1.5px solid #173F7A",
          }} />
        )}
      </button>
      {open && (
        <>
          <div className="fixed inset-0" style={{ zIndex: 40 }} onClick={() => setOpen(false)} />
          <div className="absolute rounded-lg overflow-hidden"
            style={{
              top: 42, right: 0, width: 328, maxWidth: "88vw", zIndex: 50,
              background: "#fff", border: `1px solid ${C.border}`, boxShadow: "0 14px 34px rgba(23,63,122,.2)",
            }}>
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: `1px solid ${C.border2}` }}>
              <span style={{ color: C.ink, fontSize: 13.5, fontWeight: 650 }}>Notifications</span>
              <Pill fg={C.navy} bg={C.cyanSoft}>{NOTIFICATIONS.length} recent</Pill>
            </div>
            <div style={{ maxHeight: 366, overflowY: "auto" }}>
              {NOTIFICATIONS.map((n) => {
                const m = NOTIF_SEV[n.sev];
                return (
                  <div key={n.id} className="flex items-start gap-2.5 px-4 py-3" style={{ borderBottom: `1px solid ${C.border2}` }}>
                    <span className="inline-flex items-center justify-center rounded-full shrink-0"
                      style={{ width: 28, height: 28, background: m.bg, color: m.fg, marginTop: 1 }}>
                      <n.icon size={13} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div style={{ color: C.ink, fontSize: 12.5, fontWeight: 650, lineHeight: 1.35 }}>{n.title}</div>
                      <div style={{ color: C.muted, fontSize: 11.5, marginTop: 2, lineHeight: 1.4 }}>{n.body}</div>
                      <div style={{ color: C.faint, fontSize: 10.5, marginTop: 3, fontFamily: MONO }}>{n.time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Shell({ screen, go, net, setNet, children, lastSync, officer = OFFICER }) {
  const active = (k) =>
    k === screen ||
    (k === "newcase" && ["capture", "processing", "analysis", "result", "record", "report", "qr"].includes(screen)) ||
    (k === "cases" && screen === "casedetail");

  const initials = (officer?.name || "AS").split(" ").filter(Boolean).slice(-2).map((w) => w[0]).join("").toUpperCase();

  return (
    <div className="min-h-screen" style={{ background: C.bg, fontFamily: FONT }}>
      <style>{NL_CSS}</style>
      {/* sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 flex-col justify-between"
        style={{ width: 246, background: C.navy, top: 62 }}>
        <div>
          <nav className="p-3 space-y-1 mt-2">
            {NAV.map((n) => {
              const on = active(n.k);
              if (n.cta)
                return (
                  <button key={n.k} onClick={() => go("newcase")}
                    className="w-full flex items-center gap-2.5 rounded-md px-3 my-2"
                    style={{ height: 42, background: C.saffron, color: "#173F7A", fontSize: 13.5, fontWeight: 700 }}>
                    <PlusCircle size={17} /> New Case
                  </button>
                );
              return (
                <button key={n.k} onClick={() => go(n.k)}
                  className="w-full flex items-center gap-2.5 rounded-md px-3 relative"
                  style={{
                    height: 40, fontSize: 13.5, fontWeight: on ? 650 : 500,
                    color: on ? "#fff" : "rgba(255,255,255,.65)",
                    background: on ? "rgba(255,255,255,.14)" : "transparent",
                  }}>
                  {on && <span className="absolute rounded-full" style={{ left: 0, top: 9, bottom: 9, width: 3, background: C.saffron }} />}
                  <n.icon size={17} style={{ color: on ? "#fff" : "inherit" }} /> {n.label}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="p-3">
          <div className="rounded-md p-3" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)" }}>
            <div className="flex items-center gap-2">
              <span className="rounded-full inline-flex items-center justify-center"
                style={{ width: 30, height: 30, background: C.saffron, color: "#173F7A", fontSize: 11.5, fontWeight: 700 }}>
                {initials}
              </span>
              <div className="min-w-0">
                <div style={{ color: "#fff", fontSize: 12.5, fontWeight: 650 }} className="truncate">{officer?.name || OFFICER.name}</div>
                <div style={{ color: "rgba(255,255,255,.6)", fontSize: 11, fontFamily: MONO }}>{officer?.id || OFFICER.id}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 mt-3" style={{ color: net === "offline" ? "#B8720A" : "#138808", fontSize: 11 }}>
              {net === "offline" ? <WifiOff size={12} /> : net === "syncing" ? <RefreshCw size={12} /> : <Wifi size={12} />}
              {net === "offline" ? "Offline Mode Ready" : net === "syncing" ? "Syncing Secure Records…" : `Synced · ${lastSync}`}
            </div>
          </div>
        </div>
      </aside>

      {/* top header */}
      <header className="fixed top-0 inset-x-0 z-30" style={{ background: C.navy }}>
        <div className="flex items-center justify-between px-4 lg:px-6" style={{ height: 62 }}>
          <div className="flex items-center gap-3">
            <Wordmark mono size={30} />
          </div>
          <div className="hidden lg:flex flex-col items-start" style={{ marginLeft: 8 }}>
            <div style={{ color: "#fff", fontSize: 13.5, fontWeight: 650 }}>{titleFor(screen)}</div>
            <div style={{ color: "rgba(255,255,255,.55)", fontSize: 11 }}>{crumbFor(screen)}</div>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <button onClick={() => setNet(net === "offline" ? "syncing" : "offline")}
              className="hidden sm:flex items-center gap-1.5 rounded-md px-2.5"
              style={{
                height: 30, fontSize: 11.5, fontWeight: 600, color: "#fff",
                background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.18)",
              }}>
              {net === "offline" ? <WifiOff size={13} /> : net === "syncing" ? <RefreshCw size={13} /> : <Wifi size={13} />}
              <span>
                {net === "offline" ? "Offline · Device Storage Active" : net === "syncing" ? "Syncing Secure Records…" : "All Records Synced"}
              </span>
            </button>
            <NotificationBell />
            <button className="rounded-full inline-flex items-center justify-center"
              style={{ width: 34, height: 34, background: C.saffron, color: "#173F7A", fontWeight: 700, fontSize: 12 }}
              onClick={() => go("profile")}>
              {initials}
            </button>
          </div>
        </div>
        <TriLine h={3} />
      </header>

      <main className="lg:pl-[246px] pb-24 lg:pb-10" style={{ paddingTop: 65 }}>
        <div key={screen} className="mx-auto px-4 lg:px-7 py-5 lg:py-7 nl-page" style={{ maxWidth: 1180 }}>{children}</div>
      </main>

      {/* bottom nav */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-20 flex items-stretch"
        style={{ height: 66, background: "#fff", borderTop: `1px solid ${C.border}` }}>
        {NAV.map((n) => {
          const on = active(n.k);
          if (n.cta)
            return (
              <button key={n.k} onClick={() => go("newcase")} className="flex-1 flex flex-col items-center justify-center gap-1">
                <span className="rounded-full inline-flex items-center justify-center"
                  style={{ width: 40, height: 40, background: C.saffron, color: "#173F7A", marginTop: -14, border: "3px solid #fff" }}>
                  <PlusCircle size={19} />
                </span>
                <span style={{ fontSize: 10, color: C.navy, fontWeight: 700 }}>New Case</span>
              </button>
            );
          return (
            <button key={n.k} onClick={() => go(n.k)} className="flex-1 flex flex-col items-center justify-center gap-1 relative"
              style={{ color: on ? C.navy : C.faint }}>
              {on && <span className="absolute rounded-full" style={{ top: 0, left: "28%", right: "28%", height: 3, background: C.saffron }} />}
              <n.icon size={19} />
              <span style={{ fontSize: 10, fontWeight: on ? 650 : 500 }}>{n.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

function titleFor(s) {
  return {
    home: "Command Dashboard", cases: "Evidence Cases", casedetail: "Case Details", newcase: "New Case",
    capture: "Evidence Capture", processing: "Analysing Evidence", analysis: "Analysis Details",
    result: "Presumptive Result", record: "Secure Evidence Record", qr: "QR Evidence Verification",
    report: "Secure Digital Evidence Report", security: "Security Center", profile: "Officer Profile",
  }[s] || "NarcoLocker";
}
function crumbFor(s) {
  const flow = ["newcase", "capture", "processing", "analysis", "result", "record", "qr", "report"];
  return flow.includes(s) ? "Evidence workflow · Chennai Central Range" : "NarcoLocker · Chennai Central Range";
}

/* ─────────────────────────────  HOME  ───────────────────────────── */

function StatTile({ label, value, tone, share }) {
  return (
    <Card className="p-4">
      <div style={{ color: C.muted, fontSize: 12, fontWeight: 600 }}>{label}</div>
      <div className="flex items-end gap-2 mt-1.5">
        <div style={{ color: C.ink, fontSize: 27, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1 }}>{value}</div>
        {share && <div style={{ color: C.faint, fontSize: 11.5, marginBottom: 2 }}>{share}</div>}
      </div>
      <div className="rounded-full mt-3" style={{ height: 3, background: C.border2 }}>
        <div style={{ width: share || "100%", height: "100%", background: tone, borderRadius: 99 }} />
      </div>
    </Card>
  );
}

function CaseRow({ c, onClick, compact }) {
  const m = RESULT_META[c.result] || RESULT_META.match;
  return (
    <div onClick={onClick} className="flex items-center gap-3 px-4 py-3 cursor-pointer"
      style={{ borderBottom: `1px solid ${C.border2}` }}>
      <span className="inline-flex items-center justify-center rounded-md shrink-0"
        style={{ width: 34, height: 34, background: m.bg, color: m.fg }}>
        <m.Icon size={17} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span style={{ color: C.ink, fontSize: 13.5, fontWeight: 650, fontFamily: MONO }}>{c.id}</span>
          {c.verified
            ? <Pill fg={C.green} bg={C.greenSoft} icon={ShieldCheck}>Verified Record</Pill>
            : <Pill fg={C.amber} bg={C.amberSoft} icon={Clock}>Pending Verification</Pill>}
          {!c.synced && <Pill fg={C.navy} bg="#EAF0FA" icon={RefreshCw}>Pending Sync</Pill>}
        </div>
        <div style={{ color: C.muted, fontSize: 12, marginTop: 3 }} className="truncate">
          {c.date} · {c.time} &nbsp;|&nbsp; {c.area} &nbsp;|&nbsp; {c.officerId || OFFICER.id}
        </div>
      </div>
      {!compact && (
        <div className="hidden sm:block text-right">
          <div style={{ color: m.fg, fontSize: 12.5, fontWeight: 650 }}>{m.label}</div>
          <div style={{ color: C.faint, fontSize: 11.5, fontFamily: MONO }}>ΔE00 {typeof c.dE === "number" ? c.dE.toFixed(1) : c.dE}</div>
        </div>
      )}
      <ChevronRight size={16} style={{ color: C.faint }} />
    </div>
  );
}

function HomeScreen({ go, cases, net, lastSync, openCase, officer = OFFICER }) {
  const total = cases.length;
  const match = cases.filter((c) => c.result === "match").length;
  const inc = cases.filter((c) => c.result === "inconclusive").length;
  const none = cases.filter((c) => c.result === "none").length;
  const matchPct = total > 0 ? `${Math.round((match / total) * 100)}%` : "0%";
  const incPct = total > 0 ? `${Math.round((inc / total) * 100)}%` : "0%";
  const nonePct = total > 0 ? `${Math.round((none / total) * 100)}%` : "0%";

  const qa = [
    { label: "Start New Case", sub: "Test pouch + camera", icon: PlusCircle, go: "newcase", tone: C.navy },
    { label: "Verify Evidence", sub: "Hash + signature check", icon: ShieldCheck, go: "qr", tone: C.saffron },
    { label: "Trace Evidence", sub: "Location & case lookup", icon: MapPin, go: "cases", tone: C.navy },
    { label: "View Reports", sub: "Secure evidence reports", icon: FileText, go: "report", tone: C.navy2 },
  ];
  return (
    <div className="space-y-6">
      {/* hero */}
      <Card className="p-5 lg:p-6" style={{ backgroundImage: "linear-gradient(135deg, #2755A3 0%, #173F7A 100%)", border: "1px solid #173F7A", boxShadow: "0 8px 24px rgba(23,63,122,.22)", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 220, height: "100%", opacity: 0.1 }}>
          <TriCurves corner="br" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 relative">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <Pill fg="#138808" bg="rgba(255,255,255,.1)" icon={ShieldCheck}>Device Secure · Synced</Pill>
              <Pill fg="rgba(255,255,255,.72)" bg="rgba(255,255,255,.1)" icon={MapPin}>{officer?.unit || OFFICER.unit}</Pill>
            </div>
            <div style={{ color: "#fff", fontSize: 25, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 12, lineHeight: 1.2 }}>
              Digital Evidence, Secured at the Source
            </div>
            <div className="flex items-center gap-2 mt-2.5">
              <span style={{ color: "rgba(255,255,255,.72)", fontSize: 13, fontWeight: 600, letterSpacing: ".04em" }}>
                Capture · Analyse · Verify · Record
              </span>
            </div>
            <div className="mt-2.5"><TriAccent w={54} h={3} onDark /></div>
            <div style={{ color: "rgba(255,255,255,.65)", fontSize: 12, marginTop: 10 }}>
              {officer?.name || OFFICER.name} ({officer?.id || OFFICER.id}) · Last Sync: {net === "syncing" ? "syncing…" : lastSync}
            </div>
          </div>
          <div className="flex gap-2">
            <Btn variant="accent" size="lg" icon={PlusCircle} onClick={() => go("newcase")}>+ Start New Case</Btn>
            <button onClick={() => go("cases")} className="rounded-md px-4"
              style={{ height: 48, color: "#fff", border: "1px solid rgba(255,255,255,.2)", fontSize: 14, fontWeight: 600 }}>
              View Evidence Cases
            </button>
          </div>
        </div>
      </Card>

      {/* stats */}
      <div>
        <SectionTitle sub={`Records captured by officer ${officer?.id || OFFICER.id}`}>Case overview</SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <StatTile label="Total Cases" value={total} tone={C.navy} />
          <StatTile label="Presumptive Match" value={match} tone={C.green} share={matchPct} />
          <StatTile label="Inconclusive" value={inc} tone={C.saffron} share={incPct} />
          <StatTile label="No Match" value={none} tone={C.red} share={nonePct} />
        </div>
      </div>

      {/* quick actions — 2x2 */}
      <div>
        <SectionTitle sub="Common field tasks">Quick actions</SectionTitle>
        <div className="grid grid-cols-2 gap-3">
          {qa.map((a) => (
            <Card key={a.label} onClick={() => go(a.go)} className="p-4">
              <span className="inline-flex items-center justify-center rounded-md"
                style={{ width: 36, height: 36, background: C.navy3, color: a.tone }}>
                <a.icon size={18} />
              </span>
              <div style={{ color: C.ink, fontSize: 13.5, fontWeight: 650, marginTop: 11 }}>{a.label}</div>
              <div style={{ color: C.muted, fontSize: 11.5, marginTop: 2 }}>{a.sub}</div>
            </Card>
          ))}
        </div>
      </div>

      {/* system status */}
      <Card>
        <CardHead title="System Status" icon={ShieldCheck}
          right={<Pill fg={C.green} bg={C.greenSoft} dot>Secure</Pill>} />
        <div className="p-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Field label="Device" value="Verified" />
            <Field label="Storage" value="Secure" />
            <Field label="Sync" value={net === "offline" ? "Pending" : "100% Synced"} />
            <Field label="Last Sync" value={net === "syncing" ? "in progress" : lastSync} />
          </div>
          <div className="flex items-center gap-2 mt-3.5">
            <Pill fg={C.green} bg={C.greenSoft} icon={Check}>Evidence Integrity: No Issues</Pill>
          </div>
          <button onClick={() => go("security")} className="flex items-center gap-1.5 mt-3.5"
            style={{ color: C.navy, fontSize: 12.5, fontWeight: 650 }}>
            Open Security Center <ChevronRight size={14} />
          </button>
        </div>
      </Card>

      {/* recent */}
      <Card>
        <CardHead title="Recent cases" note={`${cases.length} on this device`} icon={FolderClosed}
          right={<Btn variant="ghost" size="sm" onClick={() => go("cases")} iconRight={ChevronRight}>View All Cases</Btn>} />
        {cases.length === 0 ? (
          <EmptyState title="No Evidence Cases Yet" body="Start a new case to record digital evidence." action={<Btn icon={PlusCircle} onClick={() => go("newcase")}>Create Case</Btn>} />
        ) : (
          cases.slice(0, 5).map((c) => <CaseRow key={c.id} c={c} onClick={() => openCase(c)} />)
        )}
      </Card>

      <Disclaimer />
    </div>
  );
}

/* ─────────────────────────────  NEW CASE WIZARD  ───────────────────────────── */

const STEPS = [
  ["01", "Case Details"], ["02", "Capture"], ["03", "Analyse"], ["04", "Verify"], ["05", "Record"],
];

function Stepper({ current }) {
  return (
    <div className="flex items-stretch overflow-x-auto rounded-lg"
      style={{ background: C.surface, border: `1px solid ${C.border}` }}>
      {STEPS.map(([n, l], i) => {
        const done = i < current, on = i === current;
        return (
          <div key={n} className="flex items-center gap-2.5 px-4 py-3 flex-1"
            style={{ borderRight: i < 4 ? `1px solid ${C.border2}` : "none", minWidth: 132,
              background: on ? "#EAF0FA" : "transparent" }}>
            <span className="inline-flex items-center justify-center rounded-md shrink-0"
              style={{
                width: 26, height: 26, fontSize: 11.5, fontWeight: 700, fontFamily: MONO,
                background: done ? C.greenSoft : on ? GRAD : "#F3F7FC",
                color: done ? C.green : on ? "#fff" : C.faint,
              }}>
              {done ? <Check size={13} strokeWidth={3} /> : n}
            </span>
            <span style={{ fontSize: 12.5, fontWeight: on ? 650 : 500, color: on ? C.ink : done ? C.ink2 : C.faint, whiteSpace: "nowrap" }}>
              {l}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function NewCase({ go, draft, setDraft, officer = OFFICER }) {
  const [err, setErr] = useState({});
  const set = (k) => (v) => { setDraft({ ...draft, [k]: v }); setErr({ ...err, [k]: undefined }); };

  const next = () => {
    const e = {};
    if (!draft.officerId?.trim()) e.officerId = "Officer ID is required.";
    if (!draft.ref?.trim()) e.ref = "Case reference is required.";
    if (!draft.location?.trim()) e.location = "Seizure location is required.";
    if (Object.keys(e).length) return setErr(e);
    go("capture");
  };

  return (
    <div className="space-y-5">
      <Stepper current={0} />
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <Card>
            <CardHead title="Case information" note="Generated automatically" icon={FileText} />
            <div className="p-4 space-y-4">
              <div className="rounded-md p-3.5 flex items-center justify-between flex-wrap gap-2"
                style={{ background: "#EAF0FA", border: `1px solid ${C.border}` }}>
                <div>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 600 }}>Case ID (Unique)</div>
                  <div style={{ color: C.navy, fontSize: 17, fontWeight: 700, fontFamily: MONO }}>{draft.id}</div>
                </div>
                <Pill fg={C.navy} bg={C.cyanSoft} icon={Lock}>Reserved on device</Pill>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input label="Case Reference" value={draft.ref} onChange={set("ref")} placeholder="FIR / seizure reference" error={err.ref} />
                <Input label="Location" value={draft.location} onChange={set("location")} icon={MapPin} error={err.location} />
                <Input label="Officer ID" value={draft.officerId || officer?.id || OFFICER.id} readOnly icon={KeyRound} error={err.officerId} />
                <Input label="Unit" value={officer?.unit || OFFICER.unit} readOnly />
                <Input label="Date" value={draft.date} readOnly />
                <Input label="Time" value={draft.time} readOnly />
              </div>
            </div>
          </Card>

          <Card>
            <CardHead title="Test pouch" note="Select the pouch used in the field" icon={Layers} />
            <div className="p-4 space-y-3">
              {[
                ["Marquis reagent pouch", "NDDK-style colourimetric drug detection kit", true],
                ["Mecke reagent pouch", "NDDK-style colourimetric drug detection kit", false],
                ["Simon's reagent pouch", "NDDK-style colourimetric drug detection kit", false],
              ].map(([t, d, def]) => {
                const on = draft.pouch === t;
                return (
                  <div key={t} onClick={() => setDraft({ ...draft, pouch: t })}
                    className="flex items-start gap-3 rounded-md p-3.5 cursor-pointer"
                    style={{ border: `1px solid ${on ? C.navy : C.border}`, background: on ? "#EAF0FA" : C.navy3 }}>
                    <span className="rounded-full inline-flex items-center justify-center shrink-0"
                      style={{ width: 17, height: 17, marginTop: 1, border: `1px solid ${on ? C.navy : C.border}`, background: on ? C.navy : C.navy3 }}>
                      {on && <Check size={11} color="#fff" strokeWidth={3} />}
                    </span>
                    <div>
                      <div style={{ color: C.ink, fontSize: 13.5, fontWeight: 600 }}>{t}</div>
                      <div style={{ color: C.muted, fontSize: 12, marginTop: 2 }}>{d}</div>
                    </div>
                  </div>
                );
              })}
              <Banner tone="info" title="Handle the test pouch strictly per your unit's approved procedure."
                body="NarcoLocker records the outcome of the pouch reaction. It does not instruct on chemical handling." />
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHead title="Evidence Location" icon={MapPin} right={<DemoDataPill />} />
            <div className="p-4">
              <div className="rounded-md overflow-hidden" style={{ border: `1px solid ${C.border}` }}>
                <svg viewBox="0 0 300 140" style={{ width: "100%", display: "block", background: C.navy3 }}>
                  {[...Array(9)].map((_, i) => <line key={`v${i}`} x1={i * 34} y1="0" x2={i * 34} y2="140" stroke="#DCE5EE" />)}
                  {[...Array(5)].map((_, i) => <line key={`h${i}`} x1="0" y1={i * 34} x2="300" y2={i * 34} stroke="#DCE5EE" />)}
                  <path d="M0 96 L92 84 L168 108 L300 92" stroke="#C7D5E5" strokeWidth="7" fill="none" />
                  <path d="M118 0 L126 140" stroke="#C7D5E5" strokeWidth="6" fill="none" />
                  <circle cx="150" cy="70" r="22" fill={C.navy} opacity="0.13" />
                  <circle cx="150" cy="70" r="7" fill={C.navy} stroke="#fff" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3.5">
                <Field label="Latitude" value={GPS.lat} mono />
                <Field label="Longitude" value={GPS.lng} mono />
                <Field label="Accuracy" value="± 4.2 m" mono />
                <Field label="Fix type" value="GNSS + Network" />
              </div>
            </div>
          </Card>

          <Card>
            <CardHead title="Linked officer" icon={User} />
            <div className="p-4 grid grid-cols-2 gap-3">
              <Field label="Officer" value={draft.officerName || officer?.name || OFFICER.name} wide />
              <Field label="Police ID" value={draft.officerId || officer?.id || OFFICER.id} mono />
              <Field label="Device ID" value={officer?.device || OFFICER.device} mono />
            </div>
            <div className="px-4 pb-4">
              <Pill fg={C.green} bg={C.greenSoft} icon={Lock}>Officer identity linked securely to each record</Pill>
            </div>
          </Card>

          <Btn full size="lg" icon={Camera} onClick={next}>Continue to Evidence Capture</Btn>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  CAPTURE  ───────────────────────────── */

function Capture({ go, draft, outcome, setOutcome, quality, setQuality }) {
  const [before, setBefore] = useState(false);
  const [after, setAfter] = useState(false);
  const [err, setErr] = useState("");

  const good = quality === "good";
  const checks = [
    ["Test Pouch Detected", true],
    ["Reference Colour Card Detected", good],
    ["Lighting Check", good],
    ["Image Quality", good],
  ];

  const proceed = () => {
    if (!before) return setErr("Before image required.");
    if (!after) return setErr("After image required.");
    if (!good) return setErr("Image quality is insufficient. Retake recommended.");
    setErr(""); go("processing");
  };

  return (
    <div className="space-y-5">
      <Stepper current={1} />
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <Card>
            <CardHead title="Evidence Capture" note={draft.id} icon={Camera}
              right={<Pill fg={good ? C.green : C.amber} bg={good ? C.greenSoft : C.amberSoft} dot>
                {good ? "Evidence Quality: GOOD" : "Evidence Quality: NEEDS REVIEW"}
              </Pill>} />
            <div className="p-4">
              <div style={{ color: C.ink2, fontSize: 13, marginBottom: 12 }}>
                Place the test pouch and reference colour card inside the frame.
              </div>

              <div className="rounded-lg p-3" style={{ background: C.navy3, border: `1px solid ${C.border}` }}>
                <div className="flex items-center justify-between px-1 pb-2.5">
                  <span className="inline-flex items-center gap-1.5" style={{ color: C.navy2, fontSize: 11, fontWeight: 650, letterSpacing: ".1em" }}>
                    <span className="rounded-full" style={{ width: 6, height: 6, background: C.saffron }} />
                    LIVE CAPTURE
                  </span>
                  <span style={{ color: C.faint, fontSize: 11, fontFamily: MONO }}>{OFFICER.device}</span>
                </div>

                <div className="relative">
                  <PouchPhoto phase={after ? "after" : "before"} height={250} />
                  {!good && (
                    <div className="absolute inset-x-3 bottom-10 rounded-md px-3 py-2 flex items-center gap-2"
                      style={{ background: "rgba(214,69,69,.94)" }}>
                      <AlertTriangle size={14} color="#fff" />
                      <span style={{ color: "#fff", fontSize: 12 }}>Reference colour card not detected.</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    ["Test Pouch Detected", true, C.green],
                    ["Reference Colour Card Detected", good, "#FF9933"],
                    ["Lighting Check", good, C.navy],
                    ["Image Quality", good, C.green],
                  ].map(([l, ok, col]) => (
                    <span key={l} className="inline-flex items-center gap-2 rounded px-2.5 py-1.5"
                      style={{
                        background: "#fff", border: `1px solid ${C.border}`,
                        fontSize: 11.5, fontWeight: 600, color: ok ? C.ink : C.faint,
                      }}>
                      <span className="rounded-full" style={{ width: 7, height: 7, background: ok ? col : "#D9E2EC" }} />
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-md px-3.5 py-2.5 mt-3 flex items-start gap-2"
                style={{ background: "#F3F7FC", border: `1px solid ${C.border2}` }}>
                <ScanLine size={14} style={{ color: C.navy, marginTop: 1 }} />
                <span style={{ color: C.ink2, fontSize: 12 }}>
                  Reference colour card is required for lighting calibration.
                </span>
              </div>

              {err && <div className="mt-3"><Banner tone="danger" title={err} /></div>}

              <div className="flex flex-col sm:flex-row gap-2.5 mt-4">
                {!before ? (
                  <Btn full size="lg" icon={Camera} onClick={() => { setBefore(true); setErr(""); }}>Capture Before Image</Btn>
                ) : !after ? (
                  <Btn full size="lg" icon={Camera} onClick={() => { setAfter(true); setErr(""); }}>Capture After Image</Btn>
                ) : (
                  <>
                    <Btn variant="outline" icon={RefreshCw} onClick={() => { setBefore(false); setAfter(false); }}>Retake Images</Btn>
                    <Btn full size="lg" icon={Activity} onClick={proceed}>Analyse Evidence</Btn>
                  </>
                )}
              </div>
            </div>
          </Card>

          {(before || after) && (
            <Card>
              <CardHead title="Captured evidence" note="Stored on secure device" icon={HardDrive} />
              <div className="p-4 grid sm:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ color: C.ink, fontSize: 12.5, fontWeight: 650 }}>Before Reaction</span>
                    <Pill fg={C.green} bg={C.greenSoft} icon={Check}>Captured</Pill>
                  </div>
                  <PouchPhoto phase="before" height={150} />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span style={{ color: C.ink, fontSize: 12.5, fontWeight: 650 }}>After Reaction</span>
                    {after
                      ? <Pill fg={C.green} bg={C.greenSoft} icon={Check}>Captured</Pill>
                      : <Pill fg={C.faint} bg={C.navy3} icon={Clock}>Awaiting capture</Pill>}
                  </div>
                  {after ? <PouchPhoto phase="after" height={150} /> : (
                    <div className="flex flex-col items-center justify-center rounded-md"
                      style={{ height: 150, border: `1px dashed ${C.border}`, background: "#F3F7FC" }}>
                      <Camera size={20} style={{ color: C.faint }} />
                      <span style={{ color: C.muted, fontSize: 12, marginTop: 8 }}>After image required.</span>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          )}
        </div>

        <div className="space-y-5">
          <Card>
            <CardHead title="Image quality checks" icon={Cpu} />
            <div className="p-4">
              {[
                ["Blur Detection", true, "Sharpness within tolerance"],
                ["Glare Detection", true, "No specular hotspots on pouch"],
                ["Pouch Visibility", true, "Pouch fully inside frame"],
                ["Reference Card Visibility", good, good ? "All six patches readable" : "Card not found in frame"],
                ["Lighting Quality", good, good ? "Uniform illumination" : "Uneven illumination detected"],
                ["Framing", good, good ? "Pouch and card aligned in frame" : "Recompose the shot"],
              ].map(([l, ok, n]) => <CheckRow key={l} ok={ok} label={l} note={n} />)}
              <div style={{ color: C.faint, fontSize: 11, marginTop: 2, marginBottom: 6 }}>Prototype Image Quality Assessment</div>
              <div className="rounded-md px-3 py-2.5 flex items-center justify-between"
                style={{ background: good ? C.greenSoft : C.amberSoft }}>
                <span style={{ color: good ? C.green : C.amber, fontSize: 12.5, fontWeight: 650 }}>
                  {good ? "Evidence Quality: GOOD" : "Evidence Quality: NEEDS REVIEW"}
                </span>
                {good ? <Check size={15} style={{ color: C.green }} /> : <AlertTriangle size={15} style={{ color: C.amber }} />}
              </div>
            </div>
          </Card>

          <Card>
            <CardHead title="Case" icon={FileText} />
            <div className="p-4 grid grid-cols-2 gap-3">
              <Field label="Case ID" value={draft.id} mono wide />
              <Field label="Test Pouch" value={draft.pouch} wide />
              <Field label="Officer" value={OFFICER.id} mono />
              <Field label="GPS" value={GPS.lat} mono />
            </div>
          </Card>

          <Card style={{ background: "#F3F7FC" }}>
            <div className="px-4 py-3" style={{ borderBottom: `1px solid ${C.border2}` }}>
              <span style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Demonstration controls</span>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <div style={{ color: C.ink2, fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Capture quality</div>
                <div className="flex gap-2">
                  {[["good", "Good"], ["poor", "Insufficient"]].map(([k, l]) => (
                    <button key={k} onClick={() => setQuality(k)} className="flex-1 rounded-md"
                      style={{ height: 32, fontSize: 12, fontWeight: 600,
                        border: `1px solid ${quality === k ? "#2755A3" : C.border}`,
                        background: quality === k ? GRAD : C.navy3, color: quality === k ? "#fff" : C.ink2 }}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ color: C.ink2, fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Analysis outcome</div>
                <div className="flex gap-2">
                  {[["match", "Match"], ["inconclusive", "Inconclusive"], ["none", "No Match"]].map(([k, l]) => (
                    <button key={k} onClick={() => setOutcome(k)} className="flex-1 rounded-md"
                      style={{ height: 32, fontSize: 11.5, fontWeight: 600,
                        border: `1px solid ${outcome === k ? "#2755A3" : C.border}`,
                        background: outcome === k ? GRAD : C.navy3, color: outcome === k ? "#fff" : C.ink2 }}>
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  PROCESSING  ───────────────────────────── */

const PIPELINE = [
  "Image Captured", "Perspective Correction", "Reference Colour Detected", "LAB Colour Conversion",
  "CIEDE2000 Colour Comparison", "Result Classification", "SHA-256 Hash Generation", "Digital Record Sealing",
];

function Processing({ go }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (i >= PIPELINE.length) { const t = setTimeout(() => go("analysis"), 520); return () => clearTimeout(t); }
    const t = setTimeout(() => setI(i + 1), 360);
    return () => clearTimeout(t);
  }, [i, go]);
  const pct = Math.round((i / PIPELINE.length) * 100);

  return (
    <div className="space-y-5">
      <Stepper current={2} />
      <div className="flex justify-center">
        <Card className="w-full p-6 lg:p-8" style={{ maxWidth: 560 }}>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center justify-center rounded-lg"
              style={{ width: 52, height: 52, background: C.cyanSoft, color: C.navy }}>
              <Activity size={24} />
            </span>
            <div style={{ color: C.ink, fontSize: 19, fontWeight: 700, marginTop: 14 }}>Analysing Evidence</div>
            <div style={{ color: C.muted, fontSize: 12.5, marginTop: 4 }}>Processing locally on secure device</div>
            <div className="mt-2"><Pill fg={C.navy2} bg={C.cyanSoft}>Prototype analysis workflow</Pill></div>
            <div className="w-full rounded-full mt-6" style={{ height: 4, background: C.border2 }}>
              <div style={{ width: `${pct}%`, height: "100%", background: C.navy, borderRadius: 99, transition: "width .3s ease" }} />
            </div>
            <div style={{ color: C.faint, fontSize: 11.5, marginTop: 8, fontFamily: MONO }}>{pct}% complete</div>
          </div>

          <div className="mt-6">
            {PIPELINE.map((s, k) => (
              <CheckRow key={s} label={s} ok={k < i} pending={k > i} current={k === i} />
            ))}
          </div>

          <div className="rounded-md px-3.5 py-2.5 mt-4 flex items-center gap-2"
            style={{ background: "#F3F7FC", border: `1px solid ${C.border2}` }}>
            <Lock size={14} style={{ color: C.navy }} />
            <span style={{ color: C.ink2, fontSize: 12 }}>
              No evidence image leaves the device during analysis.
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ─────────────────────────────  ANALYSIS DETAILS  ───────────────────────────── */

function Meter({ value, threshold }) {
  const max = 30;
  const pos = Math.min((value / max) * 100, 100);
  const tPos = (threshold / max) * 100;
  const under = value < threshold;
  return (
    <div>
      <div className="relative rounded-full" style={{ height: 8, background: C.navy3 }}>
        <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${tPos}%`, background: C.greenSoft }} />
        <div className="absolute inset-y-0 rounded-full" style={{ left: `${tPos}%`, right: 0, background: C.amberSoft }} />
        <div className="absolute rounded-full" style={{ left: `calc(${pos}% - 6px)`, top: -2, width: 12, height: 12, background: under ? C.green : C.amber, border: `2px solid ${C.navy}`, boxShadow: "0 0 8px rgba(147,51,234,.4)" }} />
        <div className="absolute" style={{ left: `${tPos}%`, top: -4, width: 2, height: 16, background: C.ink2 }} />
      </div>
      <div className="flex justify-between mt-2" style={{ fontSize: 11, color: C.faint, fontFamily: MONO }}>
        <span>0.0</span>
        <span style={{ color: C.ink2 }}>threshold {threshold.toFixed(1)}</span>
        <span>{max.toFixed(1)}</span>
      </div>
    </div>
  );
}

function AnalysisDetails({ go, outcome, draft }) {
  const om = OUTCOME_META[outcome];
  const rm = RESULT_META[outcome];
  const dE = om.dE;
  const under = dE < 10;
  return (
    <div className="space-y-5">
      <Stepper current={2} />
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <Card>
            <CardHead title="Analysis Details" note={draft.id} icon={Activity}
              right={<Pill fg={rm.fg} bg={rm.bg} dot>
                {under ? "Below Threshold" : "Above Threshold"}
              </Pill>} />
            <div className="p-4 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <Swatch hex={om.capHex} label="Captured Colour" sub={`LAB ${om.capLab}`} />
                </div>
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <Swatch hex={REF_COLOUR} label="Reference Colour" sub="LAB 24.1 / 20.3 / −17.8" />
                </div>
              </div>

              <div className="rounded-md p-4" style={{ background: "#F3F7FC", border: `1px solid ${C.border2}` }}>
                <div className="flex items-end justify-between mb-3.5">
                  <div>
                    <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Colour Difference (ΔE00)</div>
                    <div style={{ color: rm.fg, fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                      {dE.toFixed(1)}
                    </div>
                  </div>
                  <div className="text-right">
                    <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Decision Threshold</div>
                    <div style={{ color: C.ink, fontSize: 32, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1 }}>10.0</div>
                  </div>
                </div>
                <Meter value={dE} threshold={10} />
                <div className="flex items-center gap-2 mt-3.5 flex-wrap">
                  <Pill fg={rm.fg} bg={rm.bg} dot>
                    {under ? "Below Threshold" : "Exceeds Threshold"}
                  </Pill>
                  <span style={{ color: C.ink2, fontSize: 12.5 }}>
                    Classification: <strong style={{ color: C.ink }}>{rm.label}</strong>
                  </span>
                </div>
              </div>

              <div>
                <div style={{ color: C.ink, fontSize: 13, fontWeight: 650, marginBottom: 10 }}>Technical information</div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Field label="Colour Space" value="LAB" />
                  <Field label="Comparison" value="CIEDE2000" />
                  <Field label="Classifier" value="Nearest Centroid Classifier" />
                  <Field label="Perspective Correction" value="Applied" />
                  <Field label="Reference Card" value="Detected" />
                  <Field label="Image Quality" value="Good" />
                </div>
              </div>
            </div>
          </Card>
          <Disclaimer />
        </div>

        <div className="space-y-5">
          <Card>
            <CardHead title="Compared frames" icon={Camera} />
            <div className="p-4 space-y-3">
              <div>
                <div style={{ color: C.muted, fontSize: 11.5, fontWeight: 600, marginBottom: 6 }}>Before Reaction</div>
                <PouchPhoto phase="before" height={128} />
              </div>
              <div>
                <div style={{ color: C.muted, fontSize: 11.5, fontWeight: 600, marginBottom: 6 }}>After Reaction</div>
                <PouchPhoto phase="after" height={128} />
              </div>
            </div>
          </Card>
          <Btn full size="lg" iconRight={ArrowRight} onClick={() => go("result")}>
            View {rm.label} Result
          </Btn>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  RESULT  ───────────────────────────── */

function ResultScreen({ go, outcome, draft }) {
  if (outcome === "inconclusive") return <Inconclusive go={go} draft={draft} />;
  if (outcome === "none") return <NoMatchResult go={go} draft={draft} />;
  return (
    <div className="space-y-5">
      <Stepper current={3} />
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <Card style={{ overflow: "hidden" }}>
            <div className="px-5 py-3 flex items-center justify-between" style={{ backgroundImage: "linear-gradient(90deg, #173F7A, #2755A3)", borderBottom: "1px solid #173F7A" }}>
              <span style={{ color: "rgba(255,255,255,.72)", fontSize: 11.5, fontWeight: 650, letterSpacing: ".14em" }}>
                PRESUMPTIVE RESULT
              </span>
              <span style={{ color: "rgba(255,255,255,.55)", fontSize: 11.5, fontFamily: MONO }}>{draft.id}</span>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center rounded-lg shrink-0"
                  style={{ width: 52, height: 52, background: C.greenSoft, color: C.green }}>
                  <CircleCheck size={26} />
                </span>
                <div>
                  <div style={{ color: C.green, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                    ✓ PRESUMPTIVE MATCH
                  </div>
                  <div style={{ color: C.ink2, fontSize: 14, marginTop: 4 }}>
                    Substance class: <strong style={{ color: C.ink }}>Heroin</strong>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>ΔE00</div>
                  <div style={{ color: C.ink, fontSize: 22, fontWeight: 700, fontFamily: MONO }}>3.8</div>
                </div>
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Threshold</div>
                  <div style={{ color: C.ink, fontSize: 22, fontWeight: 700, fontFamily: MONO }}>10.0</div>
                </div>
                <div className="rounded-md p-3.5" style={{ background: C.greenSoft, border: `1px solid #123420` }}>
                  <div style={{ color: C.green, fontSize: 11, fontWeight: 650 }}>Status</div>
                  <div style={{ color: C.green, fontSize: 13.5, fontWeight: 700, marginTop: 5 }}>MATCH — Below Threshold</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-5">
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <Swatch hex={CAP_COLOUR} label="Captured Colour" sub="ΔE00 3.8 from reference" />
                </div>
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <Swatch hex={REF_COLOUR} label="Reference Colour" sub="Heroin centroid · Marquis" />
                </div>
              </div>

              <div className="mt-5"><Disclaimer /></div>

              <div className="flex flex-col sm:flex-row gap-2.5 mt-5">
                <Btn full size="lg" icon={Lock} onClick={() => go("record")}>View Evidence Record</Btn>
                <Btn full size="lg" variant="outline" icon={FileText} onClick={() => go("report")}>Generate Secure Report</Btn>
              </div>
              <div className="mt-2.5">
                <Btn full variant="ghost" icon={ChevronLeft} onClick={() => go("capture")}>Return to Case</Btn>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHead title="Evidence status" icon={ShieldCheck} />
            <div className="p-4">
              <CheckRow label="Image Captured" note="Before and after frames stored" />
              <CheckRow label="Analysis Completed" note="CIEDE2000 comparison in LAB space" />
              <CheckRow label="Hash Generated" note={`SHA-256 · ${HASH_SHORT}`} />
              <CheckRow label="Record Sealed" note="Signed with officer key" />
            </div>
          </Card>
          <Card>
            <CardHead title="Frames" icon={Camera} />
            <div className="p-4 space-y-3">
              <PouchPhoto phase="before" height={118} />
              <PouchPhoto phase="after" height={118} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function NoMatchResult({ go, draft }) {
  return (
    <div className="space-y-5">
      <Stepper current={3} />
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card style={{ overflow: "hidden" }}>
            <div className="px-5 py-3 flex items-center justify-between" style={{ backgroundImage: "linear-gradient(90deg, #173F7A, #2755A3)", borderBottom: "1px solid #173F7A" }}>
              <span style={{ color: "rgba(255,255,255,.72)", fontSize: 11.5, fontWeight: 650, letterSpacing: ".14em" }}>
                PRESUMPTIVE RESULT
              </span>
              <span style={{ color: "rgba(255,255,255,.55)", fontSize: 11.5, fontFamily: MONO }}>{draft.id}</span>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center rounded-lg shrink-0"
                  style={{ width: 52, height: 52, background: C.navy3, color: C.muted }}>
                  <CircleSlash size={26} />
                </span>
                <div>
                  <div style={{ color: C.muted, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                    × NO MATCH
                  </div>
                  <div style={{ color: C.ink2, fontSize: 14, marginTop: 4 }}>
                    No indicative colour reaction detected against the reference set.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Measured ΔE00</div>
                  <div style={{ color: C.muted, fontSize: 22, fontWeight: 700, fontFamily: MONO }}>{OUTCOME_META.none.dE.toFixed(1)}</div>
                </div>
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Threshold</div>
                  <div style={{ color: C.ink, fontSize: 22, fontWeight: 700, fontFamily: MONO }}>10.0</div>
                </div>
                <div className="rounded-md p-3.5" style={{ background: C.navy3, border: `1px solid ${C.border}` }}>
                  <div style={{ color: C.muted, fontSize: 11, fontWeight: 650 }}>Status</div>
                  <div style={{ color: C.muted, fontSize: 13.5, fontWeight: 700, marginTop: 5 }}>NO MATCH — Above Threshold</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-5">
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <Swatch hex={OUTCOME_META.none.capHex} label="Captured Colour" sub={`LAB ${OUTCOME_META.none.capLab}`} />
                </div>
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <Swatch hex={REF_COLOUR} label="Reference Colour" sub="LAB 24.1 / 20.3 / −17.8" />
                </div>
              </div>

              <div className="mt-5"><Disclaimer /></div>

              <div className="flex flex-col sm:flex-row gap-2.5 mt-5">
                <Btn full size="lg" icon={Lock} onClick={() => go("record")}>View Evidence Record</Btn>
                <Btn full size="lg" variant="outline" icon={FileText} onClick={() => go("report")}>Generate Secure Report</Btn>
              </div>
              <div className="mt-2.5">
                <Btn full variant="ghost" icon={ChevronLeft} onClick={() => go("capture")}>Return to Case</Btn>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHead title="Evidence status" icon={ShieldCheck} />
            <div className="p-4">
              <CheckRow label="Image Captured" note="Before and after frames stored" />
              <CheckRow label="Analysis Completed" note="CIEDE2000 comparison in LAB space" />
              <CheckRow label="Hash Generated" note={`SHA-256 · ${HASH_SHORT}`} />
              <CheckRow label="Record Sealed" note="Signed with officer key" />
            </div>
          </Card>
          <Card>
            <CardHead title="Frames" icon={Camera} />
            <div className="p-4 space-y-3">
              <PouchPhoto phase="before" height={118} />
              <PouchPhoto phase="after" height={118} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Inconclusive({ go, draft }) {
  return (
    <div className="space-y-5">
      <Stepper current={3} />
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <Card style={{ overflow: "hidden" }}>
            <div className="px-5 py-3 flex items-center justify-between" style={{ backgroundImage: "linear-gradient(90deg, #173F7A, #2755A3)", borderBottom: "1px solid #173F7A" }}>
              <span style={{ color: "rgba(255,255,255,.72)", fontSize: 11.5, fontWeight: 650, letterSpacing: ".14em" }}>
                PRESUMPTIVE RESULT
              </span>
              <span style={{ color: "rgba(255,255,255,.55)", fontSize: 11.5, fontFamily: MONO }}>{draft.id}</span>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex items-center justify-center rounded-lg shrink-0"
                  style={{ width: 52, height: 52, background: C.amberSoft, color: C.amber }}>
                  <CircleAlert size={26} />
                </span>
                <div>
                  <div style={{ color: C.amber, fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.15 }}>
                    ! INCONCLUSIVE
                  </div>
                  <div style={{ color: C.ink2, fontSize: 14, marginTop: 4 }}>
                    Colour difference exceeds the configured decision threshold.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Measured ΔE00</div>
                  <div style={{ color: C.amber, fontSize: 22, fontWeight: 700, fontFamily: MONO }}>12.6</div>
                </div>
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Threshold</div>
                  <div style={{ color: C.ink, fontSize: 22, fontWeight: 700, fontFamily: MONO }}>10.0</div>
                </div>
                <div className="rounded-md p-3.5" style={{ background: C.amberSoft, border: "1px solid #4A3410" }}>
                  <div style={{ color: C.amber, fontSize: 11, fontWeight: 650 }}>Status</div>
                  <div style={{ color: C.amber, fontSize: 13.5, fontWeight: 700, marginTop: 5 }}>Further verification required</div>
                </div>
              </div>

              <div className="mt-5">
                <Banner tone="warn" title="Recommended action"
                  body="Retake the evidence image if image-quality indicators are not satisfactory, or proceed according to approved testing procedures." />
              </div>

              <div className="mt-4"><Disclaimer /></div>

              <div className="flex flex-col sm:flex-row gap-2.5 mt-5">
                <Btn full size="lg" icon={Camera} onClick={() => go("capture")}>Return to Evidence</Btn>
                <Btn full size="lg" variant="outline" icon={Lock} onClick={() => go("record")}>View Evidence Record</Btn>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHead title="Evidence status" icon={ShieldCheck} />
            <div className="p-4">
              <CheckRow label="Image Captured" />
              <CheckRow label="Analysis Completed" />
              <CheckRow label="Hash Generated" note={`SHA-256 · ${HASH_SHORT}`} />
              <CheckRow ok={false} label="Result classification" note="Inconclusive — not eligible for presumptive match" />
            </div>
          </Card>
          <Card>
            <CardHead title="Compared colours" icon={Activity} />
            <div className="p-4 space-y-4">
              <Swatch hex="#5B3A2E" label="Captured Colour" sub="LAB 34.1 / 12.7 / 14.8" />
              <Swatch hex={REF_COLOUR} label="Reference Colour" sub="LAB 24.1 / 20.3 / −17.8" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  EVIDENCE RECORD  ───────────────────────────── */

function EvidenceRecord({ go, draft, outcome, openQR }) {
  const [verified, setVerified] = useState(false);
  const [mismatch, setMismatch] = useState(false);
  const om = OUTCOME_META[outcome];
  const rm = RESULT_META[outcome];
  const dE = om.dE.toFixed(1);
  const cls = rm.label;
  return (
    <div className="space-y-5">
      <Stepper current={4} />
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 space-y-5">
          <Card>
            <CardHead title="Secure Evidence Record" note={draft.id} icon={Lock}
              right={<Pill fg={C.green} bg={C.greenSoft} icon={ShieldCheck}>Sealed</Pill>} />
            <div className="p-4 space-y-5">
              <div>
                <div style={{ color: C.ink, fontSize: 13, fontWeight: 650, marginBottom: 10 }}>Case information</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <Field label="Case ID" value={draft.id} mono />
                  <Field label="Date" value={draft.date} />
                  <Field label="Time" value={draft.time} />
                  <Field label="Location" value={draft.location} />
                  <Field label="GPS (Demo Data)" value={`${GPS.lat} / ${GPS.lng}`} mono />
                  <Field label="Officer ID" value={OFFICER.id} mono />
                  <Field label="Unit" value={OFFICER.unit} />
                  <Field label="Device ID" value={OFFICER.device} mono />
                  <Field label="Test Pouch" value={draft.pouch} />
                </div>
              </div>

              <div style={{ borderTop: `1px solid ${C.border2}` }} className="pt-5">
                <div style={{ color: C.ink, fontSize: 13, fontWeight: 650, marginBottom: 10 }}>Evidence</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div style={{ color: C.muted, fontSize: 11.5, fontWeight: 600, marginBottom: 6 }}>Before Image</div>
                    <PouchPhoto phase="before" height={140} />
                  </div>
                  <div>
                    <div style={{ color: C.muted, fontSize: 11.5, fontWeight: 600, marginBottom: 6 }}>After Image</div>
                    <PouchPhoto phase="after" height={140} />
                  </div>
                </div>
              </div>

              <div style={{ borderTop: `1px solid ${C.border2}` }} className="pt-5">
                <div style={{ color: C.ink, fontSize: 13, fontWeight: 650, marginBottom: 10 }}>Analysis</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <Field label="Result" value={cls} />
                  <Field label="Substance classification" value={om.substance} />
                  <Field label="ΔE00" value={dE} mono />
                  <Field label="Threshold" value="10.0" mono />
                  <Field label="Colour Space" value="LAB" />
                  <Field label="Classifier" value="Nearest Centroid" />
                  <Field label="Reference Card" value="Detected" />
                  <Field label="Image Quality" value="Good" />
                </div>
              </div>

              <div style={{ borderTop: `1px solid ${C.border2}` }} className="pt-5">
                <div style={{ color: C.ink, fontSize: 13, fontWeight: 650, marginBottom: 10 }}>Security</div>
                <div className="rounded-md p-3.5" style={{ background: "#F3F7FC", border: `1px solid ${C.border2}` }}>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>SHA-256 Image Hash</div>
                  <div style={{ color: C.ink, fontSize: 12, fontFamily: MONO, marginTop: 4, wordBreak: "break-all", lineHeight: 1.6 }}>
                    {HASH_FULL}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Pill fg={C.navy} bg="#EAF0FA">{HASH_SHORT}</Pill>
                    <span style={{ color: C.muted, fontSize: 11.5 }}>Computed over the evidence bundle</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                  <Field label="Digital Signature" value="Verified" />
                  <Field label="Record Status" value="Sealed" />
                  <Field label="Timestamp" value="15 Sep 2026 · 09:42:31" />
                  <Field label="Tamper Status" value="Integrity Verified" />
                </div>
              </div>

              {verified && !mismatch && (
                <Banner tone="ok" title="Record integrity verified"
                  body="Recomputed hash matches the sealed hash. Digital signature and timestamp are intact." />
              )}
              {mismatch && (
                <Banner tone="danger" title="INTEGRITY CHECK FAILED"
                  body="The recomputed hash does not match the sealed record. Possible integrity mismatch detected. This is a demo state — review the evidence record before relying on it." />
              )}

              <div style={{ borderTop: `1px solid ${C.border2}` }} className="pt-5">
                <ChainOfCustody draft={draft} />
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <Btn size="lg" full variant="accent" icon={Fingerprint} onClick={() => { setVerified(true); setMismatch(false); }}>Recalculate / Verify Integrity</Btn>
                <Btn size="lg" full variant="outline" icon={QrCode} onClick={openQR}>QR Verification</Btn>
                <Btn size="lg" full variant="outline" icon={FileText} onClick={() => go("report")}>Generate Secure Report</Btn>
              </div>
              <button onClick={() => { setMismatch(true); setVerified(false); }}
                style={{ color: C.faint, fontSize: 11, textDecoration: "underline" }}>
                Simulate integrity mismatch (demo)
              </button>
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card>
            <CardHead title="QR Evidence Verification" icon={QrCode} />
            <div className="p-4 flex flex-col items-center">
              <div className="rounded-md p-3" style={{ border: `1px solid ${C.border}` }}>
                <QR size={150} seed={418} />
              </div>
              <div style={{ color: C.ink2, fontSize: 12.5, marginTop: 10, textAlign: "center" }}>
                Scan to Verify Evidence Record
              </div>
              <div style={{ color: C.faint, fontSize: 11, fontFamily: MONO, marginTop: 3 }}>{draft.id}</div>
              <Btn variant="outline" size="sm" full onClick={openQR} icon={ScanLine}>Open verification</Btn>
            </div>
          </Card>

          <Card>
            <CardHead title="Audit Trail" icon={Clock} />
            <div className="p-4">
              <AuditList items={AUDIT} />
            </div>
          </Card>
        </div>
      </div>
      <Disclaimer />
    </div>
  );
}

const CUSTODY_STEPS = [
  { e: "Case Created", t: "09:41:58" },
  { e: "Evidence Captured", t: "09:42:31" },
  { e: "Image Analysed", t: "09:42:38" },
  { e: "Result Classified", t: "09:42:40" },
  { e: "SHA-256 Hash Generated", t: "09:42:41" },
  { e: "Digital Record Sealed", t: "09:42:43" },
  { e: "Record Verified", t: "09:43:02" },
  { e: "Report Generated", t: "09:44:10" },
];

function ChainOfCustody({ draft }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: C.ink, fontSize: 13, fontWeight: 650 }}>Evidence Chain of Custody</span>
        <Pill fg={C.green} bg={C.greenSoft} dot>All steps completed</Pill>
      </div>
      <div>
        {CUSTODY_STEPS.map((s, i) => (
          <div key={s.e} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className="inline-flex items-center justify-center rounded-full shrink-0"
                style={{ width: 20, height: 20, background: C.greenSoft, color: C.green }}>
                <Check size={11} strokeWidth={3} />
              </span>
              {i < CUSTODY_STEPS.length - 1 && <span style={{ width: 1, flex: 1, background: C.border, minHeight: 28 }} />}
            </div>
            <div className="pb-4 flex-1 min-w-0">
              <div className="flex items-center justify-between flex-wrap gap-1.5">
                <span style={{ color: C.ink, fontSize: 12.5, fontWeight: 650 }}>{s.e}</span>
                <Pill fg={C.green} bg={C.greenSoft} icon={Check}>Complete</Pill>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1" style={{ color: C.faint, fontSize: 11, fontFamily: MONO }}>
                <span>{s.t}</span>
                <span>·</span>
                <span>Officer {OFFICER.id}</span>
                <span>·</span>
                <span>{OFFICER.device}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AuditList({ items }) {
  return (
    <div>
      {items.map((a, i) => (
        <div key={a.t} className="flex gap-3">
          <div className="flex flex-col items-center">
            <span className="rounded-full" style={{ width: 9, height: 9, background: C.saffron, marginTop: 5 }} />
            {i < items.length - 1 && <span style={{ width: 1, flex: 1, background: C.border, minHeight: 26 }} />}
          </div>
          <div className="pb-3.5">
            <div style={{ color: C.ink, fontSize: 12.5, fontWeight: 600 }}>{a.e}</div>
            <div style={{ color: C.faint, fontSize: 11.5, fontFamily: MONO, marginTop: 1 }}>{a.t}</div>
            {a.d && <div style={{ color: C.muted, fontSize: 11.5, marginTop: 2, lineHeight: 1.45 }}>{a.d}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────  QR VERIFICATION  ───────────────────────────── */

function QRVerify({ go, draft, back }) {
  const [state, setState] = useState("idle");
  const [step, setStep] = useState(0);
  const checks = [
    "Case ID Verified", "Hash Verified", "Digital Signature Verified", "Timestamp Verified", "Record Integrity Verified",
  ];
  useEffect(() => {
    if (state !== "scanning") return;
    if (step >= checks.length) { const t = setTimeout(() => setState("done"), 300); return () => clearTimeout(t); }
    const t = setTimeout(() => setStep(step + 1), 330);
    return () => clearTimeout(t);
  }, [state, step]);

  return (
    <div className="flex justify-center">
      <div className="w-full space-y-5" style={{ maxWidth: 560 }}>
        <Card>
          <CardHead title="QR Evidence Verification" note={draft.id} icon={QrCode} />
          <div className="p-6 flex flex-col items-center">
            {state === "done" ? (
              <>
                <span className="inline-flex items-center justify-center rounded-full"
                  style={{ width: 62, height: 62, background: C.greenSoft, color: C.green }}>
                  <ShieldCheck size={30} />
                </span>
                <div style={{ color: C.green, fontSize: 21, fontWeight: 700, marginTop: 14, letterSpacing: ".02em" }}>
                  RECORD VERIFIED
                </div>
                <div style={{ color: C.muted, fontSize: 12.5, marginTop: 4 }}>
                  Evidence Record Authenticity: <strong style={{ color: C.green }}>VERIFIED</strong>
                </div>
              </>
            ) : (
              <>
                <div className="rounded-md p-3" style={{ border: `1px solid ${C.border}` }}>
                  <QR size={168} seed={418} />
                </div>
                <div style={{ color: C.ink, fontSize: 14, fontWeight: 650, marginTop: 14 }}>Scan to Verify Evidence Record</div>
                <div style={{ color: C.muted, fontSize: 12, marginTop: 4, textAlign: "center", maxWidth: 340 }}>
                  The code carries the case ID, evidence hash and signature reference. Verification recomputes the hash and
                  checks the signature.
                </div>
              </>
            )}

            <div className="w-full mt-6">
              {checks.map((c, i) => (
                <CheckRow key={c} label={c} ok={state === "done" || i < step} pending={state !== "done" && i >= step} />
              ))}
            </div>

            <div className="w-full mt-4 grid grid-cols-2 gap-4 rounded-md p-3.5" style={{ background: "#F3F7FC", border: `1px solid ${C.border2}` }}>
              <Field label="Case ID" value={draft.id} mono />
              <Field label="Hash" value={HASH_SHORT} mono />
              <Field label="Signature" value={SIG} mono wide />
            </div>

            <div className="w-full mt-4">
              <Banner tone="info" title="Prototype verification demonstration"
                body="Integrity is established with a SHA-256 hash and a digital signature held by the issuing unit. No blockchain or distributed ledger is used in this prototype." />
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-2.5 mt-5">
              {state !== "done" ? (
                <Btn full size="lg" variant="accent" icon={ScanLine} onClick={() => { setState("scanning"); setStep(0); }}>
                  {state === "scanning" ? "Verifying…" : "Verify this record"}
                </Btn>
              ) : (
                <Btn full size="lg" variant="outline" icon={FileText} onClick={() => go("report")}>Generate Secure Report</Btn>
              )}
              <Btn full size="lg" variant="ghost" icon={ChevronLeft} onClick={back}>Back</Btn>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

/* ─────────────────────────────  SECURE REPORT  ───────────────────────────── */

function Report({ go, draft, outcome }) {
  const [gen, setGen] = useState(false);
  const om = OUTCOME_META[outcome];
  const rm = RESULT_META[outcome];
  const cls = rm.label;
  const dE = om.dE.toFixed(1);
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <SectionTitle sub="Preview of the sealed evidence document">Secure Digital Evidence Report</SectionTitle>
        <div className="flex gap-2 flex-wrap">
          <Btn variant="outline" icon={ChevronLeft} onClick={() => go("record")}>Back to Record</Btn>
          <Btn icon={gen ? Download : FileText} onClick={() => setGen(true)}>
            {gen ? "Report Generated" : "Generate Secure Report"}
          </Btn>
          {gen && <Btn variant="outline" icon={FileText} onClick={() => {}}>Print / Export Preview</Btn>}
        </div>
      </div>

      {gen && <Banner tone="ok" title="Secure report generated (prototype preview)" body="This preview represents the sealed report layout. Print / export in this prototype does not produce a real downloadable file." />}

      <div className="flex justify-center">
        <div className="w-full" style={{ maxWidth: 860 }}>
          <div className="rounded-lg overflow-hidden" style={{ background: C.surface, border: `1px solid ${C.border}` }}>
            {/* document header */}
            <div className="px-6 py-5 flex items-start justify-between gap-4" style={{ backgroundImage: "linear-gradient(120deg, #173F7A, #2755A3)" }}>
              <Wordmark mono size={34} sub="Digital Companion for Field Drug Testing" />
              <div className="text-right">
                <div style={{ color: "#fff", fontSize: 12.5, fontWeight: 700, letterSpacing: ".1em" }}>
                  SECURE DIGITAL EVIDENCE REPORT
                </div>
                <div style={{ color: "rgba(255,255,255,.55)", fontSize: 11, marginTop: 3, fontFamily: MONO }}>
                  {draft.id}
                </div>
              </div>
            </div>
            <TriLine h={3} />

            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-5" style={{ borderBottom: `1px solid ${C.border2}` }}>
                <Field label="Case ID" value={draft.id} mono />
                <Field label="Officer ID" value={OFFICER.id} mono />
                <Field label="Unit" value={OFFICER.unit} />
                <Field label="Date / Time" value={`${draft.date} · ${draft.time}`} />
                <Field label="GPS (Demo Data)" value={`${GPS.lat} / ${GPS.lng}`} mono />
                <Field label="Test Pouch" value={draft.pouch} />
                <Field label="Location" value={draft.location} />
                <Field label="Device ID" value={OFFICER.device} mono />
              </div>

              <div>
                <div style={{ color: C.ink, fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em", marginBottom: 12 }}>
                  EVIDENCE IMAGES
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div style={{ color: C.muted, fontSize: 11.5, fontWeight: 600, marginBottom: 6 }}>Before Reaction</div>
                    <PouchPhoto phase="before" height={150} />
                  </div>
                  <div>
                    <div style={{ color: C.muted, fontSize: 11.5, fontWeight: 600, marginBottom: 6 }}>After Reaction</div>
                    <PouchPhoto phase="after" height={150} />
                  </div>
                </div>
              </div>

              <div>
                <div style={{ color: C.ink, fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em", marginBottom: 12 }}>
                  ANALYSIS
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-md px-3.5 py-3"
                      style={{ background: rm.bg }}>
                      <span style={{ color: C.ink2, fontSize: 12.5, fontWeight: 600 }}>Analysis Result</span>
                      <span style={{ color: rm.fg, fontSize: 13.5, fontWeight: 700 }}>{cls}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="ΔE00" value={dE} mono />
                      <Field label="Threshold" value="10.0" mono />
                      <Field label="Colour Space" value="LAB" />
                      <Field label="Comparison" value="CIEDE2000" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Swatch hex={om.capHex} label="Captured Colour" sub={om.capHex} />
                    <Swatch hex={REF_COLOUR} label="Reference Colour" sub="#32204A" />
                  </div>
                </div>
              </div>

              <div>
                <div style={{ color: C.ink, fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em", marginBottom: 12 }}>
                  CHAIN OF CUSTODY
                </div>
                <ChainOfCustody draft={draft} />
              </div>

              <div>
                <div style={{ color: C.ink, fontSize: 12.5, fontWeight: 700, letterSpacing: ".08em", marginBottom: 12 }}>
                  INTEGRITY
                </div>
                <div className="grid sm:grid-cols-3 gap-5 items-start">
                  <div className="sm:col-span-2 space-y-3">
                    <div className="rounded-md p-3.5" style={{ background: "#F3F7FC", border: `1px solid ${C.border2}` }}>
                      <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>SHA-256 Image Hash</div>
                      <div style={{ color: C.ink, fontSize: 11.5, fontFamily: MONO, marginTop: 4, wordBreak: "break-all", lineHeight: 1.6 }}>
                        {HASH_FULL}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="Digital Signature" value={SIG} mono />
                      <Field label="Verification Status" value="Verified · Sealed" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <QR size={116} seed={418} />
                    <div style={{ color: C.ink2, fontSize: 11, fontWeight: 700, letterSpacing: ".1em", marginTop: 8 }}>QR VERIFY</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4" style={{ background: "#F3F7FC", borderTop: `1px solid ${C.border}` }}>
              <div style={{ color: "#6B4A0C", fontSize: 11.5, fontWeight: 700 }}>
                Presumptive field-test result only. Laboratory confirmation is required.
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
                <span style={{ color: C.muted, fontSize: 11 }}>
                  Generated by NarcoLocker on {OFFICER.device} · {draft.date} · {draft.time}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────  CASES  ───────────────────────────── */

const FILTERS = ["All", "Presumptive Match", "Inconclusive", "No Match", "Verified", "Pending Sync"];
const SORTS = ["Newest", "Oldest", "Result", "Location"];

function CasesScreen({ cases, openCase, go, net, officer = OFFICER }) {
  const [q, setQ] = useState("");
  const [f, setF] = useState("All");
  const [sort, setSort] = useState("Newest");

  let list = cases.filter((c) => {
    const hit = `${c.id} ${c.area} ${c.loc} ${c.officerId || officer.id} ${c.substance || ""}`.toLowerCase().includes(q.toLowerCase());
    const pass =
      f === "All" ? true :
      f === "Presumptive Match" ? c.result === "match" :
      f === "Inconclusive" ? c.result === "inconclusive" :
      f === "No Match" ? c.result === "none" :
      f === "Verified" ? c.verified : !c.synced;
    return hit && pass;
  });
  if (sort === "Oldest") list = [...list].reverse();
  if (sort === "Result") list = [...list].sort((a, b) => a.result.localeCompare(b.result));
  if (sort === "Location") list = [...list].sort((a, b) => a.area.localeCompare(b.area));

  return (
    <div className="space-y-5">
      <SectionTitle sub={`${cases.length} records on this device · ${officer?.unit || OFFICER.unit}`}
        right={<Btn icon={PlusCircle} onClick={() => go("newcase")}>New Case</Btn>}>
        Evidence Cases
      </SectionTitle>

      {net === "offline" && (
        <Banner tone="warn" title="OFFLINE MODE"
          body="New evidence will remain securely stored on this device until sync is restored. 3 records pending sync." />
      )}

      <Card>
        <div className="p-4 space-y-3" style={{ borderBottom: `1px solid ${C.border2}` }}>
          <Input value={q} onChange={setQ} icon={Search} placeholder="Search Case ID, Officer ID, Location…" />
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((x) => (
              <button key={x} onClick={() => setF(x)} className="rounded-md px-3"
                style={{
                  height: 30, fontSize: 12, fontWeight: 600,
                  border: `1px solid ${f === x ? "#2755A3" : C.border}`,
                  background: f === x ? GRAD : C.navy3, color: f === x ? "#fff" : C.ink2,
                }}>
                {x}
              </button>
            ))}
            <span className="ml-auto flex items-center gap-2">
              <span style={{ color: C.faint, fontSize: 11.5 }}>Sort</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)} className="rounded-md px-2 outline-none"
                style={{ height: 30, fontSize: 12, border: `1px solid ${C.border}`, color: C.ink2, background: C.navy3 }}>
                {SORTS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </span>
          </div>
        </div>

        {list.length === 0 ? (
          <EmptyState
            title={q ? "No Matching Records" : "No Evidence Cases Found"}
            body={q ? "Check the case ID, officer ID or location and try again." : "Create a new case to begin digital evidence capture."}
            action={q ? null : <Btn icon={PlusCircle} onClick={() => go("newcase")}>Create New Case</Btn>}
          />
        ) : list.map((c) => <CaseRow key={c.id} c={c} onClick={() => openCase(c)} />)}
      </Card>
    </div>
  );
}

function EmptyState({ title, body, action, icon: Icon = FolderClosed }) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-14">
      <span className="inline-flex items-center justify-center rounded-lg"
        style={{ width: 46, height: 46, background: "#F3F7FC", color: C.faint }}>
        <Icon size={21} />
      </span>
      <div style={{ color: C.ink, fontSize: 15, fontWeight: 650, marginTop: 14 }}>{title}</div>
      <div style={{ color: C.muted, fontSize: 12.5, marginTop: 5, maxWidth: 320, lineHeight: 1.55 }}>{body}</div>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

/* ─────────────────────────────  CASE DETAIL  ───────────────────────────── */

const TABS = ["Case Details", "Evidence", "Analysis", "Security", "Audit Trail"];

const CASE_TIMELINE_STEPS = ["Created", "Evidence Captured", "Image Analysed", "Result Classified", "Verified", "Report Generated"];
const CASE_TIMELINE_TIMES = ["09:41:58", "09:42:31", "09:42:38", "09:42:40", "09:43:02", "09:44:10"];

function CaseTimeline({ c }) {
  const n = CASE_TIMELINE_STEPS.length;
  const doneCount = c.verified ? n : 4;
  const colPct = 100 / n;
  const centerOffset = colPct / 2;
  const spanPct = 100 - centerOffset * 2;
  const progressPct = spanPct * ((doneCount - 1) / (n - 1));

  return (
    <Card className="p-4 lg:p-5">
      <div className="flex items-center justify-between mb-5 flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Clock size={15} style={{ color: C.navy }} />
          <span style={{ color: C.ink2, fontWeight: 650, fontSize: 13.5 }}>Case Status Timeline</span>
        </div>
        <Pill fg={c.verified ? C.green : C.amber} bg={c.verified ? C.greenSoft : C.amberSoft} dot>
          {c.verified ? "Complete" : "In Progress"}
        </Pill>
      </div>
      <div className="relative">
        <div className="absolute rounded-full" style={{ top: 13, left: `${centerOffset}%`, width: `${spanPct}%`, height: 2, background: C.border2 }} />
        <div className="absolute rounded-full" style={{ top: 13, left: `${centerOffset}%`, width: `${progressPct}%`, height: 2, background: C.green, transition: "width .3s ease" }} />
        <div className="grid relative" style={{ gridTemplateColumns: `repeat(${n}, 1fr)` }}>
          {CASE_TIMELINE_STEPS.map((label, i) => {
            const done = i < doneCount;
            const current = i === doneCount;
            return (
              <div key={label} className="flex flex-col items-center">
                <span className="inline-flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: 26, height: 26,
                    background: done ? C.green : current ? "#fff" : "#EEF1F5",
                    color: done ? "#fff" : current ? C.saffron : C.faint,
                    border: current ? `2px solid ${C.saffron}` : done ? "none" : `1px solid ${C.border}`,
                  }}>
                  {done
                    ? <Check size={13} strokeWidth={3} />
                    : current
                      ? <span className="rounded-full" style={{ width: 7, height: 7, background: C.saffron }} />
                      : <Clock size={11} />}
                </span>
                <div style={{ color: done || current ? C.ink : C.faint, fontSize: 11, fontWeight: done || current ? 650 : 500, textAlign: "center", marginTop: 7, lineHeight: 1.3 }}>
                  {label}
                </div>
                <div style={{ color: C.faint, fontSize: 10, fontFamily: MONO, marginTop: 2 }}>
                  {done ? CASE_TIMELINE_TIMES[i] : current ? "In progress" : "Pending"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

function EvidenceMetadataCard({ c }) {
  const [reveal, setReveal] = useState(false);
  return (
    <Card>
      <CardHead title="Evidence Metadata" icon={Fingerprint}
        right={<Pill fg={C.green} bg={C.greenSoft} icon={ShieldCheck}>Protected</Pill>} />
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <Field label="Capture Time" value={`${c.date} · ${c.time}:12`} />
          <Field label="GPS Location" value={`${GPS.lat} / ${GPS.lng}`} mono />
          <Field label="Evidence Status" value={c.verified ? "Verified" : "Pending Verification"} />
          <Field label="Officer ID" value={reveal ? OFFICER.id : `${OFFICER.id.slice(0, 3)}-••••`} mono />
          <Field label="Device ID" value={reveal ? OFFICER.device : `••••••${OFFICER.device.slice(-4)}`} mono />
          <Field label="Sync State" value={c.synced ? "Synced" : "Pending Sync"} />
        </div>
        <div className="rounded-md p-3.5" style={{ background: "#F3F7FC", border: `1px solid ${C.border2}` }}>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Image Hash (SHA-256)</div>
            <button onClick={() => setReveal((r) => !r)} className="flex items-center gap-1.5"
              style={{ color: C.navy, fontSize: 11.5, fontWeight: 600 }}>
              {reveal ? <EyeOff size={12} /> : <Eye size={12} />} {reveal ? "Hide officer & hash detail" : "Reveal officer & hash detail"}
            </button>
          </div>
          <div style={{ color: C.ink, fontSize: 11.5, fontFamily: MONO, marginTop: 4, wordBreak: "break-all", lineHeight: 1.6 }}>
            {reveal ? HASH_FULL : `${HASH_FULL.slice(0, 8)}${"•".repeat(24)}${HASH_FULL.slice(-6)}`}
          </div>
        </div>
      </div>
    </Card>
  );
}

function CaseDetail({ c, go, back, openQR }) {
  const [tab, setTab] = useState("Case Details");
  const m = RESULT_META[c.result];
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <button onClick={back} className="flex items-center gap-1.5 mb-2" style={{ color: C.navy, fontSize: 12.5, fontWeight: 600 }}>
            <ChevronLeft size={14} /> All cases
          </button>
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 style={{ color: C.ink, fontSize: 20, fontWeight: 700, fontFamily: MONO }}>{c.id}</h1>
            {c.verified
              ? <Pill fg={C.green} bg={C.greenSoft} icon={ShieldCheck}>CASE VERIFIED</Pill>
              : <Pill fg={C.amber} bg={C.amberSoft} icon={Clock}>Pending Verification</Pill>}
            <Pill fg={m.fg} bg={m.bg} icon={m.Icon}>{m.label}</Pill>
            {!c.synced && <Pill fg={C.navy} bg="#EAF0FA" icon={RefreshCw}>Pending Sync</Pill>}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Btn variant="accent" icon={Fingerprint} onClick={openQR}>Verify Evidence</Btn>
          <Btn variant="outline" icon={Clock} onClick={() => setTab("Audit Trail")}>View Audit Trail</Btn>
          <Btn icon={FileText} onClick={() => go("report")}>Generate Report</Btn>
        </div>
      </div>

      <CaseTimeline c={c} />

      <Card>
        <div className="flex overflow-x-auto" style={{ borderBottom: `1px solid ${C.border2}` }}>
          {TABS.map((t) => (
            <button key={t} onClick={() => setTab(t)} className="px-4 py-3 whitespace-nowrap"
              style={{
                fontSize: 13, fontWeight: tab === t ? 650 : 500,
                color: tab === t ? C.navy : C.muted,
                borderBottom: `2px solid ${tab === t ? "#FF9933" : "transparent"}`,
              }}>
              {t}
            </button>
          ))}
        </div>

        <div className="p-4">
          {tab === "Case Details" && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Field label="Case ID" value={c.id} mono />
              <Field label="Date" value={c.date} />
              <Field label="Time" value={c.time} />
              <Field label="Status" value={c.verified ? "Verified Record" : "Pending Verification"} />
              <Field label="Location" value={c.area} />
              <Field label="Unit" value={c.loc} />
              <Field label="GPS (Demo Data)" value={`${GPS.lat} / ${GPS.lng}`} mono />
              <Field label="Test Pouch" value={c.pouch || "Marquis reagent pouch"} />
              <Field label="Officer" value={c.officerName || (c.officerId && DataService.getOfficerById(c.officerId)?.name) || OFFICER.name} />
              <Field label="Officer ID" value={c.officerId || OFFICER.id} mono />
              <Field label="Device ID" value={c.device || (c.officerId && DataService.getOfficerById(c.officerId)?.device) || OFFICER.device} mono />
              <Field label="Timestamp" value={`${c.date} · ${c.time}:31`} />
            </div>
          )}

          {tab === "Evidence" && (
            <div className="space-y-4">
              <EvidenceMetadataCard c={c} />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <div style={{ color: C.muted, fontSize: 11.5, fontWeight: 600, marginBottom: 6 }}>Before Image</div>
                  <PouchPhoto phase="before" height={180} stamp={`${c.date} · ${c.time}:12`} />
                </div>
                <div>
                  <div style={{ color: C.muted, fontSize: 11.5, fontWeight: 600, marginBottom: 6 }}>After Image</div>
                  <PouchPhoto phase="after" height={180} stamp={`${c.date} · ${c.time}:31`} />
                </div>
              </div>
            </div>
          )}

          {tab === "Analysis" && (
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>ΔE00</div>
                  <div style={{ color: C.ink, fontSize: 22, fontWeight: 700, fontFamily: MONO }}>{c.dE.toFixed(1)}</div>
                </div>
                <div className="rounded-md p-3.5" style={{ border: `1px solid ${C.border}` }}>
                  <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Threshold</div>
                  <div style={{ color: C.ink, fontSize: 22, fontWeight: 700, fontFamily: MONO }}>10.0</div>
                </div>
                <div className="rounded-md p-3.5" style={{ background: m.bg }}>
                  <div style={{ color: m.fg, fontSize: 11, fontWeight: 650 }}>Classification</div>
                  <div style={{ color: m.fg, fontSize: 13.5, fontWeight: 700, marginTop: 5 }}>{m.label}</div>
                </div>
              </div>
              <Meter value={c.dE} threshold={10} />
              <div className="grid sm:grid-cols-4 gap-4">
                <Field label="Substance classification" value={c.substance} />
                <Field label="Colour Space" value="LAB" />
                <Field label="Comparison" value="CIEDE2000" />
                <Field label="Classifier" value="Nearest Centroid" />
              </div>
              <Disclaimer />
            </div>
          )}

          {tab === "Security" && (
            <div className="space-y-4">
              <div className="rounded-md p-3.5" style={{ background: "#F3F7FC", border: `1px solid ${C.border2}` }}>
                <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>SHA-256 Image Hash</div>
                <div style={{ color: C.ink, fontSize: 11.5, fontFamily: MONO, marginTop: 4, wordBreak: "break-all", lineHeight: 1.6 }}>
                  {HASH_FULL}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Field label="Digital Signature" value="Verified" />
                <Field label="Record Integrity" value="Integrity Verified" />
                <Field label="Record Status" value="Sealed" />
                <Field label="Sync" value={c.synced ? "Synced" : "Pending Sync"} />
              </div>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <Btn variant="outline" full icon={QrCode} onClick={openQR}>QR Verification</Btn>
                <Btn full variant="accent" icon={Fingerprint} onClick={openQR}>Verify Evidence</Btn>
              </div>
            </div>
          )}

          {tab === "Audit Trail" && <ChainOfCustody draft={c} />}
        </div>
      </Card>
    </div>
  );
}

/* ─────────────────────────────  SECURITY CENTER  ───────────────────────────── */

function SecurityCenter({ net, setNet, lastSync }) {
  const [syncFailed, setSyncFailed] = useState(false);
  const cards = [
    ["Device Security", "Verified", ShieldCheck],
    ["Data Encryption", "Enabled", Lock],
    ["Evidence Hashing", "SHA-256", Fingerprint],
    ["Digital Signature", "Active", KeyRound],
    ["Offline Storage", "Enabled", HardDrive],
    ["Sync Status", net === "offline" ? "Offline" : net === "syncing" ? "Syncing" : "Synced", RefreshCw],
  ];
  return (
    <div className="space-y-5">
      <SectionTitle sub={`Device ${OFFICER.device} · ${OFFICER.unit}`}>Security Center</SectionTitle>

      <Card className="p-5" style={{ backgroundImage: "linear-gradient(135deg, #2755A3 0%, #173F7A 100%)", border: "1px solid #173F7A", boxShadow: "0 8px 24px rgba(23,63,122,.22)" }}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="inline-flex items-center justify-center rounded-lg"
              style={{ width: 46, height: 46, background: "rgba(255,255,255,.1)", color: "#138808" }}>
              <ShieldCheck size={23} />
            </span>
            <div>
              <div style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>System Security: Secure</div>
              <div style={{ color: "rgba(255,255,255,.6)", fontSize: 12.5, marginTop: 2 }}>
                Last Security Check: Today · 09:45
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Pill fg="#138808" bg="rgba(255,255,255,.08)" dot>All controls active</Pill>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        {cards.map(([t, v, I]) => (
          <Card key={t} className="p-4">
            <div className="flex items-center justify-between">
              <I size={17} style={{ color: C.navy }} />
              <Check size={14} style={{ color: C.green }} />
            </div>
            <div style={{ color: C.muted, fontSize: 12, marginTop: 10 }}>{t}</div>
            <div style={{ color: C.ink, fontSize: 15, fontWeight: 650, marginTop: 2 }}>{v}</div>
          </Card>
        ))}
      </div>

      <Card className="p-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div>
            <div style={{ color: C.ink, fontSize: 13.5, fontWeight: 650 }}>Security Health: 98%</div>
            <div style={{ color: C.muted, fontSize: 11.5, marginTop: 2 }}>Prototype Security Health Indicator</div>
          </div>
          <div className="rounded-full flex-1" style={{ height: 8, background: C.border2, maxWidth: 220, minWidth: 120 }}>
            <div style={{ width: "98%", height: "100%", background: C.green, borderRadius: 99 }} />
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-2 gap-5">
        <Card>
          <CardHead title="Tamper Detection" icon={ShieldAlert}
            right={<Pill fg={C.green} bg={C.greenSoft} dot>Clear</Pill>} />
          <div className="p-4 space-y-3">
            <Banner tone="ok" title="No integrity issues detected"
              body="All sealed records on this device match their stored hashes. Signature chain is intact." />
            <div className="grid grid-cols-3 gap-4">
              <Field label="Records checked" value="417" mono />
              <Field label="Hash mismatches" value="0" mono />
              <Field label="Signature errors" value="0" mono />
            </div>
          </div>
        </Card>

        <Card>
          <CardHead title="Offline & sync" icon={net === "offline" ? WifiOff : Wifi}
            right={<Pill fg={syncFailed ? C.red : net === "offline" ? C.amber : C.green} bg={syncFailed ? C.redSoft : net === "offline" ? C.amberSoft : C.greenSoft} dot>
              {syncFailed ? "Sync Failed" : net === "offline" ? "Offline Mode Ready" : net === "syncing" ? "Syncing Secure Records…" : "All Records Synced"}
            </Pill>} />
          <div className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Last successful sync" value={net === "syncing" ? "in progress" : `Today · ${lastSync}`} />
              <Field label="Pending uploads" value={net === "offline" ? "3 records" : "0 records"} />
              <Field label="Device storage" value="Encrypted · 2.4 GB free" />
              <Field label="Transport" value="TLS 1.3 · mutual auth" />
            </div>
            <div className="flex gap-2.5">
              <Btn variant="outline" full icon={WifiOff} onClick={() => { setNet("offline"); setSyncFailed(false); }}>Simulate Offline</Btn>
              <Btn full icon={RefreshCw} onClick={() => { setNet("syncing"); setSyncFailed(false); }}>Sync Now</Btn>
            </div>
            {net === "offline" && !syncFailed && (
              <Banner tone="warn" title="OFFLINE MODE"
                body="New evidence will remain securely stored on this device until sync is restored. 3 records pending sync." />
            )}
            {syncFailed && (
              <Banner tone="danger" title="SYNC FAILED — RETRY"
                body="The last sync attempt could not reach the range evidence server. Records remain safely queued on this device." />
            )}
            <button onClick={() => setSyncFailed(true)} style={{ color: C.faint, fontSize: 11, textDecoration: "underline" }}>
              Simulate sync failure (demo)
            </button>
          </div>
        </Card>
      </div>

      <Card>
        <CardHead title="Security Audit Trail" note="Case NCB/TN/2026/00417" icon={Clock} />
        <div className="p-4"><ChainOfCustody draft={{ id: "NCB/TN/2026/00417" }} /></div>
      </Card>

      <Card>
        <CardHead title="Privacy controls" icon={Lock} />
        <div className="p-4 grid sm:grid-cols-2 gap-x-6">
          <CheckRow label="Officer identity linked securely to each record" note="Identity is referenced by ID, not by personal details" />
          <CheckRow label="Evidence images protected" note="Encrypted at rest on the device" />
          <CheckRow label="Cryptographic integrity verification" note="SHA-256 hash and digital signature per record" />
          <CheckRow label="Audit trail maintained" note="Every record action is time-stamped" />
        </div>
      </Card>
    </div>
  );
}

/* ─────────────────────────────  PROFILE  ───────────────────────────── */

function Profile({ onSignOut, net, lastSync, officer = OFFICER }) {
  const settings = [
    ["Notification Preferences", Bell, "Sync alerts, verification reminders"],
    ["Security Settings", ShieldCheck, "Device lock, signature key, session policy"],
    ["Offline Storage", HardDrive, "Retention window and encrypted cache"],
    ["Sync Settings", RefreshCw, "Network conditions and upload schedule"],
    ["About NarcoLocker", Info, "Version 1.0 · Digital Evidence Companion"],
  ];

  const initials = (officer?.name || "AS").split(" ").filter(Boolean).slice(-2).map((w) => w[0]).join("").toUpperCase();
  const caseCount = DataService.getOfficerCases(officer?.id || OFFICER.id).length;

  const handleSignOut = () => {
    DataService.addActivity({
      officerId: officer.id,
      action: "Logout",
      caseId: null,
      timestamp: "Just now",
      details: `${officer.name} signed out from ${officer.device}`,
    });
    DataService.addAuditLog({
      actorId: officer.id,
      role: "Officer",
      action: "Officer logout",
      caseId: null,
      officerId: officer.id,
      status: "Success",
      details: `Session ended on device ${officer.device}`,
    });
    onSignOut();
  };

  return (
    <div className="space-y-5">
      <SectionTitle sub="Account, device and security status">Officer Profile</SectionTitle>

      <Card className="p-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="rounded-lg inline-flex items-center justify-center shrink-0"
            style={{ width: 62, height: 62, background: C.navy, color: "#fff", fontSize: 21, fontWeight: 700 }}>
            {initials}
          </span>
          <div className="flex-1">
            <div style={{ color: C.ink, fontSize: 19, fontWeight: 700 }}>{officer?.name || OFFICER.name}</div>
            <div style={{ color: C.muted, fontSize: 13, marginTop: 2 }}>{officer?.unit || OFFICER.unit}</div>
            <div className="flex flex-wrap gap-2 mt-3">
              <Pill fg={C.green} bg={C.greenSoft} icon={ShieldCheck}>Secure Device</Pill>
              <Pill fg={C.green} bg={C.greenSoft} icon={Lock}>Encrypted Data</Pill>
              <Pill fg={C.green} bg={C.greenSoft} icon={Fingerprint}>
                {officer?.status === "Active" ? "Active Officer" : "Inactive"}
              </Pill>
            </div>
          </div>
          <Logo size={40} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 pt-5" style={{ borderTop: `1px solid ${C.border2}` }}>
          <Field label="Police ID" value={officer?.id || OFFICER.id} mono />
          <Field label="Unit" value={officer?.unit || OFFICER.unit} />
          <Field label="Device" value={officer?.device || OFFICER.device} mono />
          <Field label="Account Status" value={officer?.status || "Active"} />
          <Field label="Device Status" value="Secure" />
          <Field label="Sync" value={net === "offline" ? "Pending" : "100% Synced"} />
          <Field label="Last sync" value={net === "syncing" ? "in progress" : `Today · ${lastSync}`} />
          <Field label="Cases recorded" value={String(caseCount)} mono />
        </div>
      </Card>

      <Card>
        <CardHead title="Settings" icon={Settings} />
        {settings.map(([t, I, d], i) => (
          <div key={t} className="flex items-center gap-3 px-4 py-3.5"
            style={{ borderBottom: i < settings.length - 1 ? `1px solid ${C.border2}` : "none", cursor: "pointer" }}>
            <span className="inline-flex items-center justify-center rounded-md"
              style={{ width: 32, height: 32, background: "#F3F7FC", color: C.navy }}><I size={15} /></span>
            <div className="flex-1 min-w-0">
              <div style={{ color: C.ink, fontSize: 13.5, fontWeight: 600 }}>{t}</div>
              <div style={{ color: C.muted, fontSize: 11.5 }}>{d}</div>
            </div>
            <ChevronRight size={16} style={{ color: C.faint }} />
          </div>
        ))}
      </Card>

      <div className="flex flex-col sm:flex-row items-center justify-end gap-3">
        <Btn variant="danger" icon={LogOut} onClick={handleSignOut}>Sign Out</Btn>
      </div>
    </div>
  );
}

/* ─────────────────────────────  ADMIN SHELL  ───────────────────────────── */

const NAV_ADMIN = [
  { k: "admindash", label: "Dashboard", icon: Home },
  { k: "admincases", label: "Cases", icon: FolderClosed },
  { k: "adminofficers", label: "Officers", icon: Users },
  { k: "adminsecurity", label: "Security", icon: ShieldCheck },
  { k: "adminreports", label: "Reports", icon: FileText },
];

function adminTitleFor(s) {
  return {
    admindash: "Admin Dashboard", admincases: "Case Monitoring", admincasedetail: "Case Details",
    adminofficers: "Officer Management", adminofficerdetail: "Officer Profile",
    adminsecurity: "Security & Audit", adminreports: "Reports",
  }[s] || "Admin Dashboard";
}

function AdminShell({ screen, go, onLogout, children }) {
  const active = (k) => k === screen || (k === "admincases" && screen === "admincasedetail") || (k === "adminofficers" && screen === "adminofficerdetail");

  return (
    <div className="min-h-screen" style={{ background: C.bg, fontFamily: FONT }}>
      <style>{NL_CSS}</style>
      {/* sidebar */}
      <aside className="hidden lg:flex fixed inset-y-0 left-0 flex-col justify-between"
        style={{ width: 246, background: C.navy, top: 62 }}>
        <div>
          <div className="px-4 pt-4">
            <Pill fg="rgba(255,255,255,.85)" bg="rgba(255,255,255,.1)" icon={ShieldCheck}>Admin Console</Pill>
          </div>
          <nav className="p-3 space-y-1 mt-2">
            {NAV_ADMIN.map((n) => {
              const on = active(n.k);
              return (
                <button key={n.k} onClick={() => go(n.k)}
                  className="w-full flex items-center gap-2.5 rounded-md px-3 relative"
                  style={{
                    height: 40, fontSize: 13.5, fontWeight: on ? 650 : 500,
                    color: on ? "#fff" : "rgba(255,255,255,.65)",
                    background: on ? "rgba(255,255,255,.14)" : "transparent",
                  }}>
                  {on && <span className="absolute rounded-full" style={{ left: 0, top: 9, bottom: 9, width: 3, background: C.saffron }} />}
                  <n.icon size={17} style={{ color: on ? "#fff" : "inherit" }} /> {n.label}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="p-3">
          <div className="rounded-md p-3" style={{ background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.14)" }}>
            <div className="flex items-center gap-2">
              <span className="rounded-full inline-flex items-center justify-center"
                style={{ width: 30, height: 30, background: C.saffron, color: "#173F7A", fontSize: 11.5, fontWeight: 700 }}>RM</span>
              <div className="min-w-0">
                <div style={{ color: "#fff", fontSize: 12.5, fontWeight: 600 }} className="truncate">{ADMIN.name}</div>
                <div style={{ color: "rgba(255,255,255,.6)", fontSize: 11, fontFamily: MONO }}>{ADMIN.id}</div>
              </div>
            </div>
            <button onClick={onLogout} className="flex items-center gap-1.5 mt-3"
              style={{ color: "rgba(255,255,255,.75)", fontSize: 11.5 }}>
              <LogOut size={12} /> Logout
            </button>
          </div>
        </div>
      </aside>

      {/* top header */}
      <header className="fixed top-0 inset-x-0 z-30" style={{ background: C.navy }}>
        <div className="flex items-center justify-between px-4 lg:px-6" style={{ height: 62 }}>
          <div className="flex items-center gap-3">
            <Wordmark mono size={30} />
          </div>
          <div className="hidden lg:flex flex-col items-start" style={{ marginLeft: 8 }}>
            <div style={{ color: "#fff", fontSize: 13.5, fontWeight: 650 }}>{adminTitleFor(screen)}</div>
            <div style={{ color: "rgba(255,255,255,.55)", fontSize: 11 }}>Admin Console · Chennai Central Range</div>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Pill fg="rgba(255,255,255,.85)" bg="rgba(255,255,255,.12)" icon={ShieldCheck}>Admin</Pill>
            <button className="rounded-full inline-flex items-center justify-center"
              style={{ width: 34, height: 34, background: C.saffron, color: "#173F7A", fontWeight: 700, fontSize: 12 }}>
              RM
            </button>
            <button onClick={onLogout} className="hidden sm:flex items-center gap-1.5 rounded-md px-2.5"
              style={{ height: 30, fontSize: 11.5, fontWeight: 600, color: "#fff", background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.18)" }}>
              <LogOut size={13} /> Logout
            </button>
          </div>
        </div>
        <TriLine h={3} />
      </header>

      <main className="lg:pl-[246px] pb-24 lg:pb-10" style={{ paddingTop: 65 }}>
        <div key={screen} className="mx-auto px-4 lg:px-7 py-5 lg:py-7 nl-page" style={{ maxWidth: 1180 }}>{children}</div>
      </main>

      {/* bottom nav */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-20 flex items-stretch"
        style={{ height: 66, background: "#fff", borderTop: `1px solid ${C.border}` }}>
        {NAV_ADMIN.map((n) => {
          const on = active(n.k);
          return (
            <button key={n.k} onClick={() => go(n.k)} className="flex-1 flex flex-col items-center justify-center gap-1 relative"
              style={{ color: on ? C.navy : C.faint }}>
              {on && <span className="absolute rounded-full" style={{ top: 0, left: "28%", right: "28%", height: 3, background: C.saffron }} />}
              <n.icon size={19} />
              <span style={{ fontSize: 10, fontWeight: on ? 650 : 500 }}>{n.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

/* ─────────────────────────────  ADMIN DASHBOARD  ───────────────────────────── */

function AdminDashboard({ go, cases, openCase }) {
  const stats = DataService.getSystemStats();
  const total = stats.total;
  const positive = stats.positive;
  const negative = stats.negative;
  const inconclusive = stats.inconclusive;
  const activeOfficers = stats.activeOfficers;

  const quick = [
    { label: "Officer Management", sub: "View, filter and inspect officer profiles", icon: Users, go: "adminofficers" },
    { label: "Case Monitoring", sub: "Search, filter and open case records", icon: FolderClosed, go: "admincases" },
    { label: "Security & Audit", sub: "Login activity, audit logs and hash verification", icon: ShieldCheck, go: "adminsecurity" },
    { label: "Reports", sub: "Case reports for review and export", icon: FileText, go: "adminreports" },
  ];

  return (
    <div className="space-y-6">
      <Card className="p-5 lg:p-6" style={{ backgroundImage: "linear-gradient(135deg, #2755A3 0%, #173F7A 100%)", border: "1px solid #173F7A", boxShadow: "0 8px 24px rgba(23,63,122,.22)", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: 220, height: "100%", opacity: 0.1 }}>
          <TriCurves corner="br" />
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 relative">
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <Pill fg="#138808" bg="rgba(255,255,255,.1)" icon={ShieldCheck}>Admin Console · Secure</Pill>
              <Pill fg="rgba(255,255,255,.72)" bg="rgba(255,255,255,.1)" icon={MapPin}>{ADMIN.unit}</Pill>
            </div>
            <div style={{ color: "#fff", fontSize: 24, fontWeight: 700, letterSpacing: "-0.02em", marginTop: 12, lineHeight: 1.2 }}>
              Welcome back, {ADMIN.name}
            </div>
            <div style={{ color: "rgba(255,255,255,.6)", fontSize: 12.5, marginTop: 6 }}>{ADMIN.role} · {ADMIN.id}</div>
          </div>
        </div>
      </Card>

      <div>
        <SectionTitle sub="Range-wide evidence records">Case overview</SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          <StatTile label="Total Cases" value={total} tone={C.navy} />
          <StatTile label="Positive Cases" value={positive} tone={C.green} />
          <StatTile label="Negative Cases" value={negative} tone={C.muted} />
          <StatTile label="Inconclusive" value={inconclusive} tone={C.amber} />
          <StatTile label="Active Officers" value={activeOfficers} tone={C.navy2} />
        </div>
      </div>

      <div>
        <SectionTitle sub="Administrative sections">Quick access</SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {quick.map((a) => (
            <Card key={a.label} onClick={() => go(a.go)} className="p-4 cursor-pointer hover:border-slate-300 transition-colors">
              <span className="inline-flex items-center justify-center rounded-md"
                style={{ width: 36, height: 36, background: C.navy3, color: C.navy }}>
                <a.icon size={18} />
              </span>
              <div style={{ color: C.ink, fontSize: 13.5, fontWeight: 650, marginTop: 11 }}>{a.label}</div>
              <div style={{ color: C.muted, fontSize: 11.5, marginTop: 2 }}>{a.sub}</div>
            </Card>
          ))}
        </div>
      </div>

      <Card>
        <CardHead title="Recent cases" note={`${cases.length} range-wide`} icon={FolderClosed}
          right={<Btn variant="ghost" size="sm" onClick={() => go("admincases")} iconRight={ChevronRight}>View All Cases</Btn>} />
        {cases.slice(0, 5).map((c) => (
          <CaseRow key={c.id} c={c} onClick={() => openCase ? openCase(c) : go("admincases")} />
        ))}
      </Card>

      <Disclaimer />
    </div>
  );
}

/* ─────────────────────────────  ADMIN OFFICER MANAGEMENT  ───────────────────────────── */

function AdminOfficers({ onSelectOfficer }) {
  const [officers, setOfficers] = useState(() => DataService.getOfficers());
  const [showAdd, setShowAdd] = useState(false);
  const [q, setQ] = useState("");
  const [statusF, setStatusF] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Form states
  const [name, setName] = useState("");
  const [rank, setRank] = useState("Sub-Inspector");
  const [unit, setUnit] = useState("Park Town Range, Chennai");
  const [device, setDevice] = useState("SM-G998B-TN-41");

  useEffect(() => {
    const unsub = DataService.subscribe(() => {
      setOfficers([...DataService.getOfficers()]);
    });
    return unsub;
  }, []);

  const toggle = (id) => {
    const target = DataService.getOfficerById(id);
    if (!target) return;
    const nextStatus = target.status === "Active" ? "Inactive" : "Active";
    DataService.updateOfficer(id, { status: nextStatus });
    DataService.addAuditLog({
      actorId: ADMIN.id,
      role: "Admin",
      action: `Officer status changed to ${nextStatus}`,
      caseId: null,
      officerId: id,
      status: "Success",
      details: `${target.name} (${target.id}) set to ${nextStatus}`,
    });
  };

  const addOfficer = () => {
    if (!name.trim()) return;
    const num = 2300 + officers.length;
    const newId = `TN-NCB-${num}`;
    DataService.addOfficer({
      id: newId,
      name: name.trim(),
      rank,
      unit: unit.trim() || ADMIN.unit,
      device: device.trim() || `SM-G998B-TN-${officers.length + 1}`,
      status: "Active",
      lastLogin: "Never",
      lastActivity: "Roster enrolled",
    });
    DataService.addAuditLog({
      actorId: ADMIN.id,
      role: "Admin",
      action: "New officer enrolled",
      caseId: null,
      officerId: newId,
      status: "Success",
      details: `Enrolled ${name.trim()} (${newId}) into ${unit}`,
    });
    setName("");
    setRank("Sub-Inspector");
    setShowAdd(false);
  };

  const filteredOfficers = officers.filter((o) => {
    const term = q.toLowerCase().trim();
    const matchesSearch = !term || `${o.name} ${o.id} ${o.rank} ${o.unit} ${o.device}`.toLowerCase().includes(term);
    const matchesStatus = statusF === "All" || o.status === statusF;
    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    if (sortBy === "cases") {
      return DataService.getOfficerCases(b.id).length - DataService.getOfficerCases(a.id).length;
    }
    if (sortBy === "recent") {
      return (b.lastActivity || "").localeCompare(a.lastActivity || "");
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="space-y-5">
      <SectionTitle sub={`${officers.length} registered officers · ${ADMIN.unit}`}
        right={<Btn icon={UserPlus} onClick={() => setShowAdd((s) => !s)}>{showAdd ? "Close Form" : "Add Officer"}</Btn>}>
        Officer Management
      </SectionTitle>

      {showAdd && (
        <Card className="p-4">
          <div className="text-sm font-semibold mb-3 text-slate-800">Enroll New Field Officer</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
            <Input label="Officer Name" value={name} onChange={setName} icon={User} placeholder="Full name" />
            <div>
              <div style={{ color: C.ink2, fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Rank</div>
              <select value={rank} onChange={(e) => setRank(e.target.value)} className="rounded-md px-3 outline-none w-full"
                style={{ height: 42, fontSize: 13.5, border: `1px solid ${C.border}`, color: C.ink }}>
                {["Constable", "Head Constable", "Sub-Inspector", "Inspector", "Superintendent"].map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
            <Input label="Assigned Unit" value={unit} onChange={setUnit} icon={MapPin} placeholder="Police range/station" />
            <Input label="Assigned Device ID" value={device} onChange={setDevice} icon={KeyRound} placeholder="Device model/ID" />
          </div>
          <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100">
            <span style={{ color: C.faint, fontSize: 11 }}>Securely adds officer to live local storage roster.</span>
            <Btn icon={Check} onClick={addOfficer}>Confirm & Enroll</Btn>
          </div>
        </Card>
      )}

      {/* Filter and search toolbar */}
      <Card className="p-3.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex-1 min-w-[240px]">
          <Input value={q} onChange={setQ} icon={Search} placeholder="Search by name, Officer ID, rank or device..." />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 text-xs text-slate-500"><Filter size={13} /> Filter:</span>
          <select value={statusF} onChange={(e) => setStatusF(e.target.value)} className="rounded-md px-2.5 outline-none"
            style={{ height: 34, fontSize: 12.5, border: `1px solid ${C.border}`, color: C.ink2, background: C.navy3 }}>
            <option value="All">All Statuses</option>
            <option value="Active">Active Only</option>
            <option value="Inactive">Inactive Only</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="rounded-md px-2.5 outline-none"
            style={{ height: 34, fontSize: 12.5, border: `1px solid ${C.border}`, color: C.ink2, background: C.navy3 }}>
            <option value="name">Sort by Name (A-Z)</option>
            <option value="cases">Sort by Cases Recorded</option>
            <option value="recent">Sort by Recent Activity</option>
          </select>
        </div>
      </Card>

      <Card>
        <CardHead title="Registered Officers" icon={Users} note={`${officers.filter((o) => o.status === "Active").length} active · ${officers.length} total`} />
        {filteredOfficers.length === 0 ? (
          <EmptyState title="No Officers Found" body="No registered officer matches your search or filter criteria." />
        ) : (
          filteredOfficers.map((o, i) => {
            const caseCount = DataService.getOfficerCases(o.id).length;
            const initials = o.name.split(" ").filter(Boolean).slice(-2).map((w) => w[0]).join("").toUpperCase();
            return (
              <div key={o.id} className="flex items-center gap-3 px-4 py-3.5 flex-wrap hover:bg-slate-50 transition-colors"
                style={{ borderBottom: i < filteredOfficers.length - 1 ? `1px solid ${C.border2}` : "none" }}>
                <span className="inline-flex items-center justify-center rounded-full shrink-0"
                  style={{ width: 38, height: 38, background: C.navy3, color: C.navy, fontSize: 12.5, fontWeight: 700 }}>
                  {initials}
                </span>
                <div className="min-w-0" style={{ flex: "1 1 200px" }}>
                  <div className="flex items-center gap-2">
                    <span style={{ color: C.ink, fontSize: 13.5, fontWeight: 650 }}>{o.name}</span>
                    <Pill fg={o.status === "Active" ? C.green : C.muted} bg={o.status === "Active" ? C.greenSoft : "#EEF1F5"} dot>{o.status}</Pill>
                  </div>
                  <div style={{ color: C.muted, fontSize: 11.5, fontFamily: MONO, marginTop: 1 }}>
                    {o.id} · {o.rank} · {o.unit}
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-700">
                    <FolderClosed size={12} style={{ color: C.navy }} /> {caseCount} {caseCount === 1 ? "case" : "cases"}
                  </span>
                  <div style={{ color: C.faint, fontSize: 11.5 }} className="hidden sm:block">
                    Last: {o.lastActivity || o.lastLogin}
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-auto">
                  <Btn variant="outline" size="sm" icon={Eye} onClick={() => onSelectOfficer && onSelectOfficer(o)}>
                    View Profile
                  </Btn>
                  <button onClick={() => toggle(o.id)} className="flex items-center gap-1.5 rounded-md px-2.5"
                    style={{ height: 34, fontSize: 11.5, fontWeight: 600, color: o.status === "Active" ? C.red : C.green, border: `1px solid ${o.status === "Active" ? C.redSoft : "#C7E5C4"}` }}>
                    {o.status === "Active" ? <ToggleRight size={14} /> : <ToggleLeft size={14} />}
                    {o.status === "Active" ? "Deactivate" : "Activate"}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </Card>
    </div>
  );
}

/* ─────────────────────────────  ADMIN OFFICER DETAIL (PROFILE INSPECTION)  ───────────────────────────── */

function AdminOfficerDetail({ officer, back, openCase }) {
  const [tab, setTab] = useState("cases");
  const [officerData, setOfficerData] = useState(() => officer ? (DataService.getOfficerById(officer.id) || officer) : null);

  useEffect(() => {
    if (!officer) return;
    const unsub = DataService.subscribe(() => {
      const fresh = DataService.getOfficerById(officer.id);
      if (fresh) setOfficerData({ ...fresh });
    });
    return unsub;
  }, [officer]);

  if (!officerData) {
    return (
      <div className="p-6 text-center space-y-3">
        <div className="text-slate-700">No officer selected.</div>
        <Btn icon={ChevronLeft} onClick={back}>Back to Officers</Btn>
      </div>
    );
  }

  const o = officerData;
  const stats = DataService.getOfficerStats(o.id);
  const officerCases = DataService.getOfficerCases(o.id);
  const officerActivities = DataService.getActivities(o.id);
  const officerAudit = DataService.getAuditLogs(o.id);

  const initials = o.name.split(" ").filter(Boolean).slice(-2).map((w) => w[0]).join("").toUpperCase();

  const toggleStatus = () => {
    const nextStatus = o.status === "Active" ? "Inactive" : "Active";
    DataService.updateOfficer(o.id, { status: nextStatus });
    DataService.addAuditLog({
      actorId: ADMIN.id,
      role: "Admin",
      action: `Officer ${nextStatus === "Active" ? "activated" : "deactivated"}`,
      caseId: null,
      officerId: o.id,
      status: "Success",
      details: `Admin changed status of ${o.id} (${o.name}) to ${nextStatus}`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header and Back navigation */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <button onClick={back} className="flex items-center gap-1.5" style={{ color: C.navy, fontSize: 13, fontWeight: 650 }}>
          <ChevronLeft size={16} /> Back to Officer Management
        </button>
        <div className="flex items-center gap-2">
          <Pill fg={o.status === "Active" ? C.green : C.muted} bg={o.status === "Active" ? C.greenSoft : "#EEF1F5"} dot>
            {o.status} Officer
          </Pill>
          <Btn variant="outline" size="sm" onClick={toggleStatus} icon={o.status === "Active" ? ToggleRight : ToggleLeft}>
            {o.status === "Active" ? "Deactivate Officer" : "Activate Officer"}
          </Btn>
        </div>
      </div>

      {/* Officer Banner Profile Card */}
      <Card className="p-5 lg:p-6" style={{ background: "#FFFFFF", border: `1px solid ${C.border}` }}>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <span className="inline-flex items-center justify-center rounded-full shrink-0"
            style={{ width: 62, height: 62, background: C.navy, color: C.saffron, fontSize: 20, fontWeight: 700 }}>
            {initials}
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <h1 style={{ color: C.ink, fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{o.name}</h1>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold" style={{ background: C.navy3, color: C.navy }}>
                {o.id}
              </span>
              <Pill fg={C.navy} bg={C.cyanSoft} icon={ShieldCheck}>{o.rank}</Pill>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-slate-500">
              <span className="flex items-center gap-1"><MapPin size={12} style={{ color: C.saffron }} /> {o.unit}</span>
              <span className="flex items-center gap-1"><Cpu size={12} /> Device: <span className="font-mono text-slate-700">{o.device}</span></span>
              <span>Last Login: <strong className="text-slate-700">{o.lastLogin}</strong></span>
              <span>Last Activity: <strong className="text-slate-700">{o.lastActivity}</strong></span>
            </div>
          </div>
        </div>
      </Card>

      {/* 6 Key Metrics summary */}
      <div>
        <SectionTitle sub="Evidence screening and case performance summary">Officer Case Breakdown</SectionTitle>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
          <StatTile label="Total Cases" value={stats.total} tone={C.navy} />
          <StatTile label="Hash Verified" value={stats.verified} tone={C.green} />
          <StatTile label="Pending Verification" value={stats.pending} tone={C.amber} />
          <StatTile label="Positive (Match)" value={stats.positive} tone={C.green} />
          <StatTile label="Negative (None)" value={stats.negative} tone={C.muted} />
          <StatTile label="Inconclusive" value={stats.inconclusive} tone={C.saffron} />
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="flex border-b border-slate-200 overflow-x-auto">
        {[
          { id: "cases", label: `Cases Recorded (${officerCases.length})`, icon: FolderClosed },
          { id: "activity", label: `Activity Timeline (${officerActivities.length})`, icon: Clock },
          { id: "audit", label: `Audit Trail (${officerAudit.length})`, icon: ShieldCheck },
          { id: "device", label: "Device & Security", icon: Cpu },
        ].map((t) => {
          const on = tab === t.id;
          return (
            <button key={t.id} onClick={() => setTab(t.id)}
              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap"
              style={{
                borderColor: on ? C.navy : "transparent",
                color: on ? C.navy : C.muted,
                background: on ? "rgba(23,63,122,.04)" : "transparent",
              }}>
              <t.icon size={16} />
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Cases Recorded */}
      {tab === "cases" && (
        <Card>
          <CardHead title={`Cases Recorded by ${o.name}`} icon={FolderClosed} note={`${officerCases.length} records`} />
          {officerCases.length === 0 ? (
            <EmptyState title="No Cases Recorded Yet" body={`Officer ${o.name} has not recorded any presumptive drug test cases yet.`} />
          ) : (
            officerCases.map((c) => (
              <AdminCaseRow key={c.id} c={c} onClick={() => openCase(c)} />
            ))
          )}
        </Card>
      )}

      {/* Tab 2: Activity Timeline */}
      {tab === "activity" && (
        <Card>
          <CardHead title="Officer Activity Log" icon={Clock} note={`${officerActivities.length} events logged`} />
          {officerActivities.length === 0 ? (
            <EmptyState title="No Activity Events" body="No operational events recorded for this officer." />
          ) : (
            <div className="divide-y divide-slate-100">
              {officerActivities.map((a, idx) => (
                <div key={a.id || idx} className="p-4 flex items-start gap-3 hover:bg-slate-50">
                  <span className="inline-flex items-center justify-center rounded-full mt-0.5 shrink-0"
                    style={{ width: 28, height: 28, background: C.navy3, color: C.navy }}>
                    <Activity size={14} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span style={{ color: C.ink, fontSize: 13.5, fontWeight: 650 }}>{a.action}</span>
                      <span style={{ color: C.faint, fontSize: 11, fontFamily: MONO }}>{a.timestamp}</span>
                    </div>
                    {a.caseId && (
                      <div className="mt-1">
                        <span className="inline-flex items-center gap-1 font-mono text-xs px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                          <FolderClosed size={11} /> {a.caseId}
                        </span>
                      </div>
                    )}
                    <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>
                      {a.details || a.detail || "Operational step completed"}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {/* Tab 3: Audit Trail */}
      {tab === "audit" && (
        <Card>
          <CardHead title="Security & Compliance Audit Trail" icon={ShieldCheck} note={`${officerAudit.length} audit entries`} />
          {officerAudit.length === 0 ? (
            <EmptyState title="No Audit Records" body="No audit log entries associated with this officer ID." />
          ) : (
            <div className="divide-y divide-slate-100">
              {officerAudit.map((a, idx) => (
                <div key={a.id || idx} className="p-4 flex items-start gap-3 hover:bg-slate-50">
                  <span className="inline-flex items-center justify-center rounded-full mt-0.5 shrink-0"
                    style={{ width: 28, height: 28, background: C.greenSoft, color: C.green }}>
                    <ShieldCheck size={14} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span style={{ color: C.ink, fontSize: 13.5, fontWeight: 650 }}>{a.action}</span>
                        <Pill fg={a.status === "Success" ? C.green : C.amber} bg={a.status === "Success" ? C.greenSoft : C.amberSoft}>
                          {a.status || "Logged"}
                        </Pill>
                      </div>
                      <span style={{ color: C.faint, fontSize: 11, fontFamily: MONO }}>{a.timestamp}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 font-mono">
                      <span>Actor: {a.actorId || o.id}</span>
                      <span>·</span>
                      <span>Role: {a.role || "Officer"}</span>
                      {a.caseId && <span>· Case: {a.caseId}</span>}
                    </div>
                    <div style={{ color: C.muted, fontSize: 12, marginTop: 4 }}>
                      {a.details || "Cryptographic integrity log recorded."}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}

      {/* Tab 4: Device & Security */}
      {tab === "device" && (
        <div className="grid lg:grid-cols-2 gap-5">
          <Card className="p-4 space-y-3">
            <CardHead title="Device Authentication" icon={Cpu} />
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Field label="Device Model / ID" value={o.device} mono />
              <Field label="Hardware Serial" value={`SN-${o.device.replace(/[^A-Z0-9]/gi, "")}-77A`} mono />
              <Field label="Mobile Client Version" value="NarcoLocker Secure Field v1.0.4" />
              <Field label="Enrollment Status" value="Certified Device · Active" />
              <Field label="Storage Security" value="Encrypted (AES-256 GCM)" />
              <Field label="Local Sync Status" value="Device Storage Synchronized" />
            </div>
          </Card>

          <Card className="p-4 space-y-3">
            <CardHead title="Cryptographic Keys & Permissions" icon={Fingerprint} />
            <div className="grid grid-cols-2 gap-3 pt-2">
              <Field label="Officer Key Pair" value={`ED25519-${o.id}-LIVE`} mono />
              <Field label="Signature Status" value="Valid & Hardware-Bound" />
              <Field label="GPS Sensor Calibration" value="GNSS Calibrated (±4.2m)" />
              <Field label="Tamper Protection" value="Hardware Enclave Active" />
              <Field label="Authorized Roles" value="Screening, Digital Seal, QR" wide />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────  ADMIN CASE MONITORING  ───────────────────────────── */

function AdminCaseRow({ c, onClick }) {
  const m = RESULT_META[c.result] || RESULT_META.match;
  return (
    <div onClick={onClick} className="flex items-center gap-3 px-4 py-3 cursor-pointer flex-wrap hover:bg-slate-50 transition-colors"
      style={{ borderBottom: `1px solid ${C.border2}` }}>
      <span className="inline-flex items-center justify-center rounded-md shrink-0"
        style={{ width: 34, height: 34, background: m.bg, color: m.fg }}>
        <m.Icon size={17} />
      </span>
      <div className="min-w-0" style={{ flex: "1 1 220px" }}>
        <div className="flex items-center gap-2 flex-wrap">
          <span style={{ color: C.ink, fontSize: 13, fontWeight: 650, fontFamily: MONO }}>{c.id}</span>
          <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-slate-100 text-slate-700">
            {c.officerId}
          </span>
          {c.officerName && (
            <span style={{ color: C.ink2, fontSize: 11.5, fontWeight: 600 }}>{c.officerName}</span>
          )}
        </div>
        <div style={{ color: C.muted, fontSize: 11.5, marginTop: 2 }}>
          {c.date} · {c.time} &nbsp;|&nbsp; {c.area} {c.ref ? ` · ${c.ref}` : ""}
        </div>
      </div>
      <Pill fg={m.fg} bg={m.bg}>{m.label}</Pill>
      <Pill fg={C.green} bg={C.greenSoft} icon={MapPin}>GPS Logged</Pill>
      <Pill fg={c.verified ? C.green : C.amber} bg={c.verified ? C.greenSoft : C.amberSoft} icon={Hash}>
        {c.verified ? "Hash Verified" : "Hash Pending"}
      </Pill>
      <ChevronRight size={16} style={{ color: C.faint }} />
    </div>
  );
}

function AdminCaseMonitoring({ cases, openCase }) {
  const [q, setQ] = useState("");
  const [resultF, setResultF] = useState("All");
  const [dateF, setDateF] = useState("All");
  const [officerF, setOfficerF] = useState("All");
  const [verifyF, setVerifyF] = useState("All");

  const officersList = DataService.getOfficers();
  const dates = ["All", ...Array.from(new Set(cases.map((c) => c.date)))];

  const list = cases.filter((c) => {
    const hit = `${c.id} ${c.area} ${c.substance} ${c.officerId || ""} ${c.officerName || ""} ${c.ref || ""}`.toLowerCase().includes(q.toLowerCase());
    const passResult =
      resultF === "All" ? true :
      resultF === "Positive" ? c.result === "match" :
      resultF === "Negative" ? c.result === "none" : c.result === "inconclusive";
    const passDate = dateF === "All" || c.date === dateF;
    const passOfficer = officerF === "All" || (c.officerId || "") === officerF;
    const passVerify =
      verifyF === "All" ? true :
      verifyF === "Verified" ? c.verified === true :
      c.verified === false;
    return hit && passResult && passDate && passOfficer && passVerify;
  });

  return (
    <div className="space-y-5">
      <SectionTitle sub={`${cases.length} range-wide records · ${ADMIN.unit}`}>Case Monitoring</SectionTitle>

      <Card className="p-4 space-y-3">
        <Input value={q} onChange={setQ} icon={Search} placeholder="Search Case ID, officer ID, name, location or substance…" />
        <div className="flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5" style={{ color: C.faint, fontSize: 11.5 }}><Filter size={12} /> Filters:</span>
          <select value={resultF} onChange={(e) => setResultF(e.target.value)} className="rounded-md px-2 outline-none"
            style={{ height: 32, fontSize: 12, border: `1px solid ${C.border}`, color: C.ink2, background: C.navy3 }}>
            {["All", "Positive", "Negative", "Inconclusive"].map((r) => <option key={r} value={r}>{r === "All" ? "All Results" : r}</option>)}
          </select>
          <select value={dateF} onChange={(e) => setDateF(e.target.value)} className="rounded-md px-2 outline-none"
            style={{ height: 32, fontSize: 12, border: `1px solid ${C.border}`, color: C.ink2, background: C.navy3 }}>
            {dates.map((d) => <option key={d} value={d}>{d === "All" ? "All Dates" : d}</option>)}
          </select>
          <select value={officerF} onChange={(e) => setOfficerF(e.target.value)} className="rounded-md px-2 outline-none"
            style={{ height: 32, fontSize: 12, border: `1px solid ${C.border}`, color: C.ink2, background: C.navy3 }}>
            <option value="All">All Officers</option>
            {officersList.map((o) => <option key={o.id} value={o.id}>{o.id} · {o.name}</option>)}
          </select>
          <select value={verifyF} onChange={(e) => setVerifyF(e.target.value)} className="rounded-md px-2 outline-none"
            style={{ height: 32, fontSize: 12, border: `1px solid ${C.border}`, color: C.ink2, background: C.navy3 }}>
            <option value="All">All Verification</option>
            <option value="Verified">Verified Only</option>
            <option value="Pending">Pending Only</option>
          </select>
        </div>
      </Card>

      <Card>
        <CardHead title="Case Records" note={`${list.length} matching`} icon={FolderClosed} />
        {list.length === 0 ? (
          <EmptyState title="No Matching Cases" body="Try a different case ID, result, date, verification status or officer filter." />
        ) : list.map((c) => <AdminCaseRow key={c.id} c={c} onClick={() => openCase(c)} />)}
      </Card>
    </div>
  );
}

function AdminCaseDetail({ c, back }) {
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(c?.verified !== false);
  const m = RESULT_META[c?.result] || RESULT_META.match;

  const reverify = () => {
    setVerifying(true);
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
      DataService.addAuditLog({
        actorId: ADMIN.id,
        role: "Admin",
        action: "Case hash re-verified",
        caseId: c.id,
        officerId: c.officerId,
        status: "Success",
        details: `Integrity verified for case ${c.id} by Administrator ${ADMIN.name}`,
      });
    }, 850);
  };

  const assignedOfficer = DataService.getOfficerById(c?.officerId);

  return (
    <div className="space-y-5">
      <div>
        <button onClick={back} className="flex items-center gap-1.5 mb-2" style={{ color: C.navy, fontSize: 12.5, fontWeight: 600 }}>
          <ChevronLeft size={14} /> Back to Case Monitoring
        </button>
        <div className="flex items-center gap-2.5 flex-wrap">
          <h1 style={{ color: C.ink, fontSize: 20, fontWeight: 700, fontFamily: MONO }}>{c.id}</h1>
          <Pill fg={m.fg} bg={m.bg} icon={m.Icon}>{m.label}</Pill>
          {verified
            ? <Pill fg={C.green} bg={C.greenSoft} icon={ShieldCheck}>Case Verified</Pill>
            : <Pill fg={C.amber} bg={C.amberSoft} icon={Clock}>Pending Verification</Pill>}
        </div>
      </div>

      <Card>
        <CardHead title="Case Details" icon={FolderClosed} />
        <div className="p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Field label="Case ID" value={c.id} mono />
          <Field label="Officer ID" value={c.officerId || "TN-NCB-2291"} mono />
          <Field label="Officer Name" value={c.officerName || assignedOfficer?.name || "Officer"} />
          <Field label="FIR Reference" value={c.ref || "FIR 412/2026"} />
          <Field label="Date" value={c.date} />
          <Field label="Time" value={c.time} />
          <Field label="Location" value={c.area} />
          <Field label="Unit" value={c.loc} />
          <Field label="Substance" value={c.substance} />
          <Field label="Test Pouch" value={c.pouch || "Marquis reagent pouch"} />
          <Field label="ΔE00" value={typeof c.dE === "number" ? c.dE.toFixed(1) : c.dE} mono />
          <Field label="Sync Status" value={c.synced ? "Synced" : "Pending Sync"} />
        </div>
      </Card>

      <Card>
        <CardHead title="GPS & Hash Verification" icon={Fingerprint}
          right={<Pill fg={C.green} bg={C.greenSoft} dot>Secure</Pill>} />
        <div className="p-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Field label="GPS Status" value={`Logged · ${GPS.lat} / ${GPS.lng}`} mono />
            <Field label="SHA-256 Hash Status" value={verifying ? "Verifying…" : verified ? "Verified" : "Not Verified"} />
          </div>
          <div className="rounded-md p-3.5" style={{ background: "#F3F7FC", border: `1px solid ${C.border2}` }}>
            <div style={{ color: C.faint, fontSize: 11, fontWeight: 650 }}>Image Hash (SHA-256)</div>
            <div style={{ color: C.ink, fontSize: 11.5, fontFamily: MONO, marginTop: 4, wordBreak: "break-all", lineHeight: 1.6 }}>
              {c.hash || HASH_FULL}
            </div>
          </div>
          <Btn variant="accent" icon={verifying ? RefreshCw : Fingerprint} onClick={reverify} disabled={verifying}>
            {verifying ? "Re-verifying…" : "Re-verify Case Hash"}
          </Btn>
        </div>
      </Card>

      <Card>
        <CardHead title="Chain of Custody" icon={Clock} />
        <div className="p-4"><ChainOfCustody draft={c} /></div>
      </Card>
    </div>
  );
}

/* ─────────────────────────────  ADMIN SECURITY & AUDIT  ───────────────────────────── */

function AdminSecurityAudit() {
  const [logs, setLogs] = useState(() => DataService.getAuditLogs());
  const [q, setQ] = useState("");

  useEffect(() => {
    const unsub = DataService.subscribe(() => {
      setLogs([...DataService.getAuditLogs()]);
    });
    return unsub;
  }, []);

  const filteredLogs = logs.filter((a) => {
    const term = q.toLowerCase();
    return !term || `${a.action} ${a.actorId} ${a.role} ${a.details} ${a.officerId || ""} ${a.caseId || ""}`.toLowerCase().includes(term);
  });

  return (
    <div className="space-y-5">
      <SectionTitle sub="Cryptographic integrity, authentication events and evidence audit trail">
        Security & Audit
      </SectionTitle>

      <div className="grid lg:grid-cols-2 gap-5">
        <Card>
          <CardHead title="Hash Verification Status" icon={Fingerprint}
            right={<Pill fg={C.green} bg={C.greenSoft} dot>Clear</Pill>} />
          <div className="p-4 space-y-3">
            <Banner tone="ok" title="Evidence integrity verified"
              body="All digital records in local storage match their signed SHA-256 hashes." />
            <div className="grid grid-cols-3 gap-4">
              <Field label="Records checked" value={DataService.getCases().length.toString()} mono />
              <Field label="Hash mismatches" value="0" mono />
              <Field label="Signature errors" value="0" mono />
            </div>
          </div>
        </Card>

        <Card>
          <CardHead title="Access Controls" icon={Lock} />
          <div className="p-4 grid gap-y-1">
            <CheckRow label="Admin sessions require secure login" note="Console restricted to authenticated admin ID" />
            <CheckRow label="Officer identity linked to records" note="Every case stores unique Officer ID" />
            <CheckRow label="Every case action is time-stamped" note="Creation, analysis and sealing events logged" />
          </div>
        </Card>
      </div>

      <Card className="p-3.5">
        <Input value={q} onChange={setQ} icon={Search} placeholder="Filter audit logs by officer ID, case ID or action..." />
      </Card>

      <Card>
        <CardHead title="System Audit Logs" icon={Clock} note={`${filteredLogs.length} events`} />
        {filteredLogs.length === 0 ? (
          <EmptyState title="No Audit Logs" body="No events matching the search criteria." />
        ) : (
          <div className="divide-y divide-slate-100">
            {filteredLogs.map((a, i) => (
              <div key={a.id || i} className="flex items-start gap-3 px-4 py-3.5 hover:bg-slate-50">
                <span className="inline-flex items-center justify-center rounded-md shrink-0 mt-0.5"
                  style={{ width: 32, height: 32, background: a.status === "Success" ? C.greenSoft : C.amberSoft, color: a.status === "Success" ? C.green : C.amber }}>
                  <ShieldCheck size={16} />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span style={{ color: C.ink, fontSize: 13, fontWeight: 650 }}>{a.action}</span>
                      <Pill fg={a.status === "Success" ? C.green : C.amber} bg={a.status === "Success" ? C.greenSoft : C.amberSoft}>
                        {a.status}
                      </Pill>
                    </div>
                    <span style={{ color: C.faint, fontSize: 11, fontFamily: MONO }}>{a.timestamp}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 font-mono">
                    <span>Actor: {a.actorId}</span>
                    <span>·</span>
                    <span>Role: {a.role}</span>
                    {a.officerId && <span>· Officer: {a.officerId}</span>}
                    {a.caseId && <span>· Case: {a.caseId}</span>}
                  </div>
                  <div style={{ color: C.muted, fontSize: 11.5, marginTop: 3 }}>{a.details}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}

/* ─────────────────────────────  ADMIN REPORTS  ───────────────────────────── */

function AdminReports({ cases, openCase }) {
  const [downloaded, setDownloaded] = useState({});
  const [q, setQ] = useState("");

  const filtered = cases.filter((c) => {
    const term = q.toLowerCase();
    return !term || `${c.id} ${c.officerId || ""} ${c.officerName || ""} ${c.area} ${c.substance}`.toLowerCase().includes(term);
  });

  return (
    <div className="space-y-5">
      <SectionTitle sub={`${cases.length} case reports · ${ADMIN.unit}`}>Reports</SectionTitle>

      <Card className="p-3.5">
        <Input value={q} onChange={setQ} icon={Search} placeholder="Search reports by case ID, officer ID or location..." />
      </Card>

      <Card>
        <CardHead title="Case Reports" icon={FileText} note={`${filtered.length} available`} />
        {filtered.length === 0 ? (
          <EmptyState title="No Reports Found" body="No case reports match your search." />
        ) : (
          filtered.map((c, i) => {
            const m = RESULT_META[c.result] || RESULT_META.match;
            return (
              <div key={c.id} className="flex items-center gap-3 px-4 py-3.5 flex-wrap hover:bg-slate-50"
                style={{ borderBottom: i < filtered.length - 1 ? `1px solid ${C.border2}` : "none" }}>
                <span className="inline-flex items-center justify-center rounded-md shrink-0"
                  style={{ width: 34, height: 34, background: m.bg, color: m.fg }}>
                  <m.Icon size={17} />
                </span>
                <div className="min-w-0" style={{ flex: "1 1 200px" }}>
                  <div className="flex items-center gap-2">
                    <span style={{ color: C.ink, fontSize: 13, fontWeight: 650, fontFamily: MONO }}>{c.id}</span>
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-medium bg-slate-100 text-slate-700">
                      {c.officerId}
                    </span>
                    {c.officerName && <span style={{ color: C.ink2, fontSize: 12 }}>{c.officerName}</span>}
                  </div>
                  <div style={{ color: C.muted, fontSize: 11.5, marginTop: 2 }}>{c.date} · {c.area} · {c.substance}</div>
                </div>
                <Pill fg={m.fg} bg={m.bg}>{m.label}</Pill>
                <div className="flex gap-2">
                  <Btn variant="outline" size="sm" icon={Eye} onClick={() => openCase(c)}>View Case</Btn>
                  <Btn variant="ghost" size="sm" icon={downloaded[c.id] ? Check : Download}
                    onClick={() => setDownloaded((d) => ({ ...d, [c.id]: true }))}>
                    {downloaded[c.id] ? "Downloaded" : "Download PDF"}
                  </Btn>
                </div>
              </div>
            );
          })
        )}
      </Card>
    </div>
  );
}

/* ─────────────────────────────  APP  ───────────────────────────── */

function App() {
  const [screen, setScreen] = useState("splash");
  const [officer, setOfficer] = useState(() => DataService.getOfficers()[0] || OFFICERS_SEED[0]);
  const [selectedOfficer, setSelectedOfficer] = useState(() => DataService.getOfficers()[0] || OFFICERS_SEED[0]);
  const [cases, setCases] = useState(() => DataService.getCases());
  const [selected, setSelected] = useState(() => DataService.getCases()[0] || SEED_CASES[0]);
  const [adminSelected, setAdminSelected] = useState(() => DataService.getCases()[0] || SEED_CASES[0]);
  const [net, setNet] = useState("online");
  const [lastSync, setLastSync] = useState("09:43");
  const [outcome, setOutcome] = useState("match");
  const [quality, setQuality] = useState("good");
  const [qrBack, setQrBack] = useState("record");

  const getNextCaseId = () => {
    const allCases = DataService.getCases();
    const numbers = allCases.map((c) => {
      const m = c.id && c.id.match(/(\d+)$/);
      return m ? parseInt(m[1], 10) : 400;
    });
    const maxNum = numbers.length ? Math.max(...numbers) : 417;
    const nextNum = String(maxNum + 1).padStart(5, "0");
    return `NCB/TN/2026/${nextNum}`;
  };

  const [draft, setDraft] = useState(() => ({
    id: "NCB/TN/2026/00418",
    ref: "FIR 412/2026 · Park Town PS",
    location: "Park Town Checkpoint, Chennai",
    officerId: officer.id,
    officerName: officer.name,
    pouch: "Marquis reagent pouch",
    date: "15 Sep 2026",
    time: "09:42",
  }));

  // Reactive subscription to DataService
  useEffect(() => {
    const unsub = DataService.subscribe(() => {
      setCases([...DataService.getCases()]);
    });
    return unsub;
  }, []);

  // sync simulation
  useEffect(() => {
    if (net !== "syncing") return;
    const t = setTimeout(() => { setNet("online"); setLastSync("09:47"); }, 1900);
    return () => clearTimeout(t);
  }, [net]);

  const go = (s) => {
    if (s === "newcase") {
      const nextId = getNextCaseId();
      setDraft((d) => ({
        ...d,
        id: nextId,
        officerId: officer.id,
        officerName: officer.name,
      }));
    }
    setScreen(s);
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };

  const openCase = (c) => { setSelected(c); go("casedetail"); };
  const adminOpenCase = (c) => { setAdminSelected(c); go("admincasedetail"); };
  const openQR = (from) => { setQrBack(from || "record"); go("qr"); };

  const sealRecord = () => {
    if (!DataService.getCaseById(draft.id)) {
      const om = OUTCOME_META[outcome] || OUTCOME_META.match;
      const currentOfficer = DataService.getOfficerById(draft.officerId) || officer;
      const newCase = {
        id: draft.id,
        ref: draft.ref || "FIR Ref Pending",
        date: draft.date || "Today",
        time: draft.time || "09:42",
        loc: currentOfficer.unit || "Chennai Central Range",
        area: draft.location || "Field Operation",
        result: outcome,
        substance: om.substance,
        dE: om.dE,
        verified: true,
        synced: net !== "offline",
        officerId: currentOfficer.id,
        officerName: currentOfficer.name,
        pouch: draft.pouch || "Marquis reagent pouch",
        hash: "SHA256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069",
      };
      DataService.createCase(newCase);
      DataService.addActivity({
        officerId: currentOfficer.id,
        action: "Digital record sealed",
        caseId: newCase.id,
        timestamp: "Just now",
        details: `${newCase.substance} (${om.label}) sealed under FIR ref ${newCase.ref}`,
      });
      DataService.addAuditLog({
        actorId: currentOfficer.id,
        role: "Officer",
        action: "Record sealed & hashed",
        caseId: newCase.id,
        officerId: currentOfficer.id,
        status: "Success",
        details: `Case ${newCase.id} sealed with SHA-256 hash by ${currentOfficer.name}`,
      });
    }
  };
  useEffect(() => { if (screen === "record") sealRecord(); /* eslint-disable-next-line */ }, [screen]);

  if (screen === "splash") return <Splash onDone={() => setScreen("role")} />;
  if (screen === "role") return <RoleSelect onOfficer={() => setScreen("login")} onAdmin={() => setScreen("adminlogin")} />;
  if (screen === "login") return <Login onLogin={(o) => { if (o) { setOfficer(o); setDraft((d) => ({ ...d, officerId: o.id, officerName: o.name })); } setScreen("home"); }} />;
  if (screen === "adminlogin") return <AdminLogin onLogin={() => setScreen("admindash")} onBack={() => setScreen("role")} />;

  const ADMIN_SCREENS = ["admindash", "admincases", "admincasedetail", "adminofficers", "adminofficerdetail", "adminsecurity", "adminreports"];
  if (ADMIN_SCREENS.includes(screen)) {
    const adminBody = {
      admindash: <AdminDashboard go={go} cases={cases} openCase={adminOpenCase} />,
      admincases: <AdminCaseMonitoring cases={cases} openCase={adminOpenCase} />,
      admincasedetail: <AdminCaseDetail c={adminSelected} back={() => go("admincases")} />,
      adminofficers: <AdminOfficers onSelectOfficer={(o) => { setSelectedOfficer(o); go("adminofficerdetail"); }} />,
      adminofficerdetail: <AdminOfficerDetail officer={selectedOfficer} back={() => go("adminofficers")} openCase={adminOpenCase} />,
      adminsecurity: <AdminSecurityAudit />,
      adminreports: <AdminReports cases={cases} openCase={adminOpenCase} />,
    }[screen];
    return (
      <AdminShell screen={screen} go={go} onLogout={() => setScreen("splash")}>
        {adminBody}
      </AdminShell>
    );
  }

  const body = {
    home: <HomeScreen go={go} cases={cases} net={net} lastSync={lastSync} openCase={openCase} officer={officer} />,
    cases: <CasesScreen cases={cases} openCase={openCase} go={go} net={net} officer={officer} />,
    casedetail: <CaseDetail c={selected} go={go} back={() => go("cases")} openQR={() => openQR("casedetail")} />,
    newcase: <NewCase go={go} draft={draft} setDraft={setDraft} officer={officer} />,
    capture: <Capture go={go} draft={draft} outcome={outcome} setOutcome={setOutcome} quality={quality} setQuality={setQuality} />,
    processing: <Processing go={go} />,
    analysis: <AnalysisDetails go={go} outcome={outcome} draft={draft} />,
    result: <ResultScreen go={go} outcome={outcome} draft={draft} />,
    record: <EvidenceRecord go={go} draft={draft} outcome={outcome} openQR={() => openQR("record")} />,
    qr: <QRVerify go={go} draft={draft} back={() => go(qrBack)} />,
    report: <Report go={go} draft={draft} outcome={outcome} />,
    security: <SecurityCenter net={net} setNet={setNet} lastSync={lastSync} />,
    profile: <Profile onSignOut={() => setScreen("splash")} net={net} lastSync={lastSync} officer={officer} />,
  }[screen];

  return (
    <Shell screen={screen} go={go} net={net} setNet={setNet} lastSync={lastSync} officer={officer}>
      {body}
    </Shell>
  );
}

