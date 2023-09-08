import { lazy } from 'react'

const s3 = require('aws-cdk-lib/aws-s3');

new s3.Bucket(this, 'id', {
    bucketName: 'bucket'
}); // Sensitive

const s32 = require('aws-cdk-lib/aws-s3');

new s32.Bucket(this, 'id', {
    bucketName: 'bucket'
}); // Sensitive

const HomePage = {
  path: '/',
  LazyRender: lazy(async () => await import('./home-page'))
}

export default HomePage
