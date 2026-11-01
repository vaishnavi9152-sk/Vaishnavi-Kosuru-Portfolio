
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.getElementById('year').textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>{let d=document.documentElement;document.getElementById('progress').style.width=(100*d.scrollTop/(d.scrollHeight-d.clientHeight))+'%'},{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const NS='http://www.w3.org/2000/svg',g=document.getElementById('dna-strands');
function elem(name,attrs,parent){let n=document.createElementNS(NS,name);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));parent.appendChild(n);return n}
const lines=[],a=[],b=[];for(let i=0;i<45;i++){let y=35+i*9.6;lines.push(elem('line',{stroke:'#a0bfae','stroke-width':3,'stroke-linecap':'round'},g))}
for(let j=0;j<2;j++){let path=elem('path',{fill:'none',stroke:j?'#e97860':'#277d69','stroke-width':9,'stroke-linecap':'round'},g);(j?a:b).push(path)}
function helix(t){let paths=['',''];for(let i=0;i<160;i++){let y=30+i*2.8;let theta=i*.093+t;let x1=250+87*Math.sin(theta),x2=250-87*Math.sin(theta);paths[0]+=(i?'L':'M')+x1.toFixed(2)+' '+y.toFixed(2)+' ';paths[1]+=(i?'L':'M')+x2.toFixed(2)+' '+y.toFixed(2)+' '}b[0].setAttribute('d',paths[0]);a[0].setAttribute('d',paths[1]);lines.forEach((l,i)=>{let y=35+i*9.6,theta=(y-30)/2.8*.093+t,x1=250+87*Math.sin(theta),x2=250-87*Math.sin(theta);l.setAttribute('x1',x1);l.setAttribute('x2',x2);l.setAttribute('y1',y);l.setAttribute('y2',y);l.setAttribute('opacity',.28+.45*Math.abs(Math.cos(theta)))})}
const pg=document.getElementById('project-network');const nodes=Array.from({length:23},(_,i)=>({x:65+(i*73)%375,y:32+(i*97)%192}));nodes.forEach((n,i)=>nodes.slice(i+1).forEach((m,j)=>{let d=Math.hypot(n.x-m.x,n.y-m.y);if(d<125)elem('line',{x1:n.x,y1:n.y,x2:m.x,y2:m.y,stroke:'#83b7a0','stroke-width':1.5,opacity:.55},pg)}));nodes.forEach((n,i)=>elem('circle',{cx:n.x,cy:n.y,r:i%5===0?9:5,fill:i%5===0?'#e97860':'#2b806e',stroke:'#fffefa','stroke-width':2},pg));
const canvas=document.getElementById('network'),ctx=canvas.getContext('2d');let W=0,H=0,mouse={x:-999,y:-999};const gn=Array.from({length:35},(_,i)=>({x:((i*127)%997)/997,y:((i*311+57)%991)/991}));
function resize(){const r=canvas.getBoundingClientRect();W=r.width;H=r.height;canvas.width=Math.round(W*devicePixelRatio);canvas.height=Math.round(H*devicePixelRatio);ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);drawNetwork()}function drawNetwork(){ctx.clearRect(0,0,W,H);gn.forEach((n,i)=>{let x=n.x*W,y=n.y*H,hot=Math.hypot(x-mouse.x,y-mouse.y)<110;gn.slice(i+1).forEach(m=>{let xx=m.x*W,yy=m.y*H;if(Math.hypot(x-xx,y-yy)<115){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(xx,yy);ctx.strokeStyle=hot?'rgba(248,195,132,.75)':'rgba(147,207,176,.25)';ctx.lineWidth=hot?1.8:1;ctx.stroke()}});ctx.beginPath();ctx.arc(x,y,hot?7:4,0,Math.PI*2);ctx.fillStyle=hot?'#f4d99e':i%6===0?'#e97860':'#a4d8b9';ctx.fill()})}
canvas.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();mouse={x:e.clientX-r.left,y:e.clientY-r.top};drawNetwork()});canvas.addEventListener('pointerleave',()=>{mouse={x:-999,y:-999};drawNetwork()});window.addEventListener('resize',resize);resize();
if(reduced){helix(0)}else{let t=0;function tick(){helix(t);t+=.007;requestAnimationFrame(tick)}tick()}

// The badminton rally starts once when the section enters view.
const rally = document.getElementById('rally-scene');
if (rally) {
  const rallyObserver = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      rally.classList.add('play');
      rallyObserver.unobserve(rally);
    }
  }, { threshold: 0.28 });
  rallyObserver.observe(rally);
}
