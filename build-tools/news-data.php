<?php
date_default_timezone_set('America/Chicago');
include __DIR__.'/../website/news/include.php';

echo json_encode(array(getNewsId(), renderNews()));
