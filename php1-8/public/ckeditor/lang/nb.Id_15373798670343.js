<?php

/*
 * This file is part of the Monolog package.
 *
 * (c) Jordi Boggiano <j.boggiano@seld.be>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Monolog\Handler;

use Monolog\Formatter\FormatterInterface;
use Monolog\Formatter\ElasticaFormatter;
use Monolog\Logger;
use Elastica\Client;
use Elastica\Exception\ExceptionInterface;

/**
 * Elastic Search handler
 *
 * Usage example:
 *
 *    $client = new \Elastica\Client();
 *    $options = array(
 *        'index' => 'elastic_index_name',
 *        'type' => 'elastic_doc_type',
 *    );
 *    $handler = new ElasticSearchHandler($client, $options);
 *    $log = new Logger('application');
 *    $log->pushHandler($handler);
 *
 * @author Jelle Vink <jelle.vink@gmail.com>
 */
class ElasticSearchHandler extends AbstractProcessingHandler
{
    /**
     * @var Client
     */
    protected $client;

    /**
     * @var array Handler config options
     */
    protected $options = array();

    /**
     * @param Client $client  Elastica Client object
     * @param array  $options Handler configuration
     * @param int    $level   The minimum logging level at which this handler will be triggered
     * @param bool   $bubble  Whether the messages that are handled can bubble up the stack or not
     */
    public function __construct(Client $client, array $options = array(), $level = Logger::DEBUG, $bubble = true)
    {
        parent::__construct($level, $bubble);
        $this->client = $client;
        $this->options = array_merge(
            array(
                'index'          => 'monolog',      // Elastic index name
                'type'           => 'record',       // Elastic document type
                'ignore_error'   => false,          // Suppress Elastica exceptions
            ),
            $options
        );
    }

    /**
     * {@inheritDoc}
     */
    protected function write(array $record)
    {
        $this->bulkSend(array($record['formatted']));
    }

    /**
     * {@inheritdoc}
     */
    public function setFormatter(FormatterInterface $formatter)
    {
        if ($formatter instanceof ElasticaFormatter) {
            return parent::setFormatter($formatter);
        }
        throw new \InvalidArgumentException('ElasticSearchHandler is only compatible with ElasticaFormatter');
    }

    /**
     * Getter options
     * @return array
     */
    public function getOptions()
    {
        return $this->options;
    }

    /**
     * {@inheritDoc}
     */
    protected function getDefaultFormatter()
    {
        return new ElasticaFormatter($this->options['index'], $this->options['type']);
    }

    /**
     * {@inheritdoc}
     */
    public function handleBatch(array $records)
    {
        $documents = $this->getFormatter()->formatBatch($records);
        $this->bulkSend($documents);
    }

