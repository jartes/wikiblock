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
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( { attributes } ) {
	
	const mapUrlVar = typeof attributes.mapUrl === 'string' ? attributes.mapUrl.substring( attributes.mapUrl.length - 8) : '';
	
    const id = "https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=" + mapUrlVar;

	return <iframe frameBorder="0" scrolling="no" src={id} width="500" height="400" ></iframe>
}
