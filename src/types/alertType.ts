type AlertType = {
  enable: boolean;
};

type GetAlertStatusType = {
  status: number;
  message: string;
  data: { status: boolean | number };
};

type FetchAlertsStatusType = {
  status: number;
  message: string;
};
