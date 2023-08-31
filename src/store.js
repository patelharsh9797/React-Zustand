import {create} from "zustand";

const store = (set)=>({
    tasks:[{title:"Our Todo", status:"PLANNED"}]
})


export const useZustandStore = create(store)