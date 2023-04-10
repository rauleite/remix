import { createEventHandler } from "@remix-run/cloudflare-workers";
import * as build from "@remix-run/dev/server-build";

addEventListener(
  "fetch",
  createEventHandler({ build, mode: process.env.NODE_ENV })
);
// // import { performance } from 'node:perf_hooks';
// // import { performance } from 'perf_hooks';
// // const { performance } = worker;
//
// // import { performance } from 'performance';
// // globalThis.performance = {
// // performance = {
// //   now: function() {
// //     return Date.now();
// //   }
// // };
// // //
// // /* document-load.ts|js file - the code snippet is the same for both the languages */
// import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
// // import { DocumentLoadInstrumentation } from '@opentelemetry/instrumentation-document-load';
// // import { ZoneContextManager } from '@opentelemetry/context-zone';
// // import { registerInstrumentations } from '@opentelemetry/instrumentation';
// //
// const provider = new WebTracerProvider();
// //
// // provider.register({
// //   // Changing default contextManager to use ZoneContextManager - supports asynchronous operations - optional
// //   contextManager: new ZoneContextManager(),
// // });
// //
// // // Registering instrumentations
// // registerInstrumentations({
// //   instrumentations: [new DocumentLoadInstrumentation()],
// // });
//
// // const e = createEventHandler({ build, mode: process.env.NODE_ENV })
// // e(event => {
// //   console.log('event', event)
// // })
// // console.log('performance', performance)
//
// // const window = {
// // performance = self.performance
// // performance = globalThis
// // performance = {
// //   now: Date.now
// // }
// // }
// console.log('globalThis', globalThis)
// console.log('self', self)
// console.log('global', global)
// console.log('performance', performance)
// import prometheus from 'prom-client'

// import {
//   createRequestHandler,
//   handleAsset,
// } from "@remix-run/cloudflare-workers";

// console.log('-- One Time')
// Define your custom metrics
// Register the metrics with the Prometheus registry
// prometheus.collectDefaultMetrics();

// import * as build from "../build";

// const handleRequest = createRequestHandler({ build });

// const handleEvent = async (event) => {

// Incrementando o contador de solicitações
// metrics.requestsTotal.inc({ method: 'GET', status: '200' });

// console.log('-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ')
// console.log('process', process)

// Calculando a duração da solicitação
// const start = process.hrtime();

// const end = httpRequestDurationMicroseconds.startTimer();
// let response = await handleAsset(event, build);
// console.log('reponse', response)

// end({
//   code: '200',
//   method: 'GET',
//   // route: req.path
// });


// const result = await json({ hello: 'world' });
// const end = process.hrtime(start);
// const duration = end[0] + end[1] / 1e9;

// Registrando a duração da solicitação no histograma
// metrics.requestDuration.observe(
//   { method: 'GET', status: '200' },
//   duration
// );
// try {
//   // console.log(await register.metrics())
// } catch (error) {
//
// }
//
// if (!response) {
//   response = await handleRequest(event);
// }
//
// return response;
// };
//
// addEventListener("fetch", (event) => {
//   try {
//     event.respondWith(handleEvent(event));
//
//   } catch (e) {
//     if (process.env.NODE_ENV === "development") {
//       event.respondWith(
//         new Response(e.message || e.toString(), {
//           status: 500,
//         })
//       );
//     }
//
//     event.respondWith(
//       new Response("Internal Error", { status: 500 })
//     );
//   }
// });
