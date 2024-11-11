import { authorization } from "@/helpers/apiHelper";

export default {
    login(data) {
        return authorization('post', '/auth/user', data);
    },
    dataUser() {
        return authorization('get', '/user');
    },
    logout() {
        return authorization('post', '/logout');
    }
}