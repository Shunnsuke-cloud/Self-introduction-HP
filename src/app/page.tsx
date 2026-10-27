import Image from "next/image";
import { ArrowDown, ArrowDownRight, ArrowUp, ArrowUpRight, Code2, MapPin, MessagesSquare, Users, Zap } from "lucide-react";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { about, activities, connect, email, favorites, home, profile, socialLinks } from "@/lib/content";

const activityIcons = { development: Code2, community: MessagesSquare, team: Users, event: Zap };

export default function HomePage() {
  return <>
    <a className="skip-link" href="#main">本文へスキップ</a>
    <Header />
    <main id="main">
      <section id="home" className="hero container" aria-labelledby="hero-heading">
        <div className="hero-topline hero-enter"><p><span className="status-dot" /> PERSONAL WEBSITE</p><p className="hero-location"><MapPin size={13} aria-hidden="true" /> FUKUOKA, JAPAN</p></div>
        <h1 id="hero-heading" className="hero-title"><span className="hero-line hero-enter">コードを動かす楽しさから、</span><span className="hero-line hero-line-blue hero-enter">チームを動かす挑戦へ。</span></h1>
        <div className="hero-bottom">
          <div className="hero-intro hero-enter">
            <div className="hero-name"><p>占部 駿祐</p><span>Shunsuke Urabe</span></div>
            <div className="hero-copy">{home.map((text) => <p key={text}>{text}</p>)}</div>
            <div className="hero-actions"><a href="#about" className="button button-primary">私について<ArrowDownRight size={19} aria-hidden="true" /></a><a href="#activities" className="text-link">これまでの活動<ArrowDownRight size={18} aria-hidden="true" /></a></div>
          </div>
          <div className="hero-photo hero-enter">
            <div className="hero-photo-frame"><Image src="/images/profile.jpg" alt="笑顔の占部駿祐のプロフィール写真" width={904} height={870} sizes="(max-width: 767px) 88vw, 380px" preload className="hero-portrait" /></div>
            <div className="photo-caption"><span>A LITTLE ABOUT ME.</span><span>01 — 05</span></div>
            <div className="photo-note"><span className="status-dot" /> 2028年卒業予定 · 就職活動中</div>
          </div>
        </div>
        <div className="hero-foot"><span>CURIOUS MIND. TEAM SPIRIT.</span><a href="#about">SCROLL TO EXPLORE<ArrowDown size={15} aria-hidden="true" /></a></div>
      </section>

      <section id="about" className="section about-section" aria-label="ABOUT ME">
        <div className="container">
          <SectionHeading number="01" label="ABOUT ME" title="はじめまして、占部 駿祐です。" />
          <div className="about-grid">
            <Reveal className="about-visual"><div className="about-photo"><Image src="/images/profile.jpg" alt="占部駿祐の笑顔のポートレート" width={904} height={870} sizes="(max-width: 767px) 88vw, 38vw" /></div><p className="portrait-label">Shunsuke Urabe<span>STUDENT / FUKUOKA</span></p><div className="about-note"><ArrowUpRight aria-hidden="true" /><p>好奇心を、<br />次の一歩に。</p></div></Reveal>
            <Reveal className="about-content">
              <div className="prose">{about.map((text) => <p key={text}>{text}</p>)}</div>
              <dl className="profile-list">{profile.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="favorites" className="section container" aria-label="MY FAVORITES">
        <SectionHeading number="02" label="MY FAVORITES" title="好きなこと、いろいろ。" description="プログラミングだけでなく、地元の行事やスポーツ、韓国の文化など、好きなことがいろいろあります。" />
        <div className="favorites-grid">{favorites.map((favorite, index) => <Reveal key={favorite.title} className="favorite-card" delay={index % 2 * 0.08}>
          <article>
            <div className="favorite-image"><Image src={favorite.image} alt={favorite.alt} fill sizes="(max-width: 767px) 88vw, (max-width: 1440px) 44vw, 580px" style={{ objectPosition: favorite.position }} /><span className="image-number">0{index + 1}</span><span className="image-caption">{favorite.english}</span></div>
            <div className="favorite-body"><h3>{favorite.title}</h3><div className="prose">{favorite.paragraphs.map((text) => <p key={text}>{text}</p>)}</div></div>
          </article>
        </Reveal>)}</div>
      </section>

      <section id="activities" className="section activities-section" aria-label="MY ACTIVITIES">
        <div className="container">
          <SectionHeading number="03" label="MY ACTIVITIES" title="興味を持ったら、まず挑戦。" description="学校での学習だけでなく、個人開発やサークル、インターンシップ、ハッカソンなど、さまざまな活動に取り組んでいます。" />
          <div className="activities-list">{activities.map((activity, index) => {
            const Icon = activityIcons[activity.kind];
            return <Reveal className="activity-card" key={activity.title}><article className="activity-grid">
              <div className="activity-visual">
                {activity.image ? <div className={`activity-image ${activity.kind}`}><Image src={activity.image} alt={activity.alt ?? activity.title} width={activity.kind === "event" || activity.kind === "community" ? 738 : 1753} height={activity.kind === "event" ? 387 : activity.kind === "community" ? 309 : 876} sizes="(max-width: 767px) 88vw, 40vw" /></div> : <div className={`activity-placeholder ${activity.kind}`}><Icon size={42} strokeWidth={1.2} aria-hidden="true" /><span>{activity.kind === "community" ? "Tech. C. Venture" : activity.kind === "team" ? "BETTER, TOGETHER." : "HACKATHON & EVENTS"}</span><span className="placeholder-sub">{activity.kind === "community" ? "アイデアを、一緒に形に。" : activity.kind === "team" ? "一人ひとりの力を、チームの力へ。" : "新しい出会いと、次の挑戦。"}</span></div>}
              </div>
              <div className="activity-content"><div className="activity-kicker"><span>0{index + 1}</span>{activity.category}</div><h3>{activity.title}</h3><div className="prose">{activity.paragraphs.map((text) => <p key={text}>{text}</p>)}</div>{activity.href && <a className="text-link activity-link" href={activity.href} target="_blank" rel="noopener noreferrer">{activity.linkLabel}<ArrowUpRight size={18} aria-hidden="true" /></a>}</div>
            </article></Reveal>;
          })}</div>
        </div>
      </section>

      <section id="connect" className="section connect-section container" aria-label="CONNECT">
        <SectionHeading number="04" label="CONNECT" title="ここまで見ていただき、ありがとうございます。" />
        <div className="connect-grid"><Reveal className="connect-copy prose">{connect.map((text) => <p key={text}>{text}</p>)}</Reveal><Reveal className="connect-links"><p className="contact-label">LET’S TALK.</p><p className="email-address">{email}</p><div className="social-links">{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={18} aria-hidden="true" /></a>)}</div></Reveal></div>
        <div aria-hidden="true"><Reveal className="closing-type">LET’S CONNECT<span>.</span></Reveal></div>
      </section>
    </main>
    <footer className="container footer"><a href="#home" className="wordmark">Shunsuke Urabe<span>.</span></a><small>© 2026 Shunsuke Urabe</small><a href="#home" className="back-top" aria-label="ページの先頭へ戻る"><ArrowUp size={18} aria-hidden="true" /></a></footer>
  </>;
}
