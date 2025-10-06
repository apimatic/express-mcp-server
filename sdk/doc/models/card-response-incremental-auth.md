
# Card Response Incremental Auth

Summary of card-level information that was used in the incremental authorization.

*This model accepts additional fields of type unknown.*

## Structure

`CardResponseIncrementalAuth`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type \| undefined`](../../doc/models/type.md) | Optional | Type of payment method. |
| `bin` | `string \| undefined` | Optional | BIN (Bank Identification Number) for the card.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `8` |
| `lastFour` | `string \| undefined` | Optional | Last four digits of the card.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `brand` | `string \| undefined` | Optional | Card logo/brand of the card.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `issuer` | `string \| undefined` | Optional | Issuer/bank of the card (if known).<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `paymentAccountReference` | `string \| undefined` | Optional | Issuer payment account reference. |
| `expiration` | [`Expiration \| undefined`](../../doc/models/expiration.md) | Optional | Information about the expiration date. |
| `networkResponse` | [`NetworkResponseIncrementalAuthorizationResponse \| undefined`](../../doc/models/network-response-incremental-authorization-response.md) | Optional | Unaltered response data from the downstream acquirer or issuer. |
| `fraudResult` | [`FraudResult \| undefined`](../../doc/models/fraud-result.md) | Optional | Results of an optional Fraud Check. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "card",
  "bin": "bin2",
  "lastFour": "lastFour8",
  "brand": "brand6",
  "issuer": "issuer2",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

