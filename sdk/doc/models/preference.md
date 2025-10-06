
# Preference

Set a preference for how the Issuer decides on a 3DS challenge. `challengeMandated` will be automatically set by verified payments for the first CIT payment in an MIT series or when storing cards (token creation).

## Enumeration

`Preference`

## Fields

| Name |
|  --- |
| `NoPreference` |
| `NoChallengeRequested` |
| `ChallengeRequested` |
| `ChallengeMandated` |

## Example

```
challengeMandated
```

