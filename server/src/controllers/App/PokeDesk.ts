import { IRequest, IResponse, INext } from '../../interfaces/vendors';

class PokeDesk {
  public static get(req: IRequest, res: IResponse, next: INext): void {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('PokeDesk controller is working');
  }

  public static add(req: IRequest, res: IResponse, next: INext): void {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('PokeDesk controller is working');
  }

  public static delete(req: IRequest, res: IResponse, next: INext): void {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('PokeDesk controller is working');
  }
}

export default PokeDesk;
