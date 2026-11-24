/**
 * Sathwika Kukkadapu — Clean, Modern Developer Portfolio Engine
 */

const PROJECTS_DATA = {
  "secure-image-search": {
    title: "SecureImage: Privacy-Preserving Image Search",
    category: "AI/ML Research | Computer Vision",
    badge: "Research System",
    shortDesc: "A privacy-preserving visual search platform guaranteeing zero query image pixels reach the retrieval server using deep learning and vector encryption.",
    technologies: ["Python", "PyTorch", "FAISS", "TenSEAL CKKS", "MobileNetV3", "FastAPI"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder/secure-image-search",
    demoUrl: null,
    problemStatement: "Searching sensitive image databases (medical scans, private identity archives) traditionally requires sending raw photos to third-party cloud servers, risking image interception and privacy leaks.",
    solution: "Engineered a zero-pixel client-server architecture where image feature extraction occurs strictly inside the local client memory. The untrusted server receives only a 512-D protected vector or homomorphically encrypted ciphertext.",
    keyFeatures: [
      "Zero-Pixel Query Invariant: 0 raw image pixels leave the client machine.",
      "Vector Search with FAISS: Fast cosine similarity search across high-dimensional feature embeddings.",
      "Local Differential Privacy (LDP): Rigorously calibrated Gaussian and Laplace perturbation mechanisms.",
      "Homomorphic Inner Products: Microsoft SEAL CKKS leveled homomorphic encryption engine.",
      "AES-256-GCM Envelope Encryption: Unique keys encrypting private image storage catalogs."
    ],
    myContribution: "Engineered the client-server protocol, integrated FAISS cosine search, tuned the Differential Privacy noise calibration, and built the FastAPI backend.",
    challenges: "Maintaining high retrieval accuracy while adding differential privacy noise, resolved by optimizing orthogonal dimension reduction prior to noise perturbation."
  },

  "medlens-ai": {
    title: "MedLens 2.0: Clinical Lab Information Intelligence",
    category: "Healthcare AI | Full-Stack Web",
    badge: "Production Ready",
    shortDesc: "A patient-friendly medical report intelligence platform organizing unstructured lab PDFs into visual range gauges, longitudinal delta trends, and FHIR export.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "OpenAI GPT-4o-mini", "Web Speech API"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder/MedLens-AI",
    demoUrl: "https://medlens-ai-qm1g.vercel.app/",
    problemStatement: "Patients and doctors frequently struggle to interpret confusing, scattered laboratory test reports and track how lab parameters change between visits.",
    solution: "Built a safety-first clinical intelligence dashboard pairing bounded AI extraction with strictly deterministic visual range evaluation (NORMAL/LOW/HIGH computed by code, never by AI).",
    keyFeatures: [
      "Visual 3-Zone Range Gauges: Color-coded meters (Low: Blue, Normal: Green, High: Amber/Red) showing exact value pins relative to lab reference ranges.",
      "Longitudinal Trend Tracking: Mathematical delta comparison (+24.4% ▲) between prior and current doctor visits.",
      "Audio Summary Narration: Native Web Speech API reading plain-language summaries aloud for accessibility.",
      "Auditable Human Ledger: Allows patients to review, verify, and correct values with full provenance trails.",
      "Printable Clinical Dossier & FHIR Export: 1-click clinical handover sheet and HL7 FHIR standard export."
    ],
    myContribution: "Developed the deterministic reference range logic, built the longitudinal delta tracking, integrated Web Speech accessibility, and styled the UI with Tailwind CSS.",
    challenges: "Preventing AI hallucinations in lab metrics, solved by strictly using code logic to evaluate values against report reference bounds."
  },

  "setucheck": {
    title: "SetuCheck: Pre-Submission Welfare Document Auditor",
    category: "Civic AI | Decision Support",
    badge: "Hackathon Finalist",
    shortDesc: "An explainable document auditing tool that cross-checks citizen identity proofs before government welfare scheme submission to eliminate rejections.",
    technologies: ["Python 3.11", "FastAPI", "React 19", "OpenCV", "PyMuPDF", "RapidFuzz", "ReportLab"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder/SetuCheck",
    demoUrl: "https://setu-check.vercel.app",
    problemStatement: "Citizens applying for welfare schemes (NOAPS pensions, PM-KISAN, Ration Cards) often face months of delays or rejections due to minor spelling variances or invalid IFSC codes.",
    solution: "Created an automated pre-submission auditor combining OCR extraction, deterministic RBI banking rule checks, RapidFuzz token matching, and multilingual voice assistance in Telugu, Hindi, and English.",
    keyFeatures: [
      "Explainable 0-100 Readiness Score: Clear, documented deductions without black-box scoring.",
      "Smart Comparison Engine: RapidFuzz token-sort similarity handling honorific titles (Shri/Smt) and inverted names.",
      "Strict RBI IFSC Format Rule: Validates 11-character RBI standard (5th character zero).",
      "Multilingual Voice Guidance: Rectification instructions read aloud in Telugu, Hindi, and English.",
      "Printable PDF Dossier: ReportLab dynamically compiles audit summaries for rural kiosk operators."
    ],
    myContribution: "Implemented the smart fuzzy comparison logic, wrote the RBI banking validation rules, integrated PyMuPDF extraction, and connected the React frontend to FastAPI.",
    challenges: "Handling poorly scanned documents, addressed using OpenCV bilateral denoising and adaptive thresholding."
  },

  "regulens": {
    title: "ReguLens AI: Regulatory Document Review",
    category: "AI Platform | SIH 2026 Prototype",
    badge: "SIH Prototype",
    shortDesc: "Automated regulatory approval and institutional docket consistency verification engine for education and safety authorities.",
    technologies: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "jsPDF"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder/regulens",
    demoUrl: "https://regulens-vea7.vercel.app/",
    problemStatement: "Higher education accreditation bodies process massive institutional dossiers where manual inspection often misses conflicting survey numbers or missing safety NOC certificates.",
    solution: "Engineered an inspection platform that normalizes document parameters across filings, highlights survey number discrepancies side-by-side, drafts statutory Notices of Defect, and exports signed committee dossiers.",
    keyFeatures: [
      "Cross-Document Mismatch Engine: Flags conflicting Survey Numbers, Plot IDs, and Land Area across deeds and safety reports.",
      "Missing Statutory Enclosure Checks: Verifies files against configured regulatory requirements.",
      "Fuzzy Name Resolution: Identifies slight institutional title variants across approvals.",
      "Inspector Triage & Notice Generator: Drafts official statutory Notice of Defect (RFE Form 4B) letters.",
      "Official PDF Dossier: Dynamically exports signed multi-page regulatory reports for board meetings."
    ],
    myContribution: "Built the multi-step case creation wizard, implemented parameter normalization algorithms, and developed the jsPDF committee dossier generator.",
    challenges: "Linking cross-document evidence cleanly in browser memory, resolved through optimized React state management."
  },

  "gitamitra": {
    title: "GitaMitra: Multilingual Sanskrit & AI Wisdom Reader",
    category: "Web Development | Multilingual AI",
    badge: "Completed Platform",
    shortDesc: "A digital Bhagavad Gita platform featuring 701 authentic verses with Sanskrit Devanagari, IAST transliteration, multilingual translations, and AI contextual explanations.",
    technologies: ["JavaScript", "React / Node", "Multilingual Corpus (701 Verses)", "REST APIs"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder/GitaMitra",
    demoUrl: null,
    problemStatement: "Traditional philosophical literature often feels inaccessible to modern learners without word-by-word grammatical breakdowns, pronunciation guides, and interactive contextual explanations.",
    solution: "Designed a clean reading portal organizing 701 verses with Sanskrit text, IAST transliteration, English/Hindi/Telugu translations, word-by-word glosses, and an 'Ask Krishna' contextual assistant.",
    keyFeatures: [
      "Complete 701-Verse Corpus: High-fidelity Sanskrit Devanagari text with accurate verse numbering.",
      "IAST Pronunciation: International Alphabet of Sanskrit Transliteration guides for authentic pronunciation.",
      "Multilingual Options: Select between English, Hindi, and Telugu translations.",
      "Word-by-Word Glosses: Detailed English breakdown of individual Sanskrit compound roots.",
      "Ask Krishna AI: Contextual inquiries grounded in authentic verse philosophy."
    ],
    myContribution: "Processed the 701-verse corpus datasets, built the responsive chapter/verse reader interface, and integrated the AI verse explanation endpoint.",
    challenges: "Handling complex Sanskrit unicode ligatures and responsive styling across mobile viewports."
  },

  "resolv-ai": {
    title: "Resolv: AI Infrastructure Maintenance Platform",
    category: "AI Application | Hackathon",
    badge: "TechnoVista 2K25",
    shortDesc: "Civic infrastructure problem reporting app combining computer vision classification with automated municipal technician dispatch.",
    technologies: ["React.js", "Tailwind CSS", "Firebase", "Gemini API", "Teachable Machine"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder",
    demoUrl: null,
    problemStatement: "Municipal infrastructure breakdowns (potholes, water leaks, electrical hazards) suffer from slow reporting, incorrect department categorization, and lack of tracking.",
    solution: "Constructed a mobile-friendly web app where citizens upload photos of civic issues. Vision models classify damage severity, extract geotags, and notify field technicians.",
    keyFeatures: [
      "AI Issue Classification: Vision models trained to detect potholes, pipe leaks, and electrical hazards.",
      "Multimodal Urgency Analysis: Gemini API analyzes citizen descriptions to estimate urgency and equipment required.",
      "Role-Based Dashboards: Dedicated views for citizens, technicians, and municipal admins.",
      "Real-Time Progress Tracking: Firebase Firestore powers live status updates from report to resolution."
    ],
    myContribution: "Led the frontend architecture in React and Tailwind CSS, integrated Firebase Firestore for real-time ticket sync, and connected the computer vision model.",
    challenges: "Handling photo uploads smoothly over weak mobile network connections."
  },

  "isro-space": {
    title: "ISRO Vikram Sarabhai Space Exhibition Website",
    category: "Web Development | Educational",
    badge: "Live Deployment",
    shortDesc: "Interactive educational portal commemorating the Vikram Sarabhai Space Exhibition – Space on Wheels initiative.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder",
    demoUrl: "https://isro-space-exhibition.vercel.app",
    problemStatement: "The mobile Space on Wheels exhibition needed a clean, engaging digital companion to educate students and visitors on Indian space missions and satellite technology.",
    solution: "Designed and deployed a responsive educational website featuring mission timelines, launch vehicle showcases (PSLV, GSLV, LVM3), and interactive quizzes.",
    keyFeatures: [
      "Interactive Mission Timeline: Historical and upcoming ISRO milestones and achievements.",
      "Launch Vehicle Showcase: Interactive breakdown of PSLV, GSLV, Chandrayaan, and Gaganyaan.",
      "Educational Modules: Engaging explanations of remote sensing, communications, and rocketry.",
      "Mobile-First Responsive Layout: Ultra-fast loading optimized for school tablets and smartphones."
    ],
    myContribution: "Built the responsive frontend layout, interactive mission timeline, and deployed the production build to Vercel.",
    challenges: "Designing high-quality space visuals and clean responsive layouts that load instantly on all devices."
  },

  "aquapredict": {
    title: "AquaPredict: Satellite Remote Sensing Water Quality AI",
    category: "AI/ML | Environmental Tech",
    badge: "GNITS-NRSC 2026",
    shortDesc: "AI predictive model architecture pairing ISRO/NRSC satellite multispectral imagery with ground sensors to forecast inland water quality metrics.",
    technologies: ["Python", "Scikit-Learn", "NumPy / Pandas", "Remote Sensing (NRSC)", "GIS Data"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder",
    demoUrl: null,
    problemStatement: "Inland water bodies in rural and semi-urban India suffer rapid contamination, yet manual laboratory testing is slow, expensive, and geographically restricted.",
    solution: "Designed an architectural pipeline combining satellite spectral reflectance bands (NDWI, chlorophyll-a indices) with regression models to estimate turbidity and contamination risks.",
    keyFeatures: [
      "Spectral Index Computation: Calculates Normalized Difference Water Index (NDWI) from satellite imagery.",
      "Ensemble Regression Modeling: Random Forest and Gradient Boosting algorithms predicting biochemical water indices.",
      "Early Contamination Alerts: Flags water bodies exceeding safe agricultural or potable thresholds.",
      "Hackathon Proposal: Prepared as a formal technical concept for the GNITS–NRSC National Hackathon 2026."
    ],
    myContribution: "Researched multispectral water band calculations, formulated the ML regression workflow, and designed the data architecture.",
    challenges: "Overcoming cloud cover interference in optical satellite data, resolved conceptually by pairing optical bands with radar surface signals."
  },

  "travel-together": {
    title: "TravelTogether: Full-Stack Travel Booking Platform",
    category: "Full-Stack Web | MERN",
    badge: "Live Deployment",
    shortDesc: "End-to-end travel discovery and tour booking web application with dynamic itineraries, reviews, and secure user authentication.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder/Travel_Together",
    demoUrl: "https://travel-together-alpha.vercel.app",
    problemStatement: "Travelers often encounter booking platforms that lack transparent itinerary breakdowns and collaborative trip planning features.",
    solution: "Built a full-stack MERN application offering searchable tour packages, interactive booking flows, dynamic price calculations, and customer reviews.",
    keyFeatures: [
      "Full Authentication: Secure user registration, JWT login, and session persistence.",
      "Interactive Tour Catalog: Real-time search, category filtering, and location discovery.",
      "Dynamic Booking Flow: Group size adjustments, automated cost tallying, and booking confirmations.",
      "MongoDB Data Model: Flexible document schemas for tours, users, and booking transactions."
    ],
    myContribution: "Developed the React client interface, constructed the Express.js API endpoints, and designed MongoDB schemas.",
    challenges: "Managing asynchronous state across dynamic booking forms and checkout summaries."
  },

  "sandphysics": {
    title: "SandPhysics: WebAssembly Cellular Automata",
    category: "Systems & WebAssembly | Physics",
    badge: "Live Simulation",
    shortDesc: "High-performance cellular automata sand physics simulator written in Rust and compiled to WebAssembly for smooth 60 FPS in-browser rendering.",
    technologies: ["Rust", "WebAssembly (WASM)", "HTML5 Canvas", "JavaScript"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder/sandphysics",
    demoUrl: "https://sandphysics.vercel.app",
    problemStatement: "Real-time physics simulations involving thousands of interacting particles typically struggle with performance bottlenecks when executed purely in single-threaded JavaScript.",
    solution: "Implemented the core grid cellular automata simulation in Rust, compiling it to WebAssembly to achieve native-speed memory manipulation on HTML5 Canvas.",
    keyFeatures: [
      "Native Speed WebAssembly: Compiles Rust logic directly to WASM for compute-heavy particle updates.",
      "Cellular Automata Engine: Simulates granular physics, tumbling angles, fluid flow, and solid obstacles.",
      "Interactive Canvas Tools: Draw sand, water, walls, and acid with variable brush sizes.",
      "Smooth 60 FPS Rendering: Direct memory buffer sharing between WASM linear memory and HTML5 Canvas."
    ],
    myContribution: "Configured the WASM-bindgen interface, connected the canvas rendering loop, and deployed the interactive demo to Vercel.",
    challenges: "Minimizing serialization overhead between JavaScript and WebAssembly by reading directly from WASM shared memory."
  },

  "ironclad": {
    title: "Ironclad: Responsive Fitness Website",
    category: "Frontend Web | Responsive Design",
    badge: "Completed Project",
    shortDesc: "A modern, highly responsive fitness and gym website featuring interactive membership calculators, trainer showcases, and class schedules.",
    technologies: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript"],
    githubUrl: "https://github.com/sathwikakukkadapu-coder/Ironclad-staticwebsite",
    demoUrl: null,
    problemStatement: "Fitness centers need high-converting, mobile-friendly landing pages that clearly communicate class schedules, pricing tiers, and membership benefits.",
    solution: "Crafted a clean, mobile-first responsive website with engaging layout grids, CSS transitions, interactive contact forms, and structured training programs.",
    keyFeatures: [
      "Mobile-First Responsive Layout: Adapts smoothly across smartphones, tablets, and wide monitors.",
      "Interactive Pricing Matrix: Toggle between monthly and annual membership tiers with fee breakdowns.",
      "Dynamic Class Timetable: Filterable schedule for strength, cardio, and yoga sessions.",
      "Clean Semantic Code: Accessible DOM structure and optimized asset loading."
    ],
    myContribution: "Created the complete UI design, responsive stylesheet, and interactive JavaScript tabs.",
    challenges: "Ensuring uniform typography and touch-target accessibility across diverse mobile devices."
  }
};

const FALLBACK_REPOS = [
  {
    name: "secure-image-search",
    language: "Python",
    description: "AI-powered private image search using protected visual representations (FAISS, TenSEAL CKKS, LDP, MobileNetV3).",
    html_url: "https://github.com/sathwikakukkadapu-coder/secure-image-search",
    homepage: null
  },
  {
    name: "MedLens-AI",
    language: "TypeScript",
    description: "AI-powered Clinical Information Intelligence platform built with Next.js 16, React 19, and Tailwind CSS v4.",
    html_url: "https://github.com/sathwikakukkadapu-coder/MedLens-AI",
    homepage: "https://medlens-ai-qm1g.vercel.app/"
  },
  {
    name: "SetuCheck",
    language: "JavaScript",
    description: "Explainable Pre-Submission Welfare Document Auditor (Python FastAPI, OpenCV, PyMuPDF, RapidFuzz, React 19).",
    html_url: "https://github.com/sathwikakukkadapu-coder/SetuCheck",
    homepage: "https://setu-check.vercel.app"
  },
  {
    name: "regulens",
    language: "TypeScript",
    description: "ReguLens AI: Evidence-Led Regulatory Review and Document Verification Platform (SIH Prototype).",
    html_url: "https://github.com/sathwikakukkadapu-coder/regulens",
    homepage: "https://regulens-vea7.vercel.app/"
  },
  {
    name: "GitaMitra",
    language: "JavaScript",
    description: "Digital Bhagavad Gita platform with 701 authentic verses, Sanskrit IAST transliteration, and AI explanations.",
    html_url: "https://github.com/sathwikakukkadapu-coder/GitaMitra",
    homepage: null
  },
  {
    name: "sandphysics",
    language: "Rust",
    description: "High performance granular physics and falling sand cellular automata simulation built in Rust and WebAssembly.",
    html_url: "https://github.com/sathwikakukkadapu-coder/sandphysics",
    homepage: "https://sandphysics.vercel.app"
  },
  {
    name: "Travel_Together",
    language: "JavaScript",
    description: "Full-stack travel discovery and tour booking platform with user authentication and MongoDB.",
    html_url: "https://github.com/sathwikakukkadapu-coder/Travel_Together",
    homepage: "https://travel-together-alpha.vercel.app"
  },
  {
    name: "Ironclad-staticwebsite",
    language: "CSS",
    description: "Modern and responsive fitness & gym website built with HTML5, CSS3, Bootstrap, and JavaScript.",
    html_url: "https://github.com/sathwikakukkadapu-coder/Ironclad-staticwebsite",
    homepage: null
  },
  {
    name: "maze_game",
    language: "JavaScript",
    description: "Interactive canvas browser maze game with dynamic obstacle rendering and timer tracking.",
    html_url: "https://github.com/sathwikakukkadapu-coder/maze_game",
    homepage: "https://sandgame-6iok.vercel.app"
  },
  {
    name: "daily_planner",
    language: "JavaScript",
    description: "Productivity task planner for organizing academic schedules, study goals, and daily checklists.",
    html_url: "https://github.com/sathwikakukkadapu-coder/daily_planner",
    homepage: null
  },
  {
    name: "Gamee",
    language: "JavaScript",
    description: "Interactive browser arcade experiments focusing on keyboard input handling and collision logic.",
    html_url: "https://github.com/sathwikakukkadapu-coder/Gamee",
    homepage: null
  },
  {
    name: "sandgame",
    language: "JavaScript",
    description: "JavaScript particle canvas prototype for simulating cellular sand and fluid movements.",
    html_url: "https://github.com/sathwikakukkadapu-coder/sandgame",
    homepage: null
  },
  {
    name: "portfolio-website",
    language: "HTML",
    description: "Sathwika Kukkadapu's personal developer portfolio website repository.",
    html_url: "https://github.com/sathwikakukkadapu-coder/portfolio-website",
    homepage: "https://myportfolio06.ccbp.tech/"
  }
];

// 1. Typewriter Animation
function initTypewriter() {
  const element = document.getElementById("typewriter-text");
  if (!element) return;

  const roles = [
    "AI/ML Enthusiast",
    "Generative AI Explorer",
    "Software Developer",
    "Creative Problem Solver"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typeSpeed = 75;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      element.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typeSpeed = 35;
    } else {
      element.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typeSpeed = 75;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 350;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// 2. Project Detail Modal System
function initProjectModals() {
  const modalOverlay = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body-content");
  const modalClose = document.getElementById("modal-close-btn");
  const detailButtons = document.querySelectorAll(".view-project-details");

  if (!modalOverlay || !modalBody || !modalClose) return;

  function openModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    modalBody.innerHTML = `
      <div class="p-6 md:p-8 space-y-6">
        <div class="border-b border-slate-200 pb-5">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-2">
            <span class="text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
              ${data.category}
            </span>
            <span class="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded border border-emerald-200">
              ${data.badge}
            </span>
          </div>
          <h2 class="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight font-display">${data.title}</h2>
          <p class="text-slate-600 text-sm mt-2 leading-relaxed">${data.shortDesc}</p>
        </div>

        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">Technologies Used</h4>
          <div class="flex flex-wrap gap-2">
            ${data.technologies.map(t => `<span class="bg-purple-50 text-purple-700 border border-purple-200 text-xs font-semibold px-2.5 py-1 rounded-md font-mono">${t}</span>`).join("")}
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 class="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-1.5">
              <span>⚠️</span> Problem Statement
            </h4>
            <p class="text-xs text-slate-700 leading-relaxed">${data.problemStatement}</p>
          </div>
          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 class="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center gap-1.5">
              <span>💡</span> Proposed Architecture
            </h4>
            <p class="text-xs text-slate-700 leading-relaxed">${data.solution}</p>
          </div>
        </div>

        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200">
          <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
            Key Implemented Features
          </h4>
          <ul class="space-y-2 text-xs text-slate-700">
            ${data.keyFeatures.map(f => `
              <li class="flex items-start gap-2">
                <span class="text-purple-600 font-bold">•</span>
                <span>${f}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="space-y-3">
          <div class="bg-purple-50/80 p-4 rounded-xl border border-purple-200">
            <h4 class="text-xs font-bold uppercase tracking-wider text-purple-900 mb-1">
              Sathwika's Specific Engineering Contribution
            </h4>
            <p class="text-xs text-purple-950 leading-relaxed">${data.myContribution}</p>
          </div>

          <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
              Engineering Challenge Overcome
            </h4>
            <p class="text-xs text-slate-700 leading-relaxed">${data.challenges}</p>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <div class="flex flex-wrap gap-3">
            ${data.demoUrl ? `
              <a href="${data.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5">
                <span>Open Live Demo</span>
                <span>↗</span>
              </a>
            ` : ""}
            ${data.githubUrl ? `
              <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline px-4 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5">
                <span>View Source on GitHub</span>
                <span>↗</span>
              </a>
            ` : ""}
          </div>
          <button id="modal-inner-close" class="text-xs text-slate-500 hover:text-slate-800 font-semibold px-3 py-1.5 rounded transition">
            Close Dialog [ESC]
          </button>
        </div>
      </div>
    `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    const innerClose = document.getElementById("modal-inner-close");
    if (innerClose) innerClose.addEventListener("click", closeModal);
  }

  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  detailButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const projId = btn.getAttribute("data-project-id");
      openModal(projId);
    });
  });

  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) closeModal();
  });

  window.openProjectModal = openModal;
}

// 3. Project Filter Tabs
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".project-filter-btn");
  const projectCards = document.querySelectorAll(".project-item-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category.includes(filter)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 4. Skills Category Tabs
function initSkillsFilters() {
  const filterBtns = document.querySelectorAll(".skill-filter-btn");
  const skillGroups = document.querySelectorAll(".skill-category-group");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-skill-filter");

      skillGroups.forEach(group => {
        const groupCat = group.getAttribute("data-skill-category");
        if (filter === "all" || groupCat === filter) {
          group.style.display = "block";
        } else {
          group.style.display = "none";
        }
      });
    });
  });
}

// 5. Live GitHub Repositories Explorer
async function initGitHubExplorer() {
  const container = document.getElementById("github-repos-grid");
  const filterBtns = document.querySelectorAll(".repo-lang-btn");
  if (!container) return;

  let repos = FALLBACK_REPOS;

  try {
    const res = await fetch("https://api.github.com/users/sathwikakukkadapu-coder/repos?per_page=100&sort=updated");
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) repos = data;
    }
  } catch (err) {
    console.log("GitHub API fallback active:", err);
  }

  function renderRepos(filteredRepos) {
    container.innerHTML = "";

    if (filteredRepos.length === 0) {
      container.innerHTML = `<div class="col-span-full text-center py-8 text-slate-500 text-sm">No repositories found matching this language filter.</div>`;
      return;
    }

    filteredRepos.forEach(repo => {
      const card = document.createElement("div");
      card.className = "card-clean p-5 flex flex-col justify-between h-full";

      const langColor = {
        Python: "#2563eb",
        TypeScript: "#0284c7",
        JavaScript: "#d97706",
        Rust: "#dc2626",
        HTML: "#db2777",
        CSS: "#7c3aed"
      }[repo.language] || "#64748b";

      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between gap-2 mb-2">
            <h4 class="font-bold text-sm text-slate-900 tracking-tight break-all font-display">
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="hover:text-purple-600 transition">
                ${repo.name}
              </a>
            </h4>
            <span class="text-xs text-purple-600 font-mono">↗</span>
          </div>
          <p class="text-slate-600 text-xs leading-relaxed mb-4">
            ${repo.description ? repo.description : "Public repository showcasing software and algorithmic implementations."}
          </p>
        </div>

        <div class="flex items-center justify-between text-xs pt-3 border-t border-slate-100 font-mono">
          <div class="flex items-center gap-1.5 text-slate-700">
            <span class="w-2.5 h-2.5 rounded-full inline-block" style="background-color: ${langColor};"></span>
            <span>${repo.language || "Code"}</span>
          </div>
          <div class="flex items-center gap-2">
            ${repo.homepage ? `
              <a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-purple-600 hover:underline">
                Live App
              </a>
            ` : ""}
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="text-xs text-slate-500 hover:text-slate-900">
              Source →
            </a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderRepos(repos);

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const lang = btn.getAttribute("data-lang");
      if (lang === "all") {
        renderRepos(repos);
      } else {
        const filtered = repos.filter(r => (r.language || "").toLowerCase() === lang.toLowerCase());
        renderRepos(filtered);
      }
    });
  });
}

// 6. Contact Form & Clipboard
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const formStatus = document.getElementById("form-status-message");
  const copyBtn = document.getElementById("copy-email-btn");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText("sathwikakukkadapu@gmail.com").then(() => {
        const origText = copyBtn.innerHTML;
        copyBtn.innerHTML = `<span>✓ Copied to clipboard!</span>`;
        copyBtn.classList.add("text-emerald-600");
        setTimeout(() => {
          copyBtn.innerHTML = origText;
          copyBtn.classList.remove("text-emerald-600");
        }, 2000);
      });
    });
  }

  if (form && formStatus) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("contact-name").value.trim();
      const email = document.getElementById("contact-email").value.trim();
      const subject = document.getElementById("contact-subject").value.trim();
      const message = document.getElementById("contact-message").value.trim();

      if (!name || !email || !subject || !message) {
        formStatus.innerHTML = `<span class="text-amber-600 text-xs font-semibold">Please complete all fields before sending.</span>`;
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        formStatus.innerHTML = `<span class="text-amber-600 text-xs font-semibold">Please provide a valid email address.</span>`;
        return;
      }

      const mailtoUrl = `mailto:sathwikakukkadapu@gmail.com?subject=${encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`)}&body=${encodeURIComponent(`Hello Sathwika,\n\n${message}\n\nFrom: ${name}\nContact Email: ${email}`)}`;

      formStatus.innerHTML = `
        <div class="text-emerald-700 text-xs font-semibold space-y-1">
          <p>✓ Opening your email application...</p>
          <p class="text-slate-500 font-normal">If it doesn't open automatically, <a href="${mailtoUrl}" class="underline text-purple-600">click here to send email</a>.</p>
        </div>
      `;

      window.location.href = mailtoUrl;
      form.reset();
    });
  }
}

// 7. Scroll Progress & Navigation
function initScrollAndNavigation() {
  const progressBar = document.getElementById("scroll-progress");
  const backToTopBtn = document.getElementById("back-to-top");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.pageYOffset / totalHeight) * 100;
    if (progressBar) progressBar.style.width = `${progress}%`;

    if (backToTopBtn) {
      if (window.pageYOffset > 350) backToTopBtn.classList.add("visible");
      else backToTopBtn.classList.remove("visible");
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
  initProjectModals();
  initProjectFilters();
  initSkillsFilters();
  initGitHubExplorer();
  initContactForm();
  initScrollAndNavigation();
});
