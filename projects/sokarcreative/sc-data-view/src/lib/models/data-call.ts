export type DataCall<Data, Params> = {
  params?: Params | undefined | null,

  isRunning?: boolean;

  isSuccess?: boolean;
  data?: Data | null;

  isError?: boolean;
  error?: any | null;
}
