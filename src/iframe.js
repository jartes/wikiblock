import React, { Component } from 'react';
import { useBlockProps } from '@wordpress/block-editor';

export default class WikilocIframe extends React.Component {
    render () {
        const url = "https://www.wikiloc.com/wikiloc/spatialArtifacts.do?event=view&id=" + this.props.url;
        return <iframe frameBorder="0" scrolling="no" src={url} width="500" height="400" ></iframe>;
    }
}