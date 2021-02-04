<?php
if (!function_exists('wp_handle_upload')) {
  require_once(ABSPATH . 'wp-admin/includes/image.php');
  require_once(ABSPATH . 'wp-admin/includes/file.php');
  require_once(ABSPATH . 'wp-admin/includes/media.php');
}
?>
<?php $current_user = wp_get_current_user(); ?>
<?php $id = $_GET["id"]; ?>
<?php $edit = get_post($id); ?>
<?php get_header(); ?>
<main role="main" aria-label="Content" class="bg-back-grey pt-8">
  <!-- section -->
  <section>

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <!-- article -->
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <div class="doctor-registration bg-white my-12 max-w-6xl mx-auto py-12">
            <h2 class="text-pink text-center mb-16">Edit Post</h2>
            <div class="max-w-xl mx-auto w-full flex justify-center">
              <form id="patient-edit" class="flex flex-col items-start" enctype="multipart/form-data" action="/patient-saved?id=<?php echo $edit->ID; ?>" method="POST">
                <label class="text-h5-grey uppercase text-xs font-bold flex justify-between mb-2">ClearCorrect Patient #
                  <a href="#" class="modal-link text-xs font-body">What is this?</a></label>
                <div class="modal">
                  <div class="text-center p-12">
                    <p>Your ClearCorrect patient number can be found on the side of your ClearCorrect aligner box, or on the aligner itself.</p>
                  </div>
                </div>
                <input type="text" name="patient_number" value="<?php echo get_field('patient_number', $edit->ID); ?>" />
                <label class="text-h5-grey uppercase text-xs font-bold flex justify-between mb-2">Post Title
                </label>

                <input type="text" name="post_title" value="<?php echo $edit->post_title; ?>" />
                <label class="text-h5-grey uppercase text-xs font-bold flex justify-between mb-2">Post Message</label>
                <textarea name="post_message"><?php the_field('post_message', $edit->ID); ?></textarea>
                <div class="flex items-center max-w-4xl mx-auto avatar mt-8">
                  <?php
                  $photo = wp_get_attachment_image_src(get_post_thumbnail_id($edit->ID), 'thumbnail')[0];
                  $edit = "edit";
                  if (empty($photo)) {
                    $photo = get_template_directory_uri() . '/build/images/before-after.jpg';
                    $edit = "";
                  }
                  ?>
                  <div class="edit-img-frame <?php echo $edit; ?>">
                    <img src="<?php echo $photo; ?>" />
                  </div>
                  <div class="flex flex-col">
                    <label class="text-h5-grey uppercase text-xs font-bold flex justify-between">Before / After Image<a href="#" class="modal-link text-xs font-body">What is this?</a></label>
                    <div class="modal">
                      <div class="text-center p-12 flex flex-col items-center">
                        <img src="<?php echo get_template_directory_uri() . '/build/images/layout.jpg' ?>" <p>Precompose before and after photos into a single image before uploading. An easy way to do this is by using the mobile app Layout by Instagram that is available for free on the Apple App Store and on Google play.
                        <div class="flex w-2/3 justify-between mx-auto mt-8">
                          <img class="mr-8" src="<?php echo get_template_directory_uri() . '/build/images/AppStore.png' ?>" />
                          <img src="<?php echo get_template_directory_uri() . '/build/images/GoogleStore.png' ?>" />
                        </div>
                        <p class="text-h5-grey">Only .JPG and .PNG files under 4mb are supported.</p>
                      </div>
                    </div>
                    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
                  </div>
                </div>
                <input type="submit" class="button w-full max-w-sm text-sm uppercase mx-auto rounded mt-12 py-2 font-bold" value="SUBMIT" />
                <a href="/patient-dashboard" class="button invert w-full max-w-sm text-sm uppercase mx-auto rounded py-2 font-bold mt-4">CANCEL</a>
              </form>
            </div>
          </div>


          <?php edit_post_link(); ?>

        </article>
        <!-- /article -->

      <?php endwhile; ?>

    <?php else : ?>

      <!-- article -->
      <article>

        <h2><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h2>

      </article>
      <!-- /article -->

    <?php endif; ?>

  </section>
  <!-- /section -->
</main>
<?php get_footer(); ?>