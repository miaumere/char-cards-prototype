<?php
$servername = "localhost";
$username = "alea";
$password = "kinia";
$db = "alea";

$numerid = $_GET["id"];

if($numerid == "")
{
  $numerid = 1;
}

$query1 = 'SELECT * FROM postacie WHERE id='.$numerid.'';
$query2 = 'SELECT * FROM temperament WHERE id='.$numerid.'';
$query3 = 'SELECT * FROM kolory WHERE id='.$numerid.'';
$query4 = 'SELECT * FROM waga WHERE id='.$numerid.'';
$query5 = 'SELECT * FROM wzrost WHERE id='.$numerid.'';

$polaczenie1 = @new mysqli($servername, $username, $password, $db);
if (mysqli_connect_errno() != 0)
{
	echo '<p>Wystąpił błąd połączenia: ' . mysqli_connect_error() . '</p>';
}
else
{
    $wynik1 = @$polaczenie1 -> query($query1);
    $wynik1_all = @$polaczenie1->query("SELECT * FROM postacie");
    $danemysqli1 = $wynik1 -> fetch_array();

    $wynik2 = @$polaczenie1 -> query($query2);
    $danemysqli2 = $wynik2 -> fetch_array();

    $wynik3 = @$polaczenie1 -> query($query3);
    $danemysqli3 = $wynik3 -> fetch_array();

    $wynik4 = @$polaczenie1 -> query($query4);
    $danemysqli4 = $wynik4 -> fetch_array();

    $wynik5 = @$polaczenie1 -> query($query5);
    $danemysqli5 = $wynik5 -> fetch_array();
}


/* Zamykamy połączenie z bazą */
$polaczenie1->close();

?>




<!DOCTYPE html>
<html lang="en">
<head>
        
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo ''.$danemysqli1['imie'].' '.$danemysqli1['nazwisko'].''; ?></title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" media="only screen and (max-device-width: 480px)" href="small-device.css" />

<meta name="theme-color" content="#A21CE8" />

    <link rel="Shortcut icon" href="./img/favico.jpg" />

	
	<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-110500530-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-110500530-1');
</script>


</head>

<body>






<div class="error">
  <?php

$error = 0;

$ilepolsqli1 = (count ($danemysqli1)/2);
$ilepolsqli2 = (count ($danemysqli2)/2);
$ilepolsqli3 = (count ($danemysqli3)/2);
$ilepolsqli4 = (count ($danemysqli4)/2);
$ilepolsqli5 = (count ($danemysqli5)/2);

for ($i = 0; $i < $ilepolsqli1; $i++ )
{
  if ($danemysqli1[$i] == "")
  {
   $error++;
  }
}

$ilepolsqli2 = (count ($danemysqli2)/2);
for ($i = 0; $i < $ilepolsqli2; $i++ )
{
  if ($danemysqli2[$i] == "")
  {
   $error++;
  }
}

$ilepolsqli3 = (count ($danemysqli3)/2);
for ($i = 0; $i < $ilepolsqli3; $i++ )
{
  if ($danemysqli3[$i] == "")
  {
   $error++;
  }
}

$ilepolsqli4 = (count ($danemysqli4)/2);
for ($i = 0; $i < $ilepolsqli4; $i++ )
{
  if ($danemysqli4[$i] == "")
  {
   $error++;
  }
}

$ilepolsqli5 = (count ($danemysqli5)/2);
for ($i = 0; $i < $ilepolsqli5; $i++ )
{
  if ($danemysqli5[$i] == "")
  {
   $error++;
  }
}

for ($i = 0; $i < $ilepolsqli1; $i++ )
{
  if ($danemysqli1[$i] == "")
  {
   echo "Tabela <b>postacie</b> - kol <b>[ $i ]</b><br>";
  }
}

$ilepolsqli2 = (count ($danemysqli2)/2);
for ($i = 0; $i < $ilepolsqli2; $i++ )
{
  if ($danemysqli2[$i] == "")
  {
   echo "Tabela <b>temperament</b> - kol <b>[ $i ]</b><br>";
  }
}

$ilepolsqli3 = (count ($danemysqli3)/2);
for ($i = 0; $i < $ilepolsqli3; $i++ )
{
  if ($danemysqli3[$i] == "")
  {
   echo "Tabela <b>kolory</b> - kol <b>[ $i ]</b><br>";
  }
}

$ilepolsqli4 = (count ($danemysqli4)/2);
for ($i = 0; $i < $ilepolsqli4; $i++ )
{
  if ($danemysqli4[$i] == "")
  {
   echo "Tabela <b>waga</b> - kol <b>[ $i ]</b><br>";
  }
}

