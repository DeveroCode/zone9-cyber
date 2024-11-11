import { authorization } from "@/helpers/apiHelper";

export default {
    getUser() {
        return authorization('get', '/all-users');
    },
    passwordForget(id, data) {
        return authorization('post', `/update-password/${id}`, data);
    },
    getUserByWord(word) {
        return authorization('get', `/search-users/${word}`);
    }
}