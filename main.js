const api = {
    key: "7b15d94bdd24b231abeaf386c6ede6f3",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  var etmp=0;
  var l=0;
  //m for longitude 
  var m=0;
  var tt=0;
  // bc stors button count
  var bc=0,mc=0;
  // gt stores global temprature
  var gt=0,gt1=0,gt2=0,gt3=0;
  var lt=0,lt1=0,lt2=0,lt3=0;

  console.log("hellocoord1");

  window.addEventListener("load",()=>{
     if (navigator.geolocation) 
    {
      navigator.geolocation.getCurrentPosition((position)=>
      {
        mc=0;
    l=position.coords.latitude;
    m=position.coords.longitude;
    console.log("hellocoord");
    console.log(l);
    console.log(m);
    // console.log("polar");    
    fetch(`${api.base}weather?lat=${l}&lon=${m}&units=metric&APPID=${api.key}`)
        .then(weat => {
          return weat.json();
        }).then((data)=>
        {
          console.log(data);
          // 1
          let city = document.querySelector('.location');
          city.innerText = `${data.name}, ${data.sys.country}`;

          // 2
          let w= document.querySelector('.description');
          console.log(data.weather[0].main)
          w.innerText = data.weather[0].main;

          // 3
          let temp = document.querySelector('.temp');
           gt=Math.round(data.main.temp);
          temp.innerHTML = `${Math.round(data.main.temp)}<span>°c</span>`;
          // 4
          let now = new Date();
          console.log(now.getFullYear()); 
          let date = document.querySelector('.time');
          date.innerText =  `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}`;

          let dora = document.querySelector('.dora');
          dora.innerText =  `${now.getHours()}:${now.getMinutes()+1}`;

          // 5
          let windy = document.querySelector('.windy');
          console.log(data.wind.speed);
          windy.innerText = `${(data.wind.speed)} m/s`
          
    let feel = document.querySelector('.feel');
    gt1=data.main.feels_like;
    feel.innerText = `${(data.main.feels_like)}°c`;

    let maxtem = document.querySelector('.maxtem');
    gt2=data.main.temp_max;
    maxtem.innerText = `${(data.main.temp_max)}°c`;

    let mintem = document.querySelector('.mintem');
    gt3=data.main.temp_min;
    mintem.innerText = `${(data.main.temp_min)}°c`;

    let humu = document.querySelector('.humus');
    humu.innerText = `${(data.main.humidity)}%`;

        })
  })}});

  console.log("hellocoord3");
  
  //  function getRes () 
  // {
  //   console.log("polar");
  //   fetch(`${api.base}weather?lat=${l}&lon=${l}&units=metric&APPID=${api.key}`)
  //     .then(weat => {
  //       return weat.json();
  //     }).then(displayR);
  // }
  
  // function displayR(weat) 
  // {
  //   console.log("polong");
  //   console.log(weat);
  // }
  // console.log("hellocoord4");
  // getRes();
  // console.log("hellocoord5");

  const searchbox = document.querySelector('.input_text');
  searchbox.addEventListener('keypress', setQuery);
  const pola = document.querySelector('.input_button');
  pola.addEventListener('click', sett);
  
  function setQuery(evt) {
    console.log("inside is pressed")
    if (evt.keyCode == 13) {
        console.log(searchbox.value)
      getResults(searchbox.value);
      console.log("enter is pressed")
      console.log(searchbox.value) 
    }
  }
  function sett() {
    console.log("inside is pressed")
    console.log(searchbox.value)
    getResults(searchbox.value); 
  }
  
  function getResults (query) 
  {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then((weather)=>
      {
        console.log(weather)
        mc=1;
      let city = document.querySelector('.location');
      city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    console.log(new Date(weather.dt*1000-(3600*5500)+(((weather.timezone)*1000)))); // My location time
    console.log(new Date(weather.dt*1000-(3600*5500))); // Greenwhich time extracted
    console.log(new Date(weather.dt*1000)); // My india time
    let gg=new Date(weather.dt*1000-(3600*5500)+(((weather.timezone)*1000)));
  
    let date = document.querySelector('.time');
    date.innerText =  `${gg.getDate()}-${gg.getMonth()+1}-${gg.getFullYear()}`;

    let dora = document.querySelector('.dora');
    dora.innerText =  `${gg.getHours()}:${gg.getMinutes()+1}`;
  
    let temp = document.querySelector('.temp');
    lt=Math.round(weather.main.temp);
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
      
    let weatherel = document.querySelector('.description');
    console.log(weather.weather[0].main)
    weatherel.innerText = weather.weather[0].main;

    let windy = document.querySelector('.windy');
    console.log(weather.wind.speed);
    windy.innerText = `${(weather.wind.speed)} m/s`;

    let feel = document.querySelector('.feel');
    lt1=weather.main.feels_like;
    feel.innerText = `${(weather.main.feels_like)}°c`;

    let maxtem = document.querySelector('.maxtem');
    lt2=weather.main.temp_max;
    maxtem.innerText = `${(weather.main.temp_max)}°c`;

    let mintem = document.querySelector('.mintem');
    lt3=weather.main.temp_min;
    mintem.innerText = `${(weather.main.temp_min)}°c`;

    let humu = document.querySelector('.humus');
    humu.innerText = `${(weather.main.humidity)}%`;
    }
      )
  }
  
  const boxer = document.querySelector('.setting');
  const boxing = document.querySelector('.input_setting');
  boxing.addEventListener('click', removall);


  const saver = document.querySelector('.closeButton');
  saver.addEventListener('click', removall);
 
  function removall() {
    console.log("Toshiba")
    console.log(boxer.style.visibility)
    console.log("Toshiba22")
    if(tt==0)
    {
      boxer.style.visibility="visible";
      tt++;
    }
    else
    {
          if(boxer.style.visibility=="hidden")
    boxer.style.visibility="visible"
    else
    boxer.style.visibility="hidden"
    }

  }

  const unit = document.querySelector('.setting_temp');
  unit.addEventListener('click', ctof);
 
  // This function handles celsius to Farahan
  function ctof() {
    console.log("Yo checker")
    console.log(bc)
    bc++;
    let temp = document.querySelector('.temp');
    let feel = document.querySelector('.feel');
    let maxtem = document.querySelector('.maxtem');
    let mintem = document.querySelector('.mintem');
    console.log(gt)
    var k=Math.round((gt*9/5)+32);
    var k1=Math.round((gt1*9/5)+32);
    var k2=Math.round((gt2*9/5)+32);
    var k3=Math.round((gt3*9/5)+32);

    var gg=Math.round((lt*9/5)+32);
    var gg1=Math.round((lt1*9/5)+32);
    var gg2=Math.round((lt2*9/5)+32);
    var gg3=Math.round((lt3*9/5)+32);

      if(bc%2 !=0 && mc==0)
    {
      temp.innerHTML = `${k}<span>°F</span>`;
      feel.innerText = `${k1}°F`;
      maxtem.innerText = `${k2}°F`;
      mintem.innerText = `${k3}°F`;
    }
    else if(bc %2==0 && mc==0)
    {
      temp.innerHTML = `${gt}<span>°C</span>`;
      feel.innerText = `${gt1}°C`;
      maxtem.innerText = `${gt2}°C`;
      mintem.innerText = `${gt3}°C`;
    } 
    if(bc%2 !=0 && mc==1)
    {
      temp.innerHTML = `${gg}<span>°F</span>`;
      feel.innerText = `${gg1}°F`;
      maxtem.innerText = `${gg2}°F`;
      mintem.innerText = `${gg3}°F`;
    }
    else if(bc %2==0 && mc==1)
    {
      temp.innerHTML = `${lt}<span>°C</span>`;
      feel.innerText = `${lt1}°C`;
      maxtem.innerText = `${lt2}°C`;
      mintem.innerText = `${lt3}°C`;
    } 
    console.log("Yo checker22")
  }


//todoForm
const todoForm = document.querySelector(".addCard")
const todoInput = document.querySelector(".card_input");
const todoCollection = document.querySelector(".card_collection");
let id=1;
todoForm.addEventListener("click", addTodo);

function extracttemp()
{
  return new Promise((resolve,reject)=>{
    fetch(`${api.base}weather?q=${todoInput.value}&units=metric&APPID=${api.key}`)
    .then(weathe => {
      return weathe.json();
    }).then((weathe)=>
    {
      console.log("krpa32")
      etmp=`${Math.round(weathe.main.temp)}`;
      console.log(etmp)
      resolve();
    })
  })
}

if(JSON.parse(localStorage.getItem('todoItems')) ===null || JSON.parse(localStorage.getItem("todoItems")).length == 0)
{
  id=1;
}
else
{
  id=JSON.parse(localStorage.getItem("todoItems"))[JSON.parse(localStorage.getItem("todoItems")).length -1].id+1 ;
  JSON.parse(localStorage.getItem('todoItems')).map(todo=>{
    console.log(todoInput.value);
   const li = document.createElement("li");
   const todoTitle = document.createElement("span");
   const todoTemp = document.createElement("span");
   const deleteButton = document.createElement("button");

 
   li.classList.add("todo-collection__item");
   todoTitle.classList.add("todo-collection__item__title");
  //  todoTitle.innerText = todoInput.value;
   todoTitle.innerText = todo.name;
     
   // todoTemp.innerText = `${Math.round(weathe.main.temp)}°C`;
   
   console.log("krpa22")
   todoTemp.innerText = `${todo.temp}°C`;
   

   // todoTemp.innerText="301C";
   deleteButton.classList.add("button");
   deleteButton.innerText = "Delete";

   // add elements to todo list
   //li m append todoTitle
   li.appendChild(todoTitle);
   li.appendChild(todoTemp);
   li.appendChild(deleteButton);
   todoCollection.appendChild(li);

   deleteButton.addEventListener("click", () => {
    setTimeout(() => {
      todoCollection.removeChild(li);
    }, 100);
  });

})
}
async function addTodo(e) 
{
  console.log("krpa")
  await extracttemp();

  const value=todoInput.value;
  const value2=`${etmp}`;

  console.log(value)
  console.log(value2)

  let items=[];
  let item=
  {
    id:id,
    name:value,
    temp:value2
  };
  console.log(item);

  if (todoInput.value=== "") 
  {
    alert("enter something!");
  } 
  else 
  {
    console.log("item se pehle");
    console.log(item);
    if(JSON.parse(localStorage.getItem('todoItems'))===null)
    {
      items.push(item);
      localStorage.setItem('todoItems',JSON.stringify(items));
      window.location.reload();
      alert('item added');
    }
    else
    {
      JSON.parse(localStorage.getItem('todoItems')).map(todo=>{
        items.push(todo);
      });
      items.push(item);
      localStorage.setItem('todoItems',JSON.stringify(items));
      window.location.reload();
      alert('item added');
    }

    console.log("item ke baad");


    // console.log(todoInput.value);
    // const li = document.createElement("li");
    // const todoTitle = document.createElement("span");
    // const todoTemp = document.createElement("span");
    // const deleteButton = document.createElement("button");

  
    // li.classList.add("todo-collection__item");
    // todoTitle.classList.add("todo-collection__item__title");
    // todoTitle.innerText = todoInput.value;

      
    // // todoTemp.innerText = `${Math.round(weathe.main.temp)}°C`;
    
    // console.log("krpa22")
    // todoTemp.innerText = `${etmp}`;

    // // todoTemp.innerText="301C";
    // deleteButton.classList.add("button");
    // deleteButton.innerText = "Delete";

    // // add elements to todo list
    // //li m append todoTitle
    // li.appendChild(todoTitle);
    // li.appendChild(todoTemp);
    // li.appendChild(deleteButton);
    // todoCollection.appendChild(li);

    // deleteButton.addEventListener("click", () => {
    //   setTimeout(() => {
    //     todoCollection.removeChild(li);
    //   }, 100);
    // });
  }
  todoInput.value = "";
  e.preventDefault();
}


const theme = document.querySelector('.setting_clock');
theme.addEventListener('click', popo);

function popo()
{
  console.log("theme");
  document.getElementById("f1").classList.toggle("todaydark")
  document.getElementById("f2").classList.toggle("card_sectiondark")
  document.getElementById("f3").classList.toggle("tempdarkFS")
  // console.log(document.querySelectorAll(".setting").style.background-color)
  // console.log("theme6");
  
  document.getElementById("f5").classList.toggle("settingda")
  // document.getElementById("f5").classList.toggle("setting")
  // document.getElementById("not_so").idList.toggle("not_sod")
  // document.querySelectorAll(".textFs").classList.toggle("textFSdark")
}