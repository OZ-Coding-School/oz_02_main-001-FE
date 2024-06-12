<<<<<<< HEAD
export type NotificationType = {
  recipeId: number; //백엔드에 요청함
=======
type NotificationType = {
  recipeId?: number; //백엔드에 요청함
>>>>>>> dev
  nickname: string;
  title: string;
  type: string;
  status: number;
  createdAt: string;
};
