
# Get Client Pcrt Response

Response payload with payment card reader token, used for SoftPOS payments, along with all relevant entitlements.

*This model accepts additional fields of type unknown.*

## Structure

`GetClientPcrtResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dateTime` | `string` | Required | Date and time that the transaction was received and processed. This value conforms to the ISO-8601 specification.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `token` | `string` | Required | Base64-encoded token for the payment card reader. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "dateTime": "dateTime2",
  "token": "token8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

