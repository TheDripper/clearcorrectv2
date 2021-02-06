<?php get_header(); ?>
<main role="main" aria-label="Content" class="bg-back-grey pt-8">
  <!-- section -->
  <section>

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <!-- article -->
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <div class="doctor-login bg-white my-12 max-w-6xl mx-auto py-12">
            <h2 class="text-pink text-center mb-16">Doctor Login</h2>
            <?php $url = get_site_url() . '/doctor-dashboard'; ?>
            <?php wp_login_form(array(
              'redirect' => $url,
              'label_username' => __('Email Address'),
              'label_remember' => __('Remember my login information'),
              'remember' => true
            )); ?>
            <ul class="text-center mx-auto">
              <li class="mb-4"><a href="<?php echo wp_lostpassword_url(get_site_url()); ?>">I forgot my password</a></li>
              <li class="mb-4"><a href="/doctor-register">Create an account</a></li>
              <li class="mb-4"><a href="/patient-login">Switch to patient login</a></li>
            </ul>
          </div>
        </article>

      <?php endwhile; ?>

    <?php else : ?>

      <!-- article -->
      <article>

        <h2><?php _e('Sorry, nothing to display.', 'html5blank'); ?></h2>

      </article>
      <!-- /article -->

    <?php endif; ?>
  </section>
</main>
<?php get_footer(); ?>