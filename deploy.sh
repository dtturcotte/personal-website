#!/bin/bash
set -e

echo "Running Personal Website deployment script for production"

S3_DOMAIN="s3://dtturcotte/"
CLOUDFRONT_DISTRIBUTION_ID="E383UKHODQ8B4U"
# profile found in ~/.aws/config
PROFILE="eb-cli"

if [ "$1" == "no-assets" ]
then
	echo "[NOTE] Ignoring ./build/assets folder to speed up deployment"
else
    echo "[NOTE] Deploying all folders in ./build"
fi

# Sanity check: make sure we can run S3 and CloudFront commands
aws s3 ls --profile $PROFILE $S3_DOMAIN
aws cloudfront get-distribution-config --profile $PROFILE --id $CLOUDFRONT_DISTRIBUTION_ID

# Build project for production
NODE_ENV=production npm run build

# Sync project to S3
if [ "$1" == "no-assets" ]
then
	aws s3 sync --profile $PROFILE --acl=public-read ./build $S3_DOMAIN --exclude 'assets/*'
else
	aws s3 sync --profile $PROFILE --acl=public-read ./build $S3_DOMAIN
fi

# Invalidate CloudFront
aws cloudfront create-invalidation --profile $PROFILE --distribution-id=$CLOUDFRONT_DISTRIBUTION_ID --paths "/*"

echo "Personal Website deploy to production environment complete."
