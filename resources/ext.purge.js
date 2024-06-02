$( () => {
	$( "#ca-purge a" ).on( 'click', ( e ) => {
		e.preventDefault();
		const postArgs = { action: 'purge', titles: mw.config.get( 'wgPageName' ) };
		const mwApi = new mw.Api();
		mwApi.post( postArgs ).then(
			() => location.reload(),
			() => mw.notify( mw.msg( 'purge-failed' ), { type: 'error' } )
		);
	} );
} );
