
# Additional Amounts Ebt Ewic

Other (optional) amounts that are included in the Total Authorization Amount, for EBT and eWIC transactions

## Structure

`AdditionalAmountsEbtEwic`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `convenienceFee` | `bigint \| undefined` | Optional | Contains the convenience fee associated with a transaction. This value is for reporting purposes only, as the Transaction Amount field should included this amount in the total.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `salesTax` | `bigint \| undefined` | Optional | Sales tax amount.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |

## Example (as JSON)

```json
{
  "convenienceFee": 116,
  "salesTax": 96
}
```

