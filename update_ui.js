const fs = require('fs');

const file = 'c:\\\\Users\\\\Open Up\\\\Downloads\\\\framebasepro_V6.html';
const outFile = 'c:\\\\Users\\\\Open Up\\\\Downloads\\\\index.html';

let content = fs.readFileSync(file, 'utf8');

const newCSS = `
<style>
/* ╔══════════════════════════════════════════════════════╗
   ║   NEON GLOW + GLASSMORPHISM THEME OVERRIDES          ║
   ╚══════════════════════════════════════════════════════╝ */
:root {
  --bg-void: #050505 !important;
  --bg-base: #0A0A0A !important;
  --bg-raised: rgba(255, 255, 255, 0.03) !important;
  --bg-elevated: rgba(255, 255, 255, 0.05) !important;
  --bg-floating: rgba(255, 255, 255, 0.08) !important;
  --glass-bg: rgba(5, 5, 5, 0.6) !important;
  --border-ghost: rgba(255, 255, 255, 0.05) !important;
  --border-subtle: rgba(255, 255, 255, 0.1) !important;
  --border-default: rgba(255, 255, 255, 0.15) !important;
  --border-strong: rgba(255, 255, 255, 0.25) !important;
  --accent: #A855F7 !important; /* Neon purple */
  --accent-light: #D8B4FE !important;
  --accent-hover: #9333EA !important;
  --accent-muted: rgba(168, 85, 247, 0.15) !important;
  --accent-glow: rgba(168, 85, 247, 0.4) !important;
  --text-primary: #FFFFFF !important;
  --text-secondary: #A1A1AA !important;
  --text-muted: #71717A !important;
  --blue: #3B82F6 !important; /* Secondary glow */
}

body, html {
  background-color: var(--bg-void) !important;
  color: var(--text-primary) !important;
}

/* Background Glowing Orb Effect */
body::after {
  content: '';
  position: fixed;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(108, 59, 255, 0.15) 0%, rgba(59, 130, 246, 0.08) 35%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

#app { z-index: 1; position: relative; }

/* Custom Futuristic Components */
.landing-shell {
  width: 100%; height: 100dvh; overflow-y: auto; overflow-x: hidden;
  display: flex; flex-direction: column; align-items: center;
  padding: 20px 20px 100px; scroll-behavior: smooth;
}

.landing-nav {
  width: 100%; max-width: 1100px; display: flex; justify-content: space-between; align-items: center; 
  padding: 20px 0; margin-bottom: 30px; z-index: 10;
}

.hero {
  text-align: center; max-width: 800px; margin-top: 40px; margin-bottom: 60px;
  animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1); z-index: 10;
}
.hero h1 {
  font-family: var(--font-display); font-size: 3.8rem; font-weight: 800;
  line-height: 1.1; margin-bottom: 24px; letter-spacing: -1px;
  color: #fff; text-shadow: 0 0 40px rgba(168, 85, 247, 0.4);
}
.hero p {
  font-size: 1.15rem; color: var(--text-secondary); margin-bottom: 36px;
  max-width: 560px; margin-inline: auto; line-height: 1.6;
}
.hero-btns {
  display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;
}
.btn-grad {
  background: linear-gradient(135deg, #6C3BFF, #A855F7);
  color: #fff; padding: 14px 28px; border-radius: 99px; font-weight: 600; font-family: var(--font);
  border: none; cursor: pointer; display: inline-flex; align-items: center; justify-content: center;
  box-shadow: 0 8px 24px rgba(108, 59, 255, 0.3); transition: all 0.3s ease; text-decoration: none;
}
.btn-grad:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(108, 59, 255, 0.5); }
.btn-grad:active { transform: translateY(0); }

.btn-outline {
  background: rgba(255, 255, 255, 0.03); color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15); padding: 13px 28px;
  border-radius: 99px; font-weight: 600; cursor: pointer; font-family: var(--font);
  backdrop-filter: blur(10px); transition: all 0.3s ease;
}
.btn-outline:hover { background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.3); transform: translateY(-2px); }

.trust-bar {
  background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle);
  border-radius: 24px; padding: 20px 40px; display: flex; align-items: center;
  gap: 32px; margin-bottom: 80px; flex-wrap: wrap; justify-content: center;
  backdrop-filter: blur(24px); box-shadow: 0 16px 40px rgba(0,0,0,0.4);
  animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.1s;
  z-index: 10;
}
.trust-bar span { color: var(--text-secondary); font-weight: 600; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; font-family: var(--font-display); }
.trust-logos { display: flex; gap: 24px; font-size: 20px; color: rgba(255,255,255,0.7); filter: grayscale(1); opacity: 0.8; }

.features-grid {
  display: grid; grid-template-columns: repeat(3, minmax(280px, 1fr));
  gap: 24px; max-width: 1100px; width: 100%; margin-bottom: 60px; z-index: 10;
  animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; animation-delay: 0.2s;
}
.feature-card {
  background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle);
  border-radius: 24px; padding: 32px 24px; backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); position: relative; overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
.feature-card:hover {
  transform: translateY(-6px); border-color: rgba(168, 85, 247, 0.4);
  box-shadow: 0 20px 40px rgba(108, 59, 255, 0.15); background: rgba(255, 255, 255, 0.04);
}
.feature-card::before {
  content: ''; position: absolute; inset: 0; background: radial-gradient(circle at top right, rgba(168, 85, 247, 0.15), transparent 60%);
  opacity: 0; transition: opacity 0.4s; pointer-events: none;
}
.feature-card:hover::before { opacity: 1; }
.f-icon { width: 56px; height: 56px; border-radius: 16px; background: rgba(168, 85, 247, 0.1); display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 20px; border: 1px solid rgba(168, 85, 247, 0.2); color: var(--accent-light); box-shadow: 0 4px 12px rgba(168, 85, 247, 0.2); }
.f-title { font-size: 19px; font-weight: 700; color: #fff; margin-bottom: 10px; font-family: var(--font-display); letter-spacing: -0.3px; }
.f-desc { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }

@keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

/* Inputs reskinned for the glowing theme */
input:not([type="range"]), select, textarea {
  background: rgba(0,0,0,0.4) !important;
  border-color: var(--border-default) !important;
  transition: all 0.2s ease !important;
}
input:not([type="range"]):focus, select:focus, textarea:focus {
  background: rgba(10,10,10,0.6) !important;
  border-color: var(--accent-light) !important;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2) !important;
}

/* Base App Overrides */
.sidebar { background: rgba(10,10,15,0.6) !important; backdrop-filter: blur(20px); border-right: 1px solid var(--border-subtle) !important; }
.topbar { background: rgba(5,5,10,0.7) !important; backdrop-filter: blur(24px) !important; border-bottom: 1px solid var(--border-subtle) !important; }
.kboard-col { background: rgba(255,255,255,0.02) !important; border: 1px solid var(--border-subtle) !important; backdrop-filter: blur(12px); border-radius: 20px !important; }
.asset-card { background: rgba(255,255,255,0.03) !important; border: 1px solid var(--border-subtle) !important; border-radius: 16px !important; backdrop-filter: blur(10px); }
.asset-card:hover { border-color: var(--border-default) !important; background: rgba(255,255,255,0.06) !important; box-shadow: 0 8px 32px rgba(0,0,0,0.5) !important;}
.mobile-nav { background: rgba(5,5,10,0.85) !important; backdrop-filter: blur(30px) !important; border-top: 1px solid var(--border-subtle) !important; }

/* Dashboard specifics fix */
.btn-primary { background: linear-gradient(135deg, #6C3BFF, #A855F7) !important; border-color: transparent !important; }
.btn-primary:hover { transform: translateY(-1px) !important; box-shadow: 0 4px 15px rgba(108, 59, 255, 0.4) !important; }

/* Existing Login Adjustments */
.login-card {
  background: rgba(15, 15, 25, 0.6) !important; backdrop-filter: blur(30px) !important;
  border: 1px solid rgba(255,255,255,0.1) !important;
  box-shadow: 0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03) inset !important;
  border-radius: 32px !important; padding: 40px !important; width: 100% !important; max-width: 420px !important;
}
.login-logo-mark { background: linear-gradient(135deg, #6C3BFF, #A855F7) !important; box-shadow: 0 8px 32px rgba(108, 59, 255, 0.4) !important; border-radius: 16px !important; }

/* Mobile First Adjustments */
@media(max-width: 767px) {
  .hero h1 { font-size: 2.6rem; }
  .trust-bar { padding: 20px; flex-direction: column; gap: 16px; border-radius: 20px; }
  .features-grid { grid-template-columns: 1fr; gap: 16px; }
  .feature-card { padding: 24px 20px; border-radius: 20px; }
  .landing-shell { padding: 15px 15px 80px; }
}
</style>
`;

