import { api } from '../../lib/api';
import { EmployeeParameters, EmployeeResponse } from './types';

class EmployeeManager {
  getEmployeeList(params?: EmployeeParameters): Promise<EmployeeResponse> {
    return api.get<EmployeeResponse>('employee', params);
  }
}

export const employeeManager = new EmployeeManager();
