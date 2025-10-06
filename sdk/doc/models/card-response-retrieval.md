
# Card Response Retrieval

Summary of card-level information that was used in the original authorization and referenced cancellation request, whether submitted explicitly or
represented by a wallet, token, or encrypted payload

*This model accepts additional fields of type unknown.*

## Structure

`CardResponseRetrieval`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `bin` | `string \| undefined` | Optional | BIN (Bank Identification Number) for the card.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `8` |
| `lastFour` | `string \| undefined` | Optional | Last four digits of the card.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `brand` | `string \| undefined` | Optional | Card logo/brand of the card.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `issuer` | `string \| undefined` | Optional | Issuer/bank of the card (if known).<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `expiration` | [`Expiration \| undefined`](../../doc/models/expiration.md) | Optional | Information about the expiration date. |
| `instrument` | [`RetrievalCardInstruments \| undefined`](../../doc/models/containers/retrieval-card-instruments.md) | Optional | Retrieval Card Instrument Group |
| `batch` | [`BatchResponse \| undefined`](../../doc/models/batch-response.md) | Optional | Summary of the open batch, as of the completion of the current operation. |
| `networkResponse` | [`NetworkResponsePaymentRetrieval \| undefined`](../../doc/models/network-response-payment-retrieval.md) | Optional | Unaltered response data from the downstream acquirer or issuer. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type0",
  "bin": "bin0",
  "lastFour": "lastFour4",
  "brand": "brand4",
  "issuer": "issuer0",
  "expiration": {
    "month": 12,
    "year": 6
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

