
const prizes=[
{text:"🎉 RM5 OFF\nCode: RM5OFF",w:70},
{text:"🎉 RM10 OFF\nCode: RM10OFF",w:30}
];
let total=prizes.reduce((a,b)=>a+b.w,0),r=Math.random()*total,s=0,p=prizes[0];
for (const x of prizes){s+=x.w;if(r<=s){p=x;break;}}
document.getElementById("prize").innerText="???";
const c=document.getElementById("scratch"),ctx=c.getContext("2d");
ctx.fillStyle="#999";ctx.fillRect(0,0,c.width,c.height);
ctx.fillStyle="#fff";ctx.font="26px Arial";ctx.fillText("Scratch Here",70,95);
ctx.globalCompositeOperation="destination-out";
let d=false;
function pos(e){const r=c.getBoundingClientRect();const t=e.touches?e.touches[0]:e;return {x:t.clientX-r.left,y:t.clientY-r.top};}
function draw(e){if(!d)return;let m=pos(e);ctx.beginPath();ctx.arc(m.x,m.y,18,0,Math.PI*2);ctx.fill();e.preventDefault();check();}
["mousedown","touchstart"].forEach(ev=>c.addEventListener(ev,()=>d=true));
["mouseup","mouseleave","touchend"].forEach(ev=>c.addEventListener(ev,()=>d=false));
["mousemove","touchmove"].forEach(ev=>c.addEventListener(ev,draw,{passive:false}));
function check(){let img=ctx.getImageData(0,0,c.width,c.height).data,t=0;for(let i=3;i<img.length;i+=4){if(img[i]==0)t++;}if(t/(c.width*c.height)>0.45){ctx.clearRect(0,0,c.width,c.height);document.getElementById("prize").innerText=p.text;}}
document.getElementById("reset").onclick=()=>location.reload();
