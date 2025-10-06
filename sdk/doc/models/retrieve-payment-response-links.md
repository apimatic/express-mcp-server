
# Retrieve Payment Response Links

*This model accepts additional fields of type unknown.*

## Structure

`RetrievePaymentResponseLinks`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `captures` | [`Links[] \| undefined`](../../doc/models/links.md) | Optional | - |
| `refunds` | [`Links[] \| undefined`](../../doc/models/links.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "captures": [
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
    },
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
    },
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
  ],
  "refunds": [
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
  ],
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

