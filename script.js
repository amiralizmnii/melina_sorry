async function vote(answer){
const r=await fetch('https://melina-sorry.onrender.com/forgive',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({answer})});
document.getElementById('msg').innerText=answer==='yes'?'🥹 ممنونم...':'❤️ منتظرت می‌مونم.';
}