"use client";

import React, { useState } from "react";
import { useLocation } from "wouter";
import TagBox, { TagOption } from "../TagBox";
import { aisLearnMore, dfcLearnMore, dkLearnMore, rawiLearnMore, shababeekLearnMore } from "./info";
import { itemBody, linkStyle, Project } from "./util";

const pageWrapper = "print-page-wrapper min-h-screen flex justify-center bg-neutral-100 py-8 px-4";

const card =
    "print-card w-full max-w-5xl bg-white shadow-md rounded-md p-10 text-base leading-relaxed text-black print:leading-tight";

const headerRow =
    "border-b pb-4 mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between print:pb-1";
const nameClass =
    "text-3xl font-black tracking-wide text-green-800 print:tracking:tight print:text-lg";
const contactBlock = "text-neutral-700 flex flex-col sm:items-end print:text-xs sm:text-right";

const sectionHeaderButton = "w-full flex items-center justify-between cursor-pointer";
const section = "mt-4 border-b pb-4 last:border-b-0 print:border-b-0";
const sectionTitle =
    "text-2xl font-extrabold tracking-wide text-blue-800 uppercase mb-0 print:text-sm print:tracking-tight";
const sectionIcon = "text-xl ml-2 print:hidden";

const bulletList =
    "list-disc list-inside text-sm text-neutral-800 mt-2 space-y-1 print:space-y-0 print:mt-0 print:text-xs";

const skillsSection = "print:flex print:gap-1 print:items-baseline";
const skillsLabel = "font-semibold print:text-xs";
const skillsGrid =
    "grid sm:grid-cols-2 gap-3 text-sm text-neutral-800 mt-4 print:mt-0 print:block print:text-xs";

const sectionKeys = ["work", "education", "projects", "awards", "skills", "volunteering"] as const;

type SectionKey = (typeof sectionKeys)[number];
enum ProjectKey {
    None,
    ComStar,
    RAKEZ,
    Drone,
    DL,
    DFC,
    Rawi,
    Shababeek,
    AIS,
    Michaleshof,
    TA,
    Tetra,
    RUG,
    AISedu,
    Scholarship,
    FM,
    Sheraa,
}

const sectionKeyOptions: TagOption<SectionKey>[] = sectionKeys.map((key) => ({
    value: key,
    label: key[0].toUpperCase() + key.slice(1), // "work" -> "Work"
}));

const projectKeyOptions: TagOption<ProjectKey>[] = Object.values(ProjectKey)
    .filter((v): v is ProjectKey => typeof v === "number" && v !== ProjectKey.None)
    .map((value) => ({
        value,
        label: ProjectKey[value],
    }));

interface ShortTechCVProps {
    isPrintPage?: boolean;
}

