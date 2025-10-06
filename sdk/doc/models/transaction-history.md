
# Transaction History

Object containing details of the last transaction.

*This model accepts additional fields of type unknown.*

## Structure

`TransactionHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `attemptsLastDay` | `number \| undefined` | Optional | Number of transactions (successful or abandoned) for this cardholder account within the last 24 hours. |
| `attemptsLastYear` | `number \| undefined` | Optional | Number of transactions (successful or abandoned) for this cardholder account within the last year. |
| `completedLastSixMonths` | `number \| undefined` | Optional | Number of purchases with this customer account during the previous six months. |
| `addCardsLastDay` | `number \| undefined` | Optional | Number of attempts to add a card in the last 24hrs. |
| `shippingAddressFirstUsedAt` | `string \| undefined` | Optional | When the shipping address used for the transaction was first used. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "attemptsLastDay": 2,
  "attemptsLastYear": 6,
  "completedLastSixMonths": 7,
  "addCardsLastDay": 5,
  "shippingAddressFirstUsedAt": "2009-02-22",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

