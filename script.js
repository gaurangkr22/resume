const departments = [
  { name: "General medicine", beds: 180, occupied: 120 },
  { name: "General surgery", beds: 140, occupied: 90 },
  { name: "Orthopedics and trauma", beds: 100, occupied: 68 },
  { name: "Cardiology", beds: 70, occupied: 48 },
  { name: "Neurology and neurosurgery", beds: 60, occupied: 38 },
  { name: "Obstetrics and gynecology", beds: 90, occupied: 62 },
  { name: "Pediatrics and neonatology", beds: 80, occupied: 50 },
  { name: "Oncology", beds: 60, occupied: 43 },
  { name: "Nephrology and urology", beds: 50, occupied: 36 },
  { name: "Respiratory medicine", beds: 40, occupied: 29 },
  { name: "Gastroenterology", beds: 40, occupied: 28 },
  { name: "ENT and ophthalmology", beds: 30, occupied: 19 },
  { name: "Infectious disease and isolation", beds: 30, occupied: 24 },
  { name: "Rehabilitation and other specialties", beds: 40, occupied: 29 }
];

const staffing = [
  { name: "General medicine", count: 35, onDuty: 22 },
  { name: "General surgery", count: 25, onDuty: 16 },
  { name: "Orthopedics", count: 20, onDuty: 14 },
  { name: "Cardiology", count: 18, onDuty: 12 },
  { name: "Neurology and neurosurgery", count: 15, onDuty: 9 },
  { name: "Obstetrics and gynecology", count: 20, onDuty: 13 },
  { name: "Pediatrics and neonatology", count: 20, onDuty: 14 },
  { name: "Oncology", count: 15, onDuty: 10 },
  { name: "Nephrology and urology", count: 15, onDuty: 9 },
  { name: "Respiratory medicine", count: 12, onDuty: 7 },
  { name: "Gastroenterology", count: 12, onDuty: 7 },
  { name: "ENT and ophthalmology", count: 14, onDuty: 8 },
  { name: "Infectious disease", count: 0, onDuty: 0 },
  { name: "Anesthesiology and critical care", count: 20, onDuty: 13 },
  { name: "Emergency and trauma medicine", count: 15, onDuty: 11 },
  { name: "Radiology and pathology", count: 12, onDuty: 6 },
  { name: "Dermatology, psychiatry, rehabilitation & other", count: 22, onDuty: 15 }
];

const snapshots = [
  { occupied: 684, staffed: 820, available: 96, reserved: 40, cleaning: 22, maintenance: 50, operational: 950, onDuty: 186, appointments: 148, checkedIn: 21, ambulances: 12, emergency: 18, labs: 34, waiting: 21 },
  { occupied: 691, staffed: 820, available: 90, reserved: 39, cleaning: 23, maintenance: 50, operational: 950, onDuty: 179, appointments: 152, checkedIn: 24, ambulances: 11, emergency: 19, labs: 31, waiting: 24 },
  { occupied: 677, staffed: 820, available: 102, reserved: 41, cleaning: 21, maintenance: 50, operational: 950, onDuty: 191, appointments: 145, checkedIn: 18, ambulances: 14, emergency: 16, labs: 37, waiting: 18 }
];

const demoPatients = [
  { ref: "DEMO-1042", clinic: "General medicine", status: "Waiting", arrival: "09:12", team: "Demo team A" },
  { ref: "DEMO-1043", clinic: "Orthopedics", status: "Checked in", arrival: "09:18", team: "Demo team B" },
  { ref: "DEMO-1044", clinic: "Cardiology", status: "In consultation", arrival: "09:24", team: "Demo team C" },
  { ref: "DEMO-1045", clinic: "Pediatrics", status: "Waiting", arrival: "09:31", team: "Demo team D" },
  { ref: "DEMO-1046", clinic: "Dermatology", status: "Checked in", arrival: "09:36", team: "Demo team E" },
  { ref: "DEMO-1047", clinic: "Women's health", status: "Waiting", arrival: "09:42", team: "Demo team F" }
];

