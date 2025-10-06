
# Network Response Incremental Authorization Response

Unaltered response data from the downstream acquirer or issuer.

*This model accepts additional fields of type unknown.*

## Structure

`NetworkResponseIncrementalAuthorizationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `approvalCode` | `string \| undefined` | Optional | Issuer approval code. |
| `acquirerResponseCode` | `string \| undefined` | Optional | Response code from downstream acquirer. |
| `issuerResponseCode` | `string \| undefined` | Optional | Response code from card issuer. |
| `schemeReference` | `string \| undefined` | Optional | Scheme reference used for the Incremental Authorization. |
| `adviceCode` | `string \| undefined` | Optional | Mastercard only |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "approvalCode": "approvalCode6",
  "acquirerResponseCode": "acquirerResponseCode8",
  "issuerResponseCode": "issuerResponseCode8",
  "schemeReference": "schemeReference2",
  "adviceCode": "adviceCode6",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

