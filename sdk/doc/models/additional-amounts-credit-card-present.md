
# Additional Amounts Credit Card Present

Other (optional) amounts that are included in the Total Authorization Amount, for credit card present

## Structure

`AdditionalAmountsCreditCardPresent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cashBack` | `bigint \| undefined` | Optional | On requests, this value represents the amount of cash back requested by the cardholder.  On replies, this value may be provided to represent the amount of cash back authorized by the issuer.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `surcharge` | `bigint \| undefined` | Optional | Indicates that the consumer is charged a transaction fee for enacting the transaction by the terminal owner. For non-POS credit card transactions, this fee is not included in the Transaction Amount field. The consumer performing the transaction is charged for the Transaction Amount plus Surcharge Fee Amount. For POS credit card transactions, include this fee in the Transaction Amount field. The consumer performing the transaction is charged only for the value in the Transaction Amount field.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `convenienceFee` | `bigint \| undefined` | Optional | Contains the convenience fee associated with a transaction. This value is for reporting purposes only, as the Transaction Amount field should included this amount in the total.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `tip` | `bigint \| undefined` | Optional | Contains the tip amount associated with a transaction. This value is for reporting purposes only, as the Transaction Amount field should include this amount in the total.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `salesTax` | `bigint \| undefined` | Optional | Sales tax amount.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |

## Example (as JSON)

```json
{
  "cashBack": 234,
  "surcharge": 226,
  "convenienceFee": 44,
  "tip": 22,
  "salesTax": 168
}
```

