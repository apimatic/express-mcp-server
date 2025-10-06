
# Worldpay

Access token

*This model accepts additional fields of type unknown.*

## Structure

`Worldpay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `namespace` | `string \| undefined` | Optional | token namespace |
| `description` | `string \| undefined` | Optional | description of token |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type0",
  "namespace": "namespace2",
  "description": "description0",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

