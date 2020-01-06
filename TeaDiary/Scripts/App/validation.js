function isTeaValid(tea) {
    if (tea == null) {
        return false;
    }

    if (tea.Name == null || tea.Name === "") {
        return false;
    }

    if (tea.Type == null || tea.Type === "") {
        return false;
    }

    return true;
}