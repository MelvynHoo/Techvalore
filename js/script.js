$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "6200f13c1b941c73ff397943";
    getProducts();
    function getProducts(limit = 26, all = true){
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://iptechvalore-a27e.restdb.io/rest/products",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
      }
      $.ajax(settings).done(function (response) {
        
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {
          content = `${content}<tr id='${response[i]._id}'><td>${response[i].title}</td>
          <td><img class="forimg" src= "${response[i].image}" alt="source image missing"></td>
          <td>${response[i].description}</td>
          <td>S$${response[i].price}</td>
          </tr>`;
  
        }
        console.log(content)
        $("#contact-list tbody").html(content);
  
        $("#total-contacts").html(response.length);
      });
    }
  })