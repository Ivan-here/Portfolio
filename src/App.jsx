import {useState} from "react";

export default function IvanPortfolio() {
  const skills = {
    Languages: ["Java", "C#", "Python", "SQL", "Git", "Kotlin", "Swift"],
    Web: ["HTML", "CSS", "JavaScript", "ASP.NET Core", "Spring Boot", "FastAPI", "REST APIs", "React"],
    Database: ["MySQL", "PostgreSQL", "MongoDB"],
    Tools: ["Jira", "Visual Paradigm", "Git", "Office 365", "Android Studio", "Xcode"],
    Methods: ["Agile Development", "Unit Testing", "Debugging"]
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const academicSamples = [
    {
      title: "Farmer Marketplace Platform",
      type: "Capstone Project",
      summary:
          "A full-stack marketplace platform designed to connect farmers, customers, and organizations in a single ecosystem. Farmers can sell fresh products, customers can browse and purchase items, and NGOs can reserve leftover products posted by restaurants to help reduce food waste.",
      stack: ["React", "Java", "Spring Boot", "JWT", "Stripe", "Microservices"],
      highlights: [
        "Implemented Stripe payment service integration for secure online transactions.",
        "Designed and worked within a microservices-based architecture for scalability and modularity.",
        "Developed user-related functionality including registration, login, profile creation, profile management, and database integration.",
        "Implemented role-based security using JWT authentication.",
        "Built admin panel features for managing users, products, and system data.",
        "Developed user settings and profile customization functionality.",
        "Contributed to building a platform supporting farmers, customers, restaurants, and NGOs in one system."
      ],
      githubFrontend: "https://github.com/Ivan-here/Capstone-frontend",
      githubBackend: "https://github.com/Ivan-here/Capstone-Project"
    },
    {
      title: "Before You Go",
      type: "Swift Mobile App",
      summary:
          "A location-based reminder app built in Swift where users create places and connect item checklists to them. When the user leaves a saved geofenced area, the app sends reminder notifications such as 'Don't forget your keys'.",
      stack: ["Swift", "SwiftUI", "SwiftData", "Geofencing", "Notifications"],
      highlights: [
        "Worked on adding items to places.",
        "Helped implement notification sending logic.",
        "Implemented data persistence using SwiftData.",
        "Contributed to the location-based reminder workflow and notification experience."
      ],
      github: "https://github.com/SaKsHaTGaRg/BeforeYouGo"
    },
    {
      title: "Canada Tour Guide App",
      type: "Android + Python Project",
      summary:
          "An Android application built in Kotlin that lets users take a photo of a landmark. A Python backend uses OpenAI to recognize the landmark, retrieves information from Wikipedia, and generates an audio-ready story based on user-selected preferences such as Adventurous or Informational.",
      stack: ["Kotlin", "Android Studio", "Python", "OpenAI", "Wikipedia API"],
      highlights: [
        "Worked on backend integration for landmark recognition and content generation.",
        "Built the main screen of the Android application.",
        "Built the settings screen.",
        "Implemented persistent user settings using SharedPreferences (e.g., dark mode, dyslexic mode)."
      ],
      githubFrontend: "https://github.com/SaKsHaTGaRg/Tour-Guide-App",
      githubBackend: "https://github.com/Ivan-here/COMP3074_Backend_FastAPI"
    }
  ];

  const experience = [
    {
      role: "Intern Assistant Developer",
      org: "B&B Partners",
      period: "Dec 2023 – Jun 2024",
      bullets: [
        "Developed and debugged 15+ web features, improving load time by 20%.",
        "Optimized database queries, reducing execution time by 30%.",
        "Resolved critical backend issues and implemented unit tests covering 90% of backend functionality.",
        "Collaborated in an Agile team of 5 developers."
      ]
    },
    {
      role: "Crew Member",
      org: "McDonald's",
      period: "Nov 2024 – Feb 2025",
      bullets: [
        "Delivered efficient and friendly customer service to 30+ customers daily.",
        "Handled cash transactions with accuracy and consistency.",
        "Maintained food safety, cleanliness, and team coordination in a fast-paced environment."
      ]
    },
    {
      role: "Volunteer",
      org: "Rooks to Cooks",
      period: "Jul 2024 – Aug 2024",
      bullets: [
        "Supervised children during cooking sessions and supported a safe, engaging environment.",
        "Helped prepare meals and maintain kitchen organization.",
        "Collaborated with staff to improve session flow and solve day-to-day issues."
      ]
    }
  ];

  const capstoneDetails = [
    {
      title: "Project Summary",
      text: "The Local Food Service App is a community-driven marketplace platform that connects farmers, restaurants, NGOs, and consumers. The system enables farmers to sell fresh products, restaurants to redistribute surplus food, and NGOs to reserve and collect donations, helping reduce food waste while improving access to local products."
    },
    {
      title: "Project Vision",
      text: "The vision of the platform is to promote sustainability and support local economies by creating a centralized ecosystem for food distribution. It aims to reduce waste, increase transparency, and strengthen community engagement through features such as reviews, notifications, and real-time updates."
    },
    {
      title: "Business Requirements",
      text: "The system includes user authentication, role-based access (farmers, consumers, NGOs, admins), product listings, order and reservation management, secure payment processing, notifications, and community features. It also supports restaurant surplus posting and reservation to minimize food waste."
    },
    {
      title: "Project Plan",
      text: "The project followed an Agile development approach with continuous integration and iterative feature delivery. Core backend microservices, REST APIs, and frontend components were developed in parallel, with regular testing and GitHub-based collaboration to maintain steady progress toward deadlines."
    },
    {
      title: "Requirements Analysis & Design",
      text: "The system was designed using a microservices architecture, separating core functionalities such as user management, product handling, orders, and notifications into independent services. JWT-based authentication and role-based authorization were implemented to support multiple user types securely."
    },
    {
      title: "Wireframes / Mockups",
      text: "User interface designs were created using Figma to define layouts, navigation, and user interactions. These wireframes guided the frontend development and ensured a consistent and user-friendly experience across the platform.",
    },
    {
      title: "Status Reports",
      text: "Throughout development, progress was tracked through regular status reports. The team achieved approximately 75% completion of both backend and frontend, including microservices implementation, API development, and initial integration testing, while planning remaining features such as payments, admin panel, and settings."
    },
    {
      title: "System Implementation",
      text: "The system was implemented using React for the frontend and Spring Boot for backend microservices. MongoDB was used for flexible data storage, and Docker was used for containerized deployment. My contributions included implementing Stripe payment integration, building user authentication and profile management, developing role-based security with JWT, and creating admin panel and settings functionality."
    }
  ];

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Capstone", href: "#capstone" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  const pill =
      "inline-block rounded-full bg-cyan-400/10 border border-cyan-300/20 px-3 py-1 text-sm mr-2 mb-2 text-cyan-100 transition hover:bg-cyan-300/20";
  const card =
      "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.35)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(34,211,238,0.12)]";
  const section = "max-w-6xl mx-auto px-6 py-20";
  const sectionTitle = "text-3xl md:text-4xl font-bold text-white tracking-tight";
  const sectionText = "text-neutral-300 leading-8";

  return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#0f172a_45%,_#111827_100%)] text-white">
        <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-xl">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#top" className="text-lg font-semibold tracking-wide text-white">
              Ivan Barnash
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
              {navItems.map((item) => (
                  <a key={item.label} href={item.href} className="transition hover:text-cyan-300">
                    {item.label}
                  </a>
              ))}
            </div>
          </nav>
        </div>

        <header id="top" className="relative overflow-hidden pt-28">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute top-40 right-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl" />
          </div>

          <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-[1.35fr_0.9fr] items-center relative z-10">
            <div>
              <p className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 mb-6">
                Software Development Portfolio
              </p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] text-white">
                Designing systems that scale,
                <span className="block text-cyan-300">building backends that power real applications.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-neutral-300 leading-8">
                I’m Ivan Barnash, a software development student focused on backend and full-stack development, web applications, mobile development, and database-driven solutions. I also have experience building neural models in Python. I enjoy building products that are technically solid and useful to real people.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                    href="mailto:ivan.barnash@gmail.com"
                    className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Contact Me
                </a>
                <a
                    href="https://github.com/Ivan-here"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/ivan-barnash-715506310/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Focus</p>
                  <p className="mt-2 text-lg font-semibold text-white">Backend-Focused Full-Stack Development</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Education</p>
                  <p className="mt-2 text-lg font-semibold text-white">George Brown College</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Technologies</p>
                  <p className="mt-2 text-lg font-semibold text-white">Java, Spring Boot, React</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-sm text-neutral-400">Also Working With</p>
                  <p className="mt-2 text-lg font-semibold text-white">Swift, Kotlin, MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="about" className={section}>
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className={card}>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-3">About Me</p>
              <h2 className={sectionTitle}>A student developer growing through real projects.</h2>
              <p className={`${sectionText} mt-5`}>
                I am currently studying Computer Programming and Analysis (T177) at George Brown College. My experience includes backend development, REST APIs, authentication, databases, cloud-style architecture, Android development, Swift app development. I enjoy developing web applications with a strong focus on backend engineering, including designing scalable architectures, structuring services, and maintaining reliable and efficient systems.
              </p>
            </div>

            <div className={card}>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-3">Career Goal</p>
              <h2 className="text-2xl font-bold text-white">Build software that is useful, reliable, and scalable.</h2>
              <p className={`${sectionText} mt-5`}>
                My goal is to grow into a strong software engineer who can design clean systems, collaborate effectively, and build applications that solve meaningful problems. I want to keep improving across backend, full-stack, and mobile development while contributing to products that have real impact.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className={section}>
          <div className={card}>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-3">Technical Skills</p>
            <h2 className={sectionTitle}>Technologies I work with</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {Object.entries(skills).map(([group, items]) => (
                  <div key={group} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <h3 className="font-semibold mb-4 text-lg text-white">{group}</h3>
                    <div>
                      {items.map((item) => (
                          <span key={item} className={pill}>{item}</span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={section}>
          <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-3">Selected Work</p>
              <h2 className={sectionTitle}>Projects that show how I build</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {academicSamples.map((project) => (
                <div key={project.title} className={card}>
                  <p className="text-sm text-cyan-300 mb-3">{project.type}</p>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-neutral-300 leading-7 mb-5">{project.summary}</p>
                  <div className="mb-5">
                    {project.stack.map((tech) => (
                        <span key={tech} className={pill}>{tech}</span>
                    ))}
                  </div>
                  <ul className="list-disc pl-5 text-neutral-200 space-y-3 leading-7">
                    {project.highlights.map((h) => (
                        <li key={h}>{h}</li>
                    ))}
                  </ul>
                  <div className="mt-5 flex gap-3 flex-wrap">
                    {project.githubFrontend && (
                        <a
                            href={project.githubFrontend}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition"
                        >
                          Frontend Code →
                        </a>
                    )}
                    {project.githubBackend && (
                        <a
                            href={project.githubBackend}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-cyan-300 hover:bg-white/20 transition"
                        >
                          Backend Code →
                        </a>
                    )}
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-cyan-300 hover:bg-white/20 transition"
                        >
                          View Code →
                        </a>
                    )}
                  </div>
                </div>
            ))}
          </div>
        </section>

        <section id="capstone" className={section}>
          <div className={card}>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-3">
              Capstone Spotlight
            </p>
            <h2 className={sectionTitle}>Farmer Marketplace Platform</h2>

            <p className={`${sectionText} mt-5`}>
              This capstone project represents my strongest full-stack academic work.
              It is a platform that connects farmers, customers, restaurants, and NGOs.
              Farmers can sell fresh products, customers can purchase locally, and NGOs
              can reserve leftover food from restaurants to reduce waste.
            </p>

            <p className={`${sectionText} mt-4`}>
              The system is built using a microservices architecture and includes secure
              authentication, role-based access, payment integration, admin panel, and
              user settings functionality.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <span className={pill}>React</span>
              <span className={pill}>Spring Boot</span>
              <span className={pill}>JWT</span>
              <span className={pill}>Stripe</span>
              <span className={pill}>Microservices</span>
              <span className={pill}>MongoDB</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 mt-6 auto-rows-fr">
            {capstoneDetails.map((item) => (
                <div key={item.title} className={card}>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 leading-7">
                    {item.text}
                  </p>
                  {item.title === "Wireframes / Mockups" && (
                      <a
                          href="https://www.figma.com/design/4Wh2n47oWLlFx35L0ef9ak/Local-Food-Service-App-Mockups?node-id=0-1&p=f"
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-cyan-300 hover:bg-white/20 transition"
                      >
                        View Figma Designs →
                      </a>
                  )}
                  {item.title === "Project Plan" && (
                      <a
                          href="/files/project_plan.pdf"
                          target="_blank"
                          className="inline-block mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-cyan-300 hover:bg-white/20 transition"
                      >
                        View Full Plan →
                      </a>
                  )}
                  {item.title === "Requirements Analysis & Design" && (
                      <a
                          href="/files/requirements.pdf"
                          target="_blank"
                          className="inline-block mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-cyan-300 hover:bg-white/20 transition"
                      >
                        View Requirements →
                      </a>
                  )}
                  {item.title === "Project Summary" && (
                      <a
                          href="/files/capstone_summary.pdf"
                          target="_blank"
                          className="inline-block mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-cyan-300 hover:bg-white/20 transition"
                      >
                        View Summary →
                      </a>
                  )}
                  {item.title === "Project Vision" && (
                      <a
                          href="/files/project_vision.pdf"
                          target="_blank"
                          className="inline-block mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-cyan-300 hover:bg-white/20 transition"
                      >
                        View Project Vision →
                      </a>
                  )}
                  {item.title === "Status Reports" && (
                      <a
                          href="/files/status_report.pdf"
                          target="_blank"
                          className="inline-block mt-4 px-4 py-2 rounded-xl bg-white/10 border border-white/10 text-cyan-300 hover:bg-white/20 transition"
                      >
                        View Status Report →
                      </a>
                  )}
                  {item.title === "System Implementation" && (
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <img
                            src="/images/Capstone_browse.png"
                            alt="Browsing page"
                            onClick={() => setSelectedImage("/images/Capstone_browse.png")}
                            className="rounded-xl border border-white/10 shadow-lg hover:scale-[1.02] transition cursor-pointer"
                        />
                        <img
                            src="/images/Capstone_profile.png"
                            alt="Profile page"
                            onClick={() => setSelectedImage("/images/Capstone_profile.png")}
                            className="rounded-xl border border-white/10 shadow-lg hover:scale-[1.02] transition cursor-pointer"
                        />
                      </div>
                  )}
                </div>
            ))}
          </div>
        </section>

        <section id="experience" className={section}>
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-3">Experience</p>
          <h2 className={sectionTitle}>Work and volunteer experience</h2>
          <div className="mt-8 grid gap-6">
            {experience.map((job) => (
                <div key={job.role + job.org} className={card}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-white">{job.role} — {job.org}</h3>
                    <p className="text-neutral-400">{job.period}</p>
                  </div>
                  <ul className="list-disc pl-5 text-neutral-200 space-y-3 leading-7">
                    {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </section>

        <section id="contact" className={section}>
          <div className="rounded-[32px] border border-cyan-300/15 bg-cyan-400/10 p-8 md:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-200 mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s connect.</h2>
            <p className="mt-4 max-w-2xl text-neutral-200 leading-8">
              I’m currently building my experience through academic, internship, and personal projects. I’m especially interested in opportunities involving backend development, full-stack web applications, and software engineering internships.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:ivan.barnash@gmail.com" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100">
                ivan.barnash@gmail.com
              </a>
              <a href="/files/resume.docx" target="_blank" className="rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-100">
                Resume
              </a>
              <p className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15">
                +14375590347
              </p>
              <a href="https://github.com/Ivan-here" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/ivan-barnash-715506310/" target="_blank" rel="noreferrer" className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15">
                LinkedIn
              </a>
              <a href="/files/cover_letter.pdf" target="_blank" className="rounded-2xl border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/15">
                Cover Letter
              </a>
            </div>
          </div>
        </section>
        {selectedImage && (
            <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
                onClick={() => setSelectedImage(null)}
            >
              <img
                  src={selectedImage}
                  className="max-w-[90%] max-h-[90%] rounded-xl"
              />
            </div>
        )}

        <footer className="border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row gap-3 items-center justify-between text-sm text-neutral-400">
            <p>© 2026 Ivan Barnash</p>
            <p>Built with React and Tailwind CSS</p>
          </div>
        </footer>
      </div>

  );
}
