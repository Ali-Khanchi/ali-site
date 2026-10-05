import { lorem } from "./info";

const learnMoreButton = "ml-auto flex items-center justify-between cursor-pointer";

export const learnMoreText =
    "font-bold tracking-wide text-blue-600 uppercase mb-0 ml-auto underline";

export const itemRow =
    "flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mt-4 print:mt-0";
export const itemTitle = "font-semibold text-lg print:text-sm";
export const itemSubtitle = "text-sm text-neutral-700 print:text-xs print:font-medium";
export const itemMeta = "text-sm text-neutral-500 text-right print:text-xs";
export const itemBody =
    "text-sm text-neutral-800 mt-2 print:mt-0 print:font-light print:tracking-tight print:text-xs";

export const linkStyle =
    "text-blue-600 underline hover:no-underline hover:bg-blue-600 hover:text-white";

type ProjectProps = {
    title: string;
    subtitle: string;
    link?: string | undefined;
    meta: string;
    body: any;
    learnMore?: any;
    toggleProject?: any;
    openProject?: any;
    projectKey?: any;
    hidden?: boolean;
};

export const Project: React.FC<ProjectProps> = ({
    title = "Title",
    subtitle = "Subtitle",
    link,
    meta = "Metadata",
    body = lorem,
    learnMore,
    toggleProject,
    openProject,
    projectKey,
    hidden = false,
}) => {
    if (hidden) return null;

    const learnProject = (p: any) => openProject === p;

    const learnMoreSection = learnMore ? (
        <div className="print:hidden">
            <button
                type="button"
                className={learnMoreButton}
                onClick={() => toggleProject(projectKey)}
            >
                <h2
                    className={`${learnMoreText} ${learnProject(projectKey) ? "text-purple-600" : ""}`}
                >
                    Learn More
                </h2>
            </button>
            <div
                className={`transition-all duration-500 ease-in-out overflow-hidden
                                    ${
                                        learnProject(projectKey)
                                            ? "max-h-[5000px] opacity-100 translate-y-0"
                                            : "max-h-0 opacity-0"
                                    }`}
            >
                <div className="bg-gray-300 rounded p-5">
                    <section className="text-sm">{learnMore}</section>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );

    const bodySection =
        typeof body === "string" ? (
            <p className={itemBody}>{body}</p>
        ) : (
            <div className={itemBody}>{body}</div>
        );

    return (
        <div className="project-item mb-5 print:mb-1">
            <div className={itemRow}>
                <div>
                    <div>
                        <h3 className={itemTitle}>{title}</h3>
                        {!!link ? (
                            <p>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkStyle + " print:text-xs"}
                                >
                                    {subtitle}
                                </a>
                            </p>
                        ) : (
                            <p className={itemSubtitle}>{subtitle}</p>
                        )}
                    </div>
                </div>
                <p className={itemMeta}>{meta}</p>
            </div>
            {bodySection}
            {learnMoreSection}
        </div>
    );
};
