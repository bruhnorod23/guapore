require "test_helper"

class FormularioPdfControllerTest < ActionDispatch::IntegrationTest
  test "should get send_email" do
    get formulario_pdf_send_email_url
    assert_response :success
  end
end
