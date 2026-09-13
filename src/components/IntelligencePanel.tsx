"use client";

type IntelligencePanelProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  stage?: string;
  insight?: string;
};

export default function IntelligencePanel({
  isOpen,
  onClose,
  title = "Management Intelligence",
  stage = "Pipeline",
  insight = "Select a funnel stage or visualization to investigate conversion performance.",
}: IntelligencePanelProps) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close intelligence panel"
          onClick={onClose}
          className="fixed inset-0 z-40 cursor-default bg-black/40 backdrop-blur-[2px]"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform border-l border-white/10 bg-slate-950/95 p-6 shadow-2xl backdrop-blur-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Intelligence Interface
            </p>

            <h2 className="mt-2 text-xl font-semibold text-white">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-white/10 px-3 py-2 text-sm text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Close intelligence panel"
          >
            ×
          </button>
        </div>

        <div className="mt-8 space-y-5">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-wider text-white/40">
              Selected Area
            </p>

            <p className="mt-2 text-lg font-medium text-white">
              {stage}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-wider text-white/40">
              Key Insight
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              {insight}
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-wider text-white/40">
              Management Investigation
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Investigate where leads are slowing down or dropping out of
              the pipeline and compare the affected stage across location,
              team, product, and date filters.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-wider text-white/40">
              Recommended Next Step
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              Review the selected stage, identify the largest leakage or
              aging signal, and drill into the underlying lead records.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}