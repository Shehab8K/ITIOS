<?php

class Weather{
    private $api_key;
    private $api;
    private $client;

    public function __construct($api,$api_key){
        $this->api = $api;
        $this->api_key = $api_key;
        $this->client =  new GuzzleHttp\Client();
    }

    public function getWeatherData($id){
      $url = $this->api.$id.$this->api_key;
      $res = $this->client->request('GET', $url);
      return json_decode($res->getBody());
    //  return "Hello world";

    }
}
?>