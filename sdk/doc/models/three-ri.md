
# Three Ri

Merchant initiated 3DS authentication on subsequent subscription payments. <br>
__3DS must be enabled.__

*This model accepts additional fields of type unknown.*

## Structure

`ThreeRi`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `endDate` | `string` | Required | End date of the subscription. |
| `frequency` | `number` | Required | End date of the subscription. |
| `transactionId` | `string` | Required | Identifier for the directory server transaction from the prior authentication; typically, this value is in UUID format.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `acsTransactionId` | `string` | Required | Identifier for the ACS transaction from the prior authentication; typically, this value is in UUID format.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36` |
| `authenticationTimeStamp` | `string` | Required | Identifier for the ACS transaction from the prior authentication. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "endDate": "2023-08-29",
  "frequency": 30,
  "transactionId": "5a596057-7451-44ca-9735-ba6b06fb988d",
  "acsTransactionId": "5a596057-7451-44ca-9735-ba6b06fb988d",
  "authenticationTimeStamp": "07/21/2017 17:32:28",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

