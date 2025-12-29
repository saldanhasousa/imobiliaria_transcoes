export default function HamburgerButton({ aberto, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Abrir menu"
      aria-expanded={aberto}
      className="md:hidden p-2"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className={`transition-transform duration-300 ${
          aberto ? "rotate-90" : ""
        }`}
      >
        {/* Linha 1 */}
        <line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          className={`transition-all duration-300 ${
            aberto ? "translate-y-6 rotate-45" : ""
          }`}
        />

        {/* Linha 2 */}
        <line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          className={`transition-opacity duration-200 ${
            aberto ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Linha 3 */}
        <line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          className={`transition-all duration-300 ${
            aberto ? "-translate-y-6 -rotate-45" : ""
          }`}
        />
      </svg>
    </button>
  );
}
