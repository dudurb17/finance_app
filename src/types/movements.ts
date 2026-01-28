export type Movements = {
  id: string;
  description: string;
  value: number;
  type: 'receita' | 'despesa';
  date: string;
}