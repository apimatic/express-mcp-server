
# Enhanced Data Fleet

Data associated with Fleet Card Transactions

## Structure

`EnhancedDataFleet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | - |
| `transactionTimeStampUtc` | `string \| undefined` | Optional | Timestamp for the transaction in UTC. |
| `oilCompanyName` | `string \| undefined` | Optional | Oil Company Name.<br><br>**Constraints**: *Maximum Length*: `4` |
| `serviceType` | [`FleetServiceType \| undefined`](../../doc/models/fleet-service-type.md) | Optional | The type of service being used with a Fleet Card.<br><br><br>**Possible Values:**  <br>\| Value \| Description \|  <br>\| ----- \| ------------\|  <br>\| S \| Self Service. \|  <br>\| F \| Full Service. \|  <br>\| O \| Other. \|  <br>\| N \| Mini Service. \|  <br>\| X \| Max Service. \| |
| `customer` | [`FleetCustomer \| undefined`](../../doc/models/fleet-customer.md) | Optional | This object contains customer data for the Fleet transaction. |
| `amounts` | [`FleetAmounts \| undefined`](../../doc/models/fleet-amounts.md) | Optional | This object contains amount information for the Fleet transaction. |
| `productsData` | [`FleetProduct[] \| undefined`](../../doc/models/fleet-product.md) | Optional | **Constraints**: *Minimum Items*: `0`, *Maximum Items*: `8` |
| `purchaseOrderNo` | `string \| undefined` | Optional | Purchase Order No.<br><br>**Constraints**: *Maximum Length*: `15` |
| `purchaseOrderRefNo` | `string \| undefined` | Optional | Purchase Order ReferenceNo.<br><br>**Constraints**: *Maximum Length*: `15` |
| `authorizatonSource` | `string \| undefined` | Optional | Authorization Source.<br><br>**Constraints**: *Maximum Length*: `1` |
| `invoiceNumber` | `string \| undefined` | Optional | Invoice Number.<br><br>**Constraints**: *Maximum Length*: `10` |
| `restrictionCode` | `string \| undefined` | Optional | Restriction Code.<br><br>**Constraints**: *Maximum Length*: `2` |
| `visaFleetRestrictionIndicator` | [`FleetRestrictionIndicator \| undefined`](../../doc/models/fleet-restriction-indicator.md) | Optional | Flag that is used to allow Visa 2.0 Fleet merchants to indicate what controls they can support at their POS.<br><br><br>**Possible Values:**  <br>\| Value \| Description \|  <br>\| ----- \| ------------\|  <br>\| 1 \| Chip-Based Restrictions. \|  <br>\| 2 \| Host-Based Restrictions. \|  <br>\| 3 \| Both Chip-and Host Based. \| |

## Example (as JSON)

```json
{
  "type": "type2",
  "transactionTimeStampUTC": "2016-03-13T12:52:32.123Z",
  "oilCompanyName": "oilCompanyName6",
  "serviceType": "X",
  "customer": {
    "vehicleNumber": "vehicleNumber0",
    "driverNumber": "driverNumber8",
    "driverIdNumber": "driverIdNumber0",
    "odometerReading": 180
  },
  "amounts": {
    "merchantDiscountAmount": 206,
    "participantDiscountAmount": 168,
    "nonFuelSalesTaxAmount": 236,
    "grossFuelAmount": 254,
    "vatTaxRate": 8999
  }
}
```

