
# Payment Method Options Associated With Non Credit or Debit Methods

Options for handling the authorization request

## Structure

`PaymentMethodOptionsAssociatedWithNonCreditOrDebitMethods`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressVerification` | `boolean \| undefined` | Optional | If true, you want to perform an address verification. |
| `partialApproval` | `boolean \| undefined` | Optional | If true, you will accept approvals for less than the total requested amount. |

## Example (as JSON)

```json
{
  "addressVerification": false,
  "partialApproval": false
}
```

