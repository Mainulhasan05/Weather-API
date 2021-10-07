

function getData(){
    var city=document.getElementById('city').value;
    var img=document.getElementById('img');
    document.getElementById('cityName').innerText="";
    document.getElementById('details').innerText="";
    let p=document.getElementById('weather').innerText="";
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=3bfcd6ea57901b6ce028b6cb6917c8d0&units=metric')
        .then(function(response) {
            // console.log(response.status); // Will show you the status
            if (!response.ok) {
                alert("City name not found");
            }
            else{
                return response.json();
            }            
        })
        .then(data=>{
            const output=document.getElementById('output');
            // console.log(city);
            // console.log(data.sys.country);
   //          console.log(data);
            // let s=city+','+
            // document.getElementById('details').innerText=city+','+data.sys.country;
            let ans=data.main.temp;
            document.getElementById('cityName').innerText=city+','+data.sys.country;
            let weather=data.weather[0].main;
            document.getElementById('weather').innerText=weather;
            document.getElementById('details').innerText=
            `${ans}℃`;
            // console.log(ans);
            // let x=data.main;
            // let temp_max=x.temp_max;
            // let temp_min=x.temp_min;
            // let feels_like=x.feels_like;

            let pic=data.weather[0].icon;
            img.innerHTML=`<img src="http://openweathermap.org/img/wn/${pic}@2x.png"/>`;
 //           console.log(pic);

            // var setOutput=
            // `
            //  Weather:    ${weather}
            //  Feels_like: ${feels_like}℃
            //  Temp_min:   ${temp_min}℃
            //  Temp_max:   ${temp_max}℃
            //  ${city},${data.sys.country} 
            //  `;
            //document.getElementById('details').innerText=setOutput;
            // console.log(setOutput);
        });
}