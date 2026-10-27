/* =========================================================
   CONFIG — edit these values to customise the site
   ========================================================= */
const CONFIG = {
  // WhatsApp number that receives the briefs (digits only, with country code)
  whatsappNumber: "97471009494",
  // Default language when the client opens the link ("en" or "ar").
  // Send a link ending with ?lang=ar to open it directly in Arabic.
  defaultLang: "en",
};

/* =========================================================
   TEXTS
   ========================================================= */
const I18N = {
  en: {
    brand: "Project Brief",
    navServices: "Services",
    navPackages: "Packages",
    navStart: "Start",
    heroBadge: "Web & Mobile App Development",
    heroTitle: "Turn your idea into a website or app that grows your business",
    heroText: "Fill in a short brief about your project. Your details go straight to our WhatsApp and we will get back to you with a tailored proposal.",
    heroCta: "Start your project",
    heroCta2: "View packages",
    stat1: "Response time",
    stat2: "Custom design",
    stat3: "Bilingual support",
    servicesTitle: "What we build",
    servicesSub: "Pick what fits your project — it will be selected for you in the form below.",
    packagesTitle: "Packages",
    packagesSub: "Choose a starting point. Every package is customised to your needs.",
    choosePackage: "Choose this package",
    mostPopular: "Most popular",
    formTitle: "Tell us about your project",
    formSub: "Fields marked with * are required.",
    secContact: "Your details",
    fName: "Full name *",
    fCompany: "Company / Brand",
    fPhone: "Phone / WhatsApp *",
    fEmail: "Email",
    fCountry: "Country / City",
    fIndustry: "Business field",
    phIndustry: "e.g. Restaurant, Real estate, Clinic",
    secType: "Project type *",
    fOtherType: "Describe the project type",
    secDetails: "Project details",
    fStatus: "Project status",
    fPlatforms: "Platforms",
    fLanguages: "Site / app languages",
    fFeatures: "Required features",
    fPages: "Approx. number of pages / screens",
    fDesign: "Do you have a design / logo?",
    fBudget: "Estimated budget",
    fTimeline: "Desired timeline",
    fPackage: "Preferred package",
    fReference: "Reference websites / apps",
    fDescription: "Describe your project in detail *",
    phDescription: "What is the idea? Who are your customers? What should users be able to do?",
    fNotes: "Anything else?",
    submit: "Send details on WhatsApp",
    submitHint: "WhatsApp will open with your details pre-filled — just press send.",
    footer: "All rights reserved.",
    select: "— Select —",
    errRequired: "Please fill in the required fields: ",
    errPhone: "Please enter a valid phone number.",
    errEmail: "Please enter a valid email address.",
    // WhatsApp message
    msgTitle: "📋 *New Project Request*",
    msgContact: "👤 *Client details*",
    msgProject: "🧩 *Project*",
    msgDetails: "📝 *Description*",
    msgLang: "Form language",
    lName: "Name", lCompany: "Company", lPhone: "Phone", lEmail: "Email", lCountry: "Country/City",
    lIndustry: "Business field", lType: "Project type", lStatus: "Status", lPlatforms: "Platforms",
    lLanguages: "Languages", lFeatures: "Features", lPages: "Pages/Screens", lDesign: "Design/Logo",
    lBudget: "Budget", lTimeline: "Timeline", lPackage: "Package", lReference: "References", lNotes: "Notes", lDescription: "Project description",
    langName: "English",
  },
  ar: {
    brand: "طلب مشروع",
    navServices: "الخدمات",
    navPackages: "الباقات",
    navStart: "ابدأ",
    heroBadge: "تطوير المواقع وتطبيقات الجوال",
    heroTitle: "حوّل فكرتك إلى موقع أو تطبيق ينمّي أعمالك",
    heroText: "املأ نموذجاً قصيراً عن مشروعك، وستصلنا التفاصيل مباشرة على الواتساب لنتواصل معك بعرض مناسب لاحتياجاتك.",
    heroCta: "ابدأ مشروعك",
    heroCta2: "عرض الباقات",
    stat1: "سرعة الرد",
    stat2: "تصميم مخصص",
    stat3: "دعم اللغتين",
    servicesTitle: "ماذا نطوّر",
    servicesSub: "اختر ما يناسب مشروعك — وسيتم تحديده تلقائياً في النموذج بالأسفل.",
    packagesTitle: "الباقات",
    packagesSub: "اختر نقطة البداية، وكل باقة قابلة للتخصيص حسب احتياجك.",
    choosePackage: "اختر هذه الباقة",
    mostPopular: "الأكثر طلباً",
    formTitle: "أخبرنا عن مشروعك",
    formSub: "الحقول المعلّمة بـ * إلزامية.",
    secContact: "بياناتك",
    fName: "الاسم الكامل *",
    fCompany: "الشركة / العلامة التجارية",
    fPhone: "رقم الجوال / واتساب *",
    fEmail: "البريد الإلكتروني",
    fCountry: "الدولة / المدينة",
    fIndustry: "مجال النشاط",
    phIndustry: "مثال: مطعم، عقارات، عيادة",
    secType: "نوع المشروع *",
    fOtherType: "صف نوع المشروع",
    secDetails: "تفاصيل المشروع",
    fStatus: "حالة المشروع",
    fPlatforms: "المنصات",
    fLanguages: "لغات الموقع / التطبيق",
    fFeatures: "المميزات المطلوبة",
    fPages: "عدد الصفحات / الشاشات تقريباً",
    fDesign: "هل لديك تصميم / شعار؟",
    fBudget: "الميزانية التقديرية",
    fTimeline: "المدة المطلوبة للتنفيذ",
    fPackage: "الباقة المفضلة",
    fReference: "مواقع / تطبيقات مرجعية",
    fDescription: "اشرح فكرة مشروعك بالتفصيل *",
    phDescription: "ما هي الفكرة؟ من هم عملاؤك؟ ماذا يجب أن يستطيع المستخدم فعله؟",
    fNotes: "ملاحظات إضافية",
    submit: "إرسال التفاصيل عبر واتساب",
    submitHint: "سيُفتح واتساب والتفاصيل مكتوبة جاهزة — فقط اضغط إرسال.",
    footer: "جميع الحقوق محفوظة.",
    select: "— اختر —",
    errRequired: "يرجى تعبئة الحقول الإلزامية: ",
    errPhone: "يرجى إدخال رقم جوال صحيح.",
    errEmail: "يرجى إدخال بريد إلكتروني صحيح.",
    msgTitle: "📋 *طلب مشروع جديد*",
    msgContact: "👤 *بيانات العميل*",
    msgProject: "🧩 *المشروع*",
    msgDetails: "📝 *الوصف*",
    msgLang: "لغة النموذج",
    lName: "الاسم", lCompany: "الشركة", lPhone: "الجوال", lEmail: "البريد", lCountry: "الدولة/المدينة",
    lIndustry: "مجال النشاط", lType: "نوع المشروع", lStatus: "الحالة", lPlatforms: "المنصات",
    lLanguages: "اللغات", lFeatures: "المميزات", lPages: "الصفحات/الشاشات", lDesign: "التصميم/الشعار",
    lBudget: "الميزانية", lTimeline: "المدة", lPackage: "الباقة", lReference: "المراجع", lNotes: "ملاحظات", lDescription: "وصف المشروع",
    langName: "العربية",
  },
};

