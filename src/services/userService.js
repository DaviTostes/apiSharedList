import { db } from '../config/firebase.js';
import { doc, getDoc, updateDoc, setDoc, getDocs, collection, query, orderBy, startAfter, limit, deleteDoc } from 'firebase/firestore';

class UserService {
    async FindUsers() {
        try {
            let users = []

            const query = await getDocs(collection(db, 'Users'))

            query.forEach((doc) => {
                users.push({
                    ...doc.data(),
                })
            })            

            return users
        } catch (ex) {
            throw ex
        }
    }

    async FindUserByEmail(email) {
        try {
            const query = await getDoc(doc(db, "Users", email))

            if(query.exists()) {
                return query.data()
            }
        }
        catch(ex) {
            throw ex
        }
    }

    async CreateUser(user) {
        try {
            await setDoc(doc(db, "Users", user.email), user)
            return user
        }
        catch(ex) {
            throw ex
        }
    }

    async UpdateUser(user) {
        try {
            await updateDoc(doc(db, "Users", user.email), user)
            return user          
        }
        catch(ex) {
            throw ex
        }
    }

    async DeleteUser(id) {
        try {
            await deleteDoc(doc(db, "Users", id))
            return "Sucesso"
        }
        catch(ex) {
            throw ex
        }
    }

    constructor() {}
}

export default new UserService()
