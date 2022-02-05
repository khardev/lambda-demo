DevOps Engineer Challenge.

Please find below steps :
1) I have created pipeline in GitHub.
2) There is node application contains lamda-funct folder(Application Code)
3) There is folder named lambda-demo as root folder which contains terraform code.
4) I have created workflow with yml pipeline named buildpipeline.yml.
5) Below are the details for buildpipeline.yml file:
  
  - trigger pipeline on push on branch "main" . 
  - checkout source code
  - Initialize node
  - Create zip of the source code
  - Init terraform, Validate and deploy lambda function, S3 bucket, Policy, HTTP gateway etc.
  - I'm using S3 as a artifactory to store artifact.
  - Deploy code on lambda function.
 6) once pipline is completed, try below URl to test:
   curl "https://hpzr9olwfh.execute-api.us-east-1.amazonaws.com/serverless_lambda_stage/hello?username=Terraform&password=xyz123" 
