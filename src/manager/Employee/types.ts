export type EmployeeParameters = {
  tc: string;
  name: string;
};

export type EmployeeResponse = {
  name: string | null;
  startDate: string | null;
  izin: number;
  photoId?: string;
};