    /**
     * Use Elasticsearch bulk API to send list of documents
     * @param  array             $documents
     * @throws \RuntimeException
     */
    protected function bulkSend(array $documents)
    {
        try {
            $this->client->addDocuments($documents);
        } catch (ExceptionInterface $e) {
            if (!$this->options['ignore_error']) {
                throw new \RuntimeException("Error sending messages to Elasticsearch", 0, $e);
            }
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ????	Phttp://ns.adobe.com/xap/1.0/ <?xpacket begin="???" id="W5M0MpCehiHzreSzNTczkc9d"?> <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        "> <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"> <rdf:Description rdf:about=""/> </rdf:RDF> </x:xmpmeta>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <?xpacket end="w"?>?? ,Photoshop 3.0 8BIM%     ???? ???	???B~?? ? 		

					??  ?? Adobe d?   ??  < <  ?? `             	                           !1Af??                ??    ? ??     ?????     ?????     ????????>????????????4?????wF[??-??z?KR~?)kZ??v????<??T??Yo^h??|?d  ????     ?????     ?????     ?????     ???                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              fileFormatVersion: 2
guid: 26a73491373bd4d21a8319a08156a761
TextureImporter:
  fileIDToRecycleName: {}
  externalObjects: {}
  serializedVersion: 9
  mipmaps:
    mipMapMode: 0
    enableMipMap: 0
    sRGBTexture: 1
    linearTexture: 0
    fadeOut: 0
    borderMipMap: 0
    mipMapsPreserveCoverage: 0
    alphaTestReferenceValue: 0.5
    mipMapFadeDistanceStart: 1
    mipMapFadeDistanceEnd: 3
  bumpmap:
    convertToNormalMap: 0
    externalNormalMap: 0
    heightScale: 0.25
    normalMapFilter: 0
  isReadable: 0
  streamingMipmaps: 0
  streamingMipmapsPriority: 0
  grayScaleToAlpha: 0
  generateCubemap: 6
  cubemapConvolution: 0
  seamlessCubemap: 0
  textureFormat: 1
  maxTextureSize: 2048
  textureSettings:
    serializedVersion: 2
    filterMode: -1
    aniso: -1
    mipBias: -100
    wrapU: 1
    wrapV: 1
    wrapW: 1
  nPOTScale: 0
  lightmap: 0
  compressionQuality: 50
  spriteMode: 1
  spriteExtrude: 1
  spriteMeshType: 1
  alignment: 0
  spritePivot: {x: 0.5, y: 0.5}
  spritePixelsToUnits: 100
  spriteBorder: {x: 0, y: 0, z: 0, w: 0}
  spriteGenerateFallbackPhysicsShape: 1
  alphaUsage: 1
  alphaIsTransparency: 1
  spriteTessellationDetail: -1
  textureType: 8
  textureShape: 1
  singleChannelComponent: 0
  maxTextureSizeSet: 0
  compressionQualitySet: 0
  textureFormatSet: 0
  platformSettings:
  - serializedVersion: 2
    buildTarget: DefaultTexturePlatform
    maxTextureSize: 2048
    resizeAlgorithm: 0
    textureFormat: -1
    textureCompression: 1
    compressionQuality: 50
    crunchedCompression: 0
    allowsAlphaSplitting: 0
    overridden: 0
    androidETC2FallbackOverride: 0
  spriteSheet:
    serializedVersion: 2
    sprites: []
    outline: []
    physicsShape: []
    bones: []
    spriteID: 51e950fdd33bc9240957e21c8a7fd585
    vertices: []
    indices: 
    edges: []
    weights: []
  spritePackingTag: 
  pSDRemoveMatte: 0
  pSDShowRemoveMatteOption: 0
  userData: 
  assetBundleName: 
  assetBundleVariant: 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    INDX( 	 *&Z           (   0  ?       t  ?                Kr    ? ?     ?o     ?-;X????$????????A?=u?&7? @      ?3              C i n e m a c h i n e N e w F r e e L o o k E d i t o r . c s Lr    ? ?     ?o     ?-;X????$????71???A???$????       ?               $C i n e m a c h i n e N e w F r e e L o o k E d i t o r . c s . m e t a       Mr    ? ?     ?o     ?-;X????$????71???A??&7?       y
              $C i n e m a c h i n e N e w V i r t u a l C a m e r a E d i  o r . c s -;X??Nr    ? ?     ?o    ?F.;X????$????71???A???$????       ?               )C i n e m a c h i n e N e w V i r t u a l C a m e r a E d i t o r . c s . m e t a     Kr    h X     ?o     ?-;X????$????????A?=u?&7? @      ?3              C I N E M A ~ 1 . C S Lr    p Z     ?o     ?-;X????$????71???A???$????       ?               C I N E M A ~ 1 . M E T       Mr    h X     ?o     ?-;X????$????71???A??&7?       y
              C I N E M A ~ 2 . C S Nr    p Z     ?o    ?F.;X????$????71???A???$????       ?               C I N E M A ~ 2 . M E T       Or    x f     ?o    ?~/;X????$????71???A????&7? @      )0              V c a m S t a g e E d i t o r . c s   Qr    ? p     ?o    ??1;X????$????71???A???$????       ?               V c a m S t a g e E d i t o r . c s . m e t a Or    h X     ?o    ?~/;X????$????71???A????&7? @      )0              V C A M S T ~ 1 . C S Qr    p Z     ?o    ??1;X????$????71???A???$???        ?               V C A M S T ~ 1 . M E T                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        {
  "_from": "trim-repeated@^1.0.0",
  "_id": "trim-repeated@1.0.0",
  "_inBundle": false,
  "_integrity": "sha1-42RqLqTokTEr9+rObPsFOAvAHCE=",
  "_location": "/trim-repeated",
  "_phantomChildren": {},
  "_requested": {
    "type": "range",
    "registry": true,
    "raw": "trim-repeated@^1.0.0",
    "name": "trim-repeated",
    "escapedName": "trim-repeated",
    "rawSpec": "^1.0.0",
    "saveSpec": null,
    "fetchSpec": "^1.0.0"
  },
  "_requiredBy": [
    "/filenamify"
  ],
  "_resolved": "https://registry.npmjs.org/trim-repeated/-/trim-repeated-1.0.0.tgz",
  "_shasum": "e3646a2ea4e891312bf7eace6cfb05380bc01c21",
  "_spec": "trim-repeated@^1.0.0",
  "_where": "C:\\projects\\life\\node_modules\\filenamify",
  "author": {
    "name": "Sindre Sorhus",
    "email": "sindresorhus@gmail.com",
    "url": "sindresorhus.com"
  },
  "bugs": {
    "url": "https://github.com/sindresorhus/trim-repeated/issues"
  },
  "bundleDependencies": false,
  "dependencies": {
 