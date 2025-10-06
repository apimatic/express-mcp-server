# Scheduledpaymentsmanagement

```ts
const scheduledpaymentsmanagementApi = new ScheduledpaymentsmanagementApi(client);
```

## Class Name

`ScheduledpaymentsmanagementApi`

## Methods

* [Query Schedule](../../doc/controllers/scheduledpaymentsmanagement.md#query-schedule)
* [Update Schedule](../../doc/controllers/scheduledpaymentsmanagement.md#update-schedule)
* [Delete Schedule](../../doc/controllers/scheduledpaymentsmanagement.md#delete-schedule)


# Query Schedule

Query for information on a specific payment schedule.

```ts
async querySchedule(
  wpApiVersion: number,
  scheduleId: string,
  merchantId: string,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<QueryPaymentScheduleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `scheduleId` | `string` | Template, Required | Identifier for the schedule.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `merchantId` | `string` | Query, Required | Identifier for the merchant associated with this resource. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`QueryPaymentScheduleResponse`](../../doc/models/query-payment-schedule-response.md).

## Example Usage

```ts
const wpApiVersion = 1;

const scheduleId = 'payV1StGXR8_Z5jdHi6B-myT0';

const merchantId = 'merchantId6';

try {
  const { result, ...httpResponse } = await scheduledPaymentsManagementApi.querySchedule(
    wpApiVersion,
    scheduleId,
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


# Update Schedule

Update an existing recurring payment schedule with new values.

```ts
async updateSchedule(
  wpApiVersion: number,
  scheduleId: string,
  body: UpdatePaymentScheduleRequest,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UpdatePaymentScheduleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `scheduleId` | `string` | Template, Required | Identifier for the schedule.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `body` | [`UpdatePaymentScheduleRequest`](../../doc/models/update-payment-schedule-request.md) | Body, Required | Request object for updating a recurring payment schedule. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UpdatePaymentScheduleResponse`](../../doc/models/update-payment-schedule-response.md).

## Example Usage

```ts
const wpApiVersion = 1;

const scheduleId = 'payV1StGXR8_Z5jdHi6B-myT0';

const body: UpdatePaymentScheduleRequest = {
  merchant: {
  },
  schedule: {
  },
};

try {
  const { result, ...httpResponse } = await scheduledPaymentsManagementApi.updateSchedule(
    wpApiVersion,
    scheduleId,
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


# Delete Schedule

Delete an existing recurring payment schedule with new values.

```ts
async deleteSchedule(
  wpApiVersion: number,
  scheduleId: string,
  merchantId: string,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `scheduleId` | `string` | Template, Required | Identifier for the schedule.<br><br>**Constraints**: *Minimum Length*: `25`, *Maximum Length*: `25`, *Pattern*: `^[A-Za-z0-9_-]{25}$` |
| `merchantId` | `string` | Query, Required | Identifier for the merchant associated with this resource. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance.

## Example Usage

```ts
const wpApiVersion = 1;

const scheduleId = 'payV1StGXR8_Z5jdHi6B-myT0';

const merchantId = 'merchantId6';

try {
  const { result, ...httpResponse } = await scheduledPaymentsManagementApi.deleteSchedule(
    wpApiVersion,
    scheduleId,
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

