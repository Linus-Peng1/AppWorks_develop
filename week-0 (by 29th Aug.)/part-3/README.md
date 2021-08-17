# Week 0 Part 3

## Overview of What We Should Complete

### Complete RESTful APIs

Refer to [Stylish APIs](https://github.com/AppWorks-School/API-Doc/blob/master/Stylish/README.md), you should complete APIs listed below:

* **Product APIs.**
  * Product List API.
  * Product Search API.
  * Product Details API.
* **Marketing APIs.**
  * Marketing Campaigns API.
* **User APIs.**
  * User Sign Up API.
  * User Sign In API.
  * User Profile API.
* **Order APIs**
  * Order Check Out API.

### Create Simple Web Pages for Data Managemenet

For testing and management, you should create some simple web pages for data management.

* **/admin/product.html** for product management.
* **/admin/campaign.html** for campaign management.
* **/admin/checkout.html** for check out testing.

---

## Build Product APIs

### Create Tables Necessary

Look at all product APIs closely and carefully. It's your job to create appropriate tables in MySQL server to support all the APIs.

### Build Product Management Page

Build a simple web page we can access through `http://[YOUR_PUBLIC_ELASTIC_IP]/admin/product.html`. In this page, show a form for adding new product data which should include necessary text input fields and file fields for uploading product images.

### Build Product Create API for Management

Sometimes, you have to build API for internal use. It's time coming!  
Use [multer module](https://github.com/expressjs/multer) to handle file uploading.
