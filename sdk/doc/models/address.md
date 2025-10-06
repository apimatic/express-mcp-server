
# Address

Address data

*This model accepts additional fields of type unknown.*

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address1` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `85` |
| `address2` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `85` |
| `address3` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `85` |
| `city` | `string \| undefined` | Optional | Only optional for country code SG (Singapore)<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `countryCode` | [`CountryCode`](../../doc/models/country-code.md) | Required | Supported ISO 3166-1 alpha-2 country code. |
| `postalCode` | `string \| undefined` | Optional | Only optional for country code IE (Ireland)<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `15` |
| `state` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "address1": "15 street",
  "city": "London",
  "countryCode": "GB",
  "postalCode": "SW1 1AA",
  "state": "Greater London",
  "address2": "address28",
  "address3": "address36",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