/* =========================================================
   OPTIONS
   ========================================================= */
const PROJECT_TYPES = [
  { id: "website", icon: "🌐", en: "Company website", ar: "موقع شركة تعريفي",
    dEn: "A professional website that presents your business and services.", dAr: "موقع احترافي يعرّف بنشاطك وخدماتك." },
  { id: "ecommerce", icon: "🛒", en: "E-commerce store", ar: "متجر إلكتروني",
    dEn: "Sell online with payments, cart, orders and shipping.", dAr: "بيع أونلاين مع الدفع والسلة والطلبات والشحن." },
  { id: "mobile", icon: "📱", en: "Mobile app", ar: "تطبيق جوال",
    dEn: "Native or cross-platform apps for iOS and Android.", dAr: "تطبيقات iOS و Android أصلية أو متعددة المنصات." },
  { id: "webapp", icon: "⚙️", en: "Web application / SaaS", ar: "نظام ويب / منصة SaaS",
    dEn: "Custom platforms, portals and dashboards.", dAr: "منصات وبوابات ولوحات تحكم مخصصة." },
  { id: "landing", icon: "🚀", en: "Landing page", ar: "صفحة هبوط",
    dEn: "High-converting page for ads and campaigns.", dAr: "صفحة عالية التحويل للإعلانات والحملات." },
  { id: "booking", icon: "📅", en: "Booking system", ar: "نظام حجوزات",
    dEn: "Appointments, reservations and scheduling.", dAr: "مواعيد وحجوزات وجدولة." },
  { id: "erp", icon: "🏢", en: "ERP / CRM system", ar: "نظام ERP / CRM",
    dEn: "Manage sales, inventory, HR and customers.", dAr: "إدارة المبيعات والمخزون والموظفين والعملاء." },
  { id: "uiux", icon: "🎨", en: "UI/UX design", ar: "تصميم UI/UX",
    dEn: "Design of interfaces and user experience.", dAr: "تصميم الواجهات وتجربة المستخدم." },
  { id: "redesign", icon: "🔄", en: "Redesign / development", ar: "إعادة تصميم / تطوير",
    dEn: "Improve or rebuild an existing website or app.", dAr: "تحسين أو إعادة بناء موقع أو تطبيق قائم." },
  { id: "other", icon: "✨", en: "Other", ar: "أخرى",
    dEn: "Something else? Tell us about it.", dAr: "شيء آخر؟ أخبرنا عنه." },
];

