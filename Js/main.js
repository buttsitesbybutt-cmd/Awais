/* Shared UI behaviour across all pages. No backend — everything here
   simulates real behaviour against the in-memory RUNTIME store in data.js. */

function renderHeader(active){
  const nav = [
    ["index.html","Home"],
    ["projects.html","Projects"],
    ["marketplace.html","Downloads"],
    ["services.html","Services"],
    ["free-resources.html","Free Resources"],
    ["about.html","About"],
    ["contact.html","Contact"]
  ];
  const links = nav.map(([href,label])=>
    `<a href="${href}" class="${active===href?'active':''}">${label}</a>`
  ).join("");
  document.getElementById("site-header").innerHTML = `
  <div class="wrap nav-row">
    <a href="index.html" class="logo">
      <span class="name">Awais Architect</span>
      <span class="tag mono">@awais.architect · ARCH STUDIO</span>
    </a>
    <nav class="primary">${links}</nav>
    <div class="nav-actions">
      <button class="icon-btn" title="Search" onclick="location.href='projects.html'">⌕</button>
      <a class="icon-btn" title="Account" href="account.html">☺</a>
      <a class="btn btn-primary btn-sm" href="contact.html">Request a Design</a>
      <button class="mobile-toggle icon-btn" onclick="toggleMobileNav()">≡</button>
    </div>
  </div>
  <div id="mobile-nav" style="display:none;border-top:1px solid var(--line);">
    <div class="wrap" style="display:flex;flex-direction:column;padding:14px 28px;">
      ${nav.map(([href,label])=>`<a href="${href}" style="padding:10px 0;font-size:15px;">${label}</a>`).join("")}
    </div>
  </div>`;

  const mob = document.getElementById("mobile-bottom-nav");
  if(mob){
    mob.innerHTML = `
    <a href="index.html">⌂<span>Home</span></a>
    <a href="projects.html">▦<span>Projects</span></a>
    <a href="marketplace.html">⬇<span>Downloads</span></a>
    <a href="account.html">♥<span>Favorites</span></a>
    <a href="account.html">☺<span>Profile</span></a>`;
  }
}

