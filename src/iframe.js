import { render } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

export default function Wikiloc( props ) {

    const result = props.mapUrl.match(/\d+$/);

    if ( result !== null ) {
        var id = "https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=" + result[0] + "&maptype=" + props.mapType;

        return (
            <iframe frameBorder="0" scrolling="no" src={id} width="500" height="400" ></iframe>
        );
    }

    return "";
}