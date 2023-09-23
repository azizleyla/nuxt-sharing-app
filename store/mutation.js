export function saveUser(state, user) {
    state.user = user || {}
}
export function saveLinks(state, link) {
    state.links.push(link)
}
export function setLinks(state, links) {
    state.links = links
}
export function deleteLink(state, linkId) {
    state.links = state.links.filter((item) => item.id !== linkId);

}