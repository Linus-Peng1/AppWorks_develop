# Week 1 Part 1

## Build Product APIs

### Build Product List API

Refer to [Product List API](https://github.com/AppWorks-School/API-Doc/tree/master/Stylish#product-list-api), build this API for front-end.

### Note:
1. The first page is page `0`, so the `next_paging` number in the response of products API should be `1` (if needed) when there is no `paging` number given in the request url.
2. If there are no more pages, server won't return next_paging parameter.
3. The page size should be `6`, that is, there should be 6 products in each page.
4. Please create at least `1` products for each category. (categories: `men`, `women`, `accessories`)
5. Please create more than `6` products in `women` category, that is, it should return at least `1` product from API: `http:/[HOST_NAME]/api/[API_VERSION]/products/women?paging=1`.
6. Please **don't** create more then `150` products (25 pages) in `all` category.