const STATUS = [
  { id: "idea", en: "Just an idea", ar: "مجرد فكرة" },
  { id: "planned", en: "Requirements ready", ar: "المتطلبات جاهزة" },
  { id: "design", en: "Design ready", ar: "التصميم جاهز" },
  { id: "existing", en: "Existing project", ar: "مشروع قائم" },
];

const PLATFORMS = [
  { id: "web", en: "Website", ar: "موقع ويب" },
  { id: "ios", en: "iOS", ar: "iOS" },
  { id: "android", en: "Android", ar: "Android" },
  { id: "admin", en: "Admin dashboard", ar: "لوحة تحكم" },
  { id: "desktop", en: "Desktop", ar: "سطح المكتب" },
];

const LANGUAGES = [
  { id: "ar", en: "Arabic", ar: "العربية" },
  { id: "en", en: "English", ar: "الإنجليزية" },
  { id: "other", en: "Other", ar: "لغات أخرى" },
];

const FEATURES = [
  { id: "login", en: "User accounts / login", ar: "تسجيل دخول وحسابات" },
  { id: "payment", en: "Online payment", ar: "الدفع الإلكتروني" },
  { id: "cart", en: "Cart & orders", ar: "سلة وطلبات" },
  { id: "booking", en: "Booking / appointments", ar: "حجوزات / مواعيد" },
  { id: "chat", en: "Chat / messaging", ar: "دردشة / رسائل" },
  { id: "notifications", en: "Push notifications", ar: "إشعارات" },
  { id: "maps", en: "Maps & location", ar: "خرائط وتحديد موقع" },
  { id: "blog", en: "Blog / news", ar: "مدونة / أخبار" },
  { id: "multilang", en: "Multi-language", ar: "تعدد اللغات" },
  { id: "seo", en: "SEO", ar: "تحسين محركات البحث SEO" },
  { id: "analytics", en: "Reports & analytics", ar: "تقارير وإحصائيات" },
  { id: "integrations", en: "Third-party integrations / API", ar: "ربط مع أنظمة خارجية / API" },
  { id: "delivery", en: "Delivery / tracking", ar: "توصيل / تتبع" },
  { id: "reviews", en: "Ratings & reviews", ar: "تقييمات ومراجعات" },
  { id: "hosting", en: "Hosting & domain", ar: "استضافة ودومين" },
  { id: "maintenance", en: "Maintenance & support", ar: "صيانة ودعم فني" },
];

const PAGES = [
  { id: "1-5", en: "1 – 5", ar: "1 – 5" },
  { id: "6-10", en: "6 – 10", ar: "6 – 10" },
  { id: "11-20", en: "11 – 20", ar: "11 – 20" },
  { id: "20+", en: "More than 20", ar: "أكثر من 20" },
  { id: "unknown", en: "Not sure", ar: "غير متأكد" },
];

