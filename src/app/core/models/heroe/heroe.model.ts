export interface HeroeModel {
  id?: number;
  position: number;
  name: string;
  description: string;
  birthdate: string;
  type: 'normal' | 'epico' | 'legendario';
}
