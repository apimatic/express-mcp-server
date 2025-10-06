
# Merchant Subsequent Request

Subsequent request merchant object.

## Structure

`MerchantSubsequentRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique merchant account identifier assigned by Worldpay.<br><br>**Constraints**: *Maximum Length*: `20`, *Pattern*: `^[0-9]{0,20}$` |
| `terminalId` | `string \| undefined` | Optional | **Constraints**: *Maximum Length*: `20`, *Pattern*: `^[a-z,0-9]{0,20}$` |

## Example (as JSON)

```json
{
  "id": "id4",
  "terminalId": "terminalId2"
}
```

