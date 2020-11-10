import { IRequest, IResponse, INext } from '../../interfaces/vendors';

class Login {
  public static index(req: IRequest, res: IResponse, next: INext): void {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home controller is working');
  }
}

export default Login;
