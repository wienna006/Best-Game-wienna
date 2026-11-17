// STAR RUSH - Make the best game entry
export function main() {
  document.body.innerHTML = `
  <style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#0a0e1a;color:white;font-family:Arial;overflow:hidden;height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center}
  #scoreBoard{font-size:28px;font-weight:bold;margin:10px}
  #gameArea{width:90vw;max-width:400px;height:70vh;background:linear-gradient(#0a0e1a,#1a2a4a);border:2px solid #4a6cff;border-radius:20px;position:relative;overflow:hidden}
  .star{position:absolute;width:40px;height:40px;background:radial-gradient(white,yellow);border-radius:50%;box-shadow:0 0 15px yellow;cursor:pointer;animation:fall linear}
  @keyframes fall{from{top:-50px}to{top:110%}}
  button{background:#4a6cff;color:white;border:none;padding:15px 30px;font-size:20px;border-radius:30px;margin-top:15px;font-weight:bold}
  h1{font-size:32px;margin:10px;color:#ffd700}
  </style>
  <h1>⭐ STAR RUSH ⭐</h1>
  <div id="scoreBoard">Score: 0</div>
  <div id="gameArea"></div>
  <button id="startBtn">MULAI GAME</button>
  `;

  let score=0, spawnInterval:any, gameTimeout:any, playing=false;
  const area=document.getElementById('gameArea')!;
  const scoreBoard=document.getElementById('scoreBoard')!;
  const btn=document.getElementById('startBtn')!;

  function startGame(){
    if(playing) return;
    score=0; area.innerHTML=''; playing=true; scoreBoard.innerText='Score: 0';
    spawnInterval=setInterval(spawnStar,600);
    gameTimeout=setTimeout(endGame,30000);
  }
  function spawnStar(){
    if(!playing) return;
    const s=document.createElement('div');
    s.className='star';
    s.style.left=Math.random()*85+'%';
    s.style.animationDuration=(2+Math.random()*2)+'s';
    s.onclick=()=>{score+=10;scoreBoard.innerText='Score: '+score;s.remove()};
    area.appendChild(s);
    setTimeout(()=>{if(s.parentNode) s.remove()},4000);
  }
  function endGame(){
    playing=false; clearInterval(spawnInterval); clearTimeout(gameTimeout);
    alert('GAME OVER! Score: '+score);
  }
  btn.onclick=startGame;
}
main();
