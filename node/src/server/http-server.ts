
const port = normalizePort(process.env.PORT || '3000');

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
    // named pipe
    return val;
    }

    if (port >= 0) {
    // port number
    return port;
    }

    return false;
}

import * as http from 'http'

export class HttpServer {

    launch(): void {
        const server = http.createServer();
        server.on('request', handleRequest);
        
        function handleRequest(httpRequest, httpResponse) {
            httpResponse.statusCode = 200;
            httpResponse.end(`OK trying to access - ${httpRequest.url}` );
        }
        
        server.listen(port, () => {
            console.log('******************** STARTED SERVER **********************');
            console.log(`Server running on port = ${port}`);
        });
    }

}
