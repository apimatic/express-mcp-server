
# Amounts Refund Retrieval

Total amounts including currency associated with this refund.

## Structure

`AmountsRefundRetrieval`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balances` | [`ReferencedRefundBalances`](../../doc/models/referenced-refund-balances.md) | Required | Balances data for response payloads specific to referenced refunds; note that these balance values only reflect the specific refund and void refund operations - they will not be decremented by operations such as cancellations. For a complete picture of the payment lifecycle, perform a retrieval on the payment resource itself. |
| `currency` | `string` | Required | Three-digit currency code. See list of supported currencies. |

## Example (as JSON)

```json
{
  "balances": {
    "requested": 100,
    "current": 100,
    "available": 100,
    "voided": false
  },
  "currency": "GBP"
}
```

