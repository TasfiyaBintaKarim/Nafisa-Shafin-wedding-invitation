import { FormEvent, useState } from "react";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
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
  { label: "Our story", href: "#story" },
  { label: "Gather", href: "#gather" },
];

function Seal({ small = false }: { small?: boolean }) {
  return (
    <div className={`seal ${small ? "seal-small" : ""}`} aria-hidden="true">
      <span className="seal-inner">
        <Heart size={small ? 12 : 18} strokeWidth={1.55} fill="none" />
        <span className="seal-mark">C<span>&</span>E</span>
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
          <span>Clara <i>&</i> Elliot</span>
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
          <SectionKicker>A love letter from</SectionKicker>
          <h1>Clara <span>&</span> Elliot</h1>
          <p className="hero-subtitle">Please join us for an evening of good company,<br className="desktop-break" /> old songs, and a new beginning.</p>
        </div>

        <div className={`envelope-stage ${opened ? "is-open" : ""}`}>
          <div className="envelope-shadow" />
          <button className="envelope" onClick={openInvitation} aria-label="Open wedding invitation">
            <div className="envelope-back" />
            <div className="envelope-letter">
              <div className="letter-inner">
                <span className="letter-eyebrow">Together with their families</span>
                <strong>Clara <em>&</em> Elliot</strong>
                <span className="letter-date">10 · 18 · 2026</span>
                <div className="letter-rule" />
                <span className="letter-place">The Orangerie · Hudson Valley</span>
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
          <span>October 18, 2026</span>
          <span className="footer-dot" />
          <span>Hudson Valley, NY</span>
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
            <h2>A little gathering<br /><i>for a lot of love.</i></h2>
            <p>We’re keeping things close, slow, and full of the people who made us who we are. Come as you are; stay for the last dance.</p>
            <div className="intro-signoff"><span>With love,</span><strong>C & E</strong></div>
          </div>
          <div className="details-card reveal-up">
            <div className="card-badge"><Sparkles size={15} /> You’re invited</div>
            <div className="detail-row">
              <div className="detail-icon"><CalendarDays size={19} strokeWidth={1.4} /></div>
              <div><span className="detail-label">When</span><strong>Sunday, October 18, 2026</strong><small>Arrive from 3:30 in the afternoon</small></div>
            </div>
            <div className="detail-row">
              <div className="detail-icon"><Clock3 size={19} strokeWidth={1.4} /></div>
              <div><span className="detail-label">The ceremony</span><strong>Four o’clock in the afternoon</strong><small>Dinner, dancing & bonfires to follow</small></div>
            </div>
            <div className="detail-row">
              <div className="detail-icon"><MapPin size={19} strokeWidth={1.4} /></div>
              <div><span className="detail-label">Where</span><strong>The Orangerie at Cedar Grove</strong><small>42 Orchard Lane · Hudson Valley, NY</small></div>
            </div>
            <a className="text-link" href="https://maps.google.com/?q=Hudson+Valley+NY" target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={14} /></a>
          </div>
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="story-frame" />
        <div className="container story-layout">
          <div className="story-image-wrap reveal-up">
            <div className="story-image-placeholder">
              <div className="story-stamp">Est.<br /><strong>2018</strong></div>
              <span className="story-caption">A Sunday kind of love</span>
            </div>
            <div className="image-note">The first of many walks home.</div>
          </div>
          <div className="story-copy reveal-up">
            <SectionKicker>Our story</SectionKicker>
            <h2>Somewhere between<br /><i>hello</i> and always.</h2>
            <p>It started with a borrowed book and a missed train. Six years, two apartments, one very opinionated cat, and countless cups of tea later, we are still each other’s favorite place to be.</p>
            <p>Now, beneath the apple trees, we would love to make the next promise with you close by.</p>
            <div className="story-signature">C <span>♡</span> E</div>
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
              <div className="timeline-item"><span>03:30</span><div><strong>Welcome drinks</strong><small>Something sparkling in the garden</small></div></div>
              <div className="timeline-item"><span>04:00</span><div><strong>The ceremony</strong><small>A short walk to the old oak tree</small></div></div>
              <div className="timeline-item"><span>05:30</span><div><strong>Supper & stories</strong><small>Long tables, candlelight, family-style</small></div></div>
              <div className="timeline-item"><span>08:00</span><div><strong>Dancing late</strong><small>Bring your best two-step</small></div></div>
            </div>
            <div className="gather-note"><Flower2 size={18} strokeWidth={1.25} /><p>Wear something you can wander in. The lawn is soft, the evening may be cool, and the best conversations happen outside.</p></div>
          </div>
        </div>
      </section>

      <section className="closing-section">
        <div className="closing-ornament"><span /><Seal /><span /></div>
        <SectionKicker>We saved you a seat</SectionKicker>
        <h2>Will you join us?</h2>
        <p>Kindly reply by September 1st.<br />We cannot wait to see you there.</p>
        <button className="primary-button" onClick={() => setRsvpOpen(true)}>Kindly RSVP <ChevronRight size={16} /></button>
        <div className="closing-footer"><span>Clara & Elliot</span><span>With all our love</span><span>10 · 18 · 26</span></div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand"><Seal small /><span>Clara <i>&</i> Elliot</span></div>
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
