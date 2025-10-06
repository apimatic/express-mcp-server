
# Usage

Setup a __Card on File__ agreement for the following cases... <br> <ul>

  <li> (__first__) - The __first__ time this card is being presented, and being stored by the Merchant. </li>
  <li> (__subsequent__) - Make a payment using the stored card. This can be a Customer Initiated Transaction (CIT). </li>
  <li> (__resubmission__) - Resubmit a previously declined payment. The card holder may have resolved the reason for the original decline, i.e. lack of funds, etc., thus the Payment can be resubmitted. </li>
  <li> (__reauthorization_) - Used when the original Authorization needs to be Reauthorized based on a split or future shipment type scenario. </li>
</ul>


## Enumeration

`Usage`

## Fields

| Name |
|  --- |
| `First` |
| `Subsequent` |
| `Resubmission` |
| `Reauthorization` |

