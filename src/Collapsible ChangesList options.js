/**
 * Make recent changes and watchlist options collapsible
 * @source: [[mw:Snippets/Collapsible ChangesList options]]
 * @rev: 2
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/Collapsible ChangesList options.js]] ([[File:User:Helder.wiki/Tools/Collapsible ChangesList options.js]])
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( mw, $ ) {
'use strict';

if ( $.inArray( mw.config.get( 'wgCanonicalSpecialPageName' ), ['Watchlist', 'Recentchanges']) !== -1 ) {
	var $options = $( '#mw-watchlist-options, .rcoptions' ),
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
			e.preventDefault(); // avoid jumping to the top (href=#)

			$( '#mw-options-wrapper' ).toggle( 'fast' );

		} )
		.add( '#mw-watchlist-options-intro' )
		.prependTo( $options ); // Put the legend and intro outside the wrapper
	$( '#mw-options-wrapper' ).hide( ); // Hide by default
}

}( mediaWiki, jQuery ) );