
# Enhanced Data Level 3

Data associated with Level 3 interchange.

## Structure

`EnhancedDataLevel3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | **Value**: `'level3'` |
| `commercialCardCustomerCode` | `string` | Required | User-defined commercial card customer code, such as a PO Number.<br><br>**Constraints**: *Maximum Length*: `25` |
| `summaryCommodityCode` | `string` | Required | International description code of overall goods or services.<br><br>**Constraints**: *Maximum Length*: `4` |
| `shipFromPostalCode` | `string` | Required | Postal/Zip Code of the address from where the purchased goods are being shipped.<br><br>**Constraints**: *Maximum Length*: `10` |
| `destinationCountryCode` | [`CountryCode`](../../doc/models/country-code.md) | Required | Supported ISO 3166-1 alpha-2 country code. |
| `orderDate` | `string` | Required | Purchase order date, conforming to the ISO-8601 specification.<br><br>**Constraints**: *Maximum Length*: `8` |
| `lineItems` | [`Level3LineItem[] \| undefined`](../../doc/models/level-3-line-item.md) | Optional | **Constraints**: *Minimum Items*: `0`, *Maximum Items*: `50` |

## Example (as JSON)

```json
{
  "type": "level3",
  "commercialCardCustomerCode": "commercialCardCustomerCode6",
  "summaryCommodityCode": "summaryCommodityCode0",
  "shipFromPostalCode": "shipFromPostalCode2",
  "destinationCountryCode": "GB",
  "orderDate": "orderDate8",
  "lineItems": [
    {
      "commodityCode": "commodityCode8",
      "description": "description2",
      "productCode": "productCode4",
      "quantity": "quantity8",
      "unitOfMeasure": "unitOfMeasure6",
      "unitCost": 214,
      "totalAmount": 180
    },
    {
      "commodityCode": "commodityCode8",
      "description": "description2",
      "productCode": "productCode4",
      "quantity": "quantity8",
      "unitOfMeasure": "unitOfMeasure6",
      "unitCost": 214,
      "totalAmount": 180
    }
  ]
}
```

