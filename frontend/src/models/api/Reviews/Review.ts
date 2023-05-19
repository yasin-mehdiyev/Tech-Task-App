import moment from "moment";

export class Review {
    id: string;
    name: string;
    date: string;
    email: string;
    comment: number;
    phone: string;
    rate: number
  
    constructor(data: any) {
      this.id = data?.id || "";
      this.name = data?.name || "";
      this.date = data?.date || moment().format('MMMM DD,yyyy');
      this.email = data?.email || "";
      this.comment = data?.comment || "";
      this.phone = data?.phone || "";
      this.rate = data?.rate || 1;
    }
  }
  