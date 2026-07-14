import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUserStore } from "../stores/userStore";
import api from "../api/mainApi";
import { useNavigate } from "react-router";

function LoginPage() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate()

  const setUser = useUserStore(state => state.setUser)
  const setToken = useUserStore(state => state.setToken)

  const hdlChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const hdlLogin = async (e) => {
    e.preventDefault();
    try {
        const res = await api.post("/auth/login", formData);
        console.log('res', res)
        const { token, username } = res.data.user
        setUser(username)
        setToken(token)
        // console.log(token)
        navigate('/ToDoList')
        toast.success("Login success !");
    } catch (error) {
        console.log("error", error);
        toast.error("Failed !!");
    }
  };

  return (
    <div className="m-auto w-full h-screen bg-sky-50 flex justify-center items-center">
      <div className="w-100 h-120 border rounded-2xl bg-white">
        <svg
          className="m-auto w-14 mt-16 bg-sky-100 p-3 border rounded-xl border-sky-200"
          fill="#286695"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 31.596 31.596"
          xmlSpace="preserve"
          stroke="#286695"
          strokeWidth="0.00031596"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M29.354,2.942H2.241v20.195h27.113V2.942z M26.311,20.092H5.285V5.986h21.025V20.092L26.311,20.092z M31.596,24.977v3.677 H0v-3.677h12.097v1.838h7.401v-1.838H31.596z M11.627,16.168l-3.171-3.17l3.115-3.114l1.175,1.175l-1.939,1.939l1.995,1.995 L11.627,16.168z M15.003,17.492l-1.525-0.657l3.565-8.275l1.525,0.657L15.003,17.492z M18.793,14.993l1.995-1.995l-1.938-1.939 l1.174-1.175l3.115,3.114l-3.17,3.17L18.793,14.993z"></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <h1 className="font-bold text-3xl text-center mt-4">Welcome</h1>
        <p className="text-center text-gray-500 mt-2 text-sm">
          ล็อคอินเพื่อทำการเข้าสู่ระบบเพื่อทดสอบ Frontend Dev
        </p>
        <form
          onSubmit={hdlLogin}
          className="flex flex-col justify-between gap-4"
        >
          <div className="flex flex-col justify-between gap-6">
            <label></label>
            <input
              className="outline-1 rounded-xl text-xl p-2 mx-10 bg-gray-100"
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={hdlChange}
            />
          </div>

          <div className="flex flex-col justify-between">
            <label></label>
            <input
              className="outline-1 rounded-xl text-xl p-2 mx-10"
              type="password"
              name="password"
              placeholder="password"
              value={formData.password}
              onChange={hdlChange}
            />
          </div>
          <button className="bg-sky-700 outline-1 rounded-xl p-3 mx-10 font-semibold mt-2 cursor-pointer text-white">
            LOG IN
          </button>
          <p className="text-center text-gray-500 mt-4">
            Don't have any accounts?
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
