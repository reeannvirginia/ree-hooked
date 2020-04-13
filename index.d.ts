import { SetStateAction } from 'react';

export declare const useClickAway: (ref: any, callback: () => void) => void;
export declare const usePersistingTheme: () => [value, setValue];

type value = string;
type setValue = SetStateAction;
