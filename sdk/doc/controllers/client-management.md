# Client Management

```ts
const clientManagementApi = new ClientManagementApi(client);
```

## Class Name

`ClientManagementApi`


# Get Pcrt

Returns a SoftPOS proximity reader token with relevant entitlements.

```ts
async getPcrt(
  wpApiVersion: number,
  body: GetClientPcrtRequest,
  wpAccountId?: number,
  requestOptions?: RequestOptions
): Promise<ApiResponse<GetClientPcrtResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `wpApiVersion` | `number` | Header, Required | Major version of the Payments API. This value is used for routing purposes.<br><br>**Constraints**: `>= 1` |
| `body` | [`GetClientPcrtRequest`](../../doc/models/get-client-pcrt-request.md) | Body, Required | Request object for retrieving a payment card reader token. |
| `wpAccountId` | `number \| undefined` | Header, Optional | Identifier for the partner, PayFac or merchant chain account. This numeric value is for Express integrators only. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`GetClientPcrtResponse`](../../doc/models/get-client-pcrt-response.md).

## Example Usage

```ts
const wpApiVersion = 1;

const body: GetClientPcrtRequest = {
  merchant: {
  },
  operatingSystem: OperatingSystem.Ios,
};

try {
  const { result, ...httpResponse } = await clientManagementApi.getPcrt(
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

