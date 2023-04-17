import { expect, test, defineConfig } from "@playwright/test";

const logsBucket = 'logs-bucket'
test(`should add to R2 ${logsBucket}`, async ({ request, baseURL }) => {
  const add = await request.put(`/${logsBucket}`, {
    data: {
      test: 'my test',
      body: 'test description [body]'
    }
  })
})