$ilepolsqli5 = (count ($danemysqli5)/2);
for ($i = 0; $i < $ilepolsqli5; $i++ )
{
  if ($danemysqli5[$i] == "")
  {
   echo "Tabela <b>wzrost</b> - kol <b>[ $i ]</b><br>";
  }
}



?>

</div>




<div class="spis-tresci">

<!-- START Kontrola nieuzupelnionych pol */ -->



<!-- END Kontrola nieuzupelnionych pol */ -->





<?php

    /* Wyliczanie daty */

                  $data_urodzin = $danemysqli1['birthday'];
                  $data_smierci = $danemysqli1['death'];

                  $przezyl_lat = ((strtotime($data_smierci) - strtotime($data_urodzin))) / (60*60*24) / 365;

                  $wyliczone = round(($przezyl_lat - round($przezyl_lat))*365);


                  $przezyl_lat_round = round($przezyl_lat);




                  

    /* Wyliczanie daty */




    while ($row = $wynik1_all->fetch_assoc()) 
    {
        printf ('<a href="?id=%s">[%s]</a> %s %s<br>', $row["id"], $row["id"], $row["imie"], $row["nazwisko"]);
    }


/* Usuwamy wynik zapytania z pamięci */
$wynik1->close();
$wynik2->close();
$wynik3->close();
$wynik4->close();
$wynik5->close();

$wynik1_all->close();


if($error > 0)
{
echo "tutaj die";
}
 

 
?>

</div>






  <div class="container">






        <div class="imgblock"><img src="./profilepic/<?php echo $numerid; ?>.jpg"></img> </div>
        <div class="danepersonalne">

        <ul class="list1">
          <li>
            <span class="head">Imie</span>
            <span class="value"><?php echo $danemysqli1['imie']; ?></span>
          </li>
          <li>
            <span class="head">Nazwisko</span>
            <span class="value"><?php echo $danemysqli1['nazwisko']; ?></span>
          </li>
          <li>
            <span class="head">Data urodzenia</span>
            <span class="value"><?php echo $danemysqli1['birthday']; ?></span>
          </li>






<?php if ($danemysqli1['death'] == "X")
        {
          echo '<li>
            <span class="head">Status</span>

            <span class="value">
              <span class="life">Zyjacy</span>
            </span>
          </li>';
        }
        else
        {

echo '<li>
            <span class="head">Status</span>
            <span class="value">';

              echo '<span class="die">Trup od: '.$danemysqli1['death'].' </span>';

echo '</span></li>';



echo '<li>
            <span class="head"></span>
            <span class="value" style="text-indent: 10px">';

              echo ' Przezyl '.$przezyl_lat_round.' lat i '.$wyliczone.' dni.'; 

echo '</span></li>';




        }
?>







          <li>
            <span class="head mobile">Osobowosc MBTI</span>
            <span class="value"><?php echo $danemysqli1['osobowosc-mbti']; ?></span>
            
          </li>
          <li>
            <span class="head">Temperament</span>
            
            
            <span class="value temperament">Sangwinik       <?php echo $danemysqli2['sangwinik']; ?>%</span>
            <span class="value temperament">
              <div class="temperamentbar"> <div class="temperamentdata" style="width: <?php echo $danemysqli2['sangwinik']; ?>%;"></div> </div>
            </span> 
            
            <span class="value temperament">Choleryk         <?php echo $danemysqli2['choleryk']; ?>%</span>
            <span class="value temperament">
              <div class="temperamentbar"> <div class="temperamentdata" style="width: <?php echo $danemysqli2['choleryk']; ?>%;"></div> </div>
            </span> 
            
            <span class="value temperament">Flegmatyk       <?php echo $danemysqli2['flegmatyk']; ?>%</span>
            <span class="value temperament">
              <div class="temperamentbar"> <div class="temperamentdata" style="width: <?php echo $danemysqli2['flegmatyk']; ?>%;"></div> </div>
            </span> 

            <span class="value temperament">Melancholik    <?php echo $danemysqli2['melancholik']; ?>%</span>
            <span class="value temperament">
              <div class="temperamentbar"> <div class="temperamentdata" style="width: <?php echo $danemysqli2['melancholik']; ?>%;"></div> </div>
            </span> 
          </li>
        </ul>

<div style="clear: both;"></div>

        </div>

<br>
<div class="skoraopis">Kolor skory</div>

