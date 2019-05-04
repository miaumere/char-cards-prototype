<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require('config.php');
require('DTOs.php');
require('DAOs.php');

header("Access-Control-Allow-Origin: *");

function console_log($log) {
     echo "<hr/>";
     echo '<pre>';
     print_r($log);
     echo '</pre>'; 
     echo "<hr/>";
}


// Create connection
$conn = new mysqli(DB_SERVERNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);
mysqli_set_charset($conn,"utf8");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
// echo "Connected successfully<br><hr>";


if (empty($_GET)) {
     getCharsList($conn);
} else {
     $id = $_GET['id'];
     getCharacterDetails($conn, $id);
}


function getCharsList($conn) {
     // SELECT
     $sql_charsList = "SELECT * FROM `postacie`";
     $result_charsList = mysqli_query($conn, $sql_charsList);

     // Enity
     $charsList_enity_DAO = array();
     while ($row = mysqli_fetch_array($result_charsList)) {
          array_push($charsList_enity_DAO, new char_enity_DAO($row["id"], $row["imie"], $row["nazwisko"], $row["zdjecie_profilowe"]));
     }

     //console_log($charsList_enity_DAO);
     echo json_encode($charsList_enity_DAO);
}


//Character details

function getCharacterDetails($conn, $id) {
     $dir = PROFILEPIC_DIR.'/'.$id;

     // SELECTS
     $sql_mainInfo = "SELECT id, imie, nazwisko, birthday, death, osobowosc_mbti, opis_wygladu, historia FROM `postacie` where `id` = $id limit 1";
     $result_mainInfo = mysqli_query($conn, $sql_mainInfo);

     

     if($result_mainInfo->num_rows == 0) {
          $error = new Error_DTO("W bazie nie istnieje postac o podanym ID.");

          echo json_encode($error);
          return;
     }


     $sql_colors = "SELECT * FROM `kolory` where `id_postaci` = $id limit 1";
     $result_colors = mysqli_query($conn, $sql_colors);

     $sql_temperament = "SELECT * FROM `temperament` where `id_postaci` = $id limit 1";
     $result_temperament = mysqli_query($conn, $sql_temperament);

     $sql_waga = "SELECT * FROM `waga` where `id_postaci` = $id limit 1";
     $result_waga = mysqli_query($conn, $sql_waga);

     $sql_wzrost = "SELECT * FROM `wzrost` where `id_postaci` = $id limit 1";
     $result_wzrost = mysqli_query($conn, $sql_wzrost);

     $sql_cytaty = "SELECT * FROM `cytaty` WHERE `id_postaci` = $id";
     $result_cytaty = mysqli_query($conn, $sql_cytaty);
     
     $sql_ciekawostki = "SELECT * FROM `ciekawostki` WHERE `id_postaci` = $id";
     $result_ciekawostki = mysqli_query($conn, $sql_ciekawostki);

     // Enity bjects

     $postacie_enity_DAO = mysqli_fetch_object($result_mainInfo, 'postacie_enity_DAO');
     $kolory_enity_DAO = mysqli_fetch_object($result_colors, 'kolory_enity_DAO');
     $temperament_enity_DAO = mysqli_fetch_object($result_temperament, 'temperament_enity_DAO');
     $waga_enity_DAO = mysqli_fetch_object($result_waga, 'waga_enity_DAO');
     $wzrost_enity_DAO = mysqli_fetch_object($result_wzrost, 'wzrost_enity_DAO');

     $cytaty_enity_DAO = array();
     while ($row = mysqli_fetch_array($result_cytaty)) {
          array_push($cytaty_enity_DAO, $row["cytat"]);
     }

     $ciekawostki_enity_DAO = array();
     while ($row = mysqli_fetch_array($result_ciekawostki)) {
          array_push($ciekawostki_enity_DAO, $row["ciekawostka"]);
     }

     $profilePics = new profilePics_DTO($dir);

     //console_log($result_mainInfo);
     //console_log($profilePics);
     //console_log($conn);


     $REST = new CharDetails_REST_DTO($postacie_enity_DAO, $profilePics, $kolory_enity_DAO, $temperament_enity_DAO, $waga_enity_DAO, $wzrost_enity_DAO, $cytaty_enity_DAO, $ciekawostki_enity_DAO);

     // console_log($REST);
     echo json_encode($REST);
}






$conn->close();
?>