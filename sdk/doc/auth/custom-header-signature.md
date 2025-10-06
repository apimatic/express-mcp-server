
# Custom Header Signature



Documentation for accessing and setting credentials for ApiKeyAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| Authorization | `string` | Format is "Worldpay license='xxxx'``` \n" | `authorization` |



**Note:** Auth credentials can be set using `customHeaderAuthenticationCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
import { Client } from 'express-payments-apilib';

const client = new Client({
  customHeaderAuthenticationCredentials: {
    'Authorization': 'Authorization'
  },
});
```


