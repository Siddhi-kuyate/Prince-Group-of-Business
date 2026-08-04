import { Mail, MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { gmailLink, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      <a
        href={gmailLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Email Prince Group of Business"
        className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-105"
      >
        <Mail className="h-5 w-5" />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_14px_30px_-14px_rgba(37,211,102,0.9)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
    </div>
  );
}