const DESIGN = [
  { id: "both", en: "Yes, design and logo", ar: "نعم، تصميم وشعار" },
  { id: "logo", en: "Logo only", ar: "الشعار فقط" },
  { id: "none", en: "No, I need design", ar: "لا، أحتاج تصميم" },
];

const BUDGET = [
  { id: "b1", en: "Less than $1,000", ar: "أقل من 1,000 دولار" },
  { id: "b2", en: "$1,000 – $3,000", ar: "1,000 – 3,000 دولار" },
  { id: "b3", en: "$3,000 – $7,000", ar: "3,000 – 7,000 دولار" },
  { id: "b4", en: "$7,000 – $15,000", ar: "7,000 – 15,000 دولار" },
  { id: "b5", en: "More than $15,000", ar: "أكثر من 15,000 دولار" },
  { id: "b6", en: "Not decided yet", ar: "لم أحدد بعد" },
];

const TIMELINE = [
  { id: "urgent", en: "Urgent (less than 2 weeks)", ar: "عاجل (أقل من أسبوعين)" },
  { id: "1m", en: "Within 1 month", ar: "خلال شهر" },
  { id: "1-3m", en: "1 – 3 months", ar: "1 – 3 أشهر" },
  { id: "3m+", en: "More than 3 months", ar: "أكثر من 3 أشهر" },
  { id: "flex", en: "Flexible", ar: "مرن" },
];

const PACKAGES = [
  {
    id: "basic", en: "Basic", ar: "الأساسية",
    dEn: "For startups and small businesses", dAr: "للمشاريع الناشئة والصغيرة",
    pEn: "Request a quote", pAr: "حسب الطلب",
    fEn: ["Up to 5 pages", "Responsive design", "Contact form & WhatsApp", "Basic SEO", "1 month support"],
    fAr: ["حتى 5 صفحات", "تصميم متجاوب مع الجوال", "نموذج تواصل وواتساب", "تهيئة SEO أساسية", "دعم فني لمدة شهر"],
  },
  {
    id: "pro", en: "Professional", ar: "الاحترافية", featured: true,
    dEn: "For growing businesses and online stores", dAr: "للأعمال المتنامية والمتاجر الإلكترونية",
    pEn: "Request a quote", pAr: "حسب الطلب",
    fEn: ["Up to 15 pages or an online store", "Custom UI/UX design", "Admin dashboard", "Payment gateway", "Arabic & English", "3 months support"],
    fAr: ["حتى 15 صفحة أو متجر إلكتروني", "تصميم UI/UX مخصص", "لوحة تحكم", "بوابة دفع إلكتروني", "عربي وإنجليزي", "دعم فني لمدة 3 أشهر"],
  },
  {
    id: "enterprise", en: "Enterprise", ar: "المتكاملة",
    dEn: "Mobile apps and custom systems", dAr: "تطبيقات الجوال والأنظمة المخصصة",
    pEn: "Request a quote", pAr: "حسب الطلب",
    fEn: ["iOS & Android apps", "Custom web platform", "Integrations & APIs", "Advanced reports", "Publishing on stores", "6 months support"],
    fAr: ["تطبيقات iOS و Android", "منصة ويب مخصصة", "ربط وتكاملات API", "تقارير متقدمة", "النشر على المتاجر", "دعم فني لمدة 6 أشهر"],
  },
  {
    id: "unsure", en: "Not sure yet", ar: "غير متأكد", hidden: true,
  },
];

/* =========================================================
   APP
   ========================================================= */
let lang = CONFIG.defaultLang;
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const form = $("#briefForm");

function initialLang() {
  const param = new URLSearchParams(location.search).get("lang");
  if (param === "ar" || param === "en") return param;
  try {
    const saved = localStorage.getItem("brief-lang");
    if (saved === "ar" || saved === "en") return saved;
  } catch (e) { /* storage unavailable */ }
  return CONFIG.defaultLang;
}

function t(key) { return I18N[lang][key] ?? key; }
function label(item) { return item[lang]; }

