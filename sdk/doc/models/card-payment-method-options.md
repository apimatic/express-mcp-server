
# Card Payment Method Options

Options for handling the authorization request

## Structure

`CardPaymentMethodOptions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressVerification` | `boolean \| undefined` | Optional | If true, you want to perform an address verification. |
| `partialApproval` | `boolean \| undefined` | Optional | If true, you will accept approvals for less than the total requested amount. |
| `processAs` | [`ProcessAsEnum \| undefined`](../../doc/models/process-as-enum.md) | Optional | Optionally specify exactly how the card should be processed. Worldpay will assume "creditOrSignatureDebit" if not specified. |
| `autoCapture` | `boolean \| undefined` | Optional | If true, you want to Authorize and Capture in a single step. |
| `preAuthorization` | `boolean \| undefined` | Optional | "Pre-authorization indicates the merchant is submitting an authorization request with an estimated amount. Payment Option - autoCapture should be set to FALSE and the merchant will be submitting further incremental authorizations to increase the authorized amount. The payment will be manually captured by the merchant once the final amount is known.   Options of autoCapture and preAuthorization are mutually exclusive, will result in a error response in the event both are set to True. " |

## Example (as JSON)

```json
{
  "addressVerification": false,
  "partialApproval": false,
  "processAs": "creditOrSignatureDebit",
  "autoCapture": false,
  "preAuthorization": false
}
```

