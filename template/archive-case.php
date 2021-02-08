<?php get_header(); ?>

<main class="bg-back-grey pb-12" role="main" aria-label="Content" data-banner-ad="<?php echo '881';  ?>"  data-page-content="906">
  <!-- section -->
  <div class="wp-block-columns max-w-6xl mx-auto mt-12 mb-6">
    <div class="wp-block-column" style="flex:25%;margin-left:23px;">
    </div>
    <div class="wp-block-column content" style="flex:75%;">
      <?php the_content();  ?>
    </div>
  </div>
  <div class="wp-block-columns max-w-6xl mx-auto">
    <div class="wp-block-column bg-white rounded" style="flex:25%;">
      <aside class="facets">
        <h2 class="p-4 font-body-bold">Filters</h2>
        <p class="facet-arrow py-2 border-t border-border-grey">
          Classification
        </p>
        <?php echo facetwp_display('facet', 'classification'); ?>
        <p class="facet-arrow py-2 border-t border-border-grey">
          Clinical Conditions
        </p>
        <?php echo facetwp_display('facet', 'technical_condition'); ?>
        <p class="facet-arrow py-2 border-t border-border-grey">
          Treatment Technique
        </p>
        <?php echo facetwp_display('facet', 'treatment_technique'); ?>
        <p class="facet-arrow py-2 border-t border-border-grey">
          Aligner Wear Schedule
        </p>
        <?php echo facetwp_display('facet', 'aligner_wear_schedule'); ?>
        <p class="facet-arrow py-2 border-t border-border-grey">
          Level of Difficulty
        </p>
        <?php echo facetwp_display('facet', 'level_of_difficulty'); ?>
      </aside>
    </div>
    <div class="wp-block-column bg-white rounded" style="flex:75;">
      <h2 class="px-4 mt-8"><?php echo wp_count_posts('case')->publish; ?> cases</h2>
      <?php echo facetwp_display('template', 'cases'); ?>
    </div>
  </div>
  <!-- /section -->
</main>
<?php get_footer(); ?>