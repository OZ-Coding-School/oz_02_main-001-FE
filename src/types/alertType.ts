type AlertType = {
  enable: boolean;
};

type GetAlertStatusType = {
  status: number;
  message: string;
  data: { status: boolean };
};

type FetchAlertsStatusType = {
  status: number;
  message: string;
};
