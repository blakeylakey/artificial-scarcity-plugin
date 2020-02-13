<?php
/*
Plugin Name: Artificial Scarcity Timer
Plugin URI: https://github.com/blakeylakey/
Description: Artificial Scarcity Timer WordPress Plugin
Author: blake
Author URI: https://github.com/blakeylakey/
Version: 1.0.0

*/

if(!defined('ABSPATH')) {
    exit;
}

function artificial_scarcity( $atts = [], $content = null, $tag = '' ){
	$atts = array_change_key_case((array)$atts, CASE_LOWER);

	$as_atts = shortcode_atts([
		'color_theme' => 'color',
		'layout' => 'days,hours,minutes,seconds',
		'timeline' => 'day'
	], $atts, $tag);

	wp_enqueue_script('artificial_scarcity_script', plugins_url().'/artificial-scarcity/dist/app.bundle.js');

	$as_output = '';
	$as_output .= "<div id=\"artificial-scarcity-root\" ";
	$as_output .= "data-color_theme=\"" . $as_atts['color_theme'] . "\" ";
	$as_output .= "data-layout=\"" . $as_atts['layout'] . "\" ";
	$as_output .= "data-timeline=\"" . $as_atts['timeline'] . "\" ";
	$as_output .= "></div>";

    return $as_output;
}

function artificial_scarcity_shortcodes_init(){
	add_shortcode( 'artificial_scarcity', 'artificial_scarcity' );
}

add_action('init', 'artificial_scarcity_shortcodes_init');