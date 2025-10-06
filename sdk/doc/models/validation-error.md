
# Validation Error

Validation error

## Structure

`ValidationError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | High-level classification for the error. |
| `jsonPointer` | `string \| undefined` | Optional | JSON pointer to the field that triggered the validation error. |
| `message` | `string \| undefined` | Optional | Human-readable description of the validation error. |

## Example (as JSON)

```json
{
  "title": "title4",
  "jsonPointer": "jsonPointer0",
  "message": "message8"
}
```

