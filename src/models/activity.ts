export interface Activity {
  id: string;
  name: string;
  frequency: number;
  importancy: number;
  color: string;
  categories: Array<Category>;
}


export interface Category {
  name: string;
}

export interface History {
  id?: string;
  activityId: string;
  name: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  date: Date;
}
