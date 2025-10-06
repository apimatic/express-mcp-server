
# Plain Gift Card Data Instrument Clear

Unencrypted Information about the card being used.

## Structure

`PlainGiftCardDataInstrumentClear`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `cardData` | [`PlainGiftCardDataClear`](../../doc/models/plain-gift-card-data-clear.md) | Required | Unencrypted Information about the card being used. |

## Example (as JSON)

```json
{
  "type": "type8",
  "cardData": {
    "cardNumber": "cardNumber2",
    "expiryDate": {
      "month": 12,
      "year": 20
    },
    "securityCode": "securityCode2",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

