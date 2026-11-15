import { Link } from "react-router-dom";

type PatientAction =
  | {
      kind: "internal";
      label: string;
      to: string;
      primary?: boolean;
      localityEvent?: "booking_click";
    }
  | {
      kind: "external";
      label: string;
      href: string;
      primary?: boolean;
      target?: "_blank";
      rel?: string;
    };

interface PatientActionGroupProps {
  actions: PatientAction[];
  ariaLabel: string;
  className?: string;
}

const PatientActionGroup = ({ actions, ariaLabel, className = "" }: PatientActionGroupProps) => (
  <nav
    aria-label={ariaLabel}
    className={`patient-action-group grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center ${className}`}
  >
    {actions.map((action, index) => {
      const isLastAlone = actions.length === 4 && index === actions.length - 1;
      const layoutClass = action.primary || isLastAlone ? "col-span-2 sm:col-span-1" : "col-span-1";
      const visualClass = action.primary
        ? "bg-[#081a2e] text-white shadow-sm hover:bg-[#122842]"
        : "border border-[#d6cbaf] bg-[#fffdf8] text-[#081a2e] hover:bg-[#f4ede0]";
      const actionClass = `${layoutClass} inline-flex min-h-12 w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d24] focus-visible:ring-offset-2 sm:w-auto ${visualClass}`;

      if (action.kind === "internal") {
        return (
          <Link
            key={action.to}
            to={action.to}
            data-locality-event={action.localityEvent}
            className={actionClass}
          >
            {action.label}
          </Link>
        );
      }

      return (
        <a
          key={action.href}
          href={action.href}
          target={action.target}
          rel={action.target === "_blank" ? action.rel ?? "noopener noreferrer" : action.rel}
          className={actionClass}
        >
          {action.label}
        </a>
      );
    })}
  </nav>
);

export default PatientActionGroup;
