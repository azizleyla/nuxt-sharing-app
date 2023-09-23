import state from "./state"
import * as mutations from "./mutation.js"
import { createStore } from "vuex"

const store = createStore({
    state,
    mutations
})
export default store