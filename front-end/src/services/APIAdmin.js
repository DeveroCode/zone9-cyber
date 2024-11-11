import { authorization } from "@/helpers/apiHelper";

export default {
    create(data) {
        return authorization('post', '/create-user', data);
    },
    getUser() {
        return authorization('get', '/all-users');
    },
    passwordForget(id, data) {
        return authorization('post', `/update-password/${id}`, data);
    },
    getUserByWord(word) {
        return authorization('get', `/search-users/${word}`);
    },
    delete(id) {
        return authorization('delete', `/delete-user/${id}`);
    }
}