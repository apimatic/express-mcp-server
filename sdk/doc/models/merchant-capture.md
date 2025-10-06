
# Merchant Capture

Identifying information associated with the Merchant submitting the request.

## Structure

`MerchantCapture`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique merchant account identifier assigned by Worldpay.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^[0-9]{0,20}$` |
| `terminalId` | `string \| undefined` | Optional | Identifier of the terminal; this value is always required for Express and determines the batch.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^[a-z,0-9]{0,20}$` |

## Example (as JSON)

```json
{
  "id": "id6",
  "terminalId": "terminalId4"
}
```

