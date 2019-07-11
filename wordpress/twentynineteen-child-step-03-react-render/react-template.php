<?php
/**
 * Template Name: React Template
 */

get_header();
?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php

				// WP_Query arguments
					$args = array(
						'post_type' => [ 'post' ],
						'posts_per_page' => 3
					);
					// The Query
					$query = new WP_Query( $args );
				?>
				<?php if ( $query->have_posts() ): ?>

					<article id="react-template" class="page entry">							
						<header class="entry-header">
							<h1 class="entry-title">Recent Posts</h1>
						</header>
						<div class="posts">
							<?php	while ( $query->have_posts() ): $query->the_post();?>
								<div id="<?php echo $post->ID; ?>" class="entry-content">
									<a href="<?php the_permalink();?>"><?php the_post_thumbnail('medium'); ?></a>
									<h3>
										<a href="<?php the_permalink();?>"><?php the_title();?></a>
									</h3>
									<div class="excerpt">
										<?php the_excerpt(  ); ?>
									</div>
								</div>
							<?php	endwhile; ?>
						</div>			
					</article>
			<?php endif; ?>					
			<?php	wp_reset_postdata(); ?>			


		</main><!-- #main -->
	</section><!-- #primary -->

<?php
get_footer();
