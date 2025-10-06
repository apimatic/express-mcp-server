
# Fleet Product

This object contains Product data for the Fleet transaction.

## Structure

`FleetProduct`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productType` | [`ProductType \| undefined`](../../doc/models/product-type.md) | Optional | The type of product purchased<br><br><br>**Possible Values:**  <br>\| Value \| Description \|  <br>\| ----- \| ------------\|  <br>\| F \| Fuel \|  <br>\| N \| Non-Fuel \| |
| `productCode` | `string \| undefined` | Optional | NACS Product Code<br><br>**Constraints**: *Maximum Length*: `3` |
| `quantity` | `number \| undefined` | Optional | Quantity Purchased.<br><br>**Constraints**: `>= 0`, `<= 999999999` |
| `unitPrice` | `bigint \| undefined` | Optional | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `unitOfMeasure` | [`UnitOfMeasure \| undefined`](../../doc/models/unit-of-measure.md) | Optional | Unit of Measure<br><br><br>**Possible Values:**  <br>\| Value \| Description \|  <br>\| ----- \| ------------\|  <br>\| C \| Case or Carton \|  <br>\| G \| Gallons \|  <br>\| K \| Kilograms \|  <br>\| L \| Liters \|  <br>\| O \| Other \|  <br>\| P \| Pounds \|  <br>\| Q \| Quarts \|  <br>\| U \| Units \|  <br>\| Z \| Ounces \| |
| `productAmount` | `bigint \| undefined` | Optional | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |

## Example (as JSON)

```json
{
  "unitPrice": 100,
  "productAmount": 100,
  "productType": "F",
  "productCode": "productCode6",
  "quantity": 228,
  "unitOfMeasure": "C"
}
```

