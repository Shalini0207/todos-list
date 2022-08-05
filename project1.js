
// 
// let time = a.getTime();
// document.getElementById('current-date').innerHTML = b+' '+time;


setInterval(()=>{
    let date = new Date();
    // const options = {weekday : 'long', year: 'numeric', month: 'long', day:'numeric' };
    // let datelocal = date.toLocaleDateString(undefined, options);
    // let second = date.getSeconds();
    // let secdata = parseInt(second);
    // let minute = date.getMinutes();
    // let mindata = parseInt(minute);
    // let hour = date.getHours();
    // let hourdata = parseInt(hour);
    // let date_us = date.toLocaleString('en-US');
    // let utc = date.getTime()+(date.getTimezoneOffset()*6000);
    // if(secdata<10){
    //     second = '0'+date_us.getSeconds();
    // }
    // if(mindata<10){
    //     minute = '0'+date_us.getMinutes();
    // }
    // if(hourdata<10){
    //     hour = '0'+date_us.getHours();
    // }
    // let time = hour+':'+ minute+':'+second;
    // let time = date_us.getHours()+':'+date_us.getMinutes()+':'+date_us.getSeconds();
    // document.getElementById('current-date').innerHTML=time+' on '+datelocal;
    // document.getElementById('current-date').innerHTML = time+' on '+date_us+'in US';
    let diff = date.getTimezoneOffset();
    console.log(diff);
    // document.getElementById('current-date').innerHTML = diff;
    let utctime = date.getTime()-diff;
    let ustime = new Date(utctime);
    document.getElementById('current-date').innerHTML = ustime;
},1000);

// (settime, 1000);
// document.getElementById('current-time').innerHTML = settime;