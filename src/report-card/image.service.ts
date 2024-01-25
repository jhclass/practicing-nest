import { Injectable } from "@nestjs/common";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
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
      Key: `reportImages/${fileName}`,
    });
    const signedUrl = await getSignedUrl(this.s3Client, command, {
      expiresIn: 60,
    });
    return signedUrl;
  }
}
