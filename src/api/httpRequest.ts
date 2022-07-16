import { AxiosInstance } from "axios";

export interface Log {
  functionName: string;
  message?: string;
}
interface GetByTerm {
  term: string;
  queryField: string; // 할일: 제네릭
}
export interface GetSort {
  direction: "asc" | "desc";
  queryField: string; // 할일: 제네릭
}

export class HttpRequest<T> {
  constructor(
    private readonly service: AxiosInstance,
    private readonly endPoint: string
  ) {
    this.service;
    this.endPoint;
  }

  // util
  log = ({ functionName, message }: Log) =>
    console.log(
      `수행완료(${this.endPoint} >  ${functionName}${
        message ? ` : ${message}` : ""
      })`
    );

  // get
  getAll = () => this.service.get<T[]>(this.endPoint);

  getOneById = (id: number) => this.service.get<T>(`${this.endPoint}/${id}`);

  getByEmail = (queryField: string, email: string) =>
    this.service.get<T[]>(`${this.endPoint}?${queryField}=${email}`);

  getManyByTerm = ({ term, queryField }: GetByTerm) =>
    this.service.get<T[]>(`${this.endPoint}?${queryField}=${term}`);

  getTerm = (term: string) =>
    this.service.get<T[]>(`${this.endPoint}?q=${term}`);

  getSort = ({ queryField, direction }: GetSort) =>
    this.service.get<T[]>(
      `${this.endPoint}?_sort=${queryField}&_order=${direction}`
    );

  // post
  post = (input: Partial<T>) => this.service.post<T>(this.endPoint, input);

  // patch
  patch = (id: number, input: Partial<T>) =>
    this.service.patch<T>(`${this.endPoint}/${id}`, input);
}
