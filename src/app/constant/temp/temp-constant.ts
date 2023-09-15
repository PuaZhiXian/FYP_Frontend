export class ClientConstant {

  //GENERAL DOCUMENTATION CODE
  public static readonly authorizationCode_RUBY = "gem install stripe";
  public static readonly authorizationCode_PYTHON = "pip install stripe";
  public static readonly authorizationCode_PHP = "composer require stripe/stripe-php";
  public static readonly authorizationCode_JAVA = "<dependency>\n" +
    "  <groupId>com.stripe</groupId>\n" +
    "  <artifactId>stripe-java</artifactId>\n" +
    "  <version>23.5.0</version>\n" +
    "</dependency>";

  public static readonly authorizationCode_NODE = "npm install --save stripe";
  public static readonly authorizationCode_GO = "go get github.com/stripe/stripe-go/v75";
  public static readonly authorizationCode_HTTP = "GET /api/v1/players?app_id=app_id&limit=limit&offset=offset HTTP/1.1\n" +
    "Accept: text/plain\n" +
    "Authorization: Basic YOUR_REST_API_KEY\n" +
    "Host: onesignal.com\n" +
    "\n";
}
