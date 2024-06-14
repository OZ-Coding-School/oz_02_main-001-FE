type NotificationType = {
  id: number;
  recipeId: number;
  nickname: string;
  title: string;
  type: string;
  status: boolean;
  createdAt: string;
};

type DataType = {
  data: NotificationType[];
  status: number;
  message: string;
};

type PostAlertsType = {
  status: number;
  message: string;
  data: number[];
};

type PostAlertsRequestType = {
  alerts: number[];
};

type updateDataType = {
  alerts: number[];
}