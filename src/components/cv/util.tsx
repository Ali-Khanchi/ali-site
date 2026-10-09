import { useState } from "react";
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
    images?: string[];
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
    images,
    learnMore,
    toggleProject,
    openProject,
    projectKey,
    hidden = false,
}) => {
    if (hidden) return null;

    const [isGalleryOpen, setIsGalleryOpen] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

    const isPdf = (url: string) => url.toLowerCase().endsWith(".pdf");

    const imageSection =
        images && images.length > 0 ? (
            <div className="mt-3 print:hidden">
                {/* <button
                    type="button"
                    className={learnMoreButton}
                    onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                >
                    <h2 className={learnMoreText}>{isGalleryOpen ? "Hide Media" : "View Media"}</h2>
                </button> */}

                <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isGalleryOpen ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="flex gap-3 overflow-x-auto p-0.5 pb-2 scrollbar-thin">
                        {images.map((file, idx) =>
                            isPdf(file) ? (
                                <div
                                    key={idx}
                                    className="h-28 w-36 flex flex-col items-center justify-center bg-neutral-100 border border-neutral-200 rounded-md cursor-pointer hover:bg-neutral-200 shrink-0 p-2 text-center"
                                    onClick={() => setSelectedImage(file)}
                                >
                                    <span className="text-red-600 font-bold text-xs uppercase tracking-wider mb-1">
                                        PDF
                                    </span>
                                    <span className="text-xs text-neutral-600 truncate w-full">
                                        {file.split("/").pop()}
                                    </span>
                                </div>
                            ) : (
                                <img
                                    key={idx}
                                    src={file}
                                    alt={`${title} screenshot ${idx + 1}`}
                                    className="h-28 w-auto object-cover rounded-md cursor-pointer border border-neutral-200 hover:opacity-90 shrink-0"
                                    onClick={() => setSelectedImage(file)}
                                />
                            )
                        )}
                    </div>
                </div>

                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div
                            className="relative max-w-4xl max-h-[90vh] w-full h-[85vh] flex items-center justify-center bg-white rounded-lg p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {isPdf(selectedImage) ? (
                                <iframe
                                    src={selectedImage}
                                    title="PDF Preview"
                                    className="w-full h-full rounded"
                                />
                            ) : (
                                <img
                                    src={selectedImage}
                                    alt="Expanded view"
                                    className="max-h-full max-w-full w-auto h-auto object-contain rounded-lg"
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        ) : null;

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
            {imageSection}
            {learnMoreSection}
        </div>
    );
};
