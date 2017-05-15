import Vue from 'vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      view: 'pedidos',
      "orders": [
        {
          "id": "380561",
          "ownId": "sandbox_v2_1430950122",
          "externalId": "ORD-U052MFZ4M414",
          "status": "PAID",
          "blocked": false,
          "amount": {
            "total": 4000,
            "addition": 0,
            "fees": 335,
            "deduction": 0,
            "otherReceivers": 0,
            "currency": "BRL"
          },
          "receivers": [
            {
              "type": "PRIMARY",
              "moipAccount": {
                "id": "MPA-CULBBYHD11"
              }
            }
          ],
          "customer": {
            "fullname": "João Nascimento",
            "email": "sandbox_v2_1430950122@email.com"
          },
          "items": [
            {
              "product": null
            }
          ],
          "payments": [
            {
              "installmentCount": 1,
              "fundingInstrument": {
                "method": "CREDIT_CARD",
                "institution": "VISA"
              }
            }
          ],
          "events": [
            {
              "type": "PAYMENT.AUTHORIZED",
              "createdAt": "2015-05-06T19:09:06Z"
            }
          ],
          "_links": {
            "self": {
              "href": "https://sandbox.moip.com.br/v2/orders/ORD-U052MFZ4M414"
            }
          },
          "createdAt": "2015-05-06T19:08:43Z",
          "updatedAt": "2015-05-06T19:08:48Z"
        },
        {
          "id": "380560",
          "ownId": "sandbox_v2_1430950121",
          "externalId": "ORD-8MFXXQTTPEJ4",
          "status": "CANCELLED",
          "blocked": false,
          "amount": {
            "total": 2000,
            "addition": 0,
            "fees": 335,
            "deduction": 0,
            "otherReceivers": 0,
            "currency": "BRL"
          },
          "receivers": [
            {
              "type": "PRIMARY",
              "moipAccount": {
                "id": "MPA-CULBBYHD11"
              }
            }
          ],
          "customer": {
            "fullname": "Maria Santos",
            "email": "sandbox_v2_1430950121@email.com"
          },
          "items": [
            {
              "product": null
            }
          ],
          "payments": [
            {
              "installmentCount": 1,
              "fundingInstrument": {
                "method": "DEBIT_CARD",
                "institution": "VISA"
              }
            }
          ],
          "events": [
            {
              "type": "PAYMENT.AUTHORIZED",
              "createdAt": "2015-05-06T19:09:06Z"
            }
          ],
          "_links": {
            "self": {
              "href": "https://sandbox.moip.com.br/v2/orders/ORD-8MFXXQTTPEJ4"
            }
          },
          "createdAt": "2015-05-06T19:08:41Z",
          "updatedAt": "2015-05-06T19:08:48Z"
        },
        {
          "id": "380456",
          "ownId": "sandbox_v2_1430942777",
          "externalId": "ORD-3XCFS4BTBO38",
          "status": "PAID",
          "blocked": false,
          "amount": {
            "total": 3500,
            "addition": 0,
            "fees": 335,
            "deduction": 0,
            "otherReceivers": 0,
            "currency": "BRL"
          },
          "receivers": [
            {
              "type": "PRIMARY",
              "moipAccount": {
                "id": "MPA-CULBBYHD11"
              }
            }
          ],
          "customer": {
            "fullname": "José Silva",
            "email": "sandbox_v2_1430942777@email.com"
          },
          "items": [
            {
              "product": null
            }
          ],
          "payments": [
            {
              "installmentCount": 1,
              "fundingInstrument": {
                "method": "BOLETO",
                "institution": "BRADESCO"
              }
            }
          ],
          "events": [
            {
              "type": "PAYMENT.AUTHORIZED",
              "createdAt": "2015-05-06T17:06:53Z"
            }
          ],
          "_links": {
            "self": {
              "href": "https://sandbox.moip.com.br/v2/orders/ORD-3XCFS4BTBO38"
            }
          },
          "createdAt": "2015-05-06T17:06:23Z",
          "updatedAt": "2015-05-06T17:06:42Z"
        }
      ]}
  })
