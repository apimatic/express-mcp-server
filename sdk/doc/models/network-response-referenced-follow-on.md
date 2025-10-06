
# Network Response Referenced Follow On

Unaltered response data from the downstream acquirer or issuer.

*This model accepts additional fields of type unknown.*

## Structure

`NetworkResponseReferencedFollowOn`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `approvalCode` | `string \| undefined` | Optional | Issuer approval code. |
| `acquirerResponseCode` | `string \| undefined` | Optional | Response code from downstream acquirer. |
| `issuerResponseCode` | `string \| undefined` | Optional | Response code from card issuer. |
| `schemeReference` | `string \| undefined` | Optional | Scheme reference used for Credentials on File. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "approvalCode": "approvalCode0",
  "acquirerResponseCode": "acquirerResponseCode2",
  "issuerResponseCode": "issuerResponseCode2",
  "schemeReference": "schemeReference6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

