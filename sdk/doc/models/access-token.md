
# Access Token

Access token instrument

*This model accepts additional fields of type unknown.*

## Structure

`AccessToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `href` | `string` | Required | href to the token resource |
| `cvc` | `string \| undefined` | Optional | Card verification code (CVC). Also known as Card Verification Value (CVV)<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `4` |
| `cvcSessionHref` | `string \| undefined` | Optional | Href to the Checkout session providing the Card Verification Code (CVC)<br><br>__Note:__ Provide a value in `cvcSessionHref` or `cvc`, never both |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type4",
  "href": "href8",
  "cvc": "123",
  "cvcSessionHref": "https://try.access.worldpay.com/sessions/eyJrIjoxLCJkIjoiVVJuSU0rUTYvMUx4OU9N...",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

