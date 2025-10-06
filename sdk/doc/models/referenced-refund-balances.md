
# Referenced Refund Balances

Balances data for response payloads specific to referenced refunds; note that these balance values only reflect the specific refund and void refund operations - they will not be decremented by operations such as cancellations. For a complete picture of the payment lifecycle, perform a retrieval on the payment resource itself.

## Structure

`ReferencedRefundBalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requested` | `bigint \| undefined` | Optional | Total amount requested for refund for this payment in minor currency units with no decimal point. For example, $1.00 USD would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `current` | `bigint \| undefined` | Optional | Total amount refunded for this payment (minus any voids) in minor currency units **with no decimal point**. For example, $1.00 USD would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `available` | `bigint \| undefined` | Optional | Total amount currently available for refund on this payment. For example, $1.00 USD would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `voided` | `boolean \| undefined` | Optional | Voided indictor - true if this capture sub-resource has been voided |

## Example (as JSON)

```json
{
  "requested": 100,
  "current": 100,
  "available": 100,
  "voided": false
}
```

