require "test_helper"

class FormularioControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get formulario_index_url
    assert_response :success
  end
end
