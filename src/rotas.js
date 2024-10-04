import APIStreaming from './controller/APIstreamingController.js';

export default function adicionarRotas(server){
    server.use(APIStreaming)
}
