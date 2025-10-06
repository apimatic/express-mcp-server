
# Network Response Payment Retrieval

Unaltered response data from the downstream acquirer or issuer.

*This model accepts additional fields of type unknown.*

## Structure

`NetworkResponsePaymentRetrieval`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `approvalCode` | `string \| undefined` | Optional | Issuer approval code |
| `acquirerResponseCode` | `string \| undefined` | Optional | Response code from downstream acquirer. |
| `issuerResponseCode` | `string \| undefined` | Optional | Response code from card issuer. |
| `schemeReference` | `string \| undefined` | Optional | Scheme reference used for Credentials on File. |
| `adviceCode` | `string \| undefined` | Optional | Mastercard only. |
| `avsResult` | `string \| undefined` | Optional | issuer response for AVS Check <br> **Possible Values:** \| Value \| Description \| \| ----- \| ------------\| \| A \| Address Matches, ZIP does not \| \| B \| Address Matches, ZIP not verified \| \| C \| Address an ZIP not verified \| \| D \| Address and postal code match, international AVS only \| \| E \| Edit Error or ineligible \| \| F \| Address and ZIP match - UK only \| \| G \| Address not verified - international \| \| I \| Address not verified \| \| M \| Address and postal code match, international AVS only \| \| N \| Neither address nor ZIP match \| \| P \| Codes match, addresses not verified \| \| R \| System unavailable or time-out \| \| S \| AVS not supported \| \| U \| Address info N/A \| \| W \| Nine digit zip matches, not address \| \| X \| Address and nine digit zip match, domestic AVS only \| \| Y \| Address and five digit zip match, domestic AVS only \| \| Z \| ZIP matches, address does not \|<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `cvcResult` | `string \| undefined` | Optional | issuer response for CVC<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "approvalCode": "approvalCode0",
  "acquirerResponseCode": "acquirerResponseCode2",
  "issuerResponseCode": "issuerResponseCode2",
  "schemeReference": "schemeReference6",
  "adviceCode": "adviceCode2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

