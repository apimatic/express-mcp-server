
# Ach Response Data

Response data specific to ACH payment method.

## Structure

`AchResponseData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `token` | [`TokenResponse \| undefined`](../../doc/models/containers/token-response.md) | Optional | Token response. |

## Example (as JSON)

```json
{
  "type": "type2",
  "token": {
    "type": "token/access",
    "href": "href8",
    "cvc": "cvc0",
    "cvcSessionHref": "cvcSessionHref6",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

