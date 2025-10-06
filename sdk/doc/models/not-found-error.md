
# Not Found Error

Not found error

## Structure

`NotFoundError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `title` | `string` | Required | High-level classification for the error. |
| `resourceId` | `string \| undefined` | Optional | Resource identifier (e.g., payment ID) on which the caller attempted to interact but was deemed invalid. |
| `message` | `string \| undefined` | Optional | Human-readable description of the non-found error. |

## Example (as JSON)

```json
{
  "title": "title8",
  "resourceId": "resourceId2",
  "message": "message2"
}
```

