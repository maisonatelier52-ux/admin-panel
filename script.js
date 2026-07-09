/* ============================================================
   Latam Chronicle Admin — shared script.js
   Used by every page (dashboard.html, article.html, ...).
   Each page sets <body data-page="..."> so this file knows
   which section to render, and shares data via localStorage
   so edits made on one page are visible on the others.
   ============================================================ */

/* ── Storage helpers ── */
function loadData(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (raw !== null) return JSON.parse(raw);
  } catch (e) { /* fall through to default */ }
  localStorage.setItem(key, JSON.stringify(fallback));
  return fallback;
}
function saveData(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

/* ── Data (persisted in localStorage) ── */
let articles = loadData('lc_articles', [
  {id:67,title:"JD Vance Leads High-Stakes Iran Talks in Switzerland",category:"US",author:"Charles C. James",status:"Published",date:"2026-06-23"},
  {id:66,title:"Climate Change Threatens Thousands of Plant Species",category:"Weather",author:"Bettye Hays",status:"Published",date:"2026-05-08"},
  {id:65,title:"How Ted Turner Revolutionized 24-Hour TV News",category:"US",author:"Charles C. James",status:"Published",date:"2026-05-07"},
  {id:64,title:"NY Faces $74M Loss Over Immigrant CDL Dispute",category:"Transportation",author:"Gale Hardy",status:"Published",date:"2026-05-26"},
  {id:63,title:"DACA Delays Leave Dreamers Jobless, Facing Deportation",category:"Immigration",author:"Antonia Allison",status:"Published",date:"2026-05-01"},
  {id:62,title:"Sandy Hook Tip System Logs 400K Safety Reports",category:"US",author:"Charles C. James",status:"Published",date:"2026-04-29"},
  {id:61,title:"King Charles, Camilla Visit NYC for Key US Events",category:"US",author:"Charles C. James",status:"Published",date:"2026-04-29"},
  {id:60,title:"Baton Rouge Mall Shooting Leaves 1 Dead, 5 Injured",category:"Politics",author:"Charles C. James",status:"Published",date:"2026-04-28"},
]);
let categories = loadData('lc_categories', [
  {id:1,name:"US",slug:"us",color:"#1d4ed8"},
  {id:2,name:"Weather",slug:"weather",color:"#0891b2"},
  {id:3,name:"Transportation",slug:"transportation",color:"#ea580c"},
  {id:4,name:"Immigration",slug:"immigration",color:"#7e22ce"},
  {id:5,name:"Politics",slug:"politics",color:"#ca8a04"},
  {id:6,name:"Health",slug:"health",color:"#dc2626"},
]);
let authors = loadData('lc_authors', [
  {id:1,name:"Charles C. James",email:"charles@latamchronicle.co"},
  {id:2,name:"Bettye Hays",email:"bettye@latamchronicle.co"},
  {id:3,name:"Gale Hardy",email:"gale@latamchronicle.co"},
  {id:4,name:"Antonia Allison",email:"antonia@latamchronicle.co"},
]);
let hpSections = loadData('lc_hpSections', [
  {id:1,name:"Hero Section",type:"Featured",cat:"US",active:true},
  {id:2,name:"Featured Articles",type:"Latest",cat:"All",active:true},
  {id:3,name:"Trending Now",type:"Category",cat:"Politics",active:true},
  {id:4,name:"Latest News",type:"Latest",cat:"All",active:true},
  {id:5,name:"Editor's Picks",type:"Category",cat:"US",active:false},
  {id:6,name:"Category Highlights",type:"Category",cat:"Weather",active:true},
  {id:7,name:"Newsletter CTA",type:"Newsletter",cat:"—",active:true},
  {id:8,name:"Most Popular",type:"Latest",cat:"All",active:false},
]);
let ads = loadData('lc_ads', [
  {id:1,name:"Header Leaderboard",position:"Header",size:"728×90",status:"Active",impressions:"12.4K",clicks:"430"},
  {id:2,name:"Sidebar Rectangle",position:"Sidebar",size:"300×250",status:"Active",impressions:"9.8K",clicks:"280"},
  {id:3,name:"In-Article Banner",position:"In-Article",size:"300×250",status:"Paused",impressions:"6.2K",clicks:"190"},
  {id:4,name:"Footer Ad",position:"Footer",size:"728×90",status:"Active",impressions:"19.8K",clicks:"930"},
]);
let socials = loadData('lc_socials', [
  {id:1,platform:"Twitter/X",handle:"@LatamChronicle",followers:"14.2K",posts:"1,840",color:"#000",emoji:"𝕏"},
  {id:2,platform:"Facebook",handle:"LatamChronicle",followers:"28.5K",posts:"3,200",color:"#1877f2",emoji:"f"},
  {id:3,platform:"Instagram",handle:"@latamchronicle",followers:"9.1K",posts:"620",color:"#e1306c",emoji:"📷"},
  {id:4,platform:"YouTube",handle:"Latam Chronicle",followers:"4.8K",posts:"180",color:"#ff0000",emoji:"▶"},
]);
let subscribers = loadData('lc_subscribers', [
  {name:"Maria Gonzalez",email:"maria@gmail.com",plan:"Pro",date:"2026-06-20",status:"Active"},
  {name:"James Wilson",email:"james@hotmail.com",plan:"Free",date:"2026-06-19",status:"Active"},
  {name:"Ana Torres",email:"ana@outlook.com",plan:"Pro",date:"2026-06-18",status:"Active"},
  {name:"David Kim",email:"david@gmail.com",plan:"Pro",date:"2026-06-17",status:"Cancelled"},
  {name:"Sofia Ruiz",email:"sofia@yahoo.com",plan:"Free",date:"2026-06-16",status:"Active"},
]);
let comments = loadData('lc_comments', [
  {id:1,name:"Roberto Sanchez",article:"JD Vance Leads High-Stakes Iran Talks",text:"This is a very important development for the region. I hope peace talks succeed.",date:"2026-06-24"},
  {id:2,name:"Linda Park",article:"Climate Change Threatens Plant Species",text:"We need more articles like this! Climate action is urgent.",date:"2026-06-23"},
  {id:3,name:"Carlos M.",article:"DACA Delays Leave Dreamers Jobless",text:"My cousin is a Dreamer. This situation is heartbreaking.",date:"2026-06-23"},
  {id:4,name:"Anonymous",article:"Baton Rouge Mall Shooting",text:"Prayers for the victims and their families.",date:"2026-06-22"},
]);
let staticPages = loadData('lc_staticPages', [
  {id:1,name:"About Us",slug:"/about",status:"Published"},
  {id:2,name:"Contact",slug:"/contact",status:"Published"},
  {id:3,name:"Privacy Policy",slug:"/privacy",status:"Published"},
  {id:4,name:"Terms of Use",slug:"/terms",status:"Published"},
  {id:5,name:"Advertise With Us",slug:"/advertise",status:"Draft"},
]);
let slides = loadData('lc_slides', [
  {id:1,title:"Breaking: Iran Nuclear Deal Talks Resume",sub:"World leaders meet in Geneva",img:"images/jd-vance.webp"},
  {id:2,title:"Climate Crisis: 10,000 Species at Risk",sub:"New UN report warns of mass extinction",img:"images/Oil-gas.webp"},
  {id:3,title:"NY Transit Crisis Deepens",sub:"$74M budget gap threatens service",img:"images/US-government.webp"},
]);
let mediaFiles = loadData('lc_mediaFiles', [
  {name:"Defying.webp",src:"images/Defying.webp"},
  {name:"frontman.webp",src:"images/frontman.webp"},
  {name:"jd-vance.webp",src:"images/jd-vance.webp"},
  {name:"Kevin-Hern.webp",src:"images/Kevin-Hern.webp"},
  {name:"Marguerite.webp",src:"images/Marguerite.webp"},
  {name:"Oil-gas.webp",src:"images/Oil-gas.webp"},
  {name:"strait-of-hormoz.webp",src:"images/strait-of-hormoz.webp"},
  {name:"US-government.webp",src:"images/US-government.webp"},
]);
let newsFilter = {text:"",cat:""};

/* ── Homepage Builder Data ── */
let heroStyles = [
  {id:'big-story',name:'Big Story',kind:'big-story'},
  {id:'carousel',name:'Carousel / Slider',kind:'carousel'},
  {id:'grid-hero',name:'Grid Hero (1+4)',kind:'grid-hero'},
  {id:'video-hero',name:'Video Hero',kind:'video-hero'},
  {id:'split-hero',name:'Split Hero',kind:'split-hero'},
];
let hpSettings = loadData('lc_hpSettings', {
  heroStyle: 'big-story',
  headlineCount: 3,
  autoplay: true,
  categoryBadge: true,
  excerptText: false,
});

/* ============================================================
   SIDEBAR + TOPBAR (built once per page load)
   ============================================================ */
const PAGE_TITLES = {
  dashboard:'Dashboard', article:'Articles', categories:'Categories', authors:'Authors',
  homepage:'Homepage Builder', ads:'Ads', social:'Social Media', subscription:'Subscriptions',
  audience:'Audience', comment:'Comments', static:'Static Pages', slide:'Slides', media:'Media Library'
};

function buildSidebar(){
  const page = document.body.dataset.page || 'dashboard';
  const inArticles = (page==='article' || page==='categories' || page==='authors');
  const sidebar = document.getElementById('sidebar-root');
  if(!sidebar) return;
  sidebar.innerHTML = `
  <aside class="sidebar">
    <div class="brand">
      <div class="brand-icon"><i class="fa-solid fa-circle"></i></div>
      <div><div class="brand-name">Latam Chronicle</div><div class="brand-sub">Admin Panel</div></div>
    </div>

    <div class="nav-section">
      <div class="nav-label">Main</div>
      <a class="nav-item ${page==='dashboard'?'active':''}" href="index.html">
        <i class="fa-solid fa-border-all"></i><span>Dashboard</span>
      </a>
    </div>

    <div class="nav-section">
      <div class="nav-label">Content</div>
      <a class="nav-item ${inArticles?'open':''}" onclick="toggleSub('articles-sub',this)">
        <i class="fa-solid fa-list"></i><span>Articles</span><i class="fa-solid fa-chevron-down chevron"></i>
      </a>
      <div class="nav-sub" id="articles-sub" style="display:${inArticles?'block':'none'}">
        <a class="nav-item ${page==='article'?'active':''}" href="article.html"><span>All Articles</span></a>
        <a class="nav-item" href="article.html#new"><span>Add New Article</span></a>
        <a class="nav-item ${page==='categories'?'active':''}" href="categories.html"><span>Categories</span></a>
        <a class="nav-item ${page==='authors'?'active':''}" href="authors.html"><span>Authors</span></a>
      </div>
      <a class="nav-item ${page==='comment'?'active':''}" href="comment.html">
        <i class="fa-solid fa-comments"></i><span>Comments</span><span class="badge">12</span>
      </a>
      <a class="nav-item ${page==='media'?'active':''}" href="media.html">
        <i class="fa-solid fa-image"></i><span>Media Upload</span>
      </a>
      <a class="nav-item ${page==='slide'?'active':''}" href="slide.html">
        <i class="fa-solid fa-display"></i><span>Slides</span>
      </a>
      <a class="nav-item ${page==='static'?'active':''}" href="static.html">
        <i class="fa-solid fa-file-lines"></i><span>Static Pages</span>
      </a>
    </div>

    <div class="nav-section">
      <div class="nav-label">Site</div>
      <a class="nav-item ${page==='homepage'?'active':''}" href="homepage.html">
        <i class="fa-solid fa-house"></i><span>Homepage</span>
      </a>
<a class="nav-item ${page==='Header Builder'?'active':''}" href="headerbuilder.html">
       <!-- Header / Top Section -->
<i class="fa-solid fa-window-maximize"></i><span>Header Builder</span>
      </a>
      <a class="nav-item ${page==='Footer Builder'?'active':''}" href="footerbuilder.html">
        <i class="fa-solid fa-window-maximize"></i> <span>Footer Builder</span>
      </a>
      <a class="nav-item ${page==='Article Page Builder'?'active':''}" href="articlepagebuilder.html">
      <i class="fa-solid fa-newspaper"></i><span>Article Page Builder</span>
      </a>
      <a class="nav-item ${page==='Category Page Builder'?'active':''}" href="categorypagebuilder.html">
       <i class="fa-solid fa-folder-tree"></i><span>Category Page Builder</span>
      </a>
      <a class="nav-item ${page==='Author Page Builder'?'active':''}" href="authorpagebuilder.html">
        <i class="fa-solid fa-user-pen"></i><span>Author Page Builder</span>
      </a>
      <a class="nav-item ${page==='ads'?'active':''}" href="ads.html">
        <i class="fa-solid fa-rectangle-ad"></i><span>Ads</span>
      </a>
    </div>

    <div class="nav-section">
      <div class="nav-label">Audience</div>
      <a class="nav-item ${page==='social'?'active':''}" href="social-media.html">
        <i class="fa-solid fa-share-nodes"></i><span>Social Media</span>
      </a>
      <a class="nav-item ${page==='subscription'?'active':''}" href="subcription.html">
        <i class="fa-solid fa-gift"></i><span>Subscriptions</span>
      </a>
      <a class="nav-item ${page==='audience'?'active':''}" href="audience.html">
        <i class="fa-solid fa-location-dot"></i><span>Audience</span>
      </a>
    </div>

 <br>

    <div class="sidebar-footer">
      <div class="sidebar-user">
        <div class="s-avatar">LC</div>
        <div><div class="s-user-name">Admin</div><div class="s-user-email">admin@latamchronicle</div></div>
      </div>
      <a class="logout-btn" onclick="handleLogout()">
        <i class="fa-solid fa-right-from-bracket"></i><span>Logout</span>
      </a>
    </div>
  </aside>`;
}

function buildTopbar(){
  const page = document.body.dataset.page || 'dashboard';
  const topbar = document.getElementById('topbar-root');
  if(!topbar) return;
  topbar.outerHTML = `
  <div class="topbar" id="topbar-root">
    <span class="topbar-title" id="page-title">${PAGE_TITLES[page]||''}</span>
    <div class="topbar-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" placeholder="Search…"/>
    </div>
    <div class="topbar-actions">
      <div style="display:flex;align-items:center;gap:8px;cursor:pointer">
        <div class="t-avatar">LC</div>
        <span class="t-name">Admin</span>
      </div>
    </div>
  </div>`;
}

function toggleSub(id,el){
  const sub=document.getElementById(id);
  const open=sub.style.display==='block';
  sub.style.display=open?'none':'block';
  el.classList.toggle('open',!open);
}

/* ── Modal ── */
function openModal(id) {
  if(id==='article-modal'){
    document.getElementById('a-cat').innerHTML=categories.map(c=>`<option>${c.name}</option>`).join('');
    document.getElementById('a-author').innerHTML=authors.map(a=>`<option>${a.name}</option>`).join('');
    document.getElementById('a-edit-id').value='';
    document.getElementById('a-title').value='';
    document.getElementById('a-content').value='';
    document.getElementById('a-status').value='Published';
    document.getElementById('article-modal-title').textContent='New Article';
    document.getElementById('article-save-btn').textContent='Publish';
  }
  if(id==='section-modal'){
    document.getElementById('sec-cat-input').innerHTML=categories.map(c=>`<option>${c.name}</option>`).join('');
  }
  const el = document.getElementById(id);
  if(el) el.classList.add('open');
}
function closeModal(id){ const el=document.getElementById(id); if(el) el.classList.remove('open'); }

/* ── Toast ── */
function toast(msg,color){
  const t=document.getElementById('toast');
  if(!t) return;
  t.textContent=msg;t.style.background=color||'#22c55e';
  t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600);
}

