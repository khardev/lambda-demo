# Output value definitions

output "function_name" {
  description = "Name of the Lambda function."

  value = aws_lambda_function.lamda_demo.function_name
}