const demoAppointments = [
  { time: "09:30", patient: "DEMO-1042", department: "General medicine", status: "Checked in" },
  { time: "09:45", patient: "DEMO-1043", department: "Orthopedics", status: "Waiting" },
  { time: "10:00", patient: "DEMO-1044", department: "Cardiology", status: "In consultation" },
  { time: "10:15", patient: "DEMO-1045", department: "Pediatrics", status: "Confirmed · demo" },
  { time: "10:30", patient: "DEMO-1046", department: "Dermatology", status: "Confirmed · demo" },
  { time: "10:45", patient: "DEMO-1047", department: "Women's health", status: "Confirmed · demo" }
];

const wardExamples = [
  { name: "General medicine · North", physical: 180, occupied: 120, available: 25 },
  { name: "General surgery · East", physical: 140, occupied: 90, available: 20 },
  { name: "Orthopedics · Trauma", physical: 100, occupied: 68, available: 13 },
  { name: "Cardiac ICU · Critical care", physical: 42, occupied: 34, available: 4 },
  { name: "Pediatrics · Children's", physical: 80, occupied: 50, available: 12 },
  { name: "Maternity · Women's health", physical: 90, occupied: 62, available: 10 }
];

const fleetExamples = [
  { id: "DEMO-AMB-01", type: "Advanced life support", status: "Assigned" },
  { id: "DEMO-AMB-02", type: "Basic life support", status: "Available" },
  { id: "DEMO-AMB-03", type: "Critical care", status: "Cleaning / restock" },
  { id: "DEMO-AMB-04", type: "Neonatal transport", status: "Available" },
  { id: "DEMO-AMB-05", type: "Advanced life support", status: "En route · demo" },
  { id: "DEMO-AMB-06", type: "Patient transfer", status: "Maintenance" }
];

const emergencyExamples = [
  { id: "DEMO-ED-021", source: "Ambulance · demo", state: "Receiving handover", unit: "Emergency intake" },
  { id: "DEMO-ED-022", source: "Walk-in · demo", state: "Registration example", unit: "Emergency intake" },
  { id: "DEMO-ED-023", source: "Ambulance · demo", state: "Arrival recorded", unit: "Trauma intake" },
  { id: "DEMO-ED-024", source: "Walk-in · demo", state: "Awaiting registration", unit: "Emergency intake" }
];

const labExamples = [
  { id: "DEMO-LAB-081", test: "Complete blood count", state: "Sample collected · demo" },
  { id: "DEMO-LAB-082", test: "Kidney function panel", state: "Processing · demo" },
  { id: "DEMO-LAB-083", test: "Blood glucose", state: "Awaiting sample · demo" },
  { id: "DEMO-LAB-084", test: "Urinalysis", state: "Sample collected · demo" },
  { id: "DEMO-LAB-085", test: "Liver function panel", state: "Processing · demo" }
];

const activityExamples = [
  [
    { title: "Demo check-in recorded", detail: "General medicine · DEMO-1042", time: "2 min ago" },
    { title: "Demo specimen status changed", detail: "Laboratory · DEMO-LAB-082", time: "5 min ago" },
    { title: "Demo bed status updated", detail: "North ward · synthetic event", time: "8 min ago" }
  ],
  [
    { title: "Demo appointment checked in", detail: "Cardiology · DEMO-1044", time: "1 min ago" },
    { title: "Demo fleet status refreshed", detail: "Vehicle DEMO-AMB-03 · no GPS", time: "4 min ago" },
    { title: "Demo shift snapshot refreshed", detail: "Staffing plan · synthetic data", time: "7 min ago" }
  ],
  [
    { title: "Demo queue count refreshed", detail: "Outpatient clinics · synthetic", time: "3 min ago" },
    { title: "Demo lab workflow changed", detail: "DEMO-LAB-083 · no results", time: "6 min ago" },
    { title: "Demo ward snapshot refreshed", detail: "Critical care · no live beds", time: "9 min ago" }
  ]
];

