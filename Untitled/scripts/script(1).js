/**
 * (c) Meta Platforms, Inc. and affiliates. Confidential and proprietary.
 */

//import { timeEnd } from 'console';
//import React from 'react';
//import fondo1 from './fondo1.png';

//==============================================================================
// Welcome to scripting in Meta Spark Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// Meta Spark Studio extension for VS Code - https://fb.me/spark-vscode-plugin
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const A = require('Animation')
const Sc = require('Scene');
// const Time = require('Time');
// const D = require('Diagnostics')
const M = require('Materials')
// const Reactive = require('Reactive');
const Textures = require('Textures');

const startValue = 1000;


(async function () {

  const [canvas, material, textura] = await Promise.all([
       Sc.root.findFirst('imagen'),
       M.findFirst('img'),
       Textures.findFirst('fondo1(1)')

    ]);
// duracion primer y ulltima animacion
        const startValue = 1000;
//  Para final de la animacion
        const StopAnim = A.samplers.linear(0, 0);
// para tercera animacion
        let sampler3Anim = A.samplers.linear(1, 0.0)
// segunda animacion
      const driverP2 = {durationMilliseconds: 3000, loopCount: 1, mirror: false};
      let dri2 = A.timeDriver(driverP2);
      let sampler2 = A.samplers.linear(1, 1);
//  primera animacion
      const driverParameters = {durationMilliseconds: startValue, loopCount: 1, mirror: false};
      let driver = A.timeDriver(driverParameters);
      let sampler = A.samplers.linear(0.0, 1);
      material.opacity = A.animate(driver, sampler);

      driver.start();

       driver.onCompleted().subscribe(function animacion1(){
         material.opacity = A.animate(dri2, sampler2)
         driver.reset();
         driver.start();
      

      driver.onCompleted().subscribe(function animacion2() {
         material.opacity = A.animate(driver, sampler3Anim);
        driver.reset();
        driver.start();
        
        driver.onCompleted().subscribe(function pararAnim() {
         material.opacity = A.animate(driver, StopAnim);
         driver.reset();
         driver.stop();
        
        

         });

        });

  });

        
  })();   
    
