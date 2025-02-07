import { instance } from "@/lib";
import { UserBoard } from "@/models";

export const getBoard = () => {
    return instance.get<UserBoard[]>('/user/boards');
};