const departmentChart = document.getElementById("departmentChart");
const departmentRows = document.getElementById("departmentRows");
const staffingRows = document.getElementById("staffingRows");
const searchInput = document.getElementById("departmentSearch");
const navItems = [...document.querySelectorAll(".nav-item[data-view]")];
const numberFormat = new Intl.NumberFormat("en-IN");
let snapshotIndex = 0;
let autoRefresh = true;
let refreshTimer;

function renderDepartments(filter = "") {
  const query = filter.trim().toLocaleLowerCase();
  const visible = departments.filter((department) => department.name.toLocaleLowerCase().includes(query));
  const activeSnapshot = snapshots[snapshotIndex];
  const simulatedOccupancy = departments.map((department) => Math.round(department.occupied * activeSnapshot.occupied / 684));
  simulatedOccupancy[simulatedOccupancy.length - 1] += activeSnapshot.occupied - simulatedOccupancy.reduce((sum, value) => sum + value, 0);
  const occupiedByName = new Map(departments.map((department, index) => [department.name, simulatedOccupancy[index]]));

  departmentChart.innerHTML = visible.map((department) => {
    const occupied = occupiedByName.get(department.name) ?? 0;
    return `
      <div class="dept-bar-row">
        <span class="dept-name" title="${department.name}">${department.name}</span>
        <span class="bar-track" aria-label="${department.beds} planning target, ${occupied} simulated occupied">
          <span class="bar-target" style="width:${(department.beds / 180) * 100}%"></span>
          <span class="bar-occupied" style="width:${(occupied / 180) * 100}%"></span>
        </span>
        <span class="dept-target">${occupied}<small> / ${department.beds}</small></span>
      </div>
    `;
  }).join("");
  departmentRows.innerHTML = visible.map((department) => `
    <tr>
      <td>${department.name}</td>
      <td>${department.beds} beds</td>
      <td>${occupiedByName.get(department.name)} demo</td>
      <td>Not connected</td>
      <td>${department.beds / 10}%</td>
    </tr>
  `).join("") || '<tr><td colspan="5">No matching departments.</td></tr>';
}

function renderStaffing(snapshot) {
  const dutyCounts = staffing.map((specialty) => Math.round(specialty.onDuty * snapshot.onDuty / 186));
  dutyCounts[dutyCounts.length - 1] += snapshot.onDuty - dutyCounts.reduce((sum, value) => sum + value, 0);
  staffingRows.innerHTML = staffing.map((specialty, index) => `
    <tr>
      <td>${specialty.name}</td>
      <td>${specialty.count} planned</td>
      <td>${dutyCounts[index]} demo</td>
      <td>Not connected</td>
    </tr>
  `).join("");
}

function renderPatients() {
  document.getElementById("patientRows").innerHTML = demoPatients.map((patient) => `
    <tr><td>${patient.ref}</td><td>${patient.clinic}</td><td><span class="demo-state">${patient.status}</span></td><td>${patient.arrival}</td><td>${patient.team}</td></tr>
  `).join("");
}

function renderAppointments() {
  document.getElementById("appointmentRows").innerHTML = demoAppointments.map((appointment, index) => `
    <tr><td>${appointment.time}</td><td>${appointment.patient}</td><td>${appointment.department}</td><td>Demo clinician ${String(index + 1).padStart(2, "0")}</td><td><span class="demo-state">${appointment.status}</span></td></tr>
  `).join("");
}

function renderWardRows(snapshot) {
  const scale = snapshot.occupied / 684;
  document.getElementById("wardRows").innerHTML = wardExamples.map((ward) => {
    const occupied = Math.round(ward.occupied * scale);
    const available = Math.max(0, Math.round(ward.available * (snapshot.available / 96)));
    return `<tr><td>${ward.name}</td><td>${ward.physical}</td><td>${occupied}</td><td>${available}</td><td><span class="demo-state">Scenario example</span></td></tr>`;
  }).join("");
}

