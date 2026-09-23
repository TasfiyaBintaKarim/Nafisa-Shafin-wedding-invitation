import { FormEvent, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  Check,
  Clock3,
  Flower2,
  Heart,
  MapPin,
  Menu,
  Music2,
  Pause,
  Sparkles,
  X,
} from "lucide-react";

const navItems = [
  { label: "The day", href: "#details" },
  { label: "Gather", href: "#gather" },
];

function Seal({ small = false }: { small?: boolean }) {
  return (
    <div className={`seal ${small ? "seal-small" : ""}`} aria-hidden="true">
      <span className="seal-inner">
        <Heart size={small ? 12 : 18} strokeWidth={1.55} fill="none" />
        <span className="seal-mark">N<span>&</span>S</span>
      </span>
    </div>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-kicker">
      <span className="kicker-line" />
      <span>{children}</span>
      <span className="kicker-line" />
    </div>
  );
}

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const [rsvpSent, setRsvpSent] = useState(false);
  const [playing, setPlaying] = useState(false);

  const openInvitation = () => {
    setOpened(true);
    window.setTimeout(() => document.getElementById("details")?.scrollIntoView({ behavior: "smooth" }), 700);
  };

  const submitRsvp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRsvpSent(true);
  };

  const closeRsvp = () => {
    setRsvpOpen(false);
    window.setTimeout(() => setRsvpSent(false), 300);
  };

  return (
    <main className="invitation-site">
      <header className="site-header">
        <a className="brand-lockup" href="#top" aria-label="Clara and Elliot home">
          <Seal small />
          <span>Nafisa <i>&</i> Shafin</span>
        </a>
        <nav className={`site-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
          ))}
          <button className="nav-rsvp" onClick={() => setRsvpOpen(true)}>RSVP <ArrowUpRight size={14} /></button>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section id="top" className={`hero ${opened ? "hero-opened" : ""}`}>
        <div className="hero-grain" />
        <div className="hero-art hero-art-left" />
        <div className="hero-art hero-art-right" />
        <div className="hero-copy">
          <SectionKicker>A wedding invitation from</SectionKicker>
          <h1>Nafisa <span>&</span> Shafin</h1>
          <p className="hero-subtitle">Your presence at our wedding is the greatest gift<br className="desktop-break" /> we could ask for.</p>
        </div>

        <div className={`envelope-stage ${opened ? "is-open" : ""}`}>
          <div className="envelope-shadow" />
          <button className="envelope" onClick={openInvitation} aria-label="Open wedding invitation">
            <div className="envelope-back" />
            <div className="envelope-letter">
              <div className="letter-inner">
                <span className="letter-eyebrow">Together with their families</span>
                <strong>Nafisa <em>&</em> Shafin</strong>
                <span className="letter-date">23 · 10 · 2026</span>
                <div className="letter-rule" />
                <span className="letter-place">Anando Bhaban · Dhaka</span>
              </div>
            </div>
            <div className="envelope-front" />
            <div className="envelope-flap" />
            <div className="envelope-seal"><Seal /></div>
          </button>
          <button className="open-prompt" onClick={openInvitation}>
            <span>Open the invitation</span>
            <ArrowDown size={15} strokeWidth={1.5} />
          </button>
        </div>

        <div className="hero-footer">
          <span>23rd October</span>
          <span className="footer-dot" />
          <span>Dhaka, Bangladesh</span>
          <button className="sound-toggle" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Pause ambient music" : "Play ambient music"}>
            {playing ? <Pause size={13} /> : <Music2 size={13} />}
            <span>{playing ? "pause" : "sound on"}</span>
          </button>
        </div>
      </section>

      <section id="details" className="details-section paper-section">
        <div className="container details-grid">
          <div className="section-intro reveal-up">
            <SectionKicker>The day</SectionKicker>
            <h2>A little gathering<br /><i>for a lifetime of love.</i></h2>
            <p>Your presence at our wedding is the greatest gift we could ask for. Thank you for being a part of our special day and for sharing in the joy, love, and memories we will cherish forever.</p>
            <div className="intro-signoff"><span>With love,</span><strong>N & S</strong></div>
            <div className="family-note"><span>The couple</span><strong>Nafisa Fairooz & Shafin Nazrul Shafib</strong><span className="family-blessings-label">With the blessings of</span><strong>Omar Faruk Chowdhury & Israt Chowdhury</strong><strong>Late Dr MD Nazrul Islam & Shahnaz Begum</strong></div>
          </div>
          <div className="details-card reveal-up">
            <div className="card-badge"><Sparkles size={15} /> You’re invited</div>
            <div className="detail-row">
              <div className="detail-icon"><CalendarDays size={19} strokeWidth={1.4} /></div>
              <div><span className="detail-label">When</span><strong>Friday, 23rd October 2026</strong><small>Please join us from 7:00 in the evening</small></div>
            </div>
            <div className="detail-row">
              <div className="detail-icon"><Clock3 size={19} strokeWidth={1.4} /></div>
              <div><span className="detail-label">The celebration</span><strong>Seven o’clock in the evening</strong><small>An evening of joy, love & treasured memories</small></div>
            </div>
            <div className="detail-row">
              <div className="detail-icon"><MapPin size={19} strokeWidth={1.4} /></div>
              <div><span className="detail-label">Where</span><strong>Anando Bhaban</strong><small>55 Purana Paltan Lane · VIP Road · Dhaka 1000</small></div>
            </div>
            <a className="text-link" href="https://maps.google.com/?q=Anando+Bhaban,+55+Purana+Paltan+Lane,+Dhaka" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <section id="gather" className="gather-section paper-section">
        <div className="container gather-inner">
          <div className="gather-heading reveal-up">
            <SectionKicker>Come as you are</SectionKicker>
            <h2>Meet us<br /><i>under the trees.</i></h2>
          </div>
          <div className="gather-content reveal-up">
            <div className="timeline">
              <div className="timeline-item"><span>07:00</span><div><strong>Wedding celebration</strong><small>Join us as the evening begins</small></div></div>
              <div className="timeline-item"><span>07:30</span><div><strong>Family blessings</strong><small>A gathering of two families</small></div></div>
              <div className="timeline-item"><span>08:30</span><div><strong>Dinner & memories</strong><small>Good food, stories, and celebration</small></div></div>
              <div className="timeline-item"><span>10:00</span><div><strong>Joyful send-off</strong><small>Thank you for sharing our day</small></div></div>
            </div>
            <div className="gather-note"><Flower2 size={18} strokeWidth={1.25} /><p>Come in your favorite festive attire. Your presence, blessings, and warm wishes will make our celebration complete.</p></div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><Seal small /><span>Nafisa <i>&</i> Shafin</span></div>
        <span>Made with love for our favorite people.</span>
        <a href="#top">Back to top <ArrowUp size={13} /></a>
      </footer>

      {rsvpOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={closeRsvp}>
          <div className="rsvp-modal" role="dialog" aria-modal="true" aria-labelledby="rsvp-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={closeRsvp} aria-label="Close RSVP"><X size={18} /></button>
            {!rsvpSent ? (
              <form onSubmit={submitRsvp}>
                <SectionKicker>Save the date</SectionKicker>
                <h2 id="rsvp-title">We’d love to<br /><i>have you.</i></h2>
                <p>Tell us a little something so we can save the right seat for you.</p>
                <label>Names attending<input name="names" required placeholder="Your name(s)" /></label>
                <label>Will you be joining us?<select name="attendance" defaultValue="yes"><option value="yes">Joyfully accepts</option><option value="no">Regretfully declines</option></select></label>
                <label>Any notes for us?<textarea name="notes" placeholder="Dietary notes, song requests, etc." rows={3} /></label>
                <button className="primary-button modal-submit" type="submit">Send our reply <Check size={15} /></button>
              </form>
            ) : (
              <div className="rsvp-success"><div className="success-icon"><Heart size={24} /></div><SectionKicker>Thank you</SectionKicker><h2>It means<br /><i>the world.</i></h2><p>Your reply is tucked safely away. We’ll see you beneath the trees.</p><button className="text-link" onClick={closeRsvp}>Close this note <ArrowUpRight size={14} /></button></div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
