
"use client";

import { useRef, useState } from "react";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  Building2,
  Bell,
  Search,
  Users,
  ShieldCheck,
  Menu,
  X,
  Upload,
  Sparkles,
  Check,
  MapPin,
  Clock3,
  FileText,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  Smartphone,
  ChevronRight,
  Zap,
  BadgeCheck,
} from "lucide-react";
import styles from "./page.module.css";

const filters = [
  "All",
  "Colleges",
  "Jobs",
  "Internships",
  "Freelance",
  "Part-time",
];

const opportunities = [
  {
    title: "IIM Bangalore",
    type: "College",
    detail: "MBA",
    location: "Bengaluru",
    salary: "₹3L+",
    action: "View Details",
    icon: "IIM",
    description:
      "Explore management programmes, admissions, fees and placement information.",
  },
  {
    title: "Product Intern",
    type: "Internship",
    detail: "Hybrid",
    location: "Bengaluru",
    salary: "₹35K/mo",
    action: "Apply Now",
    icon: "P",
    description:
      "Work with a product team, learn from experienced professionals and build real-world skills.",
  },
  {
    title: "Marketing Associate",
    type: "Job",
    detail: "Full-time",
    location: "Remote",
    salary: "₹25K/mo",
    action: "View Details",
    icon: "M",
    description:
      "Help plan campaigns, understand customers and grow a digital brand.",
  },
  {
    title: "Social Media Creator",
    type: "Freelance",
    detail: "Flexible",
    location: "Remote",
    salary: "Project-based",
    action: "View Details",
    icon: "S",
    description:
      "Create engaging content for brands and build your creative portfolio.",
  },
  {
    title: "Campus Operations Assistant",
    type: "Part-time",
    detail: "Part-time",
    location: "Jaipur",
    salary: "₹10K/mo",
    action: "View Details",
    icon: "C",
    description:
      "Support campus events, coordinate activities and work with student teams.",
  },
];

const collegeFeatures = [
  {
    number: "01",
    label: "VERIFIED PROFILE",
    title: "Build your college profile",
    description:
      "Showcase your college, courses, fees, campus, placements and achievements in one structured profile.",
    badge: "NAAC A++ Ready",
    tag: "98% Match",
  },
  {
    number: "02",
    label: "DIRECT ENROLMENT",
    title: "Students discover and connect",
    description:
      "Students can discover your profile, explore courses and fees, and connect with your admission team.",
    badge: "Direct Enquiries",
    tag: "WhatsApp / Chat",
  },
  {
    number: "03",
    label: "CAMPUS RECRUITING",
    title: "Recruiters discover your college",
    description:
      "Companies can explore your talent pool and connect with your placement team.",
    badge: "500+ Hiring Partners",
    tag: "Connect Directly",
  },
  {
    number: "04",
    label: "LIVE HUB",
    title: "Track placements in real time",
    description:
      "Track students, interviews, offers and placements from one centralised dashboard.",
    badge: "Live Placements",
    tag: "Students · Interviews · Offers",
  },
];

const employerFeatures = [
  {
    number: "01",
    title: "Post a role in minutes",
    description:
      "Define skills, location and hiring requirements to reach relevant candidates.",
    badge: "5 Min Deployment",
    tag: "500+ Campus Network",
  },
  {
    number: "02",
    title: "Receive a matched shortlist",
    description:
      "Find candidates matched by skills, experience, location and requirements.",
    badge: "Zero CV Clutter",
    tag: "Tier 1–Tier 3 Parity",
  },
  {
    number: "03",
    title: "Connect with candidates directly",
    description:
      "Message, schedule interviews and move candidates through your pipeline.",
    badge: "In-App Scheduling",
    tag: "Video / Chat",
  },
  {
    number: "04",
    title: "Reduce your time-to-hire",
    description:
      "Move from shortlist to offer through one streamlined workflow.",
    badge: "< 2 DAYS",
    tag: "Faster Hiring",
  },
];

function SectionLabel({ children }) {
  return <span className={styles.sectionLabel}>{children}</span>;
}

function PrimaryLink({ href, children, variant = "" }) {
  return (
    <a
      href={href}
      className={`${styles.primaryButton} ${variant ? styles[variant] : ""}`}
    >
      {children}
    </a>
  );
}

