# Week 1 Part 2

## Build Product APIs

### Build Product Search API

Refer to [Product Search API](https://github.com/AppWorks-School/API-Doc/tree/master/Stylish#product-search-api), build this API for front-end.

### Build Product Details API

Refer to [Product Details API](https://github.com/AppWorks-School/API-Doc/tree/master/Stylish#product-details-api), build this API for front-end.

### Note:
1. We only search the `title` column in product search API and see if part of the `title` match the keyword. For example, products with title "厚實毛呢格子外套" should be found out by keyword "格子" or "厚實".
2. Please create more than `1` products with keyword `洋裝`, that is, it should return at least `2` product from API: `http:/[HOST_NAME]/api/[API_VERSION]/products/search?keyword=洋裝`.