
# Emv Instrument Clear

EMV instrument for clear card data

## Structure

`EmvInstrumentClear`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `emvTlvData` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048` |
| `track2EquivalentData` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `40` |
| `pinData` | [`PinData \| undefined`](../../doc/models/pin-data.md) | Optional | Security code usually associated with a debit card. |
| `cardInputCode` | [`EmvCardInputCode`](../../doc/models/emv-card-input-code.md) | Required | Provides more information about why the EMV Input Mode was used. |
| `kernelVersion` | `string \| undefined` | Optional | EMV Kernel version of the device.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |

## Example (as JSON)

```json
{
  "type": "type4",
  "emvTlvData": "emvTlvData8",
  "track2EquivalentData": "track2EquivalentData0",
  "pinData": {
    "pinBlock": "pinBlock6",
    "keySerialNumber": "keySerialNumber0"
  },
  "cardInputCode": "chipRead",
  "kernelVersion": "kernelVersion8"
}
```

