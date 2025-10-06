
# Capture Balances

Balances data for response payloads specific to captures; note that these balance values only reflect the specific capture and void capture operations - they will not be decremented by operations such as cancellations. For a complete picture of the payment lifecycle, perform a retrieval on the payment resource itself.

## Structure

`CaptureBalances`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `current` | `bigint` | Required | Total amount requested to be captured on this payment in minor currency units with no decimal point. For example, $1.00 USD would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `available` | `bigint` | Required | Total amount currently available for capture on this payment. For example, $1.00 USD would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `voided` | `boolean \| undefined` | Optional | Flag that indicates whether this capture sub-resource has been voided. |

## Example (as JSON)

```json
{
  "current": 100,
  "available": 100,
  "voided": false
}
```

