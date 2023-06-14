const unselectCurrentFilter = () => {
    document.getElementsByClassName("button selected")[0].classList.remove("selected");
}

export function handleSelectFilter(e) {
    unselectCurrentFilter()
    e.target.classList.add("selected");
}