/* ── Helpers ── */
const catPill=(name)=>{
  const map={US:'pill-blue',Weather:'pill-cyan',Transportation:'pill-orange',Immigration:'pill-purple',Politics:'pill-yellow',Health:'pill-red'};
  return map[name]||'pill-gray';
};
function fmtDate(d){const dt=new Date(d);return dt.toLocaleDateString('en-US',{month:'short',day:'2-digit',year:'numeric'});}
const initials=n=>n.split(' ').map(p=>p[0]).join('');

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDash(){
  const elArt=document.getElementById('stat-articles'); if(elArt) elArt.textContent=articles.length;
  const elCat=document.getElementById('stat-cats'); if(elCat) elCat.textContent=categories.length;
  const elAut=document.getElementById('stat-authors'); if(elAut) elAut.textContent=authors.length;
  const recent=[...articles].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,5);
  const dashBody=document.getElementById('dash-tbody');
  if(dashBody) dashBody.innerHTML=recent.map((a,i)=>`
    <tr>
      <td style="color:var(--muted);font-size:0.76rem">${i+1}</td>
      <td><div class="art-thumb-wrap"><div class="art-thumb">${a.category.charAt(0)}</div><span class="art-title">${a.title}</span></div></td>
      <td style="color:var(--muted)">${a.author}</td>
      <td><span class="pill ${catPill(a.category)}">${a.category}</span></td>
      <td style="color:var(--muted);font-size:0.76rem">${fmtDate(a.date)}</td>
      <td><div class="action-btns">
        <a class="btn-icon edit" href="article.html"><i class="fa-solid fa-pen-to-square"></i></a>
        <a class="btn-icon del" href="article.html"><i class="fa-solid fa-trash"></i></a>
      </div></td>
    </tr>`).join('');
  const dashCats=document.getElementById('dash-cats');
  if(dashCats) dashCats.innerHTML=categories.map(c=>`
    <div class="cat-item"><span class="cat-dot" style="background:${c.color}"></span><span class="cat-name">${c.name}</span><span class="cat-count">${articles.filter(a=>a.category===c.name).length}</span></div>`).join('');
  const dashAuthors=document.getElementById('dash-authors');
  if(dashAuthors) dashAuthors.innerHTML=authors.map(a=>`
    <div class="author-row"><div class="a-avatar">${initials(a.name)}</div><div><div class="a-name">${a.name}</div><div class="a-articles">${articles.filter(x=>x.author===a.name).length} Articles</div></div><span class="a-email">${a.email}</span></div>`).join('');
  const dashMedia=document.getElementById('dash-media-grid');
  if(dashMedia) dashMedia.innerHTML=mediaFiles.slice(0,12).map(m=>`<div class="media-thumb"><img src="${m.src}" alt=""></div>`).join('');
}

