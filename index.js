    
    window.onload = () => {
     function getdata(){
      fetch('https://api.spaceXdata.com/v3/launches?limit=100')
      .then((res) => res.json())
      .then((data) => {
        let output = '';
        data.forEach(function(post){
          output += `
          <div class="col">
            <div class="card  style="width: 18rem;">
                 <img src="${post.links.mission_patch}  " class="card-img-top" style="width:170px; height:110px;">
                 <div  class="card-body">
              <p>${post.mission_name} #${post.flight_number}</p>
              <span>Lanunch year<span><p>${post.launch_year}</p>
              <span>Lanunch Success<span><p>${post.launch_success}</p>
              
              
              </div>
            </div>
            </div><br>
          `;
        });
        document.getElementById('output').innerHTML = output;
      })
    }

    getdata();

    }

//Launch Success Fully  Fetch data 

    document.addEventListener('DOMContentLoaded',()=>{
            let generateBtn = document.querySelector('#LaunchgetPosts');
    
            generateBtn.addEventListener('click', Launchgetdata)
        });
    
       
         function Launchgetdata(){
          fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true')
          .then((res) => res.json())
          .then((data) => {
            let output = '';
            data.forEach(function(post){
              output += `
              <div class="col">
                <div class="card  style="width: 18rem;">
                     <img src="${post.links.mission_patch}  " class="card-img-top" style="width:170px; height:110px;">
                     <div  class="card-body">
                  <p>${post.mission_name} #${post.flight_number}</p>
                 
                  <span>Lanunch Success<span><p>${post.launch_success}</p>
                  
                  
                  </div>
                </div>
                </div><br>
              `;
            });
            document.getElementById('output').innerHTML = output;
          })
        }



        //Launch and Land Fetch data 


        document.addEventListener('DOMContentLoaded',()=>{
            let generateBtn = document.querySelector('#LandingGetPosts');
    
            generateBtn.addEventListener('click', LandingGetdata)
        });
    
       
         function LandingGetdata(){
          fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true')
          .then((res) => res.json())
          .then((data) => {
            let output = '';
            data.forEach(function(post){
              output += `
              <div class="col">
                <div class="card  style="width: 18rem;">
                     <img src="${post.links.mission_patch}  " class="card-img-top" style="width:170px; height:110px;">
                     <div  class="card-body">
                  <p>${post.mission_name} #${post.flight_number}</p>
                 
                  <span> Successfully Launch<span><p>${post.launch_success}</p>
                  <span> Successfully Landing<span><p>${post.land_success}</p>  
                  
                  </div>
                </div>
                </div><br>
              `;
            });
            document.getElementById('output').innerHTML = output;
          })
        }

    
       // Fetch All Data of year 2014

       
       document.addEventListener('DOMContentLoaded',()=>{
        let generateBtn = document.querySelector('#GetAllPosts');

        generateBtn.addEventListener('click', Alldata)
    });

   
     function Alldata(){
      fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014')
      .then((res) => res.json())
      .then((data) => {
        let output = '';
        data.forEach(function(post){
          output += `
          <div class="col">
            <div class="card  style="width: 18rem;">
                 <img src="${post.links.mission_patch}  " class="card-img-top" style="width:170px; height:110px;">
                 <div  class="card-body">
              <p>${post.mission_name} #${post.flight_number}</p>
              <span>Lanunch year<span><p>${post.launch_year}</p>
              <span> Successfully Launch<span><p>${post.launch_success}</p>
              <span> Successfully Landing<span><p>${post.land_success}</p>  
              
              </div>
            </div>
            </div><br>
          `;
        });
        document.getElementById('output').innerHTML = output;
      })
    }


    // Fetch All Data of year 2016

    document.addEventListener('DOMContentLoaded',()=>{
        let generateBtn = document.querySelector('#Getdatayearsixteen');

        generateBtn.addEventListener('click', datayearsixteen)
    });

   
     function datayearsixteen(){
      fetch('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2016')
      .then((res) => res.json())
      .then((data) => {
        let output = '';
        data.forEach(function(post){
          output += `
          <div class="col">
            <div class="card  style="width: 18rem;">
                 <img src="${post.links.mission_patch}  " class="card-img-top" style="width:170px; height:110px;">
                 <div  class="card-body">
              <p>${post.mission_name} #${post.flight_number}</p>
              <span>Lanunch year<span><p>${post.launch_year}</p>
              <span> Successfully Launch<span><p>${post.launch_success}</p>
              <span> Successfully Landing<span><p>${post.land_success}</p>  
              
              </div>
            </div>
            </div><br>
          `;
        });
        document.getElementById('output').innerHTML = output;
      })
    }
