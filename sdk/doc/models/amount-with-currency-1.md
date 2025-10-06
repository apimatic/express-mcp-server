
# Amount With Currency 1

the value and currency

*This model accepts additional fields of type unknown.*

## Structure

`AmountWithCurrency1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string` | Required | Three-digit currency code. See list of supported currencies. |
| `value` | `bigint` | Required | Net total of the payment resource at the time of retrieval, given all operations (credits/debits); this is the *effective balance*.<br><br>**Constraints**: `>= 0`, `<= 99999999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "currency": "GBP",
  "value": 100,
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

