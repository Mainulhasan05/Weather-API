

function getData(){
    var city=document.getElementById('city').value;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3bfcd6ea57901b6ce028b6cb6917c8d0&units=metric')
        .then(res=> res.json())
        .then(data=>{
            const output=document.getElementById('output');
            console.log(city);
            console.log(data.sys.country);
            console.log(data);
            // let s=city+','+
            document.getElementById('temp').innerText=city+','+data.sys.country;
            let ans=data.main.temp;
            document.getElementById('cityName').innerText='Temp: '+ans;
            console.log(ans);
            // let p=document.createElement('p');
            // p.innerText='County: ';
            // p.style.color='#fff';
            // output.appendChild(p);

            var setOutput=``;
        })
}