// having seperate javascript file is faster than compiling it to script2
$(document).ready(function () {
    const APIKEY = "6200f13c1b941c73ff397943";
    productInfo()
    function productInfo() {
        let product_Id = sessionStorage.getItem('productId');
        console.log("Check 2 " + product_Id)
        let settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://iptechvalore-a27e.restdb.io/rest/products/" + product_Id,
            "method": "GET",
            "headers": {
                "content-type": "application/json",
                "x-apikey": APIKEY,
                "cache-control": "no-cache"
            }
        }
        $.ajax(settings).done(function (response) {

        //Product page
        let product = "";
        product = `${product}
            <div class="card mb-3" id='${response._id}'>
                <img src="${response.image}" class="card-img-top" alt="source image missing">
                <div class="card-body">
                    <h4 class="card-title">${response.title}</h4>
                    <h5 class="card-text">S$${response.price}</h5>
                    <p class="card-text">${response.description}</p>
                    <a  href="cart.html" class="btn btn-secondary">Add To Cart</a>
                    <a  href="payment.html" class="btn btn-secondary">Buy Now</a>
                </div>
            </div>
            `;
        console.log(product)
        $("#product div").html(product);

        let cartitem = "";
        if (product_Id == null){
            cartitem = `${cartitem}
            <h1 class="noitem"> No Item in Cart </h1>
            `;
            console.log(cartitem)
            $("#cartproduct div").html(cartitem); 
        }
        else{
            cartitem = `${cartitem}
                <div id="menu">   
                    <div class="card mb-3" id='${response._id}'>
                        <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${response.image}" class="img-fluid rounded-start" alt="source image missing">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 class="card-title">${response.title}</h5>
                            <p class="card-text">S$${response.price}</p>
                            <a  onclick="clearProduct()" href="#" class="btn btn-secondary" id="remove">Remove</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                <a  href="payment.html" class="btn btn-secondary" id="buy-now">Buy Now</a>
                `;
            console.log(cartitem)
            $("#cartproduct div").html(cartitem); 
        }

        });
    }
})

function clearProduct(_id) {
    sessionStorage.clear();
    console.log("Check 3 " + _id)
    location.reload();
  }