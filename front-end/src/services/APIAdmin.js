import { authorization } from "@/helpers/apiHelper";

export default {
    create(data) {
        return authorization('post', '/create-user', data);
    },
    delete(id) {
        return authorization('delete', `/delete-user/${id}`);
    },
    getUser() {
        return authorization('get', '/all-users');
    },
    update(id, data) {
        return authorization('post', `/update-user/${id}`, data);
    },
    passwordForget(id, data) {
        return authorization('post', `/update-password/${id}`, data);
    },
    getUserByWord(word) {
        return authorization('get', `/search-users/${word}`);
    }
}