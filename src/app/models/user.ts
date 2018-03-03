export class User {
  email: string = '';
  username: string = '';
  firstName: string = '';
  lastName: string = '';
  image: string = './assets/images/profile/default_user.jpg';
  bio: string = '';
  status: string = 'online';

  parseData(data: any) {
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.username = data.username;
    this.email = data.email;
    this.image = data.image_url;
    this.bio = data.bio;
  }
}
