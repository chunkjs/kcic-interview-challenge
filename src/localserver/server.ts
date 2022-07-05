import { createServer, Model } from 'miragejs';
import claims from './seed-data';

let newId = 4;

export default function makeServer() {
  return createServer({
    models: {
      claim: Model,
    },
    routes() {
      this.get('/api/Claims', (schema) => schema.claims.all());

      this.post('/api/Claims', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        attrs.id = newId++;
        return schema.claims.create(attrs);
      });
    },
    seeds(server) {
      server.create('claim', claims[0]);
      server.create('claim', claims[1]);
      server.create('claim', claims[2]);
    },

  });
}
