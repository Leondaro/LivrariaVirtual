import { useContext } from "react"
import { BookContext } from "../contexts/BookContext"

export function useBooks() {
    return useContext(BookContext)
}