// Keep current selections when re-rendering after a language switch
function snapshot() {
  const data = {};
  $$("input, select, textarea", form).forEach((el) => {
    if (el.type === "checkbox") {
      data[el.name] = data[el.name] || [];
      if (el.checked) data[el.name].push(el.value);
    } else if (el.type === "radio") {
      if (el.checked) data[el.name] = el.value;
    } else {
      data[el.name] = el.value;
    }
  });
  return data;
}

function restore(data) {
  $$("input, select, textarea", form).forEach((el) => {
    const v = data[el.name];
    if (v === undefined) return;
    if (el.type === "checkbox") el.checked = Array.isArray(v) && v.includes(el.value);
    else if (el.type === "radio") el.checked = v === el.value;
    else el.value = v;
  });
  toggleOtherType();
}

function renderChoices(container, items, name, type, cls) {
  container.innerHTML = items.map((it) => `
    <label class="${cls}">
      <input type="${type}" name="${name}" value="${it.id}" />
      <span>${it.icon ? `<b>${it.icon}</b>` : ""}${label(it)}</span>
    </label>`).join("");
}

function renderSelect(select, items) {
  select.innerHTML = `<option value="">${t("select")}</option>` +
    items.map((it) => `<option value="${it.id}">${label(it)}</option>`).join("");
}

function renderServices() {
  $("#servicesGrid").innerHTML = PROJECT_TYPES.filter((p) => p.id !== "other").map((p) => `
    <button type="button" class="service" data-type="${p.id}">
      <div class="icon">${p.icon}</div>
      <h3>${label(p)}</h3>
      <p>${lang === "ar" ? p.dAr : p.dEn}</p>
    </button>`).join("");
}

function renderPackages() {
  $("#packagesGrid").innerHTML = PACKAGES.filter((p) => !p.hidden).map((p) => `
    <div class="package ${p.featured ? "featured" : ""}">
      ${p.featured ? `<span class="ribbon">${t("mostPopular")}</span>` : ""}
      <h3>${label(p)}</h3>
      <p class="pkg-desc">${lang === "ar" ? p.dAr : p.dEn}</p>
      <div class="price">${lang === "ar" ? p.pAr : p.pEn}</div>
      <ul>${(lang === "ar" ? p.fAr : p.fEn).map((f) => `<li>${f}</li>`).join("")}</ul>
      <button type="button" class="btn btn-outline" data-package="${p.id}">${t("choosePackage")}</button>
    </div>`).join("");
}

function render() {
  const data = snapshot();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = lang === "ar" ? "ابدأ مشروعك" : "Start Your Project";
  $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$("[data-i18n-ph]").forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  $("#langToggle").textContent = lang === "ar" ? "English" : "العربية";

  renderServices();
  renderPackages();
  renderChoices($("#typeChoices"), PROJECT_TYPES, "type", "radio", "choice");
  renderChoices($("#statusChoices"), STATUS, "status", "radio", "pill");
  renderChoices($("#platformChoices"), PLATFORMS, "platforms", "checkbox", "pill");
  renderChoices($("#languageChoices"), LANGUAGES, "languages", "checkbox", "pill");
  renderChoices($("#featureChoices"), FEATURES, "features", "checkbox", "check");
  renderSelect($("#pagesSelect"), PAGES);
  renderSelect($("#designSelect"), DESIGN);
  renderSelect($("#budgetSelect"), BUDGET);
  renderSelect($("#timelineSelect"), TIMELINE);
  renderSelect($("#packageSelect"), PACKAGES);

  restore(data);
  $("#formError").classList.add("hidden");
}

function setLang(next) {
  lang = next;
  try { localStorage.setItem("brief-lang", lang); } catch (e) { /* ignore */ }
  render();
}

function toggleOtherType() {
  const checked = $('input[name="type"]:checked', form);
  $("#otherTypeWrap").classList.toggle("hidden", !checked || checked.value !== "other");
}

function selectType(id) {
  const input = $(`input[name="type"][value="${id}"]`, form);
  if (input) { input.checked = true; toggleOtherType(); $("#typeChoices").classList.remove("invalid"); }
  $("#brief").scrollIntoView({ behavior: "smooth" });
}

