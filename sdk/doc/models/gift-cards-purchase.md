
# Gift Cards Purchase

If the order is being used to purchase a gift card.

*This model accepts additional fields of type unknown.*

## Structure

`GiftCardsPurchase`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalValue` | [`Value \| undefined`](../../doc/models/value.md) | Optional | the value and currency |
| `quantity` | `number \| undefined` | Optional | Number of gift cards being purchased. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "quantity": 4,
  "totalValue": {
    "currency": "currency6",
    "amount": 46,
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

