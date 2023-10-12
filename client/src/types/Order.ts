export interface Order {
  title: string;
  date: string;
  description: string;
  products?: string[],
  _id?: string
}
