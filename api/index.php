<?php
// ini_set( "display_errors", 0); 
// header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization, *");

try {
     require_once('config.php');
     require __DIR__ . '/vendor/autoload.php';
     require_once('http-error.php');
     require_once('verify-access.php');
     require_once('jwt.php');

     require_once('DTOs.php');
     require_once('DAOs.php');
     require_once('dao/temperament.php');
     require_once('dao/char-details.php');
     require_once('dao/colors.php');
     
     require_once('RouteManager.php');
     require_once('routes.php');
     require_once('controller.php');


} catch (Exception $e) {
     http_response_code(500);
     echo $e->getMessage();
     die();
}


header('Content-Type: application/json');

// header('Content-Type: text/html');


function console_log($log) {
     header('Content-Type: text/html');

     echo "<hr/>";
     echo '<pre>';
     print_r($log);
     echo '</pre>'; 
     echo "<hr/>";
}

$scriptLocation = str_replace('/index.php', "", $_SERVER['SCRIPT_NAME']);
$context = str_replace($scriptLocation, "", $_SERVER['REQUEST_URI']);
$method = $_SERVER['REQUEST_METHOD'];
$queryParams = $_SERVER['QUERY_STRING'];
$requestBody = file_get_contents('php://input');


$context = explode("?", $context)[0];

// print("\n\n");
// print("Script Location:\t" . $scriptLocation . "\n");
// print("Context:\t" . $context . "\n");
// print("Method:\t\t" . $method . "\n");
// print("QueryParams:\t" . $queryParams . "\n");
// print("Request Body:\t" . $requestBody . "\n");
// print("\n\n");
// var_dump($routeManager->routes);
// print("\n\n");


// var_dump($_SERVER);
// echo json_encode($routeManager);



$found = false;
foreach ($routeManager->routes as &$route) {

     if($method === $route->method && $context === $route->endpoint) {
          $found = true;

          if($route->callBack) {

               try {

                    if(!method_exists('Controller', $route->callBack )) {
                         throw new Exception("Internal server error. Method '". $route->callBack . "' dosen't exist in Controller");
                    } 

                    $queryParamsObj = new stdClass; 

                    if(strlen($queryParams) > 0) {

                         $queryParamsExplodedFirst = explode("&", $queryParams);

                         foreach ($queryParamsExplodedFirst as $value) {
                         
                              $queryParamValueExplode = explode("=", $value);

                              $key = "";
                              $value = "";

                              if(sizeof($queryParamValueExplode) > 0 && $queryParamValueExplode[0]) {
                                   $key = (string)$queryParamValueExplode[0];
                                   $key = str_replace("%22","",$key);
                              }

                              if(sizeof($queryParamValueExplode) > 1 && $queryParamValueExplode[1]) {
                                   $value = (string)$queryParamValueExplode[1];
                                   $value = str_replace("%22","",$value);
                              }

                              $queryParamsObj->$key = $value;
                         }
                      
                    }
                         

                    http_response_code(200);

                    $callBackInvoke = call_user_func(array('Controller', $route->callBack), $queryParamsObj, $requestBody );

                    if($callBackInvoke) {
                         if(empty($callBackInvoke)) {
                              header_remove("Content-Type"); 
                              http_response_code(204);
                              die();
                         } else if(is_string($callBackInvoke)) {
                              echo $callBackInvoke;
                              header('Content-Type: text/plain');
                              header('Content-length: ' . strlen($callBackInvoke));
                              die();
                         } else {
                              $output = json_encode($callBackInvoke);
                              echo $output;
                              header('Content-Type: application/json');
                              header('Content-length: ' . strlen($output));
                              die();
                         }
                    }
           
               } catch (Exception $e) {
                    new HTTPError(500, $e->getMessage());
               }

          } else {
               new HTTPError(500, "No method assigned to current endpoint");
          }
     }

}



if($found === false) {
     new HTTPError(404, "Not found.");
}





