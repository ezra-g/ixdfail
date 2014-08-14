<?php
/**
 * @file
 * albums.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function albums_taxonomy_default_vocabularies() {
  return array(
    'vocabulary_10' => array(
      'name' => 'Image Categories',
      'machine_name' => 'vocabulary_10',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
    'vocabulary_13' => array(
      'name' => 'Artists',
      'machine_name' => 'vocabulary_13',
      'description' => '',
      'hierarchy' => 0,
      'module' => 'features_artists',
      'weight' => 0,
    ),
    'vocabulary_3' => array(
      'name' => 'Event Type',
      'machine_name' => 'vocabulary_3',
      'description' => '',
      'hierarchy' => 2,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
