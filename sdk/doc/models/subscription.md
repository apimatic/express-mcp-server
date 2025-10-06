
# Subscription

Polymorphic reference for subscription data

*This model accepts additional fields of type unknown.*

## Structure

`Subscription`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string` | Required | Value indicating the specific type instance for this field.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `usage` | [`Usage1`](../../doc/models/usage-1.md) | Required | Setup an __subscription__ agreement for the following cases... <br> <ul><br><br>  <li> (__first__) - The __first__ time this card is being presented, and being stored by the Merchant. </li><br>  <li> (__subsequent__) - Make a payment using the stored card. This can be a Customer Initiated Transaction (CIT). </li><br>  <li> (__resubmission__) - Resubmit a previously declined payment. The card holder may have resolved the reason for the original decline, i.e. lack of funds, etc., thus the Payment can be resubmitted. </li><br>  <li> (__reauthorization_) - Used when the original Authorization needs to be Reauthorized based on a split or future shipment type scenario. </li><br></ul><br>Provide a scheme reference and optionally enable 3RI.<br> |
| `schemeReference` | `string \| undefined` | Optional | Unique scheme reference for a repeat agreement between you and the customer. <br><br><br>New reference is generated for each subsequent payment. Most but __not all__ issuers return this. <br><br><br>Included in the Worldpay Token if created with the initial agreement (first) and therefore not required here.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `56`, *Pattern*: `^[a-zA-Z0-9 ]*$` |
| `threeRi` | [`ThreeRi \| undefined`](../../doc/models/three-ri.md) | Optional | Merchant initiated 3DS authentication on subsequent subscription payments. <br><br>__3DS must be enabled.__ |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example (as JSON)

```json
{
  "type": "type4",
  "usage": "resubmission",
  "schemeReference": "887654421234567",
  "threeRI": {
    "endDate": "2016-03-13T12:52:32.123Z",
    "frequency": 94,
    "transactionId": "transactionId0",
    "acsTransactionId": "acsTransactionId4",
    "authenticationTimeStamp": "2016-03-13T12:52:32.123Z",
    "exampleAdditionalProperty": {
      "key1": "val1",
      "key2": "val2"
    }
  },
  "exampleAdditionalProperty": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

