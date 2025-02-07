import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

const userAtom = atom<{userName: string, nickName: string} | null>(null);

export const useUser = () => useAtom(userAtom);
export const useUserValue = () => useAtomValue(userAtom);
export const useSetUser = () => useSetAtom(userAtom);