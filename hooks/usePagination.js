import { PaginationContext } from "../contexts/PaginationContext";
import { useContext } from "react";

export function usePagination() {
    return useContext(PaginationContext);
}