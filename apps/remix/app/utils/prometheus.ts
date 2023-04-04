

import { Counter, Histogram } from 'prom-client'
// import { Counter, Histogram, Registry } from 'prom-client'

// Create a Registry which registers the metrics
// const register = new Registry()

// Add a default label which is added to all metrics
// register.setDefaultLabels({
//   app: 'example-nodejs-app'
// })

// Criando um objeto para coleta de métricas
export const metrics = {
  requestsTotal: new Counter({
    name: 'requests_total',
    help: 'Total number of requests',
    labelNames: ['method', 'status']
  }),
  requestDuration: new Histogram({
    name: 'request_duration_seconds',
    help: 'Duration of requests',
    labelNames: ['method', 'status'],
    buckets: [0.1, 0.2, 0.5, 1, 2, 5, 10]
  })
};

