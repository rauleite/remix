import { ActionArgs, LoaderArgs, json } from '@remix-run/cloudflare'

const common = (request) => {
  console.log('request.method', request.method)
  console.log('LOGS_BUCKET', LOGS_BUCKET)

  const url = new URL(request.url);
  const key = url.pathname.slice(1);

  console.log('url', url.toString())
  console.log('key', key)
  return key
}
export async function loader({ request }: LoaderArgs) {
  console.log("logs-bucket::loader()")
  const key = common(request)

  if (request.method !== 'GET') {
    const info = "Loader accepts other else then GET method"
    console.info(info)
    return new Response(info, { status: 404 })
  }
  const object = await LOGS_BUCKET.get(key);

  if (object === null) {
    return new Response('Object Not Found', { status: 404 });
  }

  // const headers = new Headers();
  // object.writeHttpMetadata(headers);
  // headers.set('etag', object.httpEtag);

  return new Response(object.body, {
    // headers,
  });
}
export async function action({ request }: ActionArgs) {
  console.log("logs-bucket::action()")
  const key = common(request)
  switch (request.method) {
    case 'PUT':
      await LOGS_BUCKET.put(key, request.body);
      return new Response(`Put ${key} successfully!`);
    case 'GET':
      console.info('Action accepts GET method')
    case 'DELETE':
      await LOGS_BUCKET.delete(key);
      return new Response('Deleted!');
    default:
      return new Response('Method Not Allowed', {
        status: 405,
        headers: {
          Allow: 'PUT, DELETE',
        },
      });
  };
  return json({ test: 'test' })
}

// export default function Index() {
//   return (
//     <>
//       <h1>Welcome</h1>
//     </>
//   );
// }
