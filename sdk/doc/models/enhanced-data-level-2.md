
# Enhanced Data Level 2

Data associated with Level 2 interchange.  Other payment fields should always be provided for Level 2. | Sales Tax Amount, Shipping Address Zip Code, and Billing Address First/Last Name.

## Structure

`EnhancedDataLevel2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | **Value**: `'level2'` |
| `commercialCardCustomerCode` | `string` | Required | User-defined commercial card customer code, such as a PO Number.<br><br>**Constraints**: *Maximum Length*: `25` |

## Example (as JSON)

```json
{
  "type": "level2",
  "commercialCardCustomerCode": "commercialCardCustomerCode8"
}
```

