<?php
// Exit if accessed directly
if ( !defined( 'ABSPATH' ) ) exit;

// BEGIN ENQUEUE PARENT ACTION
// AUTO GENERATED - Do not modify or remove comment markers above or below:

if ( !function_exists( 'chld_thm_cfg_locale_css' ) ):
    function chld_thm_cfg_locale_css( $uri ){
        if ( empty( $uri ) && is_rtl() && file_exists( get_template_directory() . '/rtl.css' ) )
            $uri = get_template_directory_uri() . '/rtl.css';
        return $uri;
    }
endif;
add_filter( 'locale_stylesheet_uri', 'chld_thm_cfg_locale_css' );

if ( !function_exists( 'chld_thm_cfg_parent_css' ) ):
    function chld_thm_cfg_parent_css() {
        wp_enqueue_style( 'chld_thm_cfg_parent', trailingslashit( get_template_directory_uri() ) . 'style.css', array(  ) );
    }
endif;
add_action( 'wp_enqueue_scripts', 'chld_thm_cfg_parent_css', 10 );

// END ENQUEUE PARENT ACTION

// Hook into enqueue scripts hook
add_action( 'wp_enqueue_scripts', 'my_enqueue_theme_js' );
function my_enqueue_theme_js() {

    // Register our theme JavaScript
	wp_register_script(
	  'my-theme-frontend',
	  get_stylesheet_directory_uri() . '/build/index.js',
	  ['wp-element'],
	  time(), // Change this to null for production
	  true
    );
    
    // Only enqueue our JavaScript if our React Template is used
    if( is_page_template( 'react-template.php' ) ) {
        wp_enqueue_script( 'my-theme-frontend' );
    }

}