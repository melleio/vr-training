/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {take, map, clamp} from 'utils/Helpers'
// import * as ring from '../environment/rings'
import AudioBuffer from 'Tone/core/Buffer'
import animitter from 'animitter'
import eventMap from 'event-map'
import ease from 'eases/expo-in-out';


require('three/examples/js/postprocessing/EffectComposer');
require('three/examples/js/postprocessing/RenderPass');
require('three/examples/js/postprocessing/ShaderPass');
require('three/examples/js/postprocessing/UnrealBloomPass');
require('three/examples/js/shaders/ConvolutionShader');
require('three/examples/js/shaders/LuminosityHighPassShader');
require('three/examples/js/shaders/CopyShader');


//song_exploder_intro.[mp3|ogg]', buffer =>
//returns a Promise which resolves with an array
const getBuffer = () =>
    new Promise(resolve => {
        AudioBuffer.load('./audio/perfume_genius/MBIRA-0.[mp3|ogg]', buffer =>
            resolve(buffer.getChannelData(0))
        )
    });


export class SplashScene {
    constructor(canvas) {

        // const scene = new THREE.Scene()
        // const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.001, 10000)
        // camera.position.set(0, -10, 0)
        // camera.lookAt(new THREE.Vector3(0, 0, 0))
        // const renderer = new THREE.WebGLRenderer({canvas})
        // renderer.setClearColor(0x00, 1)
        // renderer.setSize(window.innerWidth, window.innerHeight)

    }

    start() {
        // this.loop.start();
        return this;
    }

    stop() {
        // this.loop.stop();
        return this;
    }

    close() {
        //do teardown stuff in here
        this.stop();
        // this.loop.reset();
        //this.__removeListeners();
    }

}
