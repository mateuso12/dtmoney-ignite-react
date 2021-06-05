import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";
import { App } from "./App";

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Produto 1',
          type: 'deposit',
          category: 'Venda',
          amount: 4500,
          createdAt: new Date('2021-05-30 16:00:00')
        },
        {
          id: 2,
          title: 'Despesa 1',
          type: 'withdraw',
          category: 'Compra',
          amount: 5000,
          createdAt: new Date('2021-05-30 16:10:00')
        },
      ]
    })
  },
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
