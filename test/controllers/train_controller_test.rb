require "test_helper"

class TrainControllerTest < ActionDispatch::IntegrationTest
  test "should get train" do
    get train_train_url
    assert_response :success
  end
end
