export interface User {
  id: number;
  username: string;
  email: string;
  accesToken:string;
  tokenType:string;
  roles: [
      {
          roleName: string;
          id:number
      }
  ];
}
