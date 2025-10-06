
# Value

the value and currency

*This model accepts additional fields of type unknown.*

## Structure

`Value`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | Three-digit currency code. See list of supported currencies. |
| `amount` | `number` | Required | Amount, if provided must include the currency. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "currency": "GBP",
  "amount": 10,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

