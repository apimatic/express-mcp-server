
# Emv Instrument Encrypted

EMV instrument for encrypted card data

## Structure

`EmvInstrumentEncrypted`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `emvTlvData` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2048` |
| `emvEncryptedData` | [`EmvEncryptedData`](../../doc/models/emv-encrypted-data.md) | Required | Objects supporting the transmission of encrypted EMV TLV tags |
| `pinData` | [`PinData \| undefined`](../../doc/models/pin-data.md) | Optional | Security code usually associated with a debit card. |
| `cardInputCode` | [`EmvCardInputCode`](../../doc/models/emv-card-input-code.md) | Required | Provides more information about why the EMV Input Mode was used. |
| `kernelVersion` | `string \| undefined` | Optional | EMV Kernel version of the device. |

## Example (as JSON)

```json
{
  "type": "type6",
  "emvTlvData": "emvTlvData6",
  "emvEncryptedData": {
    "keySerialNumber": "keySerialNumber4",
    "encryptedFormat": "ingenicoTetraGeneric",
    "encryptedEmvTlvData": "encryptedEmvTlvData2"
  },
  "pinData": {
    "pinBlock": "pinBlock6",
    "keySerialNumber": "keySerialNumber0"
  },
  "cardInputCode": "chipRead",
  "kernelVersion": "kernelVersion0"
}
```

