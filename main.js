import "./style.css";
import axios from "axios";

const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";

let items = [];

//Get movies from api
getMovies();
async function getMovies() {
  const resp = await axios({
    method: "GET",
    url: url,
  });

 let items = resp.data.results;
  console.log(items);
  showMovies();
}

//show movies in list
function showMovies() {
  let list = document.getElementById("content");
  list.innerHTML = "";
  items.forEach((item) => {
    list.insertAdjacentHTML(
      "beforeend",

      ` 
          <div class="d-flex col-xs-12  col-md-6 col-lg-4 col-xl-3 p-5 " style="background-color:#dddddd">
      <a href="https://www.themoviedb.org/">
        <!-----poster--->
           <div id="poster" style="background-color:white ; border-radius:10px">
              <div id="container">
                 <img  class="d-block mx-auto w-100 h-auto "  src="https://image.tmdb.org/t/p/w500${item.poster_path}" />
              <div class="overlay px-3">
                
                </div>
          </div>

      <!-----title & logo--->
      <a href="https://www.themoviedb.org/" class="title_link">
       <div class="logo">
       <h2  style="font-size:20px">${item.original_title}</h4>
       <img src="imxlogo.jpg" class="content_logo">
       </div>
      </a>
    
    <!-----INFO SECTION--->
    <a href="https://www.themoviedb.org/">
     <div id="info_section" class=" p-1 ">
       
        <div class="d-flex justify-content-between">

         <!-----date publish date---->
          <div class="d-flex flex-column align-items-start px-3 text-center w-75 ">
            <p class="p_title">Publish Time</p>
            <pre class="p_publish_time" >${item.release_date}</pre>
          </div>
          
        <!-------rate section--->
          <div class="d-flex flex-column px-3 text-center w-25 ">
            <p class="p_title">Rate</p>
            <span class="span_content ">${item.vote_average}</span> 
          </div>
        <!--------vote Count---->
          <div class="d-flex flex-column px-3 text-center w-25 "> 
          <p class="p_title">Vote</p>
          <span class="span_content " >${item.vote_count}</span> 
          </div>
        <!--------original_language---->
          <div class="d-flex flex-column px-3 text-center w-25 "> 
          <p class="p_title">language</p>
          <span class="span_content">${item.original_language}</span> 
          </div>   
          </div>
      </a>
      <!----end-info section---->
      </div>
      </a>  
 </div>
 
    `
    );
  });
}
