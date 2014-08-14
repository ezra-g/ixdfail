<?php
/**
 * @file
 * albums.features.inc
 */

/**
 * Implements hook_views_api().
 */
function albums_views_api() {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function albums_node_info() {
  $items = array(
    'album' => array(
      'name' => t('Album'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('title'),
      'help' => '',
    ),
  );
  return $items;
}
