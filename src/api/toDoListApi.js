import { toast } from "react-toastify";
import api from "./mainApi";
import { data } from "react-router";

export const getAllList = async () => {
  try {
    const res = await api.get("/todos/2");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("get To do list error", error);
    toast.error("cannot get To do lists");
  }
};
