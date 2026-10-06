import { Link, useLocation } from "react-router";

export default function NotFound() {
    const location = useLocation();

    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-100 font-mono text-neutral-100 selection:bg-blue-500 selection:text-white">
            {/* Subtle background glow effect */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

            <div className="container mx-auto px-4 text-center">
                {/* Error Code with Animated Glitch Shader Effect */}
                <div className="relative inline-block">
                    <h1 className="select-none text-8xl font-black tracking-tighter sm:text-9xl">
                        404
                    </h1>
                    <span 
                        aria-hidden="true" 
                        className="absolute inset-0 text-8xl font-black tracking-tighter text-red-600/80 clip-path-glitch sm:text-9xl"
                    >
                        404
                    </span>
                </div>

                {/* Terminal style text blocks */}
                <div className="mt-6 flex flex-col items-center justify-center gap-1 text-sm sm:text-base text-neutral-600">
                    <p className="flex items-center gap-2">
                        <span className="text-blue-500">&gt;</span> Page <code className="rounded bg-neutral-900 px-2 py-0.5 font-mono text-neutral-200 border border-neutral-800">
                            {location.pathname}
                        </code> not found
                    </p>
                </div>

                {/* Modern CTA Link */}
                <div className="mt-8">
                    <Link
                        to="/about"
                        className="inline-flex items-center justify-center rounded-lg border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-medium text-blue-400 backdrop-blur-sm transition-all duration-200 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-neutral-950"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </main>
    );
}
