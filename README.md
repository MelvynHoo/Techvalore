# Techvalore (IM-Integrated-project-2022)
### Team member
- Celine Tan (Leader)
- Melvyn Hoo 
# Website Link
Github website link: https://melvynhoo.github.io/Techvalore/

# About Techvalore
This project show a concept about an ecommerce website that aims towards tech enthusiast that like hardware technology and accessories. Where user can browse through different product to their likings and do not rely on generic ecommerce selling different stuff. So if user like everything about technology and wants to get their hands on the latest technology, this is the website for you! 

# Design Process
When we planned out the application, we knew we wanted tech enthusiasts to be our main target audience through this website, we hope to bring convenience to our consumers and ensuring our website design and layout to be simple and minimalistic.
We knew that we did not want the website that is overcrowded, driving users away from their main goal which is browsing through the website and enjoying the perks along with it. Our website is pretty straightforward, and it is generous with it's perks.
- As a user, I want to be able to obtain vouchers so i can purchase items at a discounted price
- As a user, I want to be able to enjoy the perks of the application so i want to be able to make routine purchases and login to the application to earn coins
- Adobe XD : [Our High and Low Fidelity Wireframe
 ](https://xd.adobe.com/view/59c5f7fc-4347-4a25-97e1-bcf29d76c3a5-0c96/
)

# Features
### Existing Features:
- View 3D model of the most trending item
- Allow user to register by signing in using their name, email and password and earn 50 coins.
- Allow user to add item to cart and remove them if they do not wish to purchase it
- User can play a small minigames to earn extra coin
- Depending on the prices of the product, every $5 the user earns 2 coins when purchasing

### Features left to Implement:
- A full sign in where the website can use the registered user data to allow user to login uniquely
- A working minigames where user can earn a random amount of coins and store in the user database for later use.
- A redeemable voucher using the coin store in user database and can but used later on

