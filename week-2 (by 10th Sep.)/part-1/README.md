# Week 2 Part 1

## Build Order APIs

From now on, you should start use [TapPay](https://www.tappaysdk.com/en/) as primary payment service for Stylish.

### Build Check Out Page for Testing

Build a simple web page we can access through `http://[YOUR_PUBLIC_ELASTIC_IP]/admin/checkout.html` for testing. The whole payment flow in the front-end should be:

1. Load TapPay SDK.
2. Initialize TapPay SDK.
3. Render card-number, expired, and ccv fields by TapPay SDK.
4. Get **prime** from TapPay server.
5. Send **prime** and other order information to **Order Check Out API** to complete payment.

You only need to build the front-end page and functionality today, and you will build the backend API and finish the whole payment flow tomorrow.

Refer to [TapPay Document for Web](https://docs.tappaysdk.com/tutorial/zh/web/front.html#front).  
Refer to [Order Check Out API](https://github.com/AppWorks-School/API-Doc/tree/master/Stylish#order-check-out-api).

#### Required Fields for TapPay Integration

| Field | Value |
| :---: | :---: |
| App ID | 12348 |
| App Key | app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF |

---

### Get Prime from TapPay Server

You should use test credit card listed below for testing. Follow the [TapPay Document for Web](https://docs.tappaysdk.com/tutorial/zh/web/front.html#front) to get **prime** from TapPay server.

#### Test Credit Card for TapPay Testing

| Field | Value |
| :---: | :---: |
| Card Number | 4242 4242 4242 4242 |
| Expired Date | 01/23 |
| CCV | 123 |
