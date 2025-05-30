import dotenv from 'dotenv';

dotenv.config();

class Config {
  private static instance: Config;
  
//   public readonly AWS_REGION: string;
//   public readonly AWS_ACCESS_KEY: string;
//   public readonly AWS_SECRET_KEY: string;
//   public readonly AWS_BUCKET_NAME: string;
  
//   public readonly RESEND_API_KEY: string;

//   public readonly REDIS_HOST: string;
//   public readonly REDIS_PORT: string;
//   public readonly REDIS_PASSWORD: string;

  public readonly MONGO_URI: string;

  public readonly SERVER_PORT: string;

  private constructor() {
    // if (!process.env.AWS_REGION || !process.env.AWS_ACCESS_KEY || !process.env.AWS_SECRET_KEY 
    //   || !process.env.AWS_BUCKET_NAME || !process.env.RESEND_API_KEY 
    //   || !process.env.REDIS_HOST || !process.env.REDIS_PORT || !process.env.DB_HOST 
    //   || !process.env.DB_PORT || !process.env.DB_DATABASE || !process.env.DB_USER 
    //   || !process.env.DB_PASS) {
    //   throw new Error('Missing important environment variables');
    // }

    // this.AWS_REGION = process.env.AWS_REGION;
    // this.AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
    // this.AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
    // this.AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
    // this.RESEND_API_KEY = process.env.RESEND_API_KEY;
    // this.REDIS_HOST = process.env.REDIS_HOST;
    // this.REDIS_PORT = process.env.REDIS_PORT;
    // this.REDIS_PASSWORD = process.env.REDIS_PASSWORD!;
    this.MONGO_URI = process.env.MONGO_URI!;
    this.SERVER_PORT = process.env.SERVER_PORT || '3000';
  }

  public static getInstance(): Config {
    if (!Config.instance) {
      Config.instance = new Config();
    }
    return Config.instance;
  }
}

export const config = Config.getInstance();