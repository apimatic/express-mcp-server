
# Additional Amounts Card Not Present

Other (optional) amounts that are included in the Total Authorization Amount, for card not present transactions

## Structure

`AdditionalAmountsCardNotPresent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `surcharge` | `bigint \| undefined` | Optional | Indicates that the consumer is charged a transaction fee for enacting the transaction by the terminal owner. For non-POS credit card transactions, this fee is not included in the Transaction Amount field. The consumer performing the transaction is charged for the Transaction Amount plus Surcharge Fee Amount. For POS credit card transactions, include this fee in the Transaction Amount field. The consumer performing the transaction is charged only for the value in the Transaction Amount field.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `convenienceFee` | `bigint \| undefined` | Optional | Contains the convenience fee associated with a transaction. This value is for reporting purposes only, as the Transaction Amount field should included this amount in the total.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `salesTax` | `bigint \| undefined` | Optional | Sales tax amount.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |

## Example (as JSON)

```json
{
  "surcharge": 68,
  "convenienceFee": 142,
  "salesTax": 70
}
```

