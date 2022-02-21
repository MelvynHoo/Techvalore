// having seperate javascript file is faster than compiling it to script2
$(document).ready(function () {
    const APIKEY = "6200f13c1b941c73ff397943";
    productInfo()
    function productInfo() {
        let product_Id = sessionStorage.getItem('productId');
        console.log("Product Received: " + product_Id)
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
        //console.log(product)
        $("#product div").html(product);

        //Cart Page
        let cartitem = "";
        if (product_Id == null){
            cartitem = `${cartitem}
            <h2 class="noitem"> No Item in Cart </h2>
            `;
            console.log(cartitem)
            $("#noitem div").html(cartitem); 
        }
        else{
            cartitem = `${cartitem}
            <div id="yesitem">
                <div class="row row-cols-1 row-cols-md-1 g-4">
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
                </div>
            </div>
                <a  href="payment.html" class="btn btn-secondary" id="buy-now">Buy Now</a>
                `;
            //console.log(cartitem)
            $("#cartproduct div").html(cartitem); 
        }

        //Payment page
        let payment = "";
        var coin = Math.round(`${response.price}`/5*2);
        var orderTotal = `${response.price}`*1+1;
        var totalpayment = orderTotal*1-10;
        console.log("Total Coin:" + coin)
        payment = `${payment}
                <div class="card-body">
                <p>Delivery Address<br>
                Name: XXXXXXXX | (+65) 6466 6555<br>
                Block number : XXXXXXXXX<br>
                Singapore : 599489</p>
                </div>
                <img src="${response.image}" class="card-img-top" alt="source image missing">
                <div class="card-body">
                <h5 class="card-title">${response.title}</h5>
                <p class="card-text">S$${response.price}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item" style="background-color:#CDFFC9; color:#4B9D45; font-size:20px;">Shipping Option</li>
                <li class="list-group-item" style="background-color:#CDFFC9;">Standard Express</li>
                <li class="list-group-item" style="font-size:20px;">Voucher</li>
                <li class="list-group-item" style="text-align:right;">Selected Voucher: S$10 discount  ></li>
                <li class="list-group-item" style="font-size:20px;">Order Total:</li>
                <li class="list-group-item">S$${orderTotal}</li>
                <li class="list-group-item" style="font-size:20px;">Payment Option</li>
                <li class="list-group-item" style="text-align:right;"><a href="paymentoption.html" id="creditcard">Credit Card/Debit Card ></a></li>
                <li class="list-group-item">Merchandise Subtotal: S$${response.price}<br>
                                            Shipping Subtotal: S$1<br>
                                            Voucher Discount: S$10<br>
                                            Total Coin Earned: ${coin} Coins<br>
                                            Total Payment: S$${totalpayment}</li>
                </ul>
                <div class="card-body">
                <a href="confirmation.html" class="btn btn-secondary" id="placeorder">Place Order</a>
                </div>
            `;
        //console.log(payment)
        $("#payment div").html(payment);

        //Remove footer for a moment, then put back in
        let footer = "";
        footer = `${footer}
            <footer class="footer">
                <div class="notes">
                    <p>'Copyright' by Techguru | IM Integrated Project 2022</p>
                </div>
            </footer>
            `;
        //console.log(footer)
        $(".forfooter").html(footer);

        //Confirmation Page
        let confirmation = "";
        confirmation = `${confirmation}
            <div id='surebo'>
                    <h5>Bank Card: XXXX XXXX XXXX XXXX</h5>
                    <h5>Total Payment: S$${totalpayment}</h5>
            </div>
            <div class="d-grid gap-3">
            <a href="ordercomplete.html" class="btn btn-secondary" id="confirmpayment">Confirm Payment</a>
            <a href="payment.html" class="btn btn-primary" id="confirmpayment">Go Back</a>
            </div>
            `;
        //console.log(confirmation)
        $("#confirmation div").html(confirmation);

        //Order Complete Page
        let ordercomplete = "";
        ordercomplete = `${ordercomplete}
            <div id='finish'>
                    <h5>Delivery Address<br>
                    Name: XXXX | (+65) 6466 6555<br>
                    Block number : XXXXXXXXX<br>
                    Singapore : 599489</h5><br><br>
                    <h4>Total Payment: S$${totalpayment}</h4>
                    <h4>Total Coin Earned: ${coin} Coins</h4>
            </div>
            <div class="d-grid gap-3">
            <a onclick="clearProduct()" href="home.html" class="btn btn-secondary" id="returnhome">Return Home</a>
            </div>
            `;
        //console.log(ordercomplete)
        $("#ordercomplete div").html(ordercomplete);
        });
    }
})

function clearProduct(_id) {
    sessionStorage.clear();
    console.log("Item has been removed")
    location.reload();
  }

function autoRemove(){
    sessionStorage.clear();
    console.log("Auto Item Removal Activated")
}