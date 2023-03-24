import express, { Express, Response, Request } from 'express';
import EventEmitter from 'events';

export class Client extends EventEmitter {
  static readonly RESPONSE_HEADERS = {
    'Content-Type': 'text/event-stream',
    'Connection': 'keep-alive',
    'Cache-Control': 'no-cache'
  };
  private static createdClients = 0;
  
  private static getClientID() {
    return this.createdClients++;
  } 

  readonly id: number;
  private _req: Request;
  private _res: Response;

  constructor(req: Request, res: Response) {
    super();

    this.id = Client.getClientID();

    this._req = req;
    this._res = res;

    this._res.writeHead(200, Client.RESPONSE_HEADERS);
    
    this._req.on('close', () => this.emit('close'))
    
    this.send(this.id.toString());
  }

  on(eventName: 'close', listener: () => void): this;
  on(eventName: string | symbol, listener: (args: any[]) => any): this {
    return super.on(eventName, listener);
  }

  emit(eventName: 'close'): boolean;
  emit(eventName: string | symbol, ...args: any[]): boolean {
    return super.emit(eventName, ...args);
  }
  
  send(data: string) {
    if (this._res.writable) {
      this._res.write(`data: ${data}\n\n`);
    }
  }
}

export class DevServer {
  static createAndStart() {
    const server = new this();

    server.start();

    return server;
  }

  private _app: Express;
  private _clients: Client[];

  constructor() {
    this._app = express();
    this._clients = [];

    this._app.get('/events', this.eventsRouteHandler.bind(this));

    this._app.use(express.static('docs/'));
  }

  get app() {
    return this._app;
  }

  private eventsRouteHandler(req: Request, res: Response) {
    const client = new Client(req, res);

    this._clients.push(client);

    client.on('close', () => this.removeClient(client.id));
  }

  private removeClient(clientID: number) {
    this._clients = this._clients.filter(client => client.id !== clientID);
  }

  start(port: number = 3000) {

    this._app.listen(port, () => {
      console.log(`serve is listening http://localhost:${port}/ and waiting for changes!`);
    })
    .on('error', (err) => {
      if (err.message.includes('EADDRINUSE') && port < 2 ** 16) {
        this.start(port+1);
      } else {
        console.log(err);
        process.exit(1);
      }
    });
  }

  reloadClients() {
    for (const client of this._clients) {
      client.send('reload');
    }
  }
}