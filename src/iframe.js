import { render } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

export default function Wikiloc( props ) {

    const mapUrlVar = typeof props.mapUrl === 'string' ? props.mapUrl.substring( props.mapUrl.length - 8) : '';
    const id = "https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=" + mapUrlVar;

    return (
        <iframe frameBorder="0" scrolling="no" src={id} width="500" height="400" ></iframe>
    );
}