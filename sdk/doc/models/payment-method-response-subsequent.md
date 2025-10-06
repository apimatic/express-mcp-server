
# Payment Method Response Subsequent

Response data specific to the payment method.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentMethodResponseSubsequent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type8",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

