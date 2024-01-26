import { Injectable } from "@nestjs/common";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Express } from "express";
@Injectable()
export class ImageService {
  private readonly s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SECRET,
      },
    });
  }

  async getSignedUploadUrl(fileName: string): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: "instaclone-uploadsss",
      Key: `report_images/${fileName}`,
    });
    const signedUrl = await getSignedUrl(this.s3Client, command, {
      expiresIn: 60,
    });
    return signedUrl;
  }
  // 서명된 url 을 가지고
  // s3 에 업로드 합니다.
  // 그런데 fileBuffer 를 받아야 하는데
  async uploadFileToS3(file: Express.Multer.File): Promise<string>{
    const bucketName = "instaclone-uploadsss";
    const key = `report_images/${file.originalname}`
    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body:file.buffer,
    });
   await this.s3Client.send(command);
    const uploadedFileUrl = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
    return uploadedFileUrl;
  
  }
}
