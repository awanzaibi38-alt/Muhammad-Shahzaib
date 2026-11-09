const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');}));
const themeBtn=document.getElementById('themeBtn');
function setThemeLabel(){if(!themeBtn)return;const light=document.documentElement.dataset.theme==='light';themeBtn.innerHTML=(light?'☾':'☼')+' <span>'+(light?'Dark mode':'Light mode')+'</span>';}
themeBtn?.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='light'?'dark':'light';document.documentElement.dataset.theme=next;try{localStorage.setItem('ms-theme',next)}catch(e){}setThemeLabel();});setThemeLabel();
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.project').forEach(card=>card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter));}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const progress=document.getElementById('progress');window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?window.scrollY/max*100:0)+'%';},{passive:true});
document.querySelectorAll('.project-image img').forEach(img=>img.addEventListener('error',()=>{img.style.display='none';},{once:true}));
