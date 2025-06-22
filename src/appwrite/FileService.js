import { Client, ID, Storage } from "appwrite";
import conf from "../Config/config";


class FileService {
    client = new Client();
    bucket;

    constructor() {
        this.client.
            setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId);

        this.bucket = new Storage(this.client);
    }

    async uploadFile(file) {
        try {

            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            );

        } catch (error) {
            console.log("AppWrite Service:: upload-file :: error", error);
            return false
        }
    }


    async deleteFile(fileId) {

        try {

            await this.bucket.deleteFile(conf.bucketId, fileId);
            return true;

        } catch (error) {
            console.log("AppWrite Service:: delete-file :: error", error);
            return false;
        }
    }


    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.bucketId,
            fileId);
    }

}

const fileService = new FileService()
export default fileService