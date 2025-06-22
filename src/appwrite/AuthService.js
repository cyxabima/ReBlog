import { Client, Account, ID } from "appwrite";
import conf from "../Config/config";

class AuthService {
    // class Variables or attribute or data member

    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId);

        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                this.login({ email, password })
            }
            else {
                return userAccount
            }
        }
        catch (error) {
            console.log("AppWrite Service:: signup :: error", error)
        }
    }


    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        }
        catch (error) {
            console.log("AppWrite Service:: login :: error", error)
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get()
        } catch (error) {
            console.log("AppWrite Service:: current-user :: error", error)
        }
    }


    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("AppWrite Service:: logout :: error", error)
        }
    }
}

const authService = new AuthService()

export default authService