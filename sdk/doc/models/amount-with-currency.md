
# Amount With Currency

The Total Amount including currency (and optionally a breakdown) associated with this payment or follow-on request

## Structure

`AmountWithCurrency`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | [`Currency`](../../doc/models/currency.md) | Required | "The three (3) character [ISO-4217 currency code](page:reference/iso-currency-codes) for the amount." |
| `value` | `bigint` | Required | Net total of the payment resource at the time of retrieval, given all operations (credits/debits); this is the *effective balance*<br><br>**Constraints**: `>= 0`, `<= 99999999999` |

## Example (as JSON)

```json
{
  "currency": "USD",
  "value": 100
}
```

