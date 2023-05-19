export class Product {
  id: string;
  name: string;
  photo: string;
  amount: number;
  desc: string;
  isOnline: boolean;
  onlineMessage: string;
  isCompared: boolean;

  constructor(data: any) {
    this.id = data?.id || "";
    this.name = data?.name || "";
    this.photo = data?.photo || "";
    this.amount = data?.amount || 0;
    this.desc = data?.desc || "";
    this.isOnline = data?.isOnline || false;
    this.onlineMessage = data?.onlineMessage || "";
    this.isCompared = data?.isCompared || false;
  }
}
