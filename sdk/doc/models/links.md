
# Links

HATEOAS links for response payloads.

*This model accepts additional fields of type [LinksAdditionalFields](../../doc/models/links-additional-fields.md).*

## Structure

`Links`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `self` | [`Self \| undefined`](../../doc/models/self.md) | Optional | - |
| `additionalProperties` | [`Record<string, LinksAdditionalFields>`](../../doc/models/links-additional-fields.md) | Optional | - |

## Example (as JSON)

```json
{
  "self": {
    "href": "href0",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "href": "href4",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```

