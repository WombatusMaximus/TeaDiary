function isTeaValid(tea) {
    if (!tea) {
        return false;
    }
    if (!tea.Name || !tea.Type) {
        return false;
    }
    if (tea.Name === "" || tea.Type === "") {
        return false;
    }
    return true;
}