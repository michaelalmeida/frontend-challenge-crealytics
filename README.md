# Auto-complete product list with basic filtering

![enter image description here](https://firebasestorage.googleapis.com/v0/b/tsbuilders.appspot.com/o/crealytics_test.png?alt=media&token=3c15156a-20c1-44f2-a07b-306245298ac6)

Auto-complete list which will be updated dynamically while the user types in a search box.

## Main Stack

| Package          | Description                                           |
| ---------------- | ----------------------------------------------------- |
| React            | A JavaScript library for building user interfaces     |
| Redux            | A Predictable State Container for JS Apps             |
| redux-thunk      | Middleware for Redux                                  |
| axios            | Promise based HTTP client for the browser and node.js |
| Typescript       | A superset of the JavaScript language                 |
| styled-component | CSS as Components                                     |
| RTL              | JavaScript Testing utility for React                  |
| Jest             | JavaScript Testing Framework                          |
| react-intl       | For internationalization                              |
| expressjs        | For the small server                                  |

## Installation

Clone the repository

```bash
$ git clone https://github.com/michaelalmeida/frontend-challenge-crealytics.git
$ cd frontend-challenge-crealytics
```

When that's done, install the project dependencies, go to the root folder and run:

```bash
$ npm install
```

Then do the same inside the /server folder

```bash
$ npm install
```

## Running the Project

After finish the previous step ([installation](#installation)) , you can start the project:

Starting running the server, inside the /server folder execute:

```bash
$ npm start
```

Then you can execute the same command in the root folder to run the app in the development mode. Open http://localhost:3000 to view it in the browser.

| `npm <script>`             | Description                         |
| -------------------------- | ----------------------------------- |
| `start`                    | Serves your app at `localhost:3000` |
| `build`                    | Builds the application              |
| `test`                     | Runs unit tests                     |
| `run test a -- --coverage` | Runs the tests coverage             |

## Task Description

-   [x] Parse and load all the items from the provided product feed file (products.csv). The file contains around 20K products with the following basic product information:
    -   **title**: the title of the product.
    -   **gtin**: a unique identifier.
    -   **gender**: The gender of that particular product can take 3 values (female, male, unisex).
        Some falsely values in this column are inserted on purpose to see how you deal with error cases. That said, it's completely up to you to decide how you treat these rows.
    -   **price**: The normal retail price of the product.
    -   **sale_price**: The price of the product after a discount is applied.
    -   **image_link**: The main image of the product.
    -   **additional_image_link**: A comma-separated list of additional images (might be an empty field).
-   [x] Create a web page which at its very top will contain a search box. The latter will have an auto-complete feature which will display all the products in a grid list below the search component.
-   [x] The list should be updated on every key-press event.
-   [x] A pagination limit of 100 elements should be applied to the results.
-   [x] Every item of the list should contain the title, gtin, gender, the two prices (price and sale_price) together with a thumbnail of the `image_link`.
-   [x] Each item should be expandable and on mouse click it should reveal the rest of the images as defined in the `additional_image_link`
-   [x] The specifics of the page layout as well as the design of the individual result items is up to you.

Optional:

-   [ ] Create some basic filtering by `gender` and by `sale_price`. Specifically, create a drop down containing the three options for gender (male, female and unisex) and a check-box which once checked will include only items that are currently on sale (sale_price < price). The update on the resulting list must happen dynamically on selection.
-   [x] Gain extra points if you fetch the images asynchronously.
-   [ ] Additional points for making the images cache-able and displayable in off-line mode, i.e. while off-line, make sure that all the images that have already been fetched from previous queries to be immediate accessible.
