
# Pin Data

Security code usually associated with a debit card.

## Structure

`PinData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pinBlock` | `string` | Required | Data used to encapsulate a PIN during processing.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `32` |
| `keySerialNumber` | `string` | Required | Serial number of the key.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |

## Example (as JSON)

```json
{
  "pinBlock": "pinBlock6",
  "keySerialNumber": "keySerialNumber0"
}
```

