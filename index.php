<?php

/*
  Plugin Name: wpReact plugin
  Version: 1.0
  Author: alexturik
  Author URI: https://github.com/turovskiy
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class WpReact {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('WpReactScript', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('WpReactStyle', plugin_dir_url(__FILE__) . 'build/index.css');
    
    register_block_type('wpreactnamespace/wp-react-guten-block', array(
      'render_callback' => array($this, 'renderCallback'),
      'editor_script' => 'WpReactScript',
      'editor_style' => 'WpReactStyle'
    ));
  }

  function renderCallback($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('wpReactFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('wpReactFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start(); 
    
    ?>
    <div class="wpReact-update-me"><pre style="display: none;">

    <?php 
    echo wp_json_encode($attributes) 
    ?>

    </pre></div>

    <?php 
    
    return ob_get_clean();
    
  }

  function renderCallbackBasic($attributes) {
    return (
      '<div class="wpReact-frontend">
      Hello AMIGO , колір неба' 
      . $attributes['input1'] 
      . ' а колір трави  ' 
      . $attributes['input2'] . 
      '.</div>'
  );
  }
}

$bradsBoilerplate = new WpReact();