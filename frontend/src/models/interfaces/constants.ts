export interface IChildren {
  children: any;
}

export interface IColProps extends IChildren {
  columnName: string;
}

export interface IRoute {
  id: string;
  name: string;
  url: string;
}
