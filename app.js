setInterval(() => {
    let day = new Date();
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;
let hh = day.getHours() * 30 + mm/12;

hr.style.transform = `rotate(${hh}deg)`;
mn.style.transform = `rotate(${mm}deg)`;
sc.style.transform = `rotate(${ss}deg)`;
},1000)


