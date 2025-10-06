
# Unscheduled

Polymorphic reference for unscheduled CoF data

*This model accepts additional fields of type unknown.*

## Structure

`Unscheduled`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `usage` | [`Usage2`](../../doc/models/usage-2.md) | Required | Setup an __Unscheduled__ agreement for the following cases... <br> <ul><br><br>  <li> (__first__) - The __first__ time this card is being presented, and being stored by the Merchant. </li><br>  <li> (__subsequent__) - This is typically associated with a Merchant Initiated Transaction (MIT). </li><br>  <li> (__resubmission__) - Resubmit a previously declined payment. The card holder may have resolved the reason for the original decline, i.e. lack of funds, etc., thus the Payment can be resubmitted. </li><br>  <li> (__reauthorization_) - Used when the original Authorization needs to be Reauthorized based on a split or future shipment type scenario. </li><br></ul><br> |
| `schemeReference` | `string \| undefined` | Optional | Unique scheme reference for a repeat agreement between you and the customer. <br><br><br>New reference is generated for each subsequent payment. Most but __not all__ issuers return this. <br><br><br>Included in the Worldpay Token if created with the initial agreement (first) and therefore not required here.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `56`, *Pattern*: `^[a-zA-Z0-9 ]*$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type4",
  "usage": "resubmission",
  "schemeReference": "887654421234567",
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

