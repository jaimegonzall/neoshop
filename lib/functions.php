<?php
/**
 * Perform a GET request to the API endpoint
 *
 * @param  string $method with the url to to the request
 *
 * @return array  with the result
 */
function get($method)
{
    /**
     * TODO: Desarrolla un método para obtener los resultados de los ficheros JSON. Preferiblemente utilizando cURL.
     */
}




    $url = './api/slides.json';
    $JSON = file_get_contents($url);
    $data = json_decode($JSON, true);
    $data_slider = $data["data"];



/* var_dump($data["data"][0]["title"]); */ /* ver en forma array */



$length = count($data["data"]);

for ($i = 0; $i < $length ; $i++) {

    $slider_title = $data_slider[$i]["title"];
    $slider_btn_txt = $data_slider[$i]["button_text"];
    $slider_btn_lnk = $data_slider[$i]["button_link"];
    $slider_img = $data_slider[$i]["bg_image"];

    $slider_html = "<div class='slider'>
                    <img src='".$slider_img."' alt='".$slider_title."' >
                    <h3>".$slider_title."</h3>
                    <a href='".$slider_btn_lnk."' class='slider_btn'>".$slider_btn_txt."</a>
                    </div>";


/* $arryays = array($slider_title, $slider_btn_txt, $slider_btn_lnk, $slider_img);

foreach($arryays as $value) {
    print $value;
  } */

}



/* $array = array("Jonathan","Sampson");

foreach($array as $value) {
  print $value;
}

 */

 