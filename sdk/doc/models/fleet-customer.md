
# Fleet Customer

This object contains customer data for the Fleet transaction.

## Structure

`FleetCustomer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `vehicleNumber` | `string \| undefined` | Optional | Fleet Vehicle Number.<br><br>**Constraints**: *Maximum Length*: `8` |
| `driverNumber` | `string \| undefined` | Optional | Fleet Driver Number.<br><br>**Constraints**: *Maximum Length*: `12` |
| `driverIdNumber` | `string \| undefined` | Optional | Fleet Driver Id Number.<br><br>**Constraints**: *Maximum Length*: `6` |
| `odometerReading` | `bigint \| undefined` | Optional | Vehicle Odometer reading.<br><br>**Constraints**: `>= 0`, `<= 9999999999` |

## Example (as JSON)

```json
{
  "odometerReading": 100,
  "vehicleNumber": "vehicleNumber4",
  "driverNumber": "driverNumber4",
  "driverIdNumber": "driverIdNumber4"
}
```

