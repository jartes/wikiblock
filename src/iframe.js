import { render } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

export default function Wikiloc( { attributes } ) {

    const { 
        mapUrl,
        mapHeight,
        mapType,
        showTitle,
        showMeasuresElevation,
        showLocation,
        showImages
    } = attributes;

    const trailId = mapUrl.match(/\d+$/);

    if ( trailId !== null ) {
        var iframeSrc = "https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=" + trailId[0] + "&maptype=" + mapType + "&title=" + ( showTitle === true ? 'on' : 'off' ) + "&measures=" + ( showMeasuresElevation === true ? 'on' : 'off' ) + "&neat=" + ( showLocation === true ? 'on' : 'off' ) + "&images=" + ( showImages === true ? 'on' : 'off' );

        return (
            <iframe frameBorder="0" scrolling="no" src={ iframeSrc } height={ mapHeight } ></iframe>
        );
    }

    return "";
}
