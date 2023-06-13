# Kha-CodeTest

This is my code test for web developer intern application at Golden Owl - Building a website for buying sneakers

![Screenshot](./screenshots/screenshot.png)


# Link Code Test
[Link to Web App - Kha's Code Test](https://khacodetest.netlify.app)

# Usage

- Clone code from this repository
- Open project folder in `VS Code`
- Open `New Terminal`
- Type: `cd ./frontend` -> `npm start`


### Features:

- Display all products in `Our Products` section:
  - Single product should have name, description, price, image and `Add To Cart` button.
  - User able to click on `Add To Cart` to add target product to their cart.
  - Added product doesn't have `Add To Cart` button anymore, it should have `Check Mark Icon (✓)` instead.
- Display all added products in `Your Cart` section:
  - Each product in cart should have name, price, image, increase/decrease amount button and remove button.
  - User able to increase/decrease amount of a product in cart. When product's amount is decreased to zero, that product will be removed from cart naturally.
  - User able to remove product from cart.
  - Show total price of all products in car. When user increase/decrease product's amount or remove product, total price should be re-calculate correctly.
  - When there are no products in cart, we should show `Your cart is empty` message.
  - Products in cart is persistent: When user visit the application, products are added before should be showed, user don't need to add products again.
- UI have followed correctly design from [sample demo](https://gshoes.vercel.app).

### Extra features:

- Responsive design (look good on all devices: desktops, tablets & mobile phones).
- Smooth animations.
- Deploy the application to Netlify instead of Heroku.

# Technical:

App uses front-end frameworks - ReactJS and uses some popular programing languages like HTML + CSS + Javascript.

- Products data:
  - [`./frontend/src/data/shoes.json`](./frontend/src/data/shoes.json)
- Images & icons:
  - [`./frontend/src/Components/assets`](./frontend/src/Components/assets)
  - Product images are fetched directly from remote url in data
- Fonts:
  - [https://fonts.google.com/specimen/Rubik?query=Rubik](https://fonts.google.com/specimen/Rubik?query=Rubik)
- Colors:
  - `White: #FFFFFF`
  - `Black: #303841`
  - `Gray: #777777`
  - `Yellow: #F6C90E`

# Contributors

- Candidate: [NguyenTuanKha](https://github.com/TunKeyy)
