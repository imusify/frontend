export class Channel {
  createdAt: string = '';
  updatedAt: string = '';
  deletedAt: string = '';
  porpuse: string = '';
  members: any = [];
  id: number = 0;
  name: string = '';
  slug: string = '';
  userId: number = 0;
  private: boolean = false;

  constructor(id: number = 0, name: string = '') {
    this.id = id;
    this.name = name;
  }
}

