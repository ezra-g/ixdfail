<?php
/**
 * @file
 * albums.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function albums_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'albums';
  $view->description = 'albums';
  $view->tag = '';
  $view->base_table = 'node';
  $view->human_name = '';
  $view->core = 0;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Defaults */
  $handler = $view->new_display('default', 'Defaults', 'default');
  $handler->display->display_options['title'] = 'Recommended Albums';
  $handler->display->display_options['items_per_page'] = 0;
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'none';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'full';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['pager']['options']['id'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  $handler->display->display_options['style_options']['columns'] = array(
    'field_amazon' => 'field_amazon',
    'title' => 'field_amazon',
    'field_original_release_date' => 'field_original_release_date',
    'taxonomyextra' => 'taxonomyextra',
  );
  $handler->display->display_options['style_options']['default'] = 'field_original_release_date';
  $handler->display->display_options['style_options']['info'] = array(
    'field_amazon' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'title' => array(
      'sortable' => 0,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'field_original_release_date' => array(
      'sortable' => 1,
      'default_sort_order' => 'asc',
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
    'taxonomyextra' => array(
      'align' => '',
      'separator' => '',
      'empty_column' => 0,
    ),
  );
  /* Header: Global: Text area */
  $handler->display->display_options['header']['text']['id'] = 'area';
  $handler->display->display_options['header']['text']['table'] = 'views';
  $handler->display->display_options['header']['text']['field'] = 'area';
  $handler->display->display_options['header']['text']['content'] = 'This partial list still needs some formatting to avoid looking like the east end of a west-bound mule, but I decided to put it up sooner rather than later.

The links below go to the Amazon purchase & instant download page, for immediate gratification.

You can also <a href="http://ezra-g.com/music/recommended-albums/feed">subscribe to the feed of albums</a> to learn when I add a new one to the list.';
  $handler->display->display_options['header']['text']['format'] = '1';
  /* Field: Content: Spotify Play button */
  $handler->display->display_options['fields']['field_spotify_play_button']['id'] = 'field_spotify_play_button';
  $handler->display->display_options['fields']['field_spotify_play_button']['table'] = 'field_data_field_spotify_play_button';
  $handler->display->display_options['fields']['field_spotify_play_button']['field'] = 'field_spotify_play_button';
  $handler->display->display_options['fields']['field_spotify_play_button']['label'] = 'Album';
  $handler->display->display_options['fields']['field_spotify_play_button']['element_label_colon'] = FALSE;
  /* Field: Content: Taxonomy upgrade extras */
  $handler->display->display_options['fields']['taxonomyextra']['id'] = 'taxonomyextra';
  $handler->display->display_options['fields']['taxonomyextra']['table'] = 'field_data_taxonomyextra';
  $handler->display->display_options['fields']['taxonomyextra']['field'] = 'taxonomyextra';
  $handler->display->display_options['fields']['taxonomyextra']['label'] = 'Artists';
  $handler->display->display_options['fields']['taxonomyextra']['type'] = 'taxonomy_term_reference_plain';
  $handler->display->display_options['fields']['taxonomyextra']['delta_offset'] = '0';
  /* Field: Content: Year of original release */
  $handler->display->display_options['fields']['field_original_release_date']['id'] = 'field_original_release_date';
  $handler->display->display_options['fields']['field_original_release_date']['table'] = 'field_data_field_original_release_date';
  $handler->display->display_options['fields']['field_original_release_date']['field'] = 'field_original_release_date';
  $handler->display->display_options['fields']['field_original_release_date']['settings'] = array(
    'format_type' => 'long',
    'fromto' => 'both',
    'multiple_number' => '',
    'multiple_from' => '',
    'multiple_to' => '',
  );
  /* Sort criterion: Content: Year of original release (field_original_release_date) */
  $handler->display->display_options['sorts']['field_original_release_date_value']['id'] = 'field_original_release_date_value';
  $handler->display->display_options['sorts']['field_original_release_date_value']['table'] = 'field_data_field_original_release_date';
  $handler->display->display_options['sorts']['field_original_release_date_value']['field'] = 'field_original_release_date_value';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = '1';
  $handler->display->display_options['filters']['status']['group'] = '0';
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'album' => 'album',
  );
  $handler->display->display_options['filters']['type']['group'] = '0';
  $handler->display->display_options['filters']['type']['expose']['operator'] = FALSE;

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page_1');
  $handler->display->display_options['path'] = 'music/recommended-albums';
  $handler->display->display_options['menu']['title'] = 'Recommended albums';
  $handler->display->display_options['menu']['weight'] = '0';
  $handler->display->display_options['menu']['name'] = 'primary-links';

  /* Display: Feed */
  $handler = $view->new_display('feed', 'Feed', 'feed_1');
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['style_plugin'] = 'rss';
  $handler->display->display_options['row_plugin'] = 'node_rss';
  $handler->display->display_options['path'] = 'music/recommended-albums/feed';
  $handler->display->display_options['displays'] = array(
    'page_1' => 'page_1',
    'default' => 0,
  );
  $translatables['albums'] = array(
    t('Defaults'),
    t('Recommended Albums'),
    t('more'),
    t('Apply'),
    t('Reset'),
    t('Sort by'),
    t('Asc'),
    t('Desc'),
    t('Items per page'),
    t('- All -'),
    t('Offset'),
    t('« first'),
    t('‹ previous'),
    t('next ›'),
    t('last »'),
    t('This partial list still needs some formatting to avoid looking like the east end of a west-bound mule, but I decided to put it up sooner rather than later.

The links below go to the Amazon purchase & instant download page, for immediate gratification.

You can also <a href="http://ezra-g.com/music/recommended-albums/feed">subscribe to the feed of albums</a> to learn when I add a new one to the list.'),
    t('Album'),
    t('Artists'),
    t('Year of original release'),
    t('Page'),
    t('Feed'),
  );
  $export['albums'] = $view;

  return $export;
}
