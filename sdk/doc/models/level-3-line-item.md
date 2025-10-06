
# Level 3 Line Item

This object contains line item detail for Level 3 interchange.

## Structure

`Level3LineItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `commodityCode` | `string` | Required | International description code of the individual good or service being supplied. \| Recommend using national or international list of standardized codes.<br><br>**Constraints**: *Maximum Length*: `12` |
| `description` | `string` | Required | Item description.<br><br>**Constraints**: *Maximum Length*: `35` |
| `productCode` | `string` | Required | Merchant-defined description code of the item.<br><br>**Constraints**: *Maximum Length*: `12` |
| `quantity` | `string` | Required | Quantity of the item (up to four decimal places). NNNNNNN.DDDD<br><br>**Constraints**: *Maximum Length*: `12` |
| `unitOfMeasure` | `string` | Required | Code for units of measurement used in international trade.<br><br>**Constraints**: *Maximum Length*: `12` |
| `unitCost` | `bigint` | Required | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `totalAmount` | `bigint` | Required | Amount value in minor currency units with no decimal point. For example, $1.00 would be written as 100.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |

## Example (as JSON)

```json
{
  "commodityCode": "commodityCode6",
  "description": "description0",
  "productCode": "productCode2",
  "quantity": "quantity6",
  "unitOfMeasure": "unitOfMeasure4",
  "unitCost": 100,
  "totalAmount": 100
}
```

