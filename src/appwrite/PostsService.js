import { Client, Databases, Query } from "appwrite";
import conf from "../Config/config";

class PostsService {
    client = new Client();
    databases;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId);

        this.databases = new Databases(this.client);
    }

    async createPost({ title, content, slug, featuredImage, status, userId }) {
        try {

            return await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );

        } catch (error) {
            console.log("AppWrite Service:: create-post :: error", error);
        }
    }


    async updatePost(slug, { title, content, featuredImage, status }) {
        try {

            return await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage
                }
            );

        } catch (error) {
            console.log("AppWrite Service:: update-post :: error", error);
        }
    }


    async deletePost(slug) {
        try {

            this.databases.deleteDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            );

            return true;

        } catch (error) {
            console.log("AppWrite Service:: delete-post :: error", error);
            return false;
        }
    }


    async getPost(slug) {
        try {

            return this.databases.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            );

        } catch (error) {
            console.log("AppWrite Service:: get-post :: error", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {

            return this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                queries
            );

        } catch (error) {
            console.log("AppWrite Service:: get-posts :: error", error);
        }
    }

}


const postsService = new PostsService();

export default postsService