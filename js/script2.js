// For home page that can click on items
$(document).ready(function () {
    const APIKEY = "6200f13c1b941c73ff397943";
    getProducts();
    function getProducts(limit = 26, all = true){
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://iptechvalore-a27e.restdb.io/rest/products",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
      }
      $.ajax(settings).done(function (response) {
        
        let content = "";
        for (var i = 0; i < response.length && i < limit; i++) {
          content = `${content}
          
          <div class="col" id='${response[i]._id}'>
          <a onclick="selectedProduct('${response[i]._id}')" class="products "href="#">
          <div class="card h-100">
            <img class="forimg" src= "${response[i].image}" alt="missing source image">
              <div class="card-body">
                <h5 class="card-title">${response[i].title}</h5>
                <p class="card-text">S$${response[i].price}</p>
              </div>
            </div>
          </a>
          </div>
          `;
        }
        //console.log(content)
        
        $("#product-list div").html(content); // list all the product inside
      });
    }
    
  })

  function selectedProduct(_id) {
    sessionStorage.setItem('productId', _id);
    console.log("Check 1 " + _id)
    window.location = 'product.html';
    return false;
  }