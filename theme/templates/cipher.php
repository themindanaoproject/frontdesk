<?php

$i=2;
$k=12;
$b=2/12;
while($k>0){
    echo '.border-w-'.$k.' {border-width: '.round($i,2).'em;}<br>';
    $k--;
    $i = $i - $b;
}

// $i=10;
// $k=10;
// $b=10/10;
// while($k>0){
//     echo '.fw-'.$k.' {font-weight: '.($i*100).';}<br>';
//     $k--;
//     $i = $i - $b;
// }
