/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define(['require',
    'backbone',
    'hbs!tmpl/common/aboutAtlas_tmpl',
    'models/VCommon',
    'utils/UrlLinks'
], function(require, Backbone, aboutAtlasTmpl, VCommon, UrlLinks) {
    'use strict';

    var aboutAtlasView = Backbone.Marionette.LayoutView.extend(
        /** @lends aboutAtlasView */
        {
            template: aboutAtlasTmpl,
            /** Layout sub regions */
            regions: {},
            /** ui selector cache */
            ui: {
                atlasVersion: "[data-id='atlasVersion']"
            },
            /** ui events hash */
            events: function() {},
            /**
             * intialize a new aboutAtlasView Layout
             * @constructs
             */
            initialize: function(options) {
                _.extend(this, options);
            },
            bindEvents: function() {


            },
            onRender: function() {
                var that = this;
                var url = UrlLinks.versionApiUrl();
                var VCommonModel = new VCommon();
                VCommonModel.aboutUs(url, {
                    success: function(data) {
                        var str = "<b>Version : </b>" + _.escape(data.Version);
                        that.ui.atlasVersion.html(str);
                    },
                    complete: function() {}
                });
            },

        });
    return aboutAtlasView;
});