function selectPackage(id) {
  $("#packageSelect").value = id;
  $("#brief").scrollIntoView({ behavior: "smooth" });
}

/* ---------- Validation & WhatsApp message ---------- */
function listSep() { return lang === "ar" ? "، " : ", "; }

function findLabel(list, id) {
  const it = list.find((x) => x.id === id);
  return it ? label(it) : "";
}

function validate(data) {
  $$(".invalid", form).forEach((el) => el.classList.remove("invalid"));
  const missing = [];
  const mark = (el) => el && el.classList.add("invalid");

  if (!data.name.trim()) { missing.push(t("lName")); mark(form.elements.name); }
  if (!data.phone.trim()) { missing.push(t("lPhone")); mark(form.elements.phone); }
  if (!data.type) { missing.push(t("lType")); mark($("#typeChoices")); }
  if (!data.description.trim()) { missing.push(t("lDescription")); mark(form.elements.description); }

  if (missing.length) return t("errRequired") + missing.join(listSep());
  if (data.phone.replace(/\D/g, "").length < 7) { mark(form.elements.phone); return t("errPhone"); }
  if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) { mark(form.elements.email); return t("errEmail"); }
  return "";
}

function buildMessage(d) {
  const lines = [];
  const add = (key, value) => {
    const v = (value || "").trim();
    if (v) lines.push(`• *${t(key)}:* ${v}`);
  };
  const joinList = (ids, list) => ids.map((id) => findLabel(list, id)).filter(Boolean).join(listSep());

  let type = findLabel(PROJECT_TYPES, d.type);
  if (d.type === "other" && d.otherType.trim()) type += ` (${d.otherType.trim()})`;

  lines.push(t("msgTitle"), "");
  lines.push(t("msgContact"));
  add("lName", d.name);
  add("lCompany", d.company);
  add("lPhone", d.phone);
  add("lEmail", d.email);
  add("lCountry", d.country);
  add("lIndustry", d.industry);
  lines.push("");
  lines.push(t("msgProject"));
  add("lType", type);
  add("lStatus", findLabel(STATUS, d.status));
  add("lPlatforms", joinList(d.platforms || [], PLATFORMS));
  add("lLanguages", joinList(d.languages || [], LANGUAGES));
  add("lFeatures", joinList(d.features || [], FEATURES));
  add("lPages", findLabel(PAGES, d.pages));
  add("lDesign", findLabel(DESIGN, d.design));
  add("lBudget", findLabel(BUDGET, d.budget));
  add("lTimeline", findLabel(TIMELINE, d.timeline));
  add("lPackage", findLabel(PACKAGES, d.package));
  add("lReference", d.reference);
  lines.push("");
  lines.push(t("msgDetails"));
  lines.push(d.description.trim());
  if (d.notes.trim()) { lines.push(""); lines.push(`• *${t("lNotes")}:* ${d.notes.trim()}`); }
  lines.push("");
  lines.push(`🌐 ${t("msgLang")}: ${t("langName")}`);
  return lines.join("\n");
}

function whatsappUrl(text) {
  return `https://wa.me/${CONFIG.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

/* ---------- Events ---------- */
document.addEventListener("click", (e) => {
  const service = e.target.closest("[data-type]");
  if (service) return selectType(service.dataset.type);
  const pkg = e.target.closest("[data-package]");
  if (pkg) return selectPackage(pkg.dataset.package);
});

form.addEventListener("change", (e) => {
  if (e.target.name === "type") { toggleOtherType(); $("#typeChoices").classList.remove("invalid"); }
});
form.addEventListener("input", (e) => e.target.classList.remove("invalid"));

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = snapshot();
  const error = validate(data);
  const box = $("#formError");
  if (error) {
    box.textContent = error;
    box.classList.remove("hidden");
    ($(".invalid", form) || box).scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  box.classList.add("hidden");
  window.open(whatsappUrl(buildMessage(data)), "_blank", "noopener");
});

$("#langToggle").addEventListener("click", () => setLang(lang === "ar" ? "en" : "ar"));

$("#waFloat").href = whatsappUrl("");
$("#year").textContent = new Date().getFullYear();
lang = initialLang();
render();
