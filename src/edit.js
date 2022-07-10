/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * TextControl Component
 * 
 */
import { CheckboxControl, PanelBody, SelectControl, TextControl } from '@wordpress/components';

import WikilocIframe from './iframe.js';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={ __( 'Map settings', 'wikiblock' ) }>

					<TextControl label={ __( 'Map height', 'wikiblock' ) } onChange={ ( val ) => setAttributes( { mapHeight: parseInt(val) } ) } value={ attributes.mapHeight } type="number" />

					<SelectControl 
						label={ __( 'Map Type', 'wikiblock' ) } 
						onChange={ ( val ) => setAttributes( { mapType: val } ) } 
						value={ attributes.mapType }
						options={ [
							{ value: 'H', label: __( 'Satellite', 'wikiblock' ) },
							{ value: 'M', label: __( 'Map', 'wikiblock' ) },
							{ value: 'T', label: __( 'Terrain', 'wikiblock' ) },
						] }
					/>

					<CheckboxControl label={ __( 'Show title?', 'wikiblock' ) } checked={ attributes.showTitle } onChange={ ( val ) => setAttributes( { showTitle: val } ) } />

					<CheckboxControl label={ __( 'Show measurements and elevation?', 'wikiblock' ) } checked={ attributes.showMeasuresElevation } onChange={ ( val ) => setAttributes( { showMeasuresElevation: val } ) } />

					<CheckboxControl label={ __( 'Show location?', 'wikiblock' ) } checked={ attributes.showLocation } onChange={ ( val ) => setAttributes( { showLocation: val } ) } />

					<CheckboxControl label={ __( 'Show images?', 'wikiblock' ) } checked={ attributes.showImages } onChange={ ( val ) => setAttributes( { showImages: val } ) } />
					
				</PanelBody>
			</InspectorControls>
			<TextControl
				label={ __( 'Add the Wikiloc track URL to display on your site.', 'wikiblock' ) }
				value={ attributes.mapUrl.trim() }
				onChange={ ( val ) => setAttributes( { mapUrl: val } ) }
			/>
			<WikilocIframe attributes={ attributes }/>
		</div>
	);
}