function renderFleet(snapshot) {
  const rows = fleetExamples.map((vehicle, index) => {
    const status = vehicle.status === "Available" && index >= snapshot.ambulances ? "Assigned · demo" : vehicle.status;
    return `<tr><td>${vehicle.id}</td><td>${vehicle.type}</td><td><span class="demo-state">${status}</span></td><td>Not provided</td><td>Not available</td></tr>`;
  });
  document.getElementById("ambulanceRows").innerHTML = rows.join("");
  document.getElementById("emergencyRows").innerHTML = emergencyExamples.map((item) => `
    <tr><td>${item.id}</td><td>${item.source}</td><td><span class="demo-state">${item.state}</span></td><td>${item.unit}</td><td>Not provided</td></tr>
  `).join("");
}

function renderLabs(snapshot) {
  document.getElementById("labRows").innerHTML = labExamples.map((item, index) => `
    <tr><td>${item.id}</td><td>${item.test}</td><td><span class="demo-state">${item.state}</span></td><td>${index === 0 ? "Not verified" : "Pending · demo"}</td></tr>
  `).join("");
  document.getElementById("labDemoPending").innerHTML = `${snapshot.labs} <small>demo examples</small>`;
}

function updateSnapshot(index, message = "Synthetic snapshot refreshed") {
  snapshotIndex = (index + snapshots.length) % snapshots.length;
  const snapshot = snapshots[snapshotIndex];
  const occupancyPercent = Math.round(snapshot.occupied / snapshot.staffed * 100);
  const staffedPercent = Math.round(snapshot.staffed / snapshot.operational * 100);
  const updateTime = new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(new Date());

  document.getElementById("metricPhysical").textContent = numberFormat.format(1000);
  document.getElementById("metricStaffed").innerHTML = `${numberFormat.format(snapshot.staffed)} <small>/ ${numberFormat.format(snapshot.operational)} operational</small>`;
  document.getElementById("metricStaffedPct").textContent = `${staffedPercent}%`;
  document.getElementById("metricOccupied").innerHTML = `${numberFormat.format(snapshot.occupied)} <small>/ ${numberFormat.format(snapshot.staffed)} staffed</small>`;
  document.getElementById("metricOccupancy").textContent = `${occupancyPercent}%`;
  document.getElementById("metricAppointments").textContent = numberFormat.format(snapshot.appointments);
  document.getElementById("metricCheckedIn").textContent = `${snapshot.checkedIn} checked in`;
  document.getElementById("metricAmbulances").innerHTML = `${snapshot.ambulances} <small>/ 30</small>`;
  document.getElementById("demoPhysical").textContent = numberFormat.format(1000);
  document.getElementById("demoOperational").textContent = numberFormat.format(snapshot.operational);
  document.getElementById("demoStaffed").textContent = numberFormat.format(snapshot.staffed);
  document.getElementById("demoAvailable").textContent = numberFormat.format(snapshot.available);
  document.getElementById("demoOccupiedTotal").textContent = `${numberFormat.format(snapshot.occupied)} beds`;
  document.getElementById("demoReserved").textContent = snapshot.reserved;
  document.getElementById("demoCleaning").textContent = snapshot.cleaning;
  document.getElementById("demoMaintenance").textContent = snapshot.maintenance;
  document.getElementById("demoUnstaffed").textContent = numberFormat.format(snapshot.operational - snapshot.staffed);
  document.getElementById("doctorsOnDuty").textContent = `${snapshot.onDuty} / 250 demo`;
  document.getElementById("emergencyArrivals").textContent = `${snapshot.emergency} today · demo`;
  document.getElementById("pendingLabs").textContent = `${snapshot.labs} · demo`;
  document.getElementById("departmentDemoOccupied").innerHTML = `${numberFormat.format(snapshot.occupied)} <small>demo only</small>`;
  document.getElementById("departmentDemoTotal").textContent = `${numberFormat.format(snapshot.occupied)} demo`;
  document.getElementById("staffDemoDuty").innerHTML = `${snapshot.onDuty} <small>simulated on duty</small>`;
  document.getElementById("demoEncounterCount").innerHTML = `${demoPatients.length} <small>examples</small>`;
  document.getElementById("demoWaitingCount").innerHTML = `${snapshot.waiting} <small>examples</small>`;
  document.getElementById("demoAppointmentCount").innerHTML = `${snapshot.appointments} <small>examples</small>`;
  document.getElementById("demoCheckins").innerHTML = `${snapshot.checkedIn} <small>examples</small>`;
  document.getElementById("bedPhysical").textContent = numberFormat.format(1000);
  document.getElementById("bedOperational").textContent = numberFormat.format(snapshot.operational);
  document.getElementById("bedStaffed").textContent = numberFormat.format(snapshot.staffed);
  document.getElementById("bedAvailable").textContent = numberFormat.format(snapshot.available);
  document.getElementById("fleetAvailable").innerHTML = `${snapshot.ambulances} <small>simulated</small>`;
  document.getElementById("emergencyDemoCount").innerHTML = `${snapshot.emergency} <small>demo today</small>`;
  document.getElementById("lastUpdated").textContent = `Demo refresh · ${updateTime}`;
  document.getElementById("refreshStatus").textContent = `${message} · ${updateTime}`;

  renderDepartments(searchInput.value);
  renderStaffing(snapshot);
  renderWardRows(snapshot);
  renderFleet(snapshot);
  renderLabs(snapshot);
  document.getElementById("activityList").innerHTML = activityExamples[snapshotIndex].map((activity) => `
    <div class="activity-item"><span class="activity-dot"></span><span class="activity-copy"><strong>${activity.title}</strong><small>${activity.detail}</small></span><time>${activity.time}</time></div>
  `).join("");
}

