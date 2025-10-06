
# Pos Keyed Clear

Use either CardData or EncryptedCardData (when using P2PE)

## Structure

`PosKeyedClear`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `cardData` | [`PlainCardDataClear`](../../doc/models/plain-card-data-clear.md) | Required | Unencrypted Information about the card being used. |
| `pinData` | [`PinData \| undefined`](../../doc/models/pin-data.md) | Optional | Security code usually associated with a debit card. |
| `fallbackReasonCode` | [`KeyedFallbackReasonCode \| undefined`](../../doc/models/keyed-fallback-reason-code.md) | Optional | Provides more information about why a lower capability entry mode was used. Do not supply if no EMV fallback occurred. |

## Example (as JSON)

```json
{
  "type": "type0",
  "cardData": {
    "cardNumber": "cardNumber2",
    "expiryDate": {
      "month": 12,
      "year": 20
    },
    "cvc": "123",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "pinData": {
    "pinBlock": "pinBlock6",
    "keySerialNumber": "keySerialNumber0"
  },
  "fallbackReasonCode": "manualKeyedMagstripeFailure"
}
```