// if (empty($_GET)) {
//      getCharsList($conn);
// } else {
//      $id = $_GET['id'];
//      getCharacterDetails($conn, $id);
// }


// function getCharsList($conn) {
//      // SELECT
//      $sql_charsList = "SELECT * FROM `postacie`";
//      $result_charsList = mysqli_query($conn, $sql_charsList);

//      // Enity
//      $charsList_enity_DAO = array();
//      while ($row = mysqli_fetch_array($result_charsList)) {
//           array_push($charsList_enity_DAO, new char_enity_DAO($row["id"], $row["imie"], $row["nazwisko"], $row["zdjecie_profilowe"]));
//      }

//      //console_log($charsList_enity_DAO);
//      echo json_encode($charsList_enity_DAO);
// }


// //Character details

// function getCharacterDetails($conn, $id) {
//      $dir = PROFILEPIC_DIR.'/'.$id;

//      // SELECTS
//      $sql_mainInfo = "SELECT id, imie, nazwisko, birthday, death, osobowosc_mbti, opis_wygladu, historia FROM `postacie` where `id` = $id limit 1";
//      $result_mainInfo = mysqli_query($conn, $sql_mainInfo);

     

//      if($result_mainInfo->num_rows == 0) {
//           $error = new Error_DTO("W bazie nie istnieje postac o podanym ID.");

//           echo json_encode($error);
//           return;
//      }


//      $sql_colors = "SELECT * FROM `kolory` where `id_postaci` = $id limit 1";
//      $result_colors = mysqli_query($conn, $sql_colors);

//      $sql_temperament = "SELECT * FROM `temperament` where `id_postaci` = $id limit 1";
//      $result_temperament = mysqli_query($conn, $sql_temperament);

//      $sql_waga = "SELECT * FROM `waga` where `id_postaci` = $id limit 1";
//      $result_waga = mysqli_query($conn, $sql_waga);

//      $sql_wzrost = "SELECT * FROM `wzrost` where `id_postaci` = $id limit 1";
//      $result_wzrost = mysqli_query($conn, $sql_wzrost);

//      $sql_cytaty = "SELECT * FROM `cytaty` WHERE `id_postaci` = $id";
//      $result_cytaty = mysqli_query($conn, $sql_cytaty);
     
//      $sql_ciekawostki = "SELECT * FROM `ciekawostki` WHERE `id_postaci` = $id";
//      $result_ciekawostki = mysqli_query($conn, $sql_ciekawostki);

//      // Enity bjects

//      $postacie_enity_DAO = mysqli_fetch_object($result_mainInfo, 'postacie_enity_DAO');
//      $kolory_enity_DAO = mysqli_fetch_object($result_colors, 'kolory_enity_DAO');
//      $temperament_enity_DAO = mysqli_fetch_object($result_temperament, 'temperament_enity_DAO');
//      $waga_enity_DAO = mysqli_fetch_object($result_waga, 'waga_enity_DAO');
//      $wzrost_enity_DAO = mysqli_fetch_object($result_wzrost, 'wzrost_enity_DAO');

//      $cytaty_enity_DAO = array();
//      while ($row = mysqli_fetch_array($result_cytaty)) {
//           array_push($cytaty_enity_DAO, $row["cytat"]);
//      }

//      $ciekawostki_enity_DAO = array();
//      while ($row = mysqli_fetch_array($result_ciekawostki)) {
//           array_push($ciekawostki_enity_DAO, $row["ciekawostka"]);
//      }

//      $profilePics = new profilePics_DTO($dir);

//      //console_log($result_mainInfo);
//      //console_log($profilePics);
//      //console_log($conn);


//      $REST = new CharDetails_REST_DTO($postacie_enity_DAO, $profilePics, $kolory_enity_DAO, $temperament_enity_DAO, $waga_enity_DAO, $wzrost_enity_DAO, $cytaty_enity_DAO, $ciekawostki_enity_DAO);

//      // console_log($REST);
//      echo json_encode($REST);
// }

// $conn->close();


?>
