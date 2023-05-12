/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from "axios";
import { MsgLMH } from "../models";

const { VITE_EMAIL: EMAIL } = import.meta.env;

function sendMail(msg: MsgLMH): Promise<AxiosResponse<MsgLMH, unknown>> {

  return axios.post<MsgLMH>(EMAIL as string, msg);
}

export {
  sendMail
};
