
# Amounts Capture Retrieval

Total amounts including currency associated with this capture.

## Structure

`AmountsCaptureRetrieval`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`CaptureBalances`](../../doc/models/capture-balances.md) | Required | Balances data for response payloads specific to captures; note that these balance values only reflect the specific capture and void capture operations - they will not be decremented by operations such as cancellations. For a complete picture of the payment lifecycle, perform a retrieval on the payment resource itself. |
| `currency` | `string` | Required | Three-digit currency code. See list of supported currencies. |

## Example (as JSON)

```json
{
  "balances": {
    "current": 100,
    "available": 100,
    "voided": false
  },
  "currency": "GBP"
}
```

