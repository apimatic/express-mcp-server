
# Fleet Amounts

This object contains amount information for the Fleet transaction.

## Structure

`FleetAmounts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantDiscountAmount` | `bigint \| undefined` | Optional | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `participantDiscountAmount` | `bigint \| undefined` | Optional | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `nonFuelSalesTaxAmount` | `bigint \| undefined` | Optional | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `grossFuelAmount` | `bigint \| undefined` | Optional | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `vatTaxRate` | `number \| undefined` | Optional | VISA VAT Tax Rate - VAT or tax rate (in percentage) for fuel purchased. For example  Two decimal places are implied. 5% would be written as 500<br><br>**Constraints**: `<= 9999` |
| `vatRegistrationNumber` | `string \| undefined` | Optional | Customer's VAT Registration Number.<br><br>**Constraints**: *Maximum Length*: `13` |
| `grossNonFuelAmount` | `bigint \| undefined` | Optional | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `netNonFuelAmount` | `bigint \| undefined` | Optional | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |

## Example (as JSON)

```json
{
  "merchantDiscountAmount": 100,
  "participantDiscountAmount": 100,
  "nonFuelSalesTaxAmount": 100,
  "grossFuelAmount": 100,
  "vatTaxRate": 500,
  "grossNonFuelAmount": 100,
  "netNonFuelAmount": 100
}
```

