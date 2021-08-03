# Week 2 Part 2

## Build Order APIs

### Build Order Check Out API

Refer to [TapPay Document for Backend](https://docs.tappaysdk.com/tutorial/en/back.html#pay-by-prime-api).  
Refer to [Order Check Out API](https://github.com/AppWorks-School/API-Doc/tree/master/Stylish#order-check-out-api).  

Follow steps below to complete check out procedure:
1. Receive **prime** and order data from front-end.
2. Create an unpaid order record in the database.
3. Send **prime** and other necessary data to TapPay server for payment processing.
4. Receive payment result from TapPay server.
5. If payment is successful, create a payment record in the database and update existed unpaid order record to paid. Otherwise, send payment error message to front-end.

#### Required Fields for TapPay Integration

| Field | Value |
| :---: | :---: |
| Partner Key | partner_PHgswvYEk4QY6oy3n8X3CwiQCVQmv91ZcFoD5VrkGFXo8N7BFiLUxzeG |
| Merchant ID | AppWorksSchool_CTBC |

---

### Handle Order and Payment Data Carefully

Because check out feature is a very sensitive part in an e-commerce website, you should give special attention to order and payment records in the database.

### Authentication

The checkout API need to check the access token. Look at the different types of error status in API docs carefully.