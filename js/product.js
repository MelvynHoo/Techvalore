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

        let content1 = "";
            content1 = `${content1}
            <tr id='${response._id}'><td>${response.title}</td>
            <td><img class="forimg" src= "${response.image}" alt="source image missing"></td>
            <td>${response.description}</td>
            <td>S$${response.price}</td>
            </tr>`
        console.log(content1)
        $("#product tbody").html(content1); 
        });
    }
})