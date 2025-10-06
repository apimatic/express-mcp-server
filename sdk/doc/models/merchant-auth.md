
# Merchant Auth

Identifying information associated with the Merchant submitting the request.

## Structure

`MerchantAuth`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique merchant account identifier assigned by Worldpay.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^[0-9]{0,20}$` |
| `entity` | `string \| undefined` | Optional | The Merchants reference to their business discriminator. Used to route the request<br>to how the Merchant has been boarded in Worldpay.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{0,20}$` |
| `terminalId` | `string \| undefined` | Optional | Needs a description, always required for Express, determines the batch.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20`, *Pattern*: `^[a-z,0-9]{0,20}$` |
| `mcc` | `string \| undefined` | Optional | You can apply a merchant category code (mcc) to an individual request.<br>You can only provide an mcc if we have enabled the dynamic mcc feature during boarding.<br>If enabled but not provided, merchant.mcc defaults to a configured value.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4`, *Pattern*: `^[0-9]{4}$` |

## Example (as JSON)

```json
{
  "id": "id2",
  "entity": "entity0",
  "terminalId": "terminalId0",
  "mcc": "mcc2"
}
```