# Technologies Used
### RestDB
- RestDB & CRUB : [Store my User and Product information
 ](https://restdb.io/)

### Lottie
- Lottie Loading : [Fork from lottiefiles
 ](https://lottiefiles.com/89991-loading)

### Bootstrap
- Bootstrap : [Help for the design element
 ](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

### Jquery
- Jquery : [To Simplify DOM manipulation
 ]( https://jquery.com/)

### Our Database
- From our RestDB Database  : [Product Database 
 ](https://own-product-api.melvynhoo.repl.co/)

- From our RestDB Database : [How many user in TechValore 
 ](https://how-many-user-in-techvalore.melvynhoo.repl.co/)

# Testing Process
For the testing of the website, some has been able to store and retrieve the data gather from the user input and databases. However, that has not been automated and has no actual function. Hence, to describe the testing process in the given scenarios is showed here:
1. Register page:
    1. Go to "Sign up" page from the top-right
    2. Register yourself using whatever name, email and password
    3. Once completed, hit the register button
    4. User will be alerted that the input has successfully recorded into the database.
    5. User can go to the login page and enter your credential to enter to the website

2. Home page:
    1. User can view the 3D model under the "Trending" section
    2. User can scroll down to "All Products" section
    3. The product should be visible and loaded on the website.
    4. The product can be clicked to enter to the Product page. (Is restricted if you are not log in) 

3. Product and Cart page:
    1. In the product page, the user can choose to "Add to Cart" or "Buy Now"
    2. "Add to Cart" will bring you to the Cart page
    3. In the Cart page, the user can choose to "Remove" the item in the cart or "Buy Now"
    4. If user choose to "Remove", the item will be removed and will show a pop up to tell user there no item in the cart

4. Payment page:
    1. In the payment page, it will show a full details of the checkout.
    2. The coin will be calculated based on the price of the product, every $5 is equal to 2 coins
    3. User can choose to go the the payment option page by clicking on the "Credit Card/Debit Card"
    4. User can clicked on "Place Order" and will bring them over the confirmation page
    5. Confirmation Page allow user to turn back if they do not wish to buy it yet, else click "Confirm Payment"
    6. The order has been complete, you will be greeted by the total payment and how much coin earned. Along with the delivery address.
    7. Click "Return Home" to go back home.

5. Minigame/Voucher page:
    1. Go to your profile by clicking on the icon on the top-right
    2. Click "Earn Coins"
    3. When the user click on the roll button, the wheels should start spinning.
    4. Upon completing the spin, the user are prompt of what winning they have earned.
    5. User can take their winning to the voucher page when they click on "Voucher" in their profile

### Bugs
- When user click on the product in home page, the item will be store automatically into the cart without clicking "Add to Cart"
- Login cannot use the user data after registering in the register page, as this part is simulated and can be login without putting anything
- Minigames can only win 3 coins as this is simulated as well and cannot be added uniquely to the user data
- Discount and shipping are pre-defined as this is also simulated and shown as a concept only

# Credits

### StackOverflow
- [How to make an input type=button act like a hyperlink and redirect using a get request?
](https://stackoverflow.com/questions/3303675/how-to-make-an-input-type-button-act-like-a-hyperlink-and-redirect-using-a-get-r)

- [Click Button for One function Click Again for Another
](https://stackoverflow.com/questions/19128311/click-button-for-one-function-click-again-for-another)

- [How to make a image rotate when i click the button
](https://stackoverflow.com/questions/61641362/how-to-make-a-image-rotate-when-i-click-the-button)

- [Reveal a div after x seconds, and reveal another div after y seconds
](https://stackoverflow.com/questions/18808383/reveal-a-div-after-x-seconds-and-reveal-another-div-after-y-seconds)

- [How to force JS to do math instead of putting two strings together
](https://stackoverflow.com/questions/4841373/how-to-force-js-to-do-math-instead-of-putting-two-strings-together)

### w3schools
- [Window SessionStorage, to save user input
](https://www.w3schools.com/jsref/prop_win_sessionstorage.asp)

- [onclick Event
](https://www.w3schools.com/jsref/event_onclick.asp)

### Others
- [More example of Request/Get Session Storage
](https://www.codegrepper.com/code-examples/javascript/request+session+javascript)

- [More example of Session Setitem
](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)


### Icons & Fonts
- Google: [Fonts
 ](https://fonts.google.com/)
- Google: [Icons
 ](https://fonts.google.com/icons?selected=Material+Icons)

 ### Acknowledgements

- Inspired ideas from shopee for the minigame and grab for it's many unique features
  - [Shopee
  ](https://shopee.sg/)
  - [Grab
  ]( https://www.grab.com/sg/)

### Media
- List of the product we used
    1. [Corsair K70 RGB MK.2 RAPIDFIRE Mechanical Gaming Keyboard
    ](https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/RGB-Mechanical-Gaming-Keyboards/K70-RGB-MK-2/p/CH-9109012-NA)
    2. [PRISM+ W240
    ]( https://prismplus.sg/collections/gaming-monitors/products/prism-w240?gclid=Cj0KCQiApL2QBhC8ARIsAGMm-KE0l4Y_xb1r8m_6UxErQVkkGNWlxYOpHyAhc3vrJv89WsdY00tdtOMaApwDEALw_wcB)
    3. [Lenovo ThinkPad X1 Carbon Gen 9 14" FHD+ Ultrabook
    ](https://www.ubuy.com.sg/product/3O47A34WY-latest-lenovo-thinkpad-x1-carbon-gen-9-14-fhd-ultrabook-11th-gen-i7-1185g7-32-gb-ddr4-512-gb-ssd-intel-iris-xe-graphics-fingerprint-reader)
    4. [Lenovo IdeaPad Gaming 3 (15", Gen 6)
    ](https://www.lenovo.com/sg/en/laptops/legion/gaming-series-laptops/Gaming-3-Gen-6-15-AMD/p/WMD00000479)
    5. [Lenovo Yoga Slim 7i (14", Gen 5)
    ](https://www.lenovo.com/sg/en/laptops/yoga/yoga-slim-series/Yoga-Slim-7-Pro-14ITL5/p/WMD00000492)
    6. [Swift X Thin-Lightweight Laptop
    ](https://store.acer.com/en-sg/swift-x-sfx14-41g-r4b1)
    7. [Aspire Vero Green Laptop | AV15-51-55B2 (Gray)
    ](https://store.acer.com/en-sg/laptops/aspire-performance/aspire-vero)
    8. [Aspire 5 Everyday Laptop | A515-56-59AT (Silver)
    ](https://store.acer.com/en-sg/aspire-5-a515-56-59at)
    9. [MSI Vector GP66 12UE 272 (RTX3060, GDDR6 6GB)
    ](https://mystore.msi.com/product/msi-vector-gp66-12ue-rtx3060-gddr6-6gb/)
    10. [MSI Raider GE66 11UE 632 (GeForce RTX™ 3060 GDDR6 6GB)
    ](https://mystore.msi.com/product/msi-raider-ge66-11ue-632-geforce-rtx-3060-gddr6-6gb-preorder-1-2-weeks/)
    11. [Microsoft Surface Pro 7 (Intel i5, 8GB RAM, 256GB SSD) (Black)
    ](https://www.challenger.sg/pc-go/notebooks-desktops/notebooks-desktops-Modern-PCs/microsoft-surface-pro-7-intel-i5-8gb-ram-256gb-ssd-black0--0889842500912)
    12. [Phone 13 mini 128GB (Midnight)
    ](https://www.challenger.sg/apple/iphone-m/iphone-/iphone-13-mini-128gb-midnight-mlk03zpa0--0194252689721?h=MCwxLDEqMTE0OQ%3D%3D)
    13. [iPhone 13 Pro Max 1TB (Sierra Blue)
    ](https://www.challenger.sg/apple/iphone-m/iphone-/iphone13promax-1tb-sierra-blue-mlln3zpa0--0194252702048?h=MSwxLDEqMjYyOQ%3D%3D)
    14. [iPhone 13 Pro 256GB (Graphite)
    ](https://www.challenger.sg/apple/iphone-m/iphone-/iphone-13-pro-256gb-graphite-mlve3zpa0--0194252716700?h=MSwxLDEqMTgxOQ%3D%3D)
    15. [Samsung S20 Fe
    ](https://www.challenger.sg/android-zone/phones/smartphones/samsung-galaxy-s20-fe-cloud-red-8-256gb-5g0--8806090862410?h=MSwxLDEqNzk4)
    16. [Samsung Galaxy Z Fold3 (Black) 12+512GB 5G 
    ](https://www.challenger.sg/android-zone/phones/smartphones/samsung-galaxy-z-fold3-black-12512gb-5g-smf926bzkgxsp0--8806092562158?h=MSwwLDAqMjQzMA%3D%3D)
    17. [Logitech G402 Hyperion Fury FPS Gaming Mouse
    ](https://www.challenger.sg/accessories-showroom/toys-gaming-accessories/toys-gaming-accessories-Gaming-Mice/logitech-g402-hyperion-fury-fps-gaming-mouse0--0097855105677?h=MSwxLDAqNDg%3D)
    18. [Logitech G203 Gen2 Lightsync Gaming Mouse (White)
    ](https://www.challenger.sg/accessories-showroom/toys-gaming-accessories/toys-gaming-accessories-Gaming-Mice/logitech-g203-gen2-lightsync-gaming-mouse-white0--0097855155955?h=MSwxLDEqMzg%3D)
    19. [Logitech G512 GX Red Linear Gaming Keyboard
    ](https://www.challenger.sg/accessories-showroom/toys-gaming-accessories/toys-gaming-accessories-Gaming-Keyboards/logitech-g512-gx-red-linear-gaming-keyboard0--0097855151773?h=MSwxLDAqMTA4)
    20. [Google Pixel 5
    ](https://www.amazon.sg/Google-Pixel-128GB-8GB-RAM/dp/B08JN8MCT5/ref=asc_df_B08JN8MCT5/?tag=googleshoppin-22&linkCode=df0&hvadid=404283839969&hvpos=&hvnetw=g&hvrand=15615298105422156652&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062499&hvtargid=pla-1003444575963&psc=1)
    21. [Hyper X cloud Alpha
    ](https://www.amazon.sg/HyperX-Headset-Nintendo-HX-HSCA-RD-AM/dp/B074NBSF9N/ref=asc_df_B074NBSF9N/?tag=googleshoppin-22&linkCode=df0&hvadid=389118334212&hvpos=&hvnetw=g&hvrand=15251076191672925952&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062499&hvtargid=pla-434383799193&psc=1)
    22. [Samsung Galaxy Pro
    ](https://www.amazon.sg/Bluetooth-Wireless-Cancelling-Charging-Resistant/dp/B08MWY75DH/ref=pd_lpo_1?pd_rd_i=B08MWY75DH&psc=1)
    23. [Google Pixel 6
    ](https://www.expansys.com.sg/google-pixel-6-5g-dual-sim-8gb-128gb-stormy-black-363178/)
    24. [Oneplus 9 Pro
    ](https://www.amazon.com/OnePlus-Unlocked-Smartphone-Hasselblad-Wireless/dp/B07XM7WVS8)
    25. [Razer Deathadder
    ](https://www.amazon.sg/Razer-Deathadder-Essential-Optical-Adjustible/dp/B07KFRRVK4/ref=asc_df_B07KFRRVK4/?tag=googleshoppin-22&linkCode=df0&hvadid=404237899819&hvpos=&hvnetw=g&hvrand=8305281493546185122&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062499&hvtargid=pla-731375452270&psc=1)
    26. [Razer Viper Mini
    ](https://www.courts.com.sg/razer-viper-mini-wired-gaming-mouse-ip159031)