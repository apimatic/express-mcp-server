
# Keyed Clear Instrument

Unencrypted Information about the card being used.

## Structure

`KeyedClearInstrument`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `cardData` | [`PlainCardDataClear`](../../doc/models/plain-card-data-clear.md) | Required | Unencrypted Information about the card being used. |

## Example (as JSON)

```json
{
  "type": "type4",
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
  }
}
```

