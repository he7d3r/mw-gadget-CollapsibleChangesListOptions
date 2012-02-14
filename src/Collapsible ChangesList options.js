/**
 * Make recent changes and watchlist options collapsible
 *
 * @source: http://www.mediawiki.org/wiki/Snippets/Collapsible_ChangesList_options
 * @rev: 2
 */
if ( $.inArray( mw.config.get( 'wgCanonicalSpecialPageName' ), ['Watchlist', 'Recentchanges']) != -1 ) {
	var 	$options = $( '#mw-watchlist-options, .rcoptions' ),
		$legend = $options.find( 'legend' );
	if ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Watchlist' ) {
		$options.contents().filter( function() {
				// Keep text-nodes, filter out the rest
				return this.nodeType == 3;
			} )
			// Wrap the second text node (intro paragraph) in a tag so we can easily exempt it later when toggling the options
			.eq(1).wrap( '<p id="mw-watchlist-options-intro" />' );
	}
	$options.wrapInner( '<div id="mw-options-wrapper" />' );

	$legend.wrapInner( '<a href="#" />' )
		.click( function( e ) {
			e.preventDefault(); // avoid jumping to the top (href=#)

			$( '#mw-options-wrapper' ).toggle( 'fast' );

		} )
		.add( '#mw-watchlist-options-intro' )
		.prependTo( $options ); // Put the legend and intro outside the wrapper
	$( '#mw-options-wrapper' ).hide( ); // Hide by default
}