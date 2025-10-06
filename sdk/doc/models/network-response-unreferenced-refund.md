
# Network Response Unreferenced Refund

Unaltered response data from the downstream acquirer or issuer.

*This model accepts additional fields of type unknown.*

## Structure

`NetworkResponseUnreferencedRefund`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `approvalCode` | `string \| undefined` | Optional | Issuer approval code |
| `acquirerResponseCode` | `string \| undefined` | Optional | Response code from downstream acquirer. |
| `issuerResponseCode` | `string \| undefined` | Optional | Response code from card issuer. |
| `schemeReference` | `string \| undefined` | Optional | Scheme reference used for Credentials on File. |
| `cvcResult` | `string \| undefined` | Optional | issuer response for CVC.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "approvalCode": "approvalCode6",
  "acquirerResponseCode": "acquirerResponseCode8",
  "issuerResponseCode": "issuerResponseCode8",
  "schemeReference": "schemeReference2",
  "cvcResult": "cvcResult0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

