
# Sca Exemption

request an SCA exemption from Worldpay. Be SCA compliant and reduce customer checkout friction

*This model accepts additional fields of type unknown.*

## Structure

`ScaExemption`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `enabled` | `boolean \| undefined` | Optional | **Default**: `false` |
| `placement` | [`Placement \| undefined`](../../doc/models/placement.md) | Optional | request an SCA exemption from Worldpay. Be SCA compliant and reduce customer checkout friction<br>\|  \|  \|<br>\|-----\|-----\|<br>\| authorization \| Request exemption in payment authorization only \|<br>\| authentication \| Request exemption in authentication (3DS) only   \|<br>\| both \|  Request exemption in both authorization and authentication (3DS)  \|<br><br>**Default**: `Placement.Authorization` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "enabled": false,
  "placement": "authorization",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