function toggleMobileNav(){
  const el = document.getElementById("mobile-nav");
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function renderFooter(){
  const el = document.getElementById("site-footer");
  if(!el) return;
  el.innerHTML = `
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <div class="logo" style="margin-bottom:14px;">
          <span class="name">Awais Architect</span>
          <span class="tag mono">@awais.architect · ARCH STUDIO</span>
        </div>
        <p style="max-width:320px;font-size:13.5px;">${PROFILE.bio}</p>
        <a href="${PROFILE.tiktokUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="margin-top:8px;">Follow on TikTok</a>
      </div>
      <div>
        <h4>Explore</h4>
        <a href="projects.html">All Projects</a>
        <a href="marketplace.html">Marketplace</a>
        <a href="free-resources.html">Free Resources</a>
        <a href="services.html">Services</a>
      </div>
      <div>
        <h4>Studio</h4>
        <a href="about.html">About</a>
        <a href="admin.html">Admin Dashboard</a>
        <a href="contact.html">Contact</a>
        <a href="account.html">My Account</a>
      </div>
      <div>
        <h4>Contact (Demo)</h4>
        <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
        <a href="#">WhatsApp: ${PROFILE.whatsapp}</a>
        <a href="${PROFILE.tiktokUrl}" target="_blank" rel="noopener">${PROFILE.handle} on TikTok</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Awais Architect — Demo prototype. Not a live commercial site.</span>
      <span>Contact details and prices shown are placeholders for demonstration.</span>
    </div>
  </div>`;
}

function renderFloatingCTA(){
  const el = document.getElementById("floating-cta-slot");
  if(!el) return;
  el.innerHTML = `<div class="floating-cta" onclick="location.href='projects.html'">
    <span>🎬</span> Seen this on TikTok? Explore the complete project →
  </div>`;
}

function adSlot(label="ADVERTISEMENT", size="wide"){
  return `<div class="ad-slot ${size}"><span>${label} · Space Reserved</span></div>`;
}

function showToast(msg){
  let t = document.getElementById("global-toast");
  if(!t){
    t = document.createElement("div");
    t.id = "global-toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove("show"), 2600);
}

/* ---------------- Lightbox ---------------- */
let LB_IMAGES = [];
let LB_INDEX = 0;
function openLightbox(images, index){
  LB_IMAGES = images; LB_INDEX = index;
  let lb = document.getElementById("lightbox");
  if(!lb){
    lb = document.createElement("div");
    lb.id = "lightbox";
    lb.className = "lightbox";
    lb.innerHTML = `
      <div class="lb-frame"></div>
      <div class="lb-caption mono"></div>
      <div class="lb-controls">
        <button onclick="lbNav(-1)">← Prev</button>
        <button onclick="closeLightbox()">Close</button>
        <button onclick="lbNav(1)">Next →</button>
      </div>`;
    document.body.appendChild(lb);
  }
  lb.classList.add("open");
  updateLightbox();
}
function updateLightbox(){
  const lb = document.getElementById("lightbox");
  lb.querySelector(".lb-caption").textContent = `${LB_INDEX+1} / ${LB_IMAGES.length} — ${LB_IMAGES[LB_INDEX]}`;
}
function lbNav(dir){
  LB_INDEX = (LB_INDEX + dir + LB_IMAGES.length) % LB_IMAGES.length;
  updateLightbox();
}
function closeLightbox(){
  document.getElementById("lightbox").classList.remove("open");
}

/* ---------------- Modal (download / checkout) ---------------- */
function openModal(html){
  let m = document.getElementById("app-modal");
  if(!m){
    m = document.createElement("div");
    m.id = "app-modal";
    m.className = "modal-overlay";
    m.onclick = (e)=>{ if(e.target === m) closeModal(); };
    document.body.appendChild(m);
  }
  m.innerHTML = `<div class="modal">${html}</div>`;
  m.classList.add("open");
}
function closeModal(){
  const m = document.getElementById("app-modal");
  if(m) m.classList.remove("open");
}

function startFreeDownload(slug){
  const p = findProject(slug);
  openModal(`
    <span class="close-x" onclick="closeModal()">×</span>
    <h3>Free Preview</h3>
    <p style="font-size:13.5px;">${p.title} — watermarked preview files.</p>
    <div class="ad-slot wide" style="margin:14px 0;">ADVERTISEMENT · Space Reserved</div>
    <ul style="font-size:13.5px;color:var(--ink-soft);padding-left:18px;">
      ${p.freeIncludes.map(f=>`<li>${f}</li>`).join("")}
    </ul>
    <button class="btn btn-primary btn-block" style="margin-top:14px;" onclick="confirmDownload('${slug}')">Continue to Download</button>
  `);
}
function confirmDownload(slug){
  const p = findProject(slug);
  RUNTIME.downloadLog.push({slug, type:"free", at: new Date().toISOString()});
  closeModal();
  showToast(`Demo download started: ${p.title} (free preview)`);
}

function startPremiumCheckout(slug){
  const p = findProject(slug);
  if(p.notDownloadable){
    openModal(`
      <span class="close-x" onclick="closeModal()">×</span>
      <h3>Not Available for Download</h3>
      <p style="font-size:13.5px;">This is client-specific work shown for portfolio purposes only. It isn't authorized for public distribution.</p>
      <a href="contact.html" class="btn btn-outline btn-block">Request a Similar Custom Design</a>
    `);
    return;
  }
  openModal(`
    <span class="close-x" onclick="closeModal()">×</span>
    <h3>Complete Project Package <span class="demo-badge">Demo Checkout</span></h3>
    <p style="font-size:13.5px;">${p.title}</p>
    <div class="panel" style="padding:16px;margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;font-size:14px;"><span>Complete CAD Package</span><b>$${p.price?.toFixed(2)}</b></div>
    </div>
    <div class="field" style="margin-bottom:10px;"><label>Email</label><input type="email" id="co-email" placeholder="you@example.com"></div>
    <button class="btn btn-brass btn-block" onclick="confirmPurchase('${slug}')">Buy & Download (Demo)</button>
    <p style="font-size:11.5px;margin-top:10px;">No real payment is processed. This is a demo checkout for prototype purposes.</p>
  `);
}
function confirmPurchase(slug){
  const p = findProject(slug);
  RUNTIME.orders.push({id:"ORD-"+Math.floor(Math.random()*9000+1000), slug, amount:p.price, status:"Paid (Demo)", at:new Date().toISOString()});
  closeModal();
  showToast(`Demo purchase complete: ${p.title}`);
}

function toggleFavorite(slug, btn){
  if(RUNTIME.favorites.has(slug)){
    RUNTIME.favorites.delete(slug);
    if(btn) btn.textContent = "♡ Save";
    showToast("Removed from favorites");
  } else {
    RUNTIME.favorites.add(slug);
    if(btn) btn.textContent = "♥ Saved";
    showToast("Added to favorites");
  }
}

/* ---------------- Lead form ---------------- */
function submitLeadForm(e, context){
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  data.context = context || "General";
  data.createdAt = new Date().toISOString();
  RUNTIME.leads.push(data);
  form.reset();
  showToast("Thanks — your request has been received (demo submission).");
  const successEl = form.querySelector(".form-success");
  if(successEl) successEl.style.display = "block";
}

document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape"){ closeLightbox(); closeModal(); }
  if(e.key === "ArrowRight" && document.getElementById("lightbox")?.classList.contains("open")) lbNav(1);
  if(e.key === "ArrowLeft" && document.getElementById("lightbox")?.classList.contains("open")) lbNav(-1);
});