content = content.replace('</head>', newCSS + '\n</head>');

const newRenderLogin = `function renderLogin(root){
  const shell = mk('div', 'landing-shell');
  
  // Header Nav
  const nav = mk('div', 'landing-nav');
  const logo = mk('div');
  logo.innerHTML = '<strong style="font-size: 22px; font-weight: 800; font-family: var(--font-display); background: linear-gradient(135deg, #A855F7, #6C3BFF); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -0.5px;">FrameBase Pro</strong>';
  const loginBtn = mk('button', 'btn-outline'); loginBtn.textContent = 'Sign In';
  loginBtn.style.padding = '10px 20px'; loginBtn.style.fontSize = '13px';
  loginBtn.addEventListener('click', () => {
    const s = qs('#login-section');
    if(s) s.scrollIntoView({behavior: 'smooth', block: 'center'});
  });
  nav.append(logo, loginBtn);
  shell.appendChild(nav);

  // Hero Section
  const hero = mk('div', 'hero');
  hero.innerHTML = '<h1>Innovating Tomorrow.<br>Building Today.</h1><p>Experience the ultimate futuristic workspace. Collaborate in real-time with stunning glassmorphic design, powerful AI automations, and seamless cloud integrations.</p>';
  const heroBtns = mk('div', 'hero-btns');
  const cta1 = mk('button', 'btn-grad'); cta1.textContent = 'Get Started Free';
  cta1.addEventListener('click', () => qs('#login-section')?.scrollIntoView({behavior: 'smooth', block: 'center'}));
  const cta2 = mk('button', 'btn-outline'); cta2.textContent = 'Explore Features';
  cta2.addEventListener('click', () => qs('.features-grid')?.scrollIntoView({behavior: 'smooth', block: 'center'}));
  heroBtns.append(cta1, cta2);
  hero.appendChild(heroBtns);
  shell.appendChild(hero);

  // Trust Bar
  const trust = mk('div', 'trust-bar');
  trust.innerHTML = '<span>Trusted by 1,200+ Creators</span><div class="trust-logos">★ Trustpilot &nbsp; ✦ Capterra &nbsp; ◈ G2</div>';
  shell.appendChild(trust);

  // Features Grid (3x2 Desktop, Stacked Mobile)
  const features = mk('div', 'features-grid');
  const feats = [
    {icon: '⚡', title: 'Lightning Fast CDN', desc: 'Secure, edge-delivered media uploads and streaming without any lag.'},
    {icon: '🔮', title: 'Glassmorphic UI', desc: 'A stunning, premium dark mode interface designed for ultimate productivity.'},
    {icon: '📱', title: 'Mobile First', desc: 'Manage your entire pipeline, approve media, and review from any smartphone.'},
    {icon: '🤖', title: 'Smart Automation', desc: 'Trigger automatic notifications, slack messages, and stage advances.'},
    {icon: '🔒', title: 'Bank-grade Security', desc: 'Military-grade encryption securing your studio assets on the Firebase network.'},
    {icon: '📊', title: 'Real-time Sync', desc: 'Two-way synchronization with Google Sheets and active social platforms.'}
  ];
  feats.forEach(f => {
    const card = mk('div', 'feature-card');
    card.innerHTML = \`<div class="f-icon">\${f.icon}</div><div class="f-title">\${f.title}</div><div class="f-desc">\${f.desc}</div>\`;
    features.appendChild(card);
  });
  shell.appendChild(features);

  // Login Section (Appended at the bottom)
  const logSec = mk('div'); logSec.id = 'login-section'; 
  logSec.style.cssText = 'width: 100%; display: flex; justify-content: center; padding: 60px 0; margin-top: 40px; position: relative; z-index: 20';
  const card = mk('div','login-card');
  card.innerHTML = '<div class="login-logo-row"><div class="login-logo-mark">F</div><div><div class="login-title">Access Workspace</div><div class="login-sub" style="color:var(--text-secondary)">Sign in to your premium dashboard</div></div></div><div class="login-divider" style="height:1px; background:var(--border-subtle); margin:24px 0"></div>';
  
  const err = mk('div','err-msg'); err.id = 'login-err'; card.appendChild(err);
  
  const f1 = mk('div','field'); const l1 = mk('label'); l1.textContent = 'Email Address'; l1.style.color='var(--text-secondary)'; const i1 = mk('input'); i1.type = 'email'; i1.placeholder = 'you@studio.com'; i1.id = 'le'; i1.autocomplete = 'email'; f1.append(l1,i1); card.appendChild(f1);
  
  const f2 = mk('div','field'); f2.style.marginTop = '16px'; const l2 = mk('label'); l2.textContent = 'Password'; l2.style.color='var(--text-secondary)'; const i2 = mk('input'); i2.type = 'password'; i2.placeholder = '••••••••'; i2.id = 'lp'; i2.autocomplete = 'current-password'; f2.append(l2,i2); card.appendChild(f2);
  
  const btn = mk('button','btn-grad'); btn.style.cssText = 'width:100%; margin-top:28px;'; btn.textContent = 'Sign In to Workspace';
  btn.addEventListener('click', async () => {
    const em = i1.value.trim(), pw = i2.value;
    if(!em || !pw) { const e = qs('#login-err'); e.textContent = 'Enter email and password'; e.classList.add('show'); return; }
    btn.disabled = true; btn.textContent = 'Authenticating...';
    try { await signInWithEmailAndPassword(auth, em, pw); }
    catch(e) {
      const msgs = {'auth/invalid-credential': 'Incorrect email or password.', 'auth/user-not-found': 'Account not found.', 'auth/too-many-requests': 'Too many attempts.'};
      const eb = qs('#login-err'); if(eb) { eb.textContent = msgs[e.code] || e.message; eb.classList.add('show'); }
      btn.disabled = false; btn.textContent = 'Sign In to Workspace';
    }
  });
  i2.addEventListener('keydown', e => { if(e.key === 'Enter') btn.click(); });
  card.appendChild(btn);
  logSec.appendChild(card);
  shell.appendChild(logSec);
  
  root.appendChild(shell);
}`;

content = content.replace(/function renderLogin\(root\)\{[\s\S]*?root\.appendChild\(shell\);\n\}/, newRenderLogin);

fs.writeFileSync(outFile, content);
console.log('Saved updated v7 as ' + outFile);
