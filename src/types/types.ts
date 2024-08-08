enum StatusName {
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export interface Employee {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  tokens: Token[];
  roles: Role[];
  task: Task | null;
  performance: Performance;
}

export interface Token {
  title: string;
  createdAt: Date;
  expiryDate: Date;
  validatedAt: Date;
  employee: Employee;
}

export interface Role {
  name: string;
  employee: Employee[];
}

export interface Status {
  name: StatusName;
  description: string;
  project?: Project;
}

export interface Project {
  name: string;
  description: string;
  status: Status;
  startDate: Date;
  deadline: Date;
  tasks: Task[];
}

export interface Task {
  title: string;
  description: string;
  deadline: Date;
  status: Status;
  employees: Employee[];
  comments: Comment[];
  project: Project;
}

export interface Comment {
  title: string;
  description: string;
  date: Date;
  task: Task;
  employee: Employee;
}

export interface Performance {
  totalPoint: number;
  commentNumber: number;
  completedTask: number;
  employee: Employee;
}
