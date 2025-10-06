
# Plain Card Data Clear

Unencrypted Information about the card being used.

*This model accepts additional fields of type unknown.*

## Structure

`PlainCardDataClear`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `string` | Required | Primary Account Number (PAN) on the card.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `19` |
| `expiryDate` | [`CardExpiration`](../../doc/models/card-expiration.md) | Required | Information about the expiration date for the card. |
| `cvc` | `string \| undefined` | Optional | Card verification code (CVC). Also known as Card Verification Value (CVV)<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
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
```