function scheduleRefresh() {
  window.clearInterval(refreshTimer);
  if (autoRefresh) {
    refreshTimer = window.setInterval(() => updateSnapshot(snapshotIndex + 1, "Synthetic snapshot auto-refreshed"), 15000);
  }
}

function showView(name) {
  const view = document.getElementById(`view-${name}`);
  if (!view) return;
  document.querySelectorAll(".view-panel").forEach((panel) => {
    panel.hidden = panel !== view;
    panel.classList.toggle("active", panel === view);
  });
  navItems.forEach((item) => {
    const active = item.dataset.view === name;
    item.classList.toggle("active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  document.getElementById("breadcrumbCurrent").textContent = view.querySelector("h1")?.textContent?.trim() ?? "Overview";
  window.scrollTo({ top: 0, behavior: "smooth" });
  closeNavigation();
}

const sidebar = document.getElementById("sidebar");
const mobileBackdrop = document.getElementById("mobileBackdrop");

function openNavigation() {
  sidebar.classList.add("open");
  mobileBackdrop.classList.add("visible");
}

function closeNavigation() {
  sidebar.classList.remove("open");
  mobileBackdrop.classList.remove("visible");
}

document.getElementById("todayDate").textContent = new Intl.DateTimeFormat("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}).format(new Date());

document.querySelectorAll("[data-view]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.view));
});
document.querySelectorAll("[data-view-link]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewLink));
});
searchInput.addEventListener("input", () => renderDepartments(searchInput.value));
document.getElementById("openMenu").addEventListener("click", openNavigation);
document.getElementById("closeMenu").addEventListener("click", closeNavigation);
mobileBackdrop.addEventListener("click", closeNavigation);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});
document.getElementById("refreshDemo").addEventListener("click", () => {
  updateSnapshot(snapshotIndex + 1, "Synthetic snapshot manually refreshed");
});
document.getElementById("demoToggle").addEventListener("click", (event) => {
  autoRefresh = !autoRefresh;
  const button = event.currentTarget;
  button.setAttribute("aria-pressed", String(autoRefresh));
  document.getElementById("demoToggleLabel").textContent = autoRefresh ? "Pause demo" : "Resume demo";
  document.getElementById("refreshStatus").textContent = autoRefresh ? "Synthetic auto-refresh is running" : "Synthetic auto-refresh paused";
  scheduleRefresh();
});

renderPatients();
renderAppointments();
updateSnapshot(0, "Synthetic demo initialized");
scheduleRefresh();
