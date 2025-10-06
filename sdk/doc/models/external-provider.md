
# External Provider

3DS authentication using separate provider (External MPI).

*This model accepts additional fields of type unknown.*

## Structure

`ExternalProvider`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required, Constant | **Value**: `'externalProvider'` |
| `version` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `authenticationValue` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `eci` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `transactionId` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "externalProvider",
  "version": "2.2.0",
  "authenticationValue": "MAAAAAAAAAAAAAAAAAAAAAAAAAA=",
  "eci": "05",
  "transactionId": "c5b808e7-1de1-4069-a17b-f70d3b3b1645",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

