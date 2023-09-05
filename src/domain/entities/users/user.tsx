export default class User {
   name: string;
   email: string;
   isAdmin: boolean;

   constructor(name: string, email: string, isAdmin: boolean) {
      this.name = name;
      this.email = email;
      this.isAdmin = isAdmin;
   }
}
