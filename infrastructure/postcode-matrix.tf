# variable "app_name" {
# }

resource "aws_lambda_function" "postcode_matrix" {
   function_name = "ScaffoldamplesPostcodeMatrix"

   s3_bucket = "scaffoldamples-serverless"
   s3_key    = "v${var.app_version}/postcode-matrix.zip"

   handler = "index.handler"
   runtime = "nodejs12.x"

   role = aws_iam_role.lambda_exec.arn
}
