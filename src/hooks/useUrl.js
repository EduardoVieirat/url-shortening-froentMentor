import { useContext } from "react";
import UserProvider from "../context/context";

export default function UseUrl() {
  return useContext(UserProvider);
}