const ShortTechCV: React.FC<ShortTechCVProps> = ({ isPrintPage = false }) => {
    const [openSections, setOpenSections] = useState(
        Object.fromEntries(sectionKeys.map((key) => [key, true])) as Record<SectionKey, boolean>
    );
    const [openProject, setOpenProject] = useState(ProjectKey.None);

    const toggleSection = (key: SectionKey) => {
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const toggleProject = (key: ProjectKey) => {
        setOpenProject((prev) => (prev === key ? ProjectKey.None : key));
    };

    const [selectedSections, setSelectedSections] = useState<SectionKey[]>(() =>
        sectionKeyOptions.map((o) => o.value)
    );
    const [selectedProjects, setSelectedProjects] = useState<ProjectKey[]>(() =>
        projectKeyOptions.map((o) => o.value)
    );

    const expandAll = () => {
        setOpenSections(
            sectionKeys.reduce(
                (acc, key) => ({ ...acc, [key]: true }),
                {} as Record<SectionKey, boolean>
            )
        );
    };

    const collapseAll = () => {
        setOpenSections(
            sectionKeys.reduce(
                (acc, key) => ({ ...acc, [key]: false }),
                {} as Record<SectionKey, boolean>
            )
        );
    };

    const [location] = useLocation();

    return (
        <main className={pageWrapper}>
            <article className={card}>
                <header className={headerRow}>
                    <div>
                        <h1 className={nameClass}>Ali Khanchi</h1>
                        <span className="print:text-sm">{"Nationality: German"}</span>
                        <a
                            href="https://ali.khanchi.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-2 hidden print:block text-xs"
                        >
                            Learn more about me at: ali.khanchi.me
                        </a>
                    </div>
                    <div className={contactBlock}>
                        <span>+971503665548</span>
                        <a
                            href="mailto:khanchi.ali@gmail.com"
                            className="underline underline-offset-2"
                        >
                            khanchi.ali@gmail.com
                        </a>
                        <a
                            href="https://github.com/Ali-Khanchi"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="inline-flex items-center text-gray-600 hover:text-black print:pl-4 sm:justify-end"
                        >
                            GitHub
                            <img src="/github-mark.svg" alt="" className="ml-1 h-6 w-6" />
                        </a>
                    </div>
                </header>

                <div className="gap-3 justify-end mb-2 print:hidden" hidden={!isPrintPage}>
                    <TagBox<SectionKey>
                        label="Filter sections"
                        options={sectionKeyOptions}
                        value={selectedSections}
                        onChange={setSelectedSections}
                        placeholder="Select sections"
                    />
                    <br />
                    <TagBox<ProjectKey>
                        label="Filter projects"
                        options={projectKeyOptions}
                        value={selectedProjects}
                        onChange={setSelectedProjects}
                        placeholder="Select project types"
                    />
                </div>

                {/* Global controls */}
                <div className="flex gap-3 justify-end mb-2 print:hidden">
                    <button
                        type="button"
                        onClick={expandAll}
                        className="text-sm px-3 py-1 border rounded-md hover:bg-neutral-100"
                    >
                        Expand All
                    </button>
                    <button
                        type="button"
                        onClick={collapseAll}
                        className="text-sm px-3 py-1 border rounded-md hover:bg-neutral-100"
                    >
                        Collapse All
                    </button>
                </div>

                {/* WORK EXPERIENCE */}
                <section className={section} hidden={!selectedSections.includes("work")}>
                    <button
                        type="button"
                        className={sectionHeaderButton}
                        onClick={() => toggleSection("work")}
                    >
                        <h2 className={sectionTitle}>Work Experience</h2>
                        <span className={sectionIcon}>{openSections.work ? "−" : "+"}</span>
                    </button>

                    {openSections.work && (
                        <>
                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.ComStar)}
                                title={"Software Engineer (IoT \& Edge Systems)"}
                                subtitle={"ComStar FZ LLC"}
                                link={"https://com-star.ca/"}
                                meta={"Full-time • UAE • Jul 2024 - Jan 2026"}
                                body={
                                    <ul className={bulletList}>
                                        <li>
                                            Developed software in .NET, Next.js, and Python for
                                            various projects.
                                        </li>
                                        <li>
                                            Integrated hardware devices such as cameras and gate
                                            barriers for security workflows.
                                        </li>
                                        <li>
                                            Implemented VPN-based access and secure gateways on site
                                            for secure on-premise deployment and edge computing
                                            workflows.
                                        </li>
                                    </ul>
                                }
                            />

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.TA)}
                                title={"Teacher Assistant @ University of Groningen"}
                                subtitle=""
                                meta={"April 2024 - April 2025"}
                                body={
                                    <ul className={bulletList}>
                                        <li>
                                            Employed by the university for 6 courses, assisted
                                            professors in different responsibilities
                                        </li>
                                        <li>
                                            Organizing and teaching tutorials/labs to students,
                                            offering feedback and support
                                        </li>
                                        <li>Preparing and presenting live demos</li>
                                    </ul>
                                }
                            />

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.Tetra)}
                                title={"Software Developer"}
                                subtitle={"Tetra Private Management Company"}
                                meta={"UAE • Dec 2017 - Dec 2019"}
                                body={
                                    <ul className={bulletList}>
                                        <li>
                                            Developed digital menus using FileMaker for a{" "}
                                            <a
                                                href="/shababeek_certificate.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={linkStyle}
                                            >
                                                restaurant
                                            </a>
                                            , and a{" "}
                                            <a
                                                href="/alrawi_certificate.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={linkStyle}
                                            >
                                                book cafe
                                            </a>{" "}
                                            under Tetra.
                                        </li>
                                        <li>
                                            Received{" "}
                                            <a
                                                href="/tetra_certificate.pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={linkStyle}
                                            >
                                                certificate of completion
                                            </a>{" "}
                                            from Sheikha Bodour bint Sultan Al Qasimi in recognition
                                            of work.
                                        </li>
                                    </ul>
                                }
                            />
                        </>
                    )}
                </section>

                {/* EDUCATION */}
                <section className={section} hidden={!selectedSections.includes("education")}>
                    <button
                        type="button"
                        className={sectionHeaderButton}
                        onClick={() => toggleSection("education")}
                    >
                        <h2 className={sectionTitle}>Education</h2>
                        <span className={sectionIcon}>{openSections.education ? "−" : "+"}</span>
                    </button>

                    {openSections.education && (
                        <>
                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.RUG)}
                                title={"University of Groningen"}
                                subtitle={"Bachelor of Science in Computer Science"}
                                meta={"Groningen, Netherlands • Sep 2022 - Oct 2025"}
                                body={"Graduated Cum Laude"}
                            />

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.AISedu)}
                                title={"Australian International School"}
                                subtitle={"IB Diploma Programme"}
                                meta={"UAE • Sep 2020 - Jun 2022"}
                                body={""}
                            />
                        </>
                    )}
                </section>

                {/* PROJECTS */}
                <section className={section} hidden={!selectedSections.includes("projects")}>
                    <button
                        type="button"
                        className={sectionHeaderButton}
                        onClick={() => toggleSection("projects")}
                    >
                        <h2 className={sectionTitle}>Projects</h2>
                        <span className={sectionIcon}>{openSections.projects ? "−" : "+"}</span>
                    </button>

                    {openSections.projects && (
                        <>
                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.RAKEZ)}
                                title={"RAKEZ Real Time Tracking System"}
                                subtitle={"Ras Al-Khaimah Economic Zone (RAKEZ)"}
                                link={"https://rakez.com/en/about-us/rakez"}
                                meta={"Aug 2024 - Jan 2026"}
                                body={`Developed a portfolio of projects for RAKEZ including a Real Time Tracking System integrating the many installed cameras with our own AI tracking at ComStar. Smart weighbridge system to automatically recognize license plates and manage weighing data from trucks entering and exiting the free zone. Gatepass system for visitors to the free zone.`}
                                learnMore={undefined}
                                toggleProject={toggleProject}
                                openProject={openProject}
                                projectKey={ProjectKey.RAKEZ}
                            />

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.Drone)}
                                title={"Real-Time Drone Operation System"}
                                subtitle={"Ras Al-Khaimah Police GHQ"}
                                link={"https://www.rakpolice.gov.ae/"}
                                meta={"Jul 2025 - Oct 2025"}
                                body={`Built a Real-Time Drone Operation System for Tactical Drone Operations for use in public safety. Project served also as Bachelor Thesis. The system provides various tools for drone operators to enhance the process of planning missions. Aside from controlling the drone and scheduling flights, the system shows ADS-B, weather, and fly zone restriction data.`}
                                learnMore={undefined}
                                toggleProject={toggleProject}
                                openProject={openProject}
                                projectKey={ProjectKey.Drone}
                            />

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.DL)}
                                title={"Docker SDK for Kotlin"}
                                subtitle={"Digital Lab, University of Groningen"}
                                link={
                                    "https://www.rug.nl/fse/education/sse/clt-new/clt/services/professional-development/pie4lunch/17-dec-24?lang=en"
                                }
                                meta={"Feb 2024 - Jul 2024"}
                                body={`Developed a Kotlin client for the Docker Engine API to manage containers programmatically. Collaborated in a team using a test-driven development approach, including automated tests, CI/CD workflows, and a modular architecture with effective design patterns.`}
                                learnMore={dkLearnMore}
                                toggleProject={toggleProject}
                                openProject={openProject}
                                projectKey={ProjectKey.DL}
                                images={[
                                    "/docker-kotlin/example.png",
                                    "/docker-kotlin/presentation.pdf",
                                    "/docker-kotlin/poster.pdf",
                                ]}
                            />

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.DFC)}
                                title={"Customer Management Software"}
                                subtitle={"Dolphin Fitness Centre"}
                                meta={"Jul 2017"}
                                body={`Built a custom customer-management system to 
                                        eliminate paper workflows. Included invoicing and fitness package 
                                        handling, with automated price calculation and printable invoices.`}
                                learnMore={dfcLearnMore}
                                toggleProject={toggleProject}
                                openProject={openProject}
                                projectKey={ProjectKey.DFC}
                            ></Project>

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.Rawi)}
                                title={"Digital Menu System"}
                                subtitle={"Al Rawi Book Cafe & Restaurant"}
                                meta={"Jun 2019"}
                                images={[
                                    "/alrawi/presentation.pdf",
                                    "/alrawi/menu.png",
                                    "/alrawi/drinks.png",
                                    "/alrawi/item.png",
                                    "/alrawi/edit.png",
                                    "/alrawi/library.png",
                                    "/alrawi/book.png",
                                    "/alrawi/category.png",
                                ]}
                                body={
                                    <p>
                                        {
                                            "Designed and implemented a custom digital menu system to replace printed menus. In addition, a book lookup for books at the cafe was provided for customers. Overall improved customer experience. "
                                        }
                                    </p>
                                }
                                learnMore={rawiLearnMore}
                                toggleProject={toggleProject}
                                openProject={openProject}
                                projectKey={ProjectKey.Rawi}
                            />

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.Shababeek)}
                                title={"Digital Menu System"}
                                subtitle={"Shababeek Restaurant"}
                                meta={"Jan 2018"}
                                body={`Developed an interactive digital menu solution for a high-traffic restaurant. By using high-quality images that were unused, the digital option was much more engaging. Reduced operational overhead by removing the need for frequent reprinting.`}
                                learnMore={shababeekLearnMore}
                                toggleProject={toggleProject}
                                openProject={openProject}
                                projectKey={ProjectKey.Shababeek}
                            />

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.AIS)}
                                title={"Student Lookup Tool"}
                                subtitle={"Australian International School"}
                                link={"https://www.ais.ae/"}
                                meta={"Dec 2017"}
                                body={`Developed a mobile-friendly digital lookup tool to speed up student verification at pickup. Imported ~1500 student records and enabled fast search by initials, grade, gender.`}
                                learnMore={aisLearnMore}
                                toggleProject={toggleProject}
                                openProject={openProject}
                                projectKey={ProjectKey.AIS}
                                images={["/ais/input.png", "/ais/search.png", "/ais/list.png"]}
                            />
                        </>
                    )}
                </section>

                {/* VOLUNTEERING */}
                <section className={section} hidden={!selectedSections.includes("volunteering")}>
                    <button
                        type="button"
                        className={sectionHeaderButton}
                        onClick={() => toggleSection("volunteering")}
                    >
                        <h2 className={sectionTitle}>Volunteering</h2>
                        <span className={sectionIcon}>{openSections.volunteering ? "−" : "+"}</span>
                    </button>

                    {openSections.volunteering && (
                        <>
                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.Michaleshof)}
                                title={"Michaelshof"}
                                subtitle={""}
                                meta={"Germany • Jul 2021 - Aug 2021"}
                                body={
                                    <>
                                        <p className={itemBody}>
                                            <a
                                                href="https://michaelshof-sammatz.de/blog/volunteer/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={linkStyle}
                                            >
                                                Michaelshof
                                            </a>{" "}
                                            is a community with volunteers from all around the
                                            world. I volunteered to perform duties in various
                                            projects including:
                                        </p>
                                        <ul className={bulletList}>
                                            <li>Gardening and organic farming</li>
                                            <li>Construction and building</li>
                                            <li>Volunteering at the traditional bakery</li>
                                            <li>Volunteering at the creamery</li>
                                            <li>Animal care and feeding</li>
                                            <li>General maintenance and upkeep</li>
                                            <li>Assistance in cafe and canteen kitchen</li>
                                        </ul>
                                    </>
                                }
                            />
                        </>
                    )}
                </section>

                {/* AWARDS & SCHOLARSHIPS */}
                <section className={section} hidden={!selectedSections.includes("awards")}>
                    <button
                        type="button"
                        className={sectionHeaderButton}
                        onClick={() => toggleSection("awards")}
                    >
                        <h2 className={sectionTitle}>Awards &amp; Scholarships</h2>
                        <span className={sectionIcon}>{openSections.awards ? "−" : "+"}</span>
                    </button>

                    {openSections.awards && (
                        <>
                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.Scholarship)}
                                title={"Merit-Based Scholarship in Final Year"}
                                subtitle={""}
                                meta={"Sep 2024"}
                                body={
                                    <p className={itemBody}>
                                        Awarded by{" "}
                                        <a
                                            href="https://com-star.ca/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={linkStyle}
                                        >
                                            ComStar FZ LLC
                                        </a>
                                    </p>
                                }
                            />

                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.FM)}
                                title={"Apple Certified Developer"}
                                subtitle={"Claris, an Apple company"}
                                link={"https://www.claris.com/"}
                                meta={"Aug 2020"}
                                body={`Claris FileMaker is an application development platform. I
                                    undertook certification tests for FileMaker versions 17 & 18 and
                                    became a certified developer.`}
                            />
                            <Project
                                hidden={!selectedProjects.includes(ProjectKey.Sheraa)}
                                title={"Sheraa Startup Toolbox"}
                                subtitle={"Sharjah Entrepreneurship Center"}
                                link={"https://sheraa.ae/"}
                                meta={"Jul 2019"}
                                body={`Attended a hands-on event involving interactive workshops and the opportunity to network with early-stage founders looking to start their own startup.`}
                            />
                        </>
                    )}
                </section>

                {/* SKILLS */}
                <section className={section} hidden={!selectedSections.includes("skills")}>
                    <button
                        type="button"
                        className={sectionHeaderButton}
                        onClick={() => toggleSection("skills")}
                    >
                        <h2 className={sectionTitle}>Skills</h2>
                        <span className={sectionIcon}>{openSections.skills ? "−" : "+"}</span>
                    </button>

                    {openSections.skills && (
                        <div className={skillsGrid}>
                            <div className={skillsSection}>
                                <p className={skillsLabel}>Project Skills:</p>
                                <p>Process Optimization, Network Security, Data Management</p>
                            </div>

                            <div className={skillsSection}>
                                <p className={skillsLabel}>Frontend:</p>
                                <p>
                                    TypeScript, Next.js, React, React Native, Expo, Svelte, WinForms
                                </p>
                            </div>

                            <div className={skillsSection}>
                                <p className={skillsLabel}>Backend:</p>
                                <p>
                                    .NET, ASP.NET Core, Python, Kotlin, Java, C, Rust, C++, Haskell
                                </p>
                            </div>

                            <div className={skillsSection}>
                                <p className={skillsLabel}>DevOps:</p>
                                <p>Docker, Git, GitHub Actions, GitLab CI/CD, Cloudflare</p>
                            </div>

                            <div className={skillsSection}>
                                <p className={skillsLabel}>Other:</p>
                                <p>
                                    MySQL, PostgreSQL, Nginx, Grafana, Elasticsearch, Kibana,
                                    FileMaker, PHPRunner
                                </p>
                            </div>
                        </div>
                    )}
                </section>
            </article>
        </main>
    );
};

export default ShortTechCV;
