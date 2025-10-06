
# Plain Gift Card Data Clear

Unencrypted Information about the card being used.

*This model accepts additional fields of type unknown.*

## Structure

`PlainGiftCardDataClear`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `string` | Required | Primary Account Number (PAN) on the card.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `expiryDate` | [`CardExpiration`](../../doc/models/card-expiration.md) | Required | Information about the expiration date for the card. |
| `securityCode` | `string \| undefined` | Optional | CVV value or a Gift Card Security Code.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `12` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "cardNumber": "cardNumber0",
  "expiryDate": {
    "month": 12,
    "year": 20
  },
  "securityCode": "securityCode0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

