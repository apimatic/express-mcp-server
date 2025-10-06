
# Amounts Capture

Total Amount (and optionally a breakdown) to capture for this transaction.

## Structure

`AmountsCapture`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalAmount` | `bigint` | Required | Total Amount for this transaction in minor currency units **with no decimal point**. For example, $1.00 USD would be written as 100. For card verification requests, set amount to 0 (zero).<br><br>**Constraints**: `>= 1`, `<= 99999999999` |
| `otherAmounts` | [`AdditionalAmountsCreditCardPresent \| undefined`](../../doc/models/additional-amounts-credit-card-present.md) | Optional | Other (optional) amounts that are included in the Total Authorization Amount, for credit card present |

## Example (as JSON)

```json
{
  "totalAmount": 100,
  "otherAmounts": {
    "cashBack": 92,
    "surcharge": 84,
    "convenienceFee": 158,
    "tip": 136,
    "salesTax": 54
  }
}
```

