/**
 * Make recent changes and watchlist options collapsible
 * @source: [[mw:Snippets/Collapsible ChangesList options]]
 * @rev: 4
 */
( function ( mw, $ ) {
'use strict';

if ( $.inArray( mw.config.get( 'wgCanonicalSpecialPageName' ), ['Watchlist', 'Recentchanges']) !== -1 ) {
	mw.hook( 'wikipage.content' ).add( function ( $content ) {
		var $options = $content.find( '#mw-watchlist-options, .rcoptions' ),
			$legend = $options.find( 'legend' );
		if ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'Watchlist' ) {
			$options.contents().filter( function() {
					// Keep text-nodes, filter out the rest
					return this.nodeType === 3;
				} )
				// Wrap the second text node (intro paragraph) in a tag so we can easily exempt it later when toggling the options
				.eq(1).wrap( '<p id="mw-watchlist-options-intro" />' );
		}
		$options.wrapInner( '<div id="mw-options-wrapper" />' );
	
		$legend.wrapInner( '<a href="#" />' )
			.click( function( e ) {
				// Avoid jumping to the top (href=#)
				e.preventDefault();
				$( '#mw-options-wrapper' ).toggle( 'fast' );
			} )
			.add( '#mw-watchlist-options-intro' )
			// Put the legend and intro outside the wrapper
			.prependTo( $options );
		// Hide by default
		$( '#mw-options-wrapper' ).hide( );
	} );
}

}( mediaWiki, jQuery ) );