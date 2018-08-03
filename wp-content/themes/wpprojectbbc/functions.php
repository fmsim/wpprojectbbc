<?php
  /** Enqueue styles and scripts **/
  function project_bbc_styles_scripts() {
    wp_enqueue_style('main-css', get_template_directory_uri() . '/css/main.css', array(), '1.0.0', 'all');
    wp_enqueue_style( 'style', get_stylesheet_uri() );
  }

  add_action('wp_enqueue_scripts', 'project_bbc_styles_scripts');
