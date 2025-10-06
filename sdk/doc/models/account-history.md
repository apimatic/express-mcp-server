
# Account History

Customer account history

*This model accepts additional fields of type unknown.*

## Structure

`AccountHistory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `string \| undefined` | Optional | Date the customer account was created |
| `modifiedAt` | `string \| undefined` | Optional | Date the customer account was last modified |
| `passwordModifiedAt` | `string \| undefined` | Optional | Date the password for the customer account was last modified |
| `paymentAccountEnrolledAt` | `string \| undefined` | Optional | Date the payment account was added to the cardholder account. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "createdAt": "2002-11-23",
  "modifiedAt": "2003-10-21",
  "passwordModifiedAt": "2005-02-10",
  "paymentAccountEnrolledAt": "2004-09-02",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

