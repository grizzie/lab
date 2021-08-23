export interface Namelist {
  name: string;
  male: boolean;
  field: string;
  study: string;
}
export interface FormerNameList extends Namelist {
  title: string;
  uni: string;
  year: number;
}