/* ============================================================
   ARTICLES
   ============================================================ */
function renderNews(){
  const cf=document.getElementById('news-cat-filter');
  if(!cf) return;
  cf.innerHTML='<option value="">All Categories</option>'+categories.map(c=>`<option>${c.name}</option>`).join('');
  const filtered=articles.filter(a=>{
    const mt=a.title.toLowerCase().includes(newsFilter.text.toLowerCase())||a.author.toLowerCase().includes(newsFilter.text.toLowerCase());
    const mc=!newsFilter.cat||a.category===newsFilter.cat;
    return mt&&mc;
  });
  document.getElementById('news-tbody').innerHTML=filtered.map((a,i)=>`
    <tr>
      <td style="color:var(--muted);font-size:0.76rem">${i+1}</td>
      <td><div class="art-thumb-wrap"><div class="art-thumb">${a.category.charAt(0)}</div><span class="art-title">${a.title}</span></div></td>
      <td style="color:var(--muted)">${a.author}</td>
      <td><span class="pill ${catPill(a.category)}">${a.category}</span></td>
      <td style="color:var(--muted);font-size:0.76rem">${fmtDate(a.date)}</td>
      <td><div class="action-btns">
        <button class="btn-icon edit" onclick="editArticle(${a.id})"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-icon del" onclick="deleteArticle(${a.id})"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
}
function filterNews(v){newsFilter.text=v;renderNews();}
function filterNewsCat(v){newsFilter.cat=v;renderNews();}
function editArticle(id){
  const a=articles.find(x=>x.id===id);if(!a)return;
  document.getElementById('a-cat').innerHTML=categories.map(c=>`<option>${c.name}</option>`).join('');
  document.getElementById('a-author').innerHTML=authors.map(x=>`<option>${x.name}</option>`).join('');
  document.getElementById('a-edit-id').value=id;
  document.getElementById('a-title').value=a.title;
  document.getElementById('a-content').value=a.content||'';
  document.getElementById('a-cat').value=a.category;
  document.getElementById('a-author').value=a.author;
  document.getElementById('a-status').value=a.status;
  document.getElementById('article-modal-title').textContent='Edit Article';
  document.getElementById('article-save-btn').textContent='Update';
  document.getElementById('article-modal').classList.add('open');
}
function saveArticle(){
  const title=document.getElementById('a-title').value.trim();
  const cat=document.getElementById('a-cat').value;
  const author=document.getElementById('a-author').value;
  const status=document.getElementById('a-status').value;
  const content=document.getElementById('a-content').value;
  const editId=document.getElementById('a-edit-id').value;
  if(!title){toast('Please enter a title.','#ef4444');return;}
  if(editId){
    const idx=articles.findIndex(x=>x.id==editId);
    if(idx>-1)articles[idx]={...articles[idx],title,category:cat,author,status,content};
    saveData('lc_articles',articles);
    closeModal('article-modal');renderNews();toast('Article updated!','#4f46e5');
  } else {
    articles.unshift({id:Date.now(),title,category:cat,author,status,content,date:new Date().toISOString().slice(0,10)});
    saveData('lc_articles',articles);
    closeModal('article-modal');renderNews();toast('Article published!');
  }
}
function deleteArticle(id){
  if(!confirm('Delete this article?'))return;
  articles=articles.filter(a=>a.id!==id);
  saveData('lc_articles',articles);
  renderNews();toast('Deleted.','#ef4444');
}

/* ============================================================
   CATEGORIES
   ============================================================ */
function renderCats(){
  const body=document.getElementById('cat-tbody');
  if(!body) return;
  body.innerHTML=categories.map(c=>`
    <tr>
      <td><span style="display:inline-flex;align-items:center;gap:8px"><span style="width:7px;height:7px;border-radius:50%;background:${c.color};display:inline-block"></span>${c.name}</span></td>
      <td style="color:var(--muted)">${c.slug}</td>
      <td>${articles.filter(a=>a.category===c.name).length}</td>
      <td><div class="action-btns">
        <button class="btn-icon edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-icon del" onclick="deleteCat(${c.id})"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
}
function addCategory(){
  const name=document.getElementById('cat-name-input').value.trim();
  if(!name){toast('Enter a name.','#ef4444');return;}
  const colors=['#16a34a','#1d4ed8','#ea580c','#7e22ce','#ca8a04','#dc2626'];
  categories.push({id:Date.now(),name,slug:name.toLowerCase().replace(/\s+/g,'-'),color:colors[categories.length%colors.length]});
  saveData('lc_categories',categories);
  document.getElementById('cat-name-input').value='';
  closeModal('cat-modal');renderCats();toast('Category added!');
}
function deleteCat(id){
  if(!confirm('Delete this category?'))return;
  categories=categories.filter(c=>c.id!==id);
  saveData('lc_categories',categories);
  renderCats();toast('Deleted.','#ef4444');
}

/* ============================================================
   AUTHORS
   ============================================================ */
function renderAuthorsPage(){
  const body=document.getElementById('author-tbody');
  if(!body) return;
  body.innerHTML=authors.map(a=>`
    <tr>
      <td><div style="display:flex;align-items:center;gap:10px"><div class="a-avatar">${initials(a.name)}</div><span style="font-weight:600">${a.name}</span></div></td>
      <td style="color:var(--muted)">${a.email}</td>
      <td>${articles.filter(x=>x.author===a.name).length}</td>
      <td><div class="action-btns">
        <button class="btn-icon edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-icon del" onclick="deleteAuthor(${a.id})"><i class="fa-solid fa-trash"></i></button>
      </div></td>
    </tr>`).join('');
}
function addAuthor(){
  const name=document.getElementById('author-name-input').value.trim();
  const email=document.getElementById('author-email-input').value.trim();
  if(!name||!email){toast('Name and email required.','#ef4444');return;}
  authors.push({id:Date.now(),name,email});
  saveData('lc_authors',authors);
  document.getElementById('author-name-input').value='';
  document.getElementById('author-email-input').value='';
  closeModal('author-modal');renderAuthorsPage();toast('Author added!');
}
function deleteAuthor(id){
  if(!confirm('Delete this author?'))return;
  authors=authors.filter(a=>a.id!==id);
  saveData('lc_authors',authors);
  renderAuthorsPage();toast('Deleted.','#ef4444');
}

/* ============================================================
   HOMEPAGE BUILDER
   ============================================================ */

/* -- Hero style cards -- */
function heroPreviewInner(kind){
  switch(kind){
    case 'big-story':
      return `<div class="hc-bars"><div class="hc-bar" style="width:78%"></div><div class="hc-bar sub"></div></div>`;
    case 'carousel':
      return `<div class="hc-bars"><div class="hc-bar" style="width:60%"></div><div class="hc-bar sub" style="width:30%"></div></div><div class="hc-dots"><span></span><span></span><span></span></div>`;
    case 'video-hero':
      return `<div class="hc-play"><i class="fa-solid fa-play"></i></div>`;
    default: return '';
  }
}
function heroCardMarkup(l){
  if(l.kind==='grid-hero'){
    return `<div class="hero-card-preview hc-grid"><div class="hc-main"></div><div class="hc-side"><div></div><div></div></div></div>`;
  }
  if(l.kind==='split-hero'){
    return `<div class="hero-card-preview hc-split"><div class="hc-main"></div><div class="hc-list"><div></div><div></div><div></div></div></div>`;
  }
  return `<div class="hero-card-preview">${heroPreviewInner(l.kind)}</div>`;
}
function renderHeroGrid(){
  const el=document.getElementById('hero-style-grid');
  if(!el) return;
  el.innerHTML = heroStyles.map(l=>`
    <div class="hero-card ${hpSettings.heroStyle===l.id?'selected':''}" onclick="selectHeroStyle('${l.id}')">
      ${heroCardMarkup(l)}
      <div class="hero-name-row"><span class="hero-radio"></span>${l.name}</div>
    </div>`).join('');
}
function selectHeroStyle(id){
  hpSettings.heroStyle=id;
  saveData('lc_hpSettings',hpSettings);
  renderHeroGrid();
  renderHpPreview();
  const l=heroStyles.find(x=>x.id===id);
  toast('Hero style set to '+(l?l.name:id));
}
function setHeadlineCount(v){
  hpSettings.headlineCount=parseInt(v,10);
  const out=document.getElementById('headline-count-val'); if(out) out.textContent=v;
  saveData('lc_hpSettings',hpSettings);
}
function toggleHpSetting(key,val){
  hpSettings[key]=val;
  saveData('lc_hpSettings',hpSettings);
  renderHpPreview();
  const labels={autoplay:'Autoplay',categoryBadge:'Category badge',excerptText:'Excerpt text'};
  toast((labels[key]||key)+(val?' enabled':' disabled'), val?'#22c55e':'#64748b');
}

function hbShowTab(tab, el){
  document.querySelectorAll('.hb-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.hb-tab-panel').forEach(p=>p.classList.remove('active'));
  if(el) el.classList.add('active');
  const panel=document.getElementById('hb-panel-'+tab);
  if(panel) panel.classList.add('active');
}

/* -- Right rail quick sections list -- */
function renderSectionsQuickList(){
  const el=document.getElementById('side-sections-list');
  if(!el) return;
  el.innerHTML = hpSections.map(s=>`
    <div class="side-section-row">
      <span class="ssn" onclick="hbShowTab('sections', document.querySelector('.hb-tab[data-tab=sections]'))">${s.name}</span>
      <label class="toggle-switch">
        <input type="checkbox" ${s.active?'checked':''} onchange="toggleSection(${s.id},this.checked)"/>
        <span class="toggle-slider"></span>
      </label>
    </div>`).join('');
}

/* -- Live preview card (right rail) -- */
function renderHpPreview(){
  const el=document.getElementById('hp-preview-frame');
  if(!el) return;
  const featured=articles.slice(0,3);
  const heroArt=articles[0] || {title:'Markets Rally As Rates Hold Steady',category:'Business'};
  el.innerHTML = `
    <div class="hp-preview-hero">
      ${hpSettings.categoryBadge?`<div class="hpp-cat">${heroArt.category||'Business'}</div>`:''}
      <div class="hpp-title">${heroArt.title}</div>
    </div>
    <div class="hp-preview-grid">
      ${featured.map(a=>`
        <div class="hpp-card">
          <div class="hpp-thumb"></div>
          <div class="hpp-txt">${a.title}</div>
        </div>`).join('')}
    </div>`;
}

function resetHomepageBuilder(){
  if(!confirm('Reset homepage settings to default?'))return;
  hpSettings = {heroStyle:'big-story',headlineCount:3,autoplay:true,categoryBadge:true,excerptText:false};
  saveData('lc_hpSettings',hpSettings);
  renderHeroGrid();
  renderHpPreview();
  const slider=document.getElementById('headline-slider'); if(slider) slider.value=3;
  const out=document.getElementById('headline-count-val'); if(out) out.textContent='3';
  const ap=document.getElementById('hp-autoplay'); if(ap) ap.checked=true;
  const cb=document.getElementById('hp-cat-badge'); if(cb) cb.checked=true;
  const ex=document.getElementById('hp-excerpt'); if(ex) ex.checked=false;
  toast('Homepage settings reset to default.', '#64748b');
}

/* -- Sections management tab (full list, expand/collapse) -- */
function renderHomepageMgmt(){
  const el=document.getElementById('hp-sections-list');
  if(!el) return;
  el.innerHTML=hpSections.map(s=>`
    <div class="hp-section-item">
      <div class="hp-section-header" onclick="toggleSectionBody(${s.id})">
        <span class="drag-handle">⠿</span>
        <span class="sec-name">${s.name}</span>
        <span class="sec-type pill pill-gray">${s.type}</span>
        <label class="toggle-switch" onclick="event.stopPropagation()">
          <input type="checkbox" ${s.active?'checked':''} onchange="toggleSection(${s.id},this.checked)"/>
          <span class="toggle-slider"></span>
        </label>
        <button class="btn-icon del" onclick="event.stopPropagation();deleteSection(${s.id})"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="hp-section-body" id="sec-body-${s.id}">
        <div class="header-editor">
          <div class="fg"><label>Section Title</label><input type="text" value="${s.name}" onchange="updateSection(${s.id},'name',this.value)"/></div>
          <div class="fg"><label>Linked Category</label><select onchange="updateSection(${s.id},'cat',this.value)">${categories.map(c=>`<option ${c.name===s.cat?'selected':''}>${c.name}</option>`).join('')}</select></div>
        </div>
        <div style="display:flex;gap:6px;margin-top:4px">
          <button class="btn btn-primary btn-sm" onclick="toast('Section saved!')">Save</button>
        </div>
      </div>
    </div>`).join('');
}
function toggleSectionBody(id){
  const b=document.getElementById('sec-body-'+id);
  b.classList.toggle('open');
}
function toggleSection(id,val){
  const s=hpSections.find(x=>x.id===id);if(s)s.active=val;
  saveData('lc_hpSections',hpSections);
  renderSectionsQuickList();
  renderHomepageMgmt();
  toast(val?'Section enabled':'Section disabled', val?'#22c55e':'#64748b');
}
function updateSection(id,key,val){
  const s=hpSections.find(x=>x.id===id);if(s)s[key]=val;
  saveData('lc_hpSections',hpSections);
  renderSectionsQuickList();
}
function deleteSection(id){
  if(!confirm('Remove this section?'))return;
  hpSections=hpSections.filter(s=>s.id!==id);
  saveData('lc_hpSections',hpSections);
  renderHomepageMgmt();renderSectionsQuickList();toast('Section removed.','#ef4444');
}
function addSection(){
  const name=document.getElementById('sec-name-input').value.trim();
  const type=document.getElementById('sec-type-input').value;
  const cat=document.getElementById('sec-cat-input').value;
  if(!name){toast('Enter a section name.','#ef4444');return;}
  hpSections.push({id:Date.now(),name,type,cat,active:true});
  saveData('lc_hpSections',hpSections);
  closeModal('section-modal');renderHomepageMgmt();renderSectionsQuickList();toast('Section added!');
}

/* ============================================================
   ADS
   ============================================================ */
function renderAds(){
  const el=document.getElementById('ads-grid');
  if(!el) return;
  el.innerHTML=ads.map(a=>`
    <div class="ad-card">
      <div class="ad-preview">
        <span class="ad-label">${a.position}</span>
        <span style="font-size:0.75rem;color:var(--muted)">${a.size}</span>
      </div>
      <div class="ad-info">
        <div class="ad-name">${a.name}</div>
        <div class="ad-meta"><span>${a.impressions} views</span><span>${a.clicks} clicks</span></div>
      </div>
      <div class="ad-foot">
        <span class="pill ${a.status==='Active'?'pill-green':'pill-yellow'}">${a.status}</span>
        <div class="action-btns">
          <button class="btn-icon edit"><i class="fa-solid fa-pen-to-square"></i></button>
          <button class="btn-icon del" onclick="deleteAd(${a.id})"><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
    </div>`).join('');
}
function saveAd(){
  const name=document.getElementById('ad-name-input').value.trim();
  const pos=document.getElementById('ad-pos-input').value;
  if(!name){toast('Enter an ad name.','#ef4444');return;}
  ads.push({id:Date.now(),name,position:pos,size:'300×250',status:'Active',impressions:'0',clicks:'0'});
  saveData('lc_ads',ads);
  document.getElementById('ad-name-input').value='';
  closeModal('ad-modal');renderAds();toast('Ad created!');
}
function deleteAd(id){
  if(!confirm('Delete this ad?'))return;
  ads=ads.filter(a=>a.id!==id);
  saveData('lc_ads',ads);
  renderAds();toast('Deleted.','#ef4444');
}

/* ============================================================
   SOCIAL MEDIA
   ============================================================ */
function renderSocial(){
  const el=document.getElementById('social-grid');
  if(!el) return;
  const bgMap={'Twitter/X':'#000','Facebook':'#1877f2','Instagram':'#e1306c','YouTube':'#ff0000','TikTok':'#010101'};
  el.innerHTML=socials.map(s=>`
    <div class="social-card">
      <div class="social-card-top">
        <div class="social-icon" style="background:${bgMap[s.platform]||'#64748b'};color:#fff;font-size:1.1rem;font-weight:900">${s.emoji}</div>
        <div><div class="social-name">${s.platform}</div><div class="social-handle">${s.handle}</div></div>
      </div>
      <div class="social-stats">
        <div class="social-stat"><div class="sv">${s.followers}</div><div class="sk">Followers</div></div>
        <div class="social-stat"><div class="sv">${s.posts}</div><div class="sk">Posts</div></div>
      </div>
      <div class="social-actions">
        <button class="btn btn-ghost btn-sm" style="flex:1">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteSocial(${s.id})">Disconnect</button>
      </div>
    </div>`).join('');
}
function saveSocial(){
  const platform=document.getElementById('soc-platform').value;
  const handle=document.getElementById('soc-handle').value.trim();
  if(!handle){toast('Enter a handle.','#ef4444');return;}
  const emojiMap={'Twitter/X':'𝕏','Facebook':'f','Instagram':'📷','YouTube':'▶','TikTok':'♪'};
  socials.push({id:Date.now(),platform,handle,followers:'0',posts:'0',color:'#64748b',emoji:emojiMap[platform]||'📱'});
  saveData('lc_socials',socials);
  closeModal('social-modal');renderSocial();toast('Account connected!');
}
function deleteSocial(id){
  if(!confirm('Disconnect this account?'))return;
  socials=socials.filter(s=>s.id!==id);
  saveData('lc_socials',socials);
  renderSocial();toast('Disconnected.','#ef4444');
}

/* ============================================================
   SUBSCRIPTIONS
   ============================================================ */
function renderSubscriptions(){
  const plansEl=document.getElementById('sub-plans');
  if(!plansEl) return;
  plansEl.innerHTML=[
    {name:'Free',price:'0',sub:'/mo',features:'5 articles/day',featured:false},
    {name:'Pro',price:'9',sub:'/mo',features:'Unlimited access',featured:true},
    {name:'Annual',price:'79',sub:'/year',features:'Best value',featured:false},
  ].map(p=>`
    <div class="sub-plan-card ${p.featured?'featured':''}">
      ${p.featured?'<div class="sub-plan-badge">Most Popular</div>':''}
      <div class="sub-plan-name">${p.name}</div>
      <div class="sub-plan-price">$${p.price}<span>${p.sub}</span></div>
      <div style="font-size:0.75rem;color:var(--muted);margin:8px 0">${p.features}</div>
      <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:8px">Edit Plan</button>
    </div>`).join('');
  document.getElementById('sub-tbody').innerHTML=subscribers.map(s=>`
    <tr>
      <td style="font-weight:600">${s.name}</td>
      <td style="color:var(--muted)">${s.email}</td>
      <td><span class="pill ${s.plan==='Pro'?'pill-purple':'pill-gray'}">${s.plan}</span></td>
      <td style="color:var(--muted);font-size:0.76rem">${s.date}</td>
      <td><span class="pill ${s.status==='Active'?'pill-green':'pill-red'}">${s.status}</span></td>
    </tr>`).join('');
}

/* ============================================================
   AUDIENCE
   ============================================================ */
function renderAudience(){
  const cl=document.getElementById('country-list');
  if(!cl) return;
  const countries=[
    {flag:'🇺🇸',name:'United States',pct:34},
    {flag:'🇲🇽',name:'Mexico',pct:22},
    {flag:'🇧🇷',name:'Brazil',pct:14},
    {flag:'🇦🇷',name:'Argentina',pct:10},
    {flag:'🇨🇴',name:'Colombia',pct:8},
    {flag:'🇨🇱',name:'Chile',pct:6},
    {flag:'🇵🇪',name:'Peru',pct:4},
    {flag:'🇪🇸',name:'Spain',pct:2},
  ];
  cl.innerHTML=countries.map(c=>`
    <div class="country-row">
      <span class="country-flag">${c.flag}</span>
      <span class="country-name">${c.name}</span>
      <div class="country-bar-wrap"><div class="country-bar" style="width:${c.pct*2}%"></div></div>
      <span class="country-pct">${c.pct}%</span>
    </div>`).join('');
  const devices=[
    {name:'Mobile',pct:58,color:'#4f46e5',icon:'📱'},
    {name:'Desktop',pct:34,color:'#22c55e',icon:'💻'},
    {name:'Tablet',pct:8,color:'#f59e0b',icon:'📲'},
  ];
  document.getElementById('device-list').innerHTML=devices.map(d=>`
    <div class="device-row">
      <div class="device-icon">${d.icon}</div>
      <span class="device-name">${d.name}</span>
      <div class="device-bar-wrap"><div class="device-bar" style="width:${d.pct}%;background:${d.color}"></div></div>
      <span style="font-size:0.75rem;color:var(--muted);font-weight:700;min-width:32px;text-align:right">${d.pct}%</span>
    </div>`).join('');
  const vals=[420,580,360,720,640,810,490];
  const max=Math.max(...vals);
  document.getElementById('mini-chart').innerHTML=vals.map(v=>`<div class="mini-bar" style="height:${(v/max)*100}%"></div>`).join('');
}

/* ============================================================
   COMMENTS
   ============================================================ */
function renderComments(){
  const el=document.getElementById('comments-list');
  if(!el) return;
  el.innerHTML=comments.map(c=>`
    <div class="comment-item">
      <div class="c-avatar">${initials(c.name)}</div>
      <div class="c-body">
        <div class="c-name">${c.name}</div>
        <div class="c-article">On: ${c.article}</div>
        <div class="c-text">${c.text}</div>
        <div class="c-meta">${c.date}</div>
        <div class="c-actions">
          <button class="btn btn-sm" style="background:#dcfce7;color:#15803d;border:none;cursor:pointer;font-weight:700" onclick="approveComment(${c.id})">✓ Approve</button>
          <button class="btn btn-ghost btn-sm">Reply</button>
          <button class="btn btn-danger btn-sm" onclick="deleteComment(${c.id})">Delete</button>
        </div>
      </div>
    </div>`).join('');
}
function approveComment(id){
  comments=comments.filter(c=>c.id!==id);
  saveData('lc_comments',comments);
  renderComments();toast('Comment approved!');
}
function deleteComment(id){
  if(!confirm('Delete this comment?'))return;
  comments=comments.filter(c=>c.id!==id);
  saveData('lc_comments',comments);
  renderComments();toast('Deleted.','#ef4444');
}

/* ============================================================
   STATIC PAGES
   ============================================================ */
function renderStaticPages(){
  const el=document.getElementById('static-pages-list');
  if(!el) return;
  el.innerHTML=staticPages.map(p=>`
    <div class="static-page-item">
      <div class="sp-icon"><i class="fa-solid fa-file-lines"></i></div>
      <div><div class="sp-name">${p.name}</div><div class="sp-slug">${p.slug}</div></div>
      <span class="pill sp-status ${p.status==='Published'?'pill-green':'pill-yellow'}" style="margin-left:auto;margin-right:12px">${p.status}</span>
      <div class="action-btns">
        <button class="btn-icon edit" onclick="toast('Edit: ${p.name}','#4f46e5')"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn-icon del" onclick="deleteStaticPage(${p.id})"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>`).join('');
}
function saveStaticPage(){
  const name=document.getElementById('sp-title-input').value.trim();
  const slug=document.getElementById('sp-slug-input').value.trim();
  const status=document.getElementById('sp-status-input').value;
  if(!name){toast('Enter a page title.','#ef4444');return;}
  staticPages.push({id:Date.now(),name,slug:slug||'/'+name.toLowerCase().replace(/\s+/g,'-'),status});
  saveData('lc_staticPages',staticPages);
  document.getElementById('sp-title-input').value='';
  document.getElementById('sp-slug-input').value='';
  closeModal('static-page-modal');renderStaticPages();toast('Page created!');
}
function deleteStaticPage(id){
  if(!confirm('Delete this page?'))return;
  staticPages=staticPages.filter(p=>p.id!==id);
  saveData('lc_staticPages',staticPages);
  renderStaticPages();toast('Deleted.','#ef4444');
}

/* ============================================================
   SLIDES
   ============================================================ */
function renderSlides(){
  const el=document.getElementById('slides-grid');
  if(!el) return;
  el.innerHTML=slides.map((s,i)=>`
    <div class="slide-card">
      <div class="slide-thumb" style="${s.img?'':'background:linear-gradient(135deg,#667eea,#764ba2)'}">
        ${s.img?`<img src="${s.img}" alt=""/>`:''}
        <span class="slide-num">#${i+1}</span>
      </div>
      <div class="slide-info">
        <div class="slide-title">${s.title}</div>
        <div class="slide-sub">${s.sub}</div>
        <div class="action-btns" style="margin-top:8px">
          <button class="btn btn-ghost btn-sm">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteSlide(${s.id})">Delete</button>
        </div>
      </div>
    </div>`).join('');
}
function saveSlide(){
  const title=document.getElementById('slide-title-input').value.trim();
  const sub=document.getElementById('slide-sub-input').value.trim();
  const img=document.getElementById('slide-img-input').value.trim();
  if(!title){toast('Enter a slide title.','#ef4444');return;}
  slides.push({id:Date.now(),title,sub,img});
  saveData('lc_slides',slides);
  closeModal('slide-modal');renderSlides();toast('Slide added!');
}
function deleteSlide(id){
  if(!confirm('Delete this slide?'))return;
  slides=slides.filter(s=>s.id!==id);
  saveData('lc_slides',slides);
  renderSlides();toast('Deleted.','#ef4444');
}

/* ============================================================
   MEDIA
   ============================================================ */
function renderMedia(){
  const el=document.getElementById('media-full-grid');
  if(!el) return;
  el.innerHTML=mediaFiles.map((m,i)=>`
    <div class="media-full-item">
      <img src="${m.src}" alt="${m.name}"/>
      <div class="mf-overlay">
        <button onclick="toast('Copied URL!','#4f46e5')" title="Copy URL"><i class="fa-solid fa-circle"></i></button>
        <button onclick="deleteMedia(${i})" title="Delete"><i class="fa-solid fa-trash"></i></button>
      </div>
      <div class="mf-name">${m.name}</div>
    </div>`).join('');
}
function deleteMedia(i){
  if(!confirm('Delete this file?'))return;
  mediaFiles.splice(i,1);
  saveData('lc_mediaFiles',mediaFiles);
  renderMedia();toast('Deleted.','#ef4444');
}

/* ── Logout ── */
function handleLogout(){if(confirm('Log out?'))toast('Logged out.','#64748b');}

/* ============================================================
   PAGE INIT — decides what to render based on <body data-page="">
   ============================================================ */
function handleHashModal(modalId){
  if(location.hash==='#new'){ openModal(modalId); }
}
function initPage(){
  const page = document.body.dataset.page || 'dashboard';
  switch(page){
    case 'dashboard': renderDash(); break;
    case 'article': renderNews(); handleHashModal('article-modal'); break;
    case 'categories': renderCats(); handleHashModal('cat-modal'); break;
    case 'authors': renderAuthorsPage(); handleHashModal('author-modal'); break;
    case 'homepage':
      renderHeroGrid();
      renderSectionsQuickList();
      renderHpPreview();
      renderHomepageMgmt();
      break;
    case 'ads': renderAds(); handleHashModal('ad-modal'); break;
    case 'social': renderSocial(); handleHashModal('social-modal'); break;
    case 'subscription': renderSubscriptions(); break;
    case 'audience': renderAudience(); break;
    case 'comment': renderComments(); break;
    case 'static': renderStaticPages(); handleHashModal('static-page-modal'); break;
    case 'slide': renderSlides(); handleHashModal('slide-modal'); break;
    case 'media': renderMedia(); break;
  }
}

document.addEventListener('DOMContentLoaded', function(){
  buildSidebar();
  buildTopbar();
  initPage();
  document.querySelectorAll('.modal-overlay').forEach(o=>o.addEventListener('click',e=>{if(e.target===o)o.classList.remove('open')}));
});