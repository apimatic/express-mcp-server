
# Card Payment Method Options Refund

Options for handling the authorization request.

## Structure

`CardPaymentMethodOptionsRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `processAs` | [`ProcessAsEnum \| undefined`](../../doc/models/process-as-enum.md) | Optional | Optionally specify exactly how the card should be processed. Worldpay will assume "creditOrSignatureDebit" if not specified. |

## Example (as JSON)

```json
{
  "processAs": "creditOrSignatureDebit"
}
```

