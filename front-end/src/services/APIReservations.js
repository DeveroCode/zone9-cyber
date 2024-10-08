import { authorization } from "@/helpers/apiHelper";

export default {
    create(reservation) {
        return authorization('post', '/create-reservation', reservation);
    }
}