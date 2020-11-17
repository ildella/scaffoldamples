resource "aws_apigatewayv2_api" "postcode_matrix_gateway" {
  name          = "postcode-matrix-http-api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_route" "postcode_matrix_route" {
  api_id    = aws_apigatewayv2_api.postcode_matrix_gateway.id
  route_key = "$default"
}

resource "aws_apigatewayv2_stage" "postcode_matrix_stage" {
  api_id = aws_apigatewayv2_api.postcode_matrix_gateway.id
  name   = "postcode-matrix-dev"
}

# resource "aws_apigatewayv2_integration" "postcode_matrix_integration" {
#   api_id             = aws_apigatewayv2_api.postcode_matrix_gateway.id
#   integration_type   = "AWS_PROXY"
#   integration_method = "GET"
#   integration_uri    = "aws_lambda_function.postcode_matrix.invoke_arn"
# }

resource "aws_apigatewayv2_integration" "postcode_matrix_integration" {
  api_id           = aws_apigatewayv2_api.postcode_matrix_gateway.id
  integration_type = "AWS_PROXY"

  connection_type           = "INTERNET"
  # content_handling_strategy = "CONVERT_TO_TEXT"
  description               = "Lambda example"
  integration_method        = "POST"
  integration_uri           = aws_lambda_function.postcode_matrix.invoke_arn
  passthrough_behavior      = "WHEN_NO_MATCH"
}