<div class="colorscontainer" style="background: <?php echo $danemysqli3['skora']; ?>;">
            
        <!-- Start Ubranie -->

        <div class="ubranie">

            <div class="ubranie1" style="background: <?php echo $danemysqli3['ubior_1_dominujacy']; ?>;" ><span class="title">Kolor 1 - Dominujacy</span> <span class="value"><?php echo $danemysqli3['ubior_1_dominujacy_nazwa']; ?></span></div>


            <div class="ubraniecontainer">

              <div class="ubranie2" style="background: <?php echo $danemysqli3['ubior_2']; ?>;" ><span class="title">Kolor 2</span> <span class="value"><?php echo $danemysqli3['ubior_2_nazwa']; ?></span></div>


              <div class="ubranie3" style="background: <?php echo $danemysqli3['ubior_3']; ?>;" ><span class="title">Kolor 3</span> <span class="value"><?php echo $danemysqli3['ubior_3_nazwa']; ?></span></div>
              <div style="clear: both;"></div>

            </div>
        </div>
        <!-- End Ubranie -->






        <!-- Start Kolor oczu -->
        <div class="koloroczu" style="background: radial-gradient(ellipse at center, rgba(3,3,3,1) 0%,rgba(30,30,30,1) 26%,<?php echo $danemysqli3['oczy_obwodka']; ?> 38%,<?php echo $danemysqli3['oczy_teczowka']; ?> 62%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+d */"></div>
        <!-- End Kolor oczu -->





        <!-- Start Kolor wlosow -->
        <div class="kolorwlosowmain"> Kolor wlosow
          <div style="background: <?php echo $danemysqli3['wlosy']; ?>;" class="kolorwlosow">
          <?php echo $danemysqli3['wlosy_nazwa']; ?></div>
          </div>
        <!-- End Kolor wlosow -->



        <div class="colorshtml">

<pre>

Kolor 1:            <input type="text" value="<?php echo $danemysqli3['ubior_1_dominujacy']; ?>" onclick="this.focus();this.select();document.execCommand('copy');" readonly></input>
Kolor 2:            <input type="text" value="<?php echo $danemysqli3['ubior_2']; ?>" onclick="this.focus();this.select();document.execCommand('copy');" readonly></input>
Kolor 3:            <input type="text" value="<?php echo $danemysqli3['ubior_3']; ?>" onclick="this.focus();this.select();document.execCommand('copy');" readonly></input>
Kolor Skora:        <input type="text" value="<?php echo $danemysqli3['skora']; ?>" onclick="this.focus();this.select();document.execCommand('copy');" readonly></input>
Kolor Wlosy:        <input type="text" value="<?php echo $danemysqli3['wlosy']; ?>" onclick="this.focus();this.select();document.execCommand('copy');" readonly></input>
Kolor Oko obwódka:  <input type="text" value="<?php echo $danemysqli3['oczy_obwodka']; ?>" onclick="this.focus();this.select();document.execCommand('copy');" readonly></input>
Kolor Oko teczówka: <input type="text" value="<?php echo $danemysqli3['oczy_teczowka']; ?>" onclick="this.focus();this.select();document.execCommand('copy');" readonly></input>

</pre>
      </div>




</div>

<br>
<hr class="style">
<br>


<!-- START Tabela wzrostu/wagi -->
  <div class="wagawzrosttable">
    <div class="timerow">
      <div class="timecell timecell-title">Opis</div>
      <div class="timecell">Niemowle<br>(0-3)</div>
      <div class="timecell">Dziecko<br>(3-11)</div>
      <div class="timecell">Nastolatek<br>(11-15)</div>
      <div class="timecell">Mlody<br>dorosly<br>(15-20)</div>
      <div class="timecell">Dorosly<br>(20+)</div>
    </div>
    <div class="wagarow">
      <div class="wagacell wagacell-title">Waga</div>
      <div class="wagacell value"><?php echo $danemysqli4['niemowle']; ?></div>
      <div class="wagacell value"><?php echo $danemysqli4['dziecko']; ?></div>
      <div class="wagacell value"><?php echo $danemysqli4['nastolatek']; ?></div>
      <div class="wagacell value"><?php echo $danemysqli4['mlodydorosly']; ?></div>
      <div class="wagacell value"><?php echo $danemysqli4['dorosly']; ?></div>
    </div>
    <div class="wzrostrow">
      <div class="wzrostcell wzrostcell-title">Wzrost</div>
      <div class="wzrostcell value"><?php echo $danemysqli5['niemowle']; ?></div>
      <div class="wzrostcell value"><?php echo $danemysqli5['dziecko']; ?></div>
      <div class="wzrostcell value"><?php echo $danemysqli5['nastolatek']; ?></div>
      <div class="wzrostcell value"><?php echo $danemysqli5['mlodydorosly']; ?></div>
      <div class="wzrostcell value"><?php echo $danemysqli5['dorosly']; ?></div>
    </div>
  </div>
<!-- END Tabela wzrostu/wagi -->
<br><br>

</div>

<div style="clear: both;"></div> <!-- Do spisu tresci CLEAR -->

</body>

znaki rozpoznawcze
styl ubierania sie

cechy dominujace charakteru
zainteresowania

cytaty

<?php
    $polaczenie1 -> close();
?>












