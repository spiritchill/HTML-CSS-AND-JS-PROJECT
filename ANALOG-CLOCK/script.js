setInterval(()=>{
    hour=document.querySelector("#hour");
    minute=document.querySelector("#minute");
    second=document.querySelector("#second");
    let datenew = new Date();
    h =datenew.gethours();
    m= datenew.getMinutes();
    s= datenew.getSeconds();
    rh =30*h + m/2;

    rm= 6*m;

    rs =6*s;
    hour.style.transform = `rotate(${rh}deg)`;
    minute.style.transform = `rotate(${rm}deg)`;
    second.style.transform = `rotate(${rs}deg)`;


},1000)