function AuthModal({ mode, onClose, onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  if (!mode) return null;

  const isSignup = mode === "signup";

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      "Demo only: account authentication will be connected with Supabase in the next step."
    );
  }

  return (
    <div
      className={styles.modalBackdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className={styles.authModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="authTitle"
      >
        <button
          type="button"
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X size={21} />
        </button>

        <a href="#students" className={styles.logo} onClick={onClose}>
          <GraduationCap size={27} />
          Campus<span>Pe</span>
        </a>

        <div className={styles.authIcon}>
          <LockKeyhole size={24} />
        </div>

        <h2 id="authTitle">
          {isSignup ? "Create your account" : "Welcome back"}
        </h2>
        <p>
          {isSignup
            ? "Join students, colleges and employers on CampusPe."
            : "Sign in to continue to your CampusPe account."}
        </p>

        <form onSubmit={handleSubmit} className={styles.authForm}>
          {isSignup && (
            <label>
              Full name
              <span className={styles.inputWrap}>
                <Users size={17} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </span>
            </label>
          )}

          <label>
            Email address
            <span className={styles.inputWrap}>
              <Mail size={17} />
              <input
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </span>
          </label>

          <label>
            Password
            <span className={styles.inputWrap}>
              <LockKeyhole size={17} />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete={isSignup ? "new-password" : "current-password"}
                minLength={6}
                required
              />
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={() => setShowPassword((value) => !value)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </span>
          </label>

          <button type="submit" className={styles.primaryButton}>
            {isSignup ? "Create Account" : "Sign In"}
            <ArrowRight size={17} />
          </button>
        </form>

        {message && (
          <p className={styles.authMessage} role="status">
            {message}
          </p>
        )}

        <p className={styles.authSwitch}>
          {isSignup ? "Already have an account?" : "New to CampusPe?"}{" "}
          <button
            type="button"
            onClick={() => {
              setMessage("");
              onSwitch(isSignup ? "signin" : "signup");
            }}
          >
            {isSignup ? "Sign in" : "Create account"}
          </button>
        </p>
      </section>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [authMode, setAuthMode] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  const filteredOpportunities = opportunities.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Colleges") return item.type === "College";
    if (activeFilter === "Jobs") return item.type === "Job";
    return item.type === activeFilter.replace(/s$/, "") ||
      (activeFilter === "Internships" && item.type === "Internship") ||
      (activeFilter === "Part-time" && item.type === "Part-time");
  });

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    setUploadError("");
    setSelectedFile(null);

    if (!file) return;

    const extension = file.name.split(".").pop()?.toLowerCase();
    const allowedExtensions = ["pdf", "doc", "docx"];

    if (!allowedExtensions.includes(extension)) {
      setUploadError("Please choose a PDF, DOC or DOCX file.");
      event.target.value = "";
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setUploadError("Your resume must be 10MB or smaller.");
      event.target.value = "";
      return;
    }

    setSelectedFile(file);
  }

  function openAuth(mode) {
    setMenuOpen(false);
    setAuthMode(mode);
  }

  return (
    <main className={styles.site}>
      <nav className={styles.navbar} aria-label="Main navigation">
        <a href="#students" className={styles.logo} aria-label="CampusPe home">
          <GraduationCap size={30} strokeWidth={2.2} />
          Campus<span>Pe</span>
        </a>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mainNavLinks"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div
          id="mainNavLinks"
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <a href="#colleges" onClick={() => setMenuOpen(false)}>
            Colleges
          </a>
          <a href="#employers" onClick={() => setMenuOpen(false)}>
            Employers
          </a>
          <a href="#opportunities" onClick={() => setMenuOpen(false)}>
            Jobs
          </a>
          <a href="#blogs" onClick={() => setMenuOpen(false)}>
            Blogs
          </a>
          <button
            type="button"
            className={styles.navTextButton}
            onClick={() => openAuth("signin")}
          >
            Sign In
          </button>
          <button
            type="button"
            className={styles.navButton}
            onClick={() => openAuth("signup")}
          >
            Sign Up <ArrowRight size={17} />
          </button>
        </div>
      </nav>

      <section className={styles.hero} id="students">
        <div className={styles.heroFloatLeft}>
          <span className={styles.floatIcon}>
            <Bell size={17} />
          </span>
          <div>
            <strong>WhatsApp Alert</strong>
            <small>Get notified about new opportunities</small>
          </div>
        </div>

        <div className={styles.heroFloatRight}>
          <span className={styles.floatIcon}>
            <FileText size={17} />
          </span>
          <div>
            <strong>Resume Builder</strong>
            <small>Build a clearer career profile</small>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.eyebrow}>
            <Sparkles size={16} />
            AI-POWERED CAMPUS ASSISTANT
          </div>

          <h1>
            Connect <span>10X Faster.</span>
          </h1>

          <p>
            One platform connecting students, colleges &amp; employers — faster.
          </p>

          <div className={styles.lookingRow}>
            <span>✦</span>
            <h2>What are you looking for?</h2>
            <span>✦</span>
          </div>
        </div>

        <div className={styles.matchingNotice}>
          <span className={styles.avatarStack}>
            <i>AP</i>
            <i>PK</i>
            <i>SN</i>
          </span>
          <div>
            <strong>142 students matched today</strong>
            <small>Just now · IIT, BITS, VIT</small>
          </div>
        </div>

        <div className={styles.recruiterNotice}>
          <span className={styles.onlineDot} />
          <div>
            <strong>Radiant Info</strong>
            <small>Verified recruiter · 2 days ago</small>
          </div>
        </div>

        <div className={styles.audienceGrid}>
          <article className={`${styles.audienceCard} ${styles.collegeCard}`}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon}>
                <Building2 size={22} />
              </span>
              <span className={styles.statusPill}>Coming Soon</span>
            </div>

            <h3>College</h3>
            <p>Explore colleges, courses, fees, placements &amp; more.</p>

            <ul>
              <li>Search by course, location, fees</li>
              <li>Connect directly with colleges</li>
              <li>Improve student placements</li>
            </ul>

            <PrimaryLink href="#colleges">
              Join Waitlist <Bell size={15} />
            </PrimaryLink>
            <div className={styles.cardDecoration} aria-hidden="true" />
          </article>

          <article className={`${styles.audienceCard} ${styles.jobCard}`}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon}>
                <GraduationCap size={22} />
              </span>
              <span className={styles.statusPill}>Available Now</span>
            </div>

            <h3>I&apos;m Looking for a Job</h3>
            <p>Upload your resume. We&apos;ll find jobs that fit you.</p>

            <ul>
              <li>Jobs from 1000+ sources</li>
              <li>AI-powered matching</li>
              <li>WhatsApp &amp; email alerts</li>
            </ul>

            <PrimaryLink href="#resume">
              Explore Jobs <ArrowRight size={16} />
            </PrimaryLink>
            <div className={styles.cardDecoration} aria-hidden="true" />
          </article>

          <article className={`${styles.audienceCard} ${styles.hiringCard}`}>
            <div className={styles.cardTop}>
              <span className={styles.cardIcon}>
                <BriefcaseBusiness size={22} />
              </span>
              <span className={styles.statusPill}>Coming Soon</span>
            </div>

            <h3>I&apos;m Hiring</h3>
            <p>
              Connect with colleges and find candidates — from students to
              graduates.
            </p>

            <ul>
              <li>Connect directly with colleges</li>
              <li>Find the right candidates</li>
              <li>Simplify your hiring</li>
            </ul>

            <PrimaryLink href="#employerSection">
              Join Waitlist <Bell size={15} />
            </PrimaryLink>
            <div className={styles.cardDecoration} aria-hidden="true" />
          </article>
        </div>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>
              <Users size={23} />
            </span>
            <strong>800+</strong>
            <small>Students</small>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statIcon}>
              <Building2 size={23} />
            </span>
            <strong>130+</strong>
            <small>Colleges</small>
          </div>
          <div className={styles.statItem}>
            <span className={`${styles.statIcon} ${styles.greenIcon}`}>
              <BriefcaseBusiness size={23} />
            </span>
            <strong>100+</strong>
            <small>Jobs &amp; internships</small>
          </div>
          <div className={styles.statItem}>
            <span className={`${styles.statIcon} ${styles.orangeIcon}`}>
              <ShieldCheck size={23} />
            </span>
            <strong>100%</strong>
            <small>Safe &amp; Trusted</small>
          </div>
        </div>
      </section>

      <section className={styles.partners} aria-label="Our partners">
        <p>Trusted by partners across India</p>
        <div className={styles.partnerNames}>
          <span className={styles.partnerGin}>
            GINSERV
            <small>Nurturing Ventures</small>
          </span>
          <span className={styles.partnerStartup}>
            STARTUP
            <br />
            KARNATAKA
          </span>
          <span className={styles.partnerTalent}>
            ✦ TALENTSPOTIFY
          </span>
          <span className={styles.partnerRadiant}>
            RADIANT
            <small>INFO</small>
          </span>
        </div>
      </section>

      <section className={styles.opportunitySection} id="opportunities">
        <div className={styles.sectionIntro}>
          <SectionLabel>● 01 · OPPORTUNITY DISCOVERY</SectionLabel>
          <h2>
            Stop searching.
            <br />
            <span>Start getting matched.</span>
          </h2>
          <p>
            Tell CampusPe your skills, preferences and goals. We continuously
            monitor company career pages and job sources, find opportunities
            that match you, and notify you when they appear.
          </p>
          <PrimaryLink href="#resume">
            Explore opportunities <ArrowRight size={17} />
          </PrimaryLink>

          <div className={styles.processSteps}>
            <div>
              <span>01</span>
              <p>
                <strong>Set your preferences</strong>
                <small>Tell us what you are looking for.</small>
              </p>
              <BadgeCheck size={19} />
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>Discover relevant matches</strong>
                <small>Explore opportunities that fit you.</small>
              </p>
              <Search size={19} />
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>Get notified</strong>
                <small>Know when something fits your profile.</small>
              </p>
              <Bell size={19} />
            </div>
          </div>
        </div>

        <div className={styles.feedCard}>
          <div className={styles.feedHeading}>
            <div className={styles.feedTitle}>
              <span className={styles.feedMainIcon}>
                <Zap size={22} />
              </span>
              <div>
                <strong>CampusPe Opportunity Feed</strong>
                <small>Colleges &amp; opportunities matched to you</small>
              </div>
            </div>
            <span className={styles.matchBadge}>
              <i /> 12 new matches today
            </span>
          </div>

          <div className={styles.filters} aria-label="Filter opportunities">
            {filters.map((filter) => (
              <button
                type="button"
                key={filter}
                className={activeFilter === filter ? styles.activeFilter : ""}
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.feedList}>
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((item) => (
                <article className={styles.feedItem} key={item.title}>
                  <span
                    className={`${styles.companyIcon} ${
                      item.type === "College" ? styles.collegeCompanyIcon : ""
                    }`}
                  >
                    {item.icon}
                  </span>

                  <div className={styles.feedInfo}>
                    <div className={styles.feedItemTitle}>
                      <strong>{item.title}</strong>
                      <span
                        className={`${styles.typeBadge} ${
                          item.type === "Internship"
                            ? styles.internshipBadge
                            : item.type === "Job"
                              ? styles.jobBadge
                              : ""
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>
                    <div className={styles.feedMeta}>
                      <span>{item.detail}</span>
                      <span><MapPin size={12} /> {item.location}</span>
                      <span>{item.salary}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>

                  <button
                    type="button"
                    className={styles.feedAction}
                    onClick={() => {
                      if (item.type === "Internship" || item.type === "Job") {
                        setAuthMode("signup");
                      } else {
                        window.alert(
                          `${item.title}\n\n${item.description}\n\nDetailed listing pages will be connected in the next development phase.`
                        );
                      }
                    }}
                  >
                    {item.action}
                  </button>
                </article>
              ))
            ) : (
              <div className={styles.emptyState}>
                No opportunities found for this category yet.
              </div>
            )}
          </div>

          <a href="#resume" className={styles.feedLink}>
            View all matched opportunities <ArrowRight size={16} />
          </a>
          <p className={styles.demoNote}>
            Sample opportunities for website preview.
          </p>
        </div>
      </section>

      <section className={styles.resumeSection} id="resume">
        <SectionLabel>✦ TRY IT LIVE · RESUME PREVIEW</SectionLabel>
        <h2>
          Upload your resume.
          <br />
          <span>Find jobs that fit.</span>
        </h2>
        <p>
          Upload once. CampusPe can help organise your skills, experience and
          preferences.
          <br />
          This demo validates your selected file locally.
        </p>

        <div className={styles.uploadShell}>
          <span className={styles.matchRate}>
            <Zap size={15} />
            <span>
              <strong>Resume ready</strong>
              <small>File validation</small>
            </span>
          </span>

          <label
            className={styles.uploadCard}
            htmlFor="resumeFile"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              const file = event.dataTransfer.files?.[0];
              if (!file) return;

              const transfer = new DataTransfer();
              transfer.items.add(file);

              if (fileInputRef.current) {
                fileInputRef.current.files = transfer.files;
                handleFileChange({ target: fileInputRef.current });
              }
            }}
          >
            <span className={styles.uploadIcon}>
              <Upload size={30} />
            </span>
            <strong>{selectedFile ? selectedFile.name : "Upload your resume"}</strong>
            <span>
              PDF, DOC, or DOCX · Up to 10MB
            </span>

            <input
              ref={fileInputRef}
              id="resumeFile"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />

            <span className={styles.uploadButton}>
              {selectedFile ? "Choose another file" : "Choose resume"}
              <ArrowRight size={16} />
            </span>

            <small>
              {selectedFile
                ? `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB · Selected locally`
                : "Or drag and drop your file here"}
            </small>
          </label>

          <span className={styles.atsBadge}>
            <ShieldCheck size={17} />
            <span>
              <strong>File validation</strong>
              <small>PDF, DOC, DOCX</small>
            </span>
          </span>
        </div>

        {uploadError && (
          <p className={styles.uploadError} role="alert">
            {uploadError}
          </p>
        )}

        {selectedFile && (
          <div className={styles.fileSelected} role="status">
            <Check size={18} />
            <span>
              <strong>File selected successfully</strong>
              <small>
                Your file has not been uploaded to a server yet.
              </small>
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedFile(null);
                setUploadError("");
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
            >
              Remove
            </button>
          </div>
        )}

        <div className={styles.resumeBenefits}>
          <span><Check size={15} /> Resume selected</span>
          <span><Check size={15} /> Skills matching planned</span>
          <span><Check size={15} /> Secure storage to be connected</span>
        </div>
      </section>

      <section className={styles.collegeSection} id="colleges">
        <div className={styles.sectionIntro}>
          <SectionLabel>● 02 · FOR COLLEGES</SectionLabel>
          <h2>
            Get Discovered
            <br />
            by <span>Students and Recruiters.</span>
          </h2>
          <p>
            Put your college in front of students searching for the right
            course and recruiters looking for the right talent. CampusPe helps
            you build your presence, attract enquiries and connect with
            opportunities.
          </p>
          <PrimaryLink href="#collegeContact">
            List Your College <ArrowRight size={17} />
          </PrimaryLink>
        </div>

        <div className={styles.featureList}>
          {collegeFeatures.map((feature) => (
            <article key={feature.number}>
              <span className={styles.featureNumber}>{feature.number}</span>
              <div className={styles.featureContent}>
                <small>{feature.label}</small>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className={styles.featureTags}>
                <span>{feature.badge}</span>
                <span>{feature.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.employerSection} id="employers">
        <div className={styles.sectionIntro}>
          <SectionLabel>● 03 · FOR EMPLOYERS</SectionLabel>
          <h2>
            Stop running campus drives.
            <br />
            <span>Start hiring the right people.</span>
          </h2>
          <p>
            Post a role in minutes and reach relevant candidates without the
            time, travel and coordination of traditional hiring. CampusPe
            helps connect employers with campus talent.
          </p>
          <PrimaryLink href="#employerContact">
            Post a Job <ArrowRight size={17} />
          </PrimaryLink>
        </div>

        <div className={styles.featureList}>
          {employerFeatures.map((feature) => (
            <article key={feature.number}>
              <span className={styles.featureNumber}>{feature.number}</span>
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
              <div className={styles.featureTags}>
                <span>{feature.badge}</span>
                <span>{feature.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.appSection} id="blogs">
        <SectionLabel>✦ CAMPUSPE MOBILE EXPERIENCE</SectionLabel>
        <h2>Check out our app interface</h2>
        <p>
          A connected campus ecosystem for discovering courses, colleges and
          career opportunities.
        </p>

        <div className={styles.phoneMockups}>
          <div className={`${styles.phone} ${styles.phoneSide}`}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneStatus}>
              <span>9:41</span><span>● ● ▰</span>
            </div>
            <div className={styles.phoneHeader}>
              <small>Discover</small>
              <strong>Hi, Student!</strong>
              <span>Find your next opportunity.</span>
            </div>
            <div className={styles.phoneHero}>
              <Sparkles size={18} />
              <strong>Find jobs that fit you</strong>
              <small>Explore career opportunities</small>
            </div>
            <small className={styles.phoneCaption}>Recommended jobs</small>
            <div className={styles.phoneMiniCard}><i /> Software Engineer <b>View</b></div>
            <div className={styles.phoneMiniCard}><i /> Product Intern <b>View</b></div>
            <div className={styles.phoneBottom}>⌂　⌕　♡　♙</div>
          </div>

          <div className={styles.phone}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneStatus}>
              <span>9:41</span><span>● ● ▰</span>
            </div>
            <div className={styles.phoneBlueHeader}>
              <small>CampusPe</small>
              <strong>Discover opportunities</strong>
              <span>Courses · Jobs · Internships</span>
            </div>
            <div className={styles.phoneCategoryRow}>
              <span>Jobs</span><span>Courses</span><span>Colleges</span>
            </div>
            <small className={styles.phoneCaption}>Trending colleges</small>
            <div className={styles.phoneCollegeArt}>
              <Building2 size={35} />
              <strong>Explore colleges</strong>
              <small>Find the right course for you</small>
            </div>
            <div className={styles.phoneMiniCard}><i /> Product Intern <b>Apply</b></div>
            <div className={styles.phoneMiniCard}><i /> Marketing Role <b>Apply</b></div>
            <div className={styles.phoneBottom}>⌂　⌕　♡　♙</div>
          </div>

          <div className={`${styles.phone} ${styles.phoneSide}`}>
            <div className={styles.phoneNotch} />
            <div className={styles.phoneStatus}>
              <span>9:41</span><span>● ● ▰</span>
            </div>
            <div className={styles.phoneHeader}>
              <small>My Applications</small>
              <strong>Track your progress</strong>
            </div>
            <div className={styles.applicationStatus}>
              <Check size={18} />
              <span><strong>Application sent</strong><small>Product Intern</small></span>
            </div>
            <div className={styles.applicationStatus}>
              <Clock3 size={18} />
              <span><strong>Under review</strong><small>Marketing Associate</small></span>
            </div>
            <div className={styles.applicationStatus}>
              <FileText size={18} />
              <span><strong>Resume ready</strong><small>Profile document</small></span>
            </div>
            <div className={styles.phoneBottom}>⌂　⌕　♡　♙</div>
          </div>
        </div>

        <div className={styles.carouselDots} aria-label="App preview indicators">
          <span />
          <span />
          <span className={styles.selectedDot} />
          <span />
          <span />
        </div>

        <div className={styles.downloadSection}>
          <div>
            <h3>Download App Now</h3>
            <p>
              Whether you are a student seeking your next internship, a college
              showcasing campus life or a company looking for talent, CampusPe
              brings the campus ecosystem closer together.
            </p>
            <div className={styles.storeButtons}>
              <button
                type="button"
                onClick={() =>
                  window.alert("The Google Play Store link will be added when the app is published.")
                }
              >
                <Smartphone size={20} />
                <span><small>GET IT ON</small><strong>Google Play</strong></span>
              </button>
              <button
                type="button"
                onClick={() =>
                  window.alert("The Apple App Store link will be added when the app is published.")
                }
              >
                <Smartphone size={20} />
                <span><small>Download on the</small><strong>App Store</strong></span>
              </button>
            </div>
          </div>

          <div className={styles.downloadIllustration} aria-hidden="true">
            <div className={styles.downloadPhoneOne}>
              <div className={styles.phoneNotch} />
              <GraduationCap size={42} />
              <strong>CampusPe</strong>
              <span>Explore. Connect. Grow.</span>
            </div>
            <div className={styles.downloadPhoneTwo}>
              <div className={styles.phoneNotch} />
              <Search size={30} />
              <strong>Find your fit</strong>
              <span>Jobs and internships</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <SectionLabel>WE ARE HERE TO HELP</SectionLabel>
        <h2>Still have questions?</h2>
        <p>
          Our support team is here to help you succeed. Get in touch anytime.
        </p>
        <div className={styles.contactActions}>
          <a href="mailto:contactus@campuspe.com" className={styles.primaryButton}>
            Contact Support <ArrowRight size={17} />
          </a>
          <a href="tel:+916362606464" className={styles.outlineButton}>
            Schedule a Call <Smartphone size={17} />
          </a>
        </div>
      </section>

      <section className={styles.finalCta} id="collegeContact">
        <div>
          <h2>Ready for what&apos;s next?</h2>
          <p>
            Discover colleges, find opportunities, list your institution, or
            start hiring with CampusPe.
          </p>
        </div>
        <div className={styles.finalCtaButtons} id="employerContact">
          <a href="#colleges">Explore Colleges <ArrowRight size={15} /></a>
          <a href="#opportunities">Find Opportunities <ArrowRight size={15} /></a>
          <button type="button" onClick={() => openAuth("signup")}>
            List Your College <ArrowRight size={15} />
          </button>
          <button type="button" onClick={() => openAuth("signup")}>
            Post a Job <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerMain}>
          <div className={styles.footerBrand}>
            <a href="#students" className={styles.logo}>
              <GraduationCap size={29} />
              Campus<span>Pe</span>
            </a>
            <p>From choosing a college to finding your next opportunity.</p>
            <p>
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          <div className={styles.footerColumn}>
            <h3>For Students</h3>
            <a href="#colleges">Explore Colleges</a>
            <a href="#opportunities">Find Opportunities</a>
            <a href="#opportunities">Internships</a>
            <a href="#opportunities">Full-time Jobs</a>
            <a href="#resume">Application Tracker</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>For Colleges</h3>
            <a href="#collegeContact">List Your College</a>
            <a href="#colleges">Admissions</a>
            <a href="#colleges">Fee Collection</a>
            <a href="#colleges">Placements</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>For Employers</h3>
            <a href="#employerContact">Post a Job</a>
            <a href="#employers">Find Talent</a>
            <a href="#employers">Campus Hiring</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>Company</h3>
            <a href="#students">About Us</a>
            <a href="mailto:contactus@campuspe.com">Contact Us</a>
            <a href="#blogs">Blogs</a>
            <a href="#students">Careers</a>
          </div>

          <div className={styles.footerColumn}>
            <h3>Legal &amp; Policies</h3>
            <a href="#footerLegal">Privacy Policy</a>
            <a href="#footerLegal">Terms &amp; Conditions</a>
            <a href="#footerLegal">Refund Policy</a>
            <a href="#footerLegal">Cookie Policy</a>
            <a href="#footerLegal">Grievance Redressal</a>
          </div>
        </div>

        <div className={styles.footerContact}>
          <a href="mailto:contactus@campuspe.com">
            <Mail size={16} /> contactus@campuspe.com
          </a>
          <a href="tel:+916362606464">
            <Smartphone size={16} /> +91 6362606464
          </a>
          <span><i /> Students · Colleges · Employers</span>
        </div>

        <div className={styles.footerBottom} id="footerLegal">
          <span>© {new Date().getFullYear()} CampusPe Technologies Pvt. Ltd.</span>
          <div>
            <a href="#footerLegal">Privacy</a>
            <a href="#footerLegal">Terms</a>
            <a href="#footerLegal">Grievance</a>
          </div>
          <a href="#students" className={styles.backToTop}>
            Back to top ↑
          </a>
        </div>
      </footer>

      <AuthModal
        mode={authMode}
        onClose={() => setAuthMode(null)}
        onSwitch={(mode) => setAuthMode(mode)}
      />
    </main>
  );
}
