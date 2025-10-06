# Payments

```ts
const paymentsApi = new PaymentsApi(client);
```

## Class Name

`PaymentsApi`

## Methods

* [Create Payment](../../doc/controllers/payments.md#create-payment)
* [Retrieve Payment](../../doc/controllers/payments.md#retrieve-payment)
* [Incremental Auth](../../doc/controllers/payments.md#incremental-auth)
* [Cancel Payment](../../doc/controllers/payments.md#cancel-payment)
* [Capture Payment](../../doc/controllers/payments.md#capture-payment)
* [Retrieve Capture](../../doc/controllers/payments.md#retrieve-capture)
* [Void Capture](../../doc/controllers/payments.md#void-capture)
* [Referenced Refund](../../doc/controllers/payments.md#referenced-refund)
* [Retrieve Referenced Refund](../../doc/controllers/payments.md#retrieve-referenced-refund)
* [Void Referenced Refund](../../doc/controllers/payments.md#void-referenced-refund)
* [Unreferenced Refund](../../doc/controllers/payments.md#unreferenced-refund)
* [Void Unreferenced Refund](../../doc/controllers/payments.md#void-unreferenced-refund)


# Create Payment

Create a new payment.

The Channel and Payment method will determine the type of payment being created, as well as the specific data requirements.

Example payload:

```
Headers:
  Accept: application/json
  Content-Type: application/json
  WP-Idempotency-Key: <unique-guid>
  WP-Api-Version: 1
  WP-AccountId: <account-id>
  Authorization: Worldpay license=xxxx

Body:
{
  "reference": "Memory265-13/08/1876",
  "merchant": {
    "id": "<acceptor-id>",
    "terminalId": "<acceptor-id>"
  },
  "channel": {
    "type": "ecom",
    "paymentMethod": {
      "type": "card",
      "instrument": {
        "type": "keyed/clear",
        "cardData": {
          "cardNumber": "<card-number>",
          "expiryDate": {
            "month": <month>,
            "year": <year>
          },
          "cvc": "<cvc>"
        }
      }
    }
  },
  "amount": {
    "currency": "USD",
    "value": 10
  }
}
```

```ts
async createPayment(
  wpIdempotencyKey: string,
  wpApiVersion: number,
  body: CreatePaymentRequest,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CreatePaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpIdempotencyKey` | `string` | Header, Required | Caller-generated identifier in the form of a UUID/GUID.<br><br>This value is required and must be unique across unique requests. A request that is intended to be a re-submission or otherwise duplication of a previous request (for example, in the event of a network interruption during processing) should include the same key from the previous (original) request, so that an idempotent response can be returned. |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `body` | [`CreatePaymentRequest`](../../doc/models/create-payment-request.md) | Body, Required | Request object for creating a new payment. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CreatePaymentResponse`](../../doc/models/create-payment-response.md).

## Example Usage

```ts
const wpIdempotencyKey = 'e56acd06-db3f-4891-9dd6-9b419e8d431a';

const wpApiVersion = 1;

const body: CreatePaymentRequest = {
  reference: 'Memory265-13/08/1876',
  merchant: {
  },
  channel: {
    type: 'ecom',
    paymentMethod: {
      type: 'card',
      instrument: {
        type: 'keyed/clear',
        cardData: {
          cardNumber: 'cardNumber2',
          expiryDate: {
            month: 12,
            year: 20,
          },
          cvc: '123',
        },
      },
    },
  },
};

try {
  const { result, ...httpResponse } = await paymentsApi.createPayment(
    wpIdempotencyKey,
    wpApiVersion,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Retrieve Payment

Retrieve detailed information about the specified payment.

```ts
async retrievePayment(
  wpApiVersion: number,
  id: string,
  merchantId: string,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrievePaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `id` | `string` | Template, Required | Unique identifier for the payment.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `merchantId` | `string` | Query, Required | Identifier for the merchant associated with this resource. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RetrievePaymentResponse`](../../doc/models/retrieve-payment-response.md).

## Example Usage

```ts
const wpApiVersion = 1;

const id = 'payV1StGXR8_Z5jdHi6B-myT0';

const merchantId = 'merchantId6';

try {
  const { result, ...httpResponse } = await paymentsApi.retrievePayment(
    wpApiVersion,
    id,
    merchantId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Incremental Auth

An authorization with an estimated amount occurs in specific industries where the merchant does not know what the final bill will be at the point of interaction when the cardholder provides their card details.

Below is a list of some of the most common industries that use this functionality:

<ul>
  <li>Hotels</li>
  <li>Vehicle and equipment rentals</li>
  <li>Cruise Lines</li>
  <li>Bars and Restaurants</li>
  <li>Online grocery shopping</li>
</ul>
    
The process can be broken down into three distinct phases:
<ul>
  <li>Initial authorization (at first point of contact with the card and cardholder), authorization amount is marked as estimated.</li>  
  <li>Incremental authorizations (when additions are made to the potential bill), top-up required to the previously done authorization.</li> 
  <li>Settling the transaction when the final amount is known.</li> 
</ul>
These phases are now required to be linked via a scheme-generated transaction ID (hereinafter referred to as Scheme Reference Data) and settled for the final (known) amount.

Visa allows what they term initial, estimated and incremental processing only in specific market sectors. Mastercard allows incremental authorisation processing for all merchant types.

```ts
async incrementalAuth(
  wpIdempotencyKey: string,
  wpApiVersion: number,
  id: string,
  body: IncrementalAuthorizationRequest,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<IncrementalAuthResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpIdempotencyKey` | `string` | Header, Required | Caller-generated identifier in the form of a UUID/GUID.<br><br>This value is required and must be unique across unique requests. A request that is intended to be a re-submission or otherwise duplication of a previous request (for example, in the event of a network interruption during processing) should include the same key from the previous (original) request, so that an idempotent response can be returned. |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `id` | `string` | Template, Required | Unique identifier for the payment.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `body` | [`IncrementalAuthorizationRequest`](../../doc/models/incremental-authorization-request.md) | Body, Required | Request object for incremental authorization. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`IncrementalAuthResponse`](../../doc/models/incremental-auth-response.md).

## Example Usage

```ts
const wpIdempotencyKey = 'e56acd06-db3f-4891-9dd6-9b419e8d431a';

const wpApiVersion = 1;

const id = 'payV1StGXR8_Z5jdHi6B-myT0';

const body: IncrementalAuthorizationRequest = {
  reference: 'Memory265-13/08/1876',
  amount: BigInt(100),
};

try {
  const { result, ...httpResponse } = await paymentsApi.incrementalAuth(
    wpIdempotencyKey,
    wpApiVersion,
    id,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Cancel Payment

Cancel the specified payment (either fully or partially).

This operation provides a way to perform a full "reset" of the payment and will therefore completely nullify all authorizations and referenced follow-on messages.

Note that a partial cancellation (i.e., one where the amount requested is less than the original authorization) will serve to decrement the final balance (viewable via the *amounts.balances.cancellations.current* and *amounts.balances.total* fields when a payment retrieval is performed), and the downstream issuer/network will be notified of the replacement amount.

```ts
async cancelPayment(
  wpIdempotencyKey: string,
  wpApiVersion: number,
  id: string,
  body: CancelPaymentRequest,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CancelPaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpIdempotencyKey` | `string` | Header, Required | Caller-generated identifier in the form of a UUID/GUID.<br><br>This value is required and must be unique across unique requests. A request that is intended to be a re-submission or otherwise duplication of a previous request (for example, in the event of a network interruption during processing) should include the same key from the previous (original) request, so that an idempotent response can be returned. |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `id` | `string` | Template, Required | Unique identifier for the payment.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `body` | [`CancelPaymentRequest`](../../doc/models/cancel-payment-request.md) | Body, Required | Request object for cancelling a payment. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CancelPaymentResponse`](../../doc/models/cancel-payment-response.md).

## Example Usage

```ts
const wpIdempotencyKey = 'e56acd06-db3f-4891-9dd6-9b419e8d431a';

const wpApiVersion = 1;

const id = 'payV1StGXR8_Z5jdHi6B-myT0';

const body: CancelPaymentRequest = {
  reference: 'Memory265-13/08/1876',
  amount: BigInt(100),
};

try {
  const { result, ...httpResponse } = await paymentsApi.cancelPayment(
    wpIdempotencyKey,
    wpApiVersion,
    id,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Capture Payment

Capture the specified payment (either fully or partially).

```ts
async capturePayment(
  wpIdempotencyKey: string,
  wpApiVersion: number,
  id: string,
  body: CapturePaymentRequest,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CapturePaymentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpIdempotencyKey` | `string` | Header, Required | Caller-generated identifier in the form of a UUID/GUID.<br><br>This value is required and must be unique across unique requests. A request that is intended to be a re-submission or otherwise duplication of a previous request (for example, in the event of a network interruption during processing) should include the same key from the previous (original) request, so that an idempotent response can be returned. |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `id` | `string` | Template, Required | Unique identifier for the payment.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `body` | [`CapturePaymentRequest`](../../doc/models/capture-payment-request.md) | Body, Required | Request object for capturing a payment. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`CapturePaymentResponse`](../../doc/models/capture-payment-response.md).

## Example Usage

```ts
const wpIdempotencyKey = 'e56acd06-db3f-4891-9dd6-9b419e8d431a';

const wpApiVersion = 1;

const id = 'payV1StGXR8_Z5jdHi6B-myT0';

const body: CapturePaymentRequest = {
  reference: 'Memory265-13/08/1876',
};

try {
  const { result, ...httpResponse } = await paymentsApi.capturePayment(
    wpIdempotencyKey,
    wpApiVersion,
    id,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Retrieve Capture

Retrieve detailed information about the specified capture.

```ts
async retrieveCapture(
  wpApiVersion: number,
  id: string,
  captureId: string,
  merchantId: string,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveCaptureResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `id` | `string` | Template, Required | Unique identifier for the payment.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `captureId` | `string` | Template, Required | Unique identifier for the capture sub-resource.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `merchantId` | `string` | Query, Required | Identifier for the merchant associated with this resource. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RetrieveCaptureResponse`](../../doc/models/retrieve-capture-response.md).

## Example Usage

```ts
const wpApiVersion = 1;

const id = 'payV1StGXR8_Z5jdHi6B-myT0';

const captureId = 'payV1StGXR8_Z5jdHi6B-myT0';

const merchantId = 'merchantId6';

try {
  const { result, ...httpResponse } = await paymentsApi.retrieveCapture(
    wpApiVersion,
    id,
    captureId,
    merchantId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Void Capture

Issue a void against a capture (whether from an explicit capture or an auto-captured authorization).

```ts
async voidCapture(
  wpIdempotencyKey: string,
  wpApiVersion: number,
  id: string,
  captureId: string,
  body: VoidRequest,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VoidResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpIdempotencyKey` | `string` | Header, Required | Caller-generated identifier in the form of a UUID/GUID.<br><br>This value is required and must be unique across unique requests. A request that is intended to be a re-submission or otherwise duplication of a previous request (for example, in the event of a network interruption during processing) should include the same key from the previous (original) request, so that an idempotent response can be returned. |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `id` | `string` | Template, Required | Unique identifier for the payment.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `captureId` | `string` | Template, Required | Unique identifier for the capture sub-resource.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `body` | [`VoidRequest`](../../doc/models/void-request.md) | Body, Required | Request object for voiding a capture. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`VoidResponse`](../../doc/models/void-response.md).

## Example Usage

```ts
const wpIdempotencyKey = 'e56acd06-db3f-4891-9dd6-9b419e8d431a';

const wpApiVersion = 1;

const id = 'payV1StGXR8_Z5jdHi6B-myT0';

const captureId = 'payV1StGXR8_Z5jdHi6B-myT0';

const body: VoidRequest = {
  reference: 'Memory265-13/08/1876',
};

try {
  const { result, ...httpResponse } = await paymentsApi.voidCapture(
    wpIdempotencyKey,
    wpApiVersion,
    id,
    captureId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Referenced Refund

Issue a refund to a payment method by referencing a previous authorization.

```ts
async referencedRefund(
  wpIdempotencyKey: string,
  wpApiVersion: number,
  id: string,
  body: RefundRequestReferenced,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ReferencedRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpIdempotencyKey` | `string` | Header, Required | Caller-generated identifier in the form of a UUID/GUID.<br><br>This value is required and must be unique across unique requests. A request that is intended to be a re-submission or otherwise duplication of a previous request (for example, in the event of a network interruption during processing) should include the same key from the previous (original) request, so that an idempotent response can be returned. |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `id` | `string` | Template, Required | Unique identifier for the payment.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `body` | [`RefundRequestReferenced`](../../doc/models/refund-request-referenced.md) | Body, Required | Request object for issuing a referenced refund. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`ReferencedRefundResponse`](../../doc/models/referenced-refund-response.md).

## Example Usage

```ts
const wpIdempotencyKey = 'e56acd06-db3f-4891-9dd6-9b419e8d431a';

const wpApiVersion = 1;

const id = 'payV1StGXR8_Z5jdHi6B-myT0';

const body: RefundRequestReferenced = {
  reference: 'Memory265-13/08/1876',
  amount: BigInt(100),
};

try {
  const { result, ...httpResponse } = await paymentsApi.referencedRefund(
    wpIdempotencyKey,
    wpApiVersion,
    id,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Retrieve Referenced Refund

Retrieve detailed information about the specified refund.

```ts
async retrieveReferencedRefund(
  wpApiVersion: number,
  id: string,
  refundId: string,
  merchantId: string,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrieveRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `id` | `string` | Template, Required | Unique identifier for the payment.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `refundId` | `string` | Template, Required | Identifier for the refund.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `merchantId` | `string` | Query, Required | Identifier for the merchant associated with this resource. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RetrieveRefundResponse`](../../doc/models/retrieve-refund-response.md).

## Example Usage

```ts
const wpApiVersion = 1;

const id = 'payV1StGXR8_Z5jdHi6B-myT0';

const refundId = 'payV1StGXR8_Z5jdHi6B-myT0';

const merchantId = 'merchantId6';

try {
  const { result, ...httpResponse } = await paymentsApi.retrieveReferencedRefund(
    wpApiVersion,
    id,
    refundId,
    merchantId
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Void Referenced Refund

Issue a void against a referenced refund.

```ts
async voidReferencedRefund(
  wpIdempotencyKey: string,
  wpApiVersion: number,
  id: string,
  refundId: string,
  body: VoidRequest,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VoidResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpIdempotencyKey` | `string` | Header, Required | Caller-generated identifier in the form of a UUID/GUID.<br><br>This value is required and must be unique across unique requests. A request that is intended to be a re-submission or otherwise duplication of a previous request (for example, in the event of a network interruption during processing) should include the same key from the previous (original) request, so that an idempotent response can be returned. |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `id` | `string` | Template, Required | Unique identifier for the payment.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `refundId` | `string` | Template, Required | Identifier for the refund.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `body` | [`VoidRequest`](../../doc/models/void-request.md) | Body, Required | Request object for voiding a referenced refund. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`VoidResponse`](../../doc/models/void-response.md).

## Example Usage

```ts
const wpIdempotencyKey = 'e56acd06-db3f-4891-9dd6-9b419e8d431a';

const wpApiVersion = 1;

const id = 'payV1StGXR8_Z5jdHi6B-myT0';

const refundId = 'payV1StGXR8_Z5jdHi6B-myT0';

const body: VoidRequest = {
  reference: 'Memory265-13/08/1876',
};

try {
  const { result, ...httpResponse } = await paymentsApi.voidReferencedRefund(
    wpIdempotencyKey,
    wpApiVersion,
    id,
    refundId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Unreferenced Refund

Issue a refund to payment method without referencing a previous authorization.

```ts
async unreferencedRefund(
  wpIdempotencyKey: string,
  wpApiVersion: number,
  body: RefundRequestUnreferenced,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UnreferencedRefundResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpIdempotencyKey` | `string` | Header, Required | Caller-generated identifier in the form of a UUID/GUID.<br><br>This value is required and must be unique across unique requests. A request that is intended to be a re-submission or otherwise duplication of a previous request (for example, in the event of a network interruption during processing) should include the same key from the previous (original) request, so that an idempotent response can be returned. |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `body` | [`RefundRequestUnreferenced`](../../doc/models/refund-request-unreferenced.md) | Body, Required | Request object for issuing an unreferenced refund. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UnreferencedRefundResponse`](../../doc/models/unreferenced-refund-response.md).

## Example Usage

```ts
const wpIdempotencyKey = 'e56acd06-db3f-4891-9dd6-9b419e8d431a';

const wpApiVersion = 1;

const body: RefundRequestUnreferenced = {
  channel: {
    type: 'ecom',
    paymentMethod: {
      type: 'card',
      instrument: {
        type: 'keyed/clear',
        cardData: {
          cardNumber: 'cardNumber2',
          expiryDate: {
            month: 12,
            year: 20,
          },
          cvc: '123',
        },
      },
    },
  },
  reference: 'Memory265-13/08/1876',
};

try {
  const { result, ...httpResponse } = await paymentsApi.unreferencedRefund(
    wpIdempotencyKey,
    wpApiVersion,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |


# Void Unreferenced Refund

Issue a void against a unreferenced refund.

```ts
async voidUnreferencedRefund(
  wpIdempotencyKey: string,
  wpApiVersion: number,
  refundId: string,
  body: VoidRequest,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<VoidResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpIdempotencyKey` | `string` | Header, Required | Caller-generated identifier in the form of a UUID/GUID.<br><br>This value is required and must be unique across unique requests. A request that is intended to be a re-submission or otherwise duplication of a previous request (for example, in the event of a network interruption during processing) should include the same key from the previous (original) request, so that an idempotent response can be returned. |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `refundId` | `string` | Template, Required | Identifier for the refund.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `body` | [`VoidRequest`](../../doc/models/void-request.md) | Body, Required | Request object for voiding an unreferenced refund. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`VoidResponse`](../../doc/models/void-response.md).

## Example Usage

```ts
const wpIdempotencyKey = 'e56acd06-db3f-4891-9dd6-9b419e8d431a';

const wpApiVersion = 1;

const refundId = 'payV1StGXR8_Z5jdHi6B-myT0';

const body: VoidRequest = {
  reference: 'Memory265-13/08/1876',
};

try {
  const { result, ...httpResponse } = await paymentsApi.voidUnreferencedRefund(
    wpIdempotencyKey,
    wpApiVersion,
    refundId,
    body
  );
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad Request | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 401 | Client is not authorized due to missing or invalid Authorization header. | [`ProblemDetails401Error`](../../doc/models/problem-details-401-error.md) |
| 404 | Resource Not Found | [`ProblemDetails404Error`](../../doc/models/problem-details-404-error.md) |
| 415 | Invalid content-type HTTP header | [`ProblemDetails400Error`](../../doc/models/problem-details-400-error.md) |
| 500 | An error occurred processing the request on our side. | [`ProblemDetails500Error`](../../doc/models/problem-details-500-error.md) |

