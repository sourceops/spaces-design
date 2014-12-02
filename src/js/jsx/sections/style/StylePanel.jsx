/*
 * Copyright (c) 2014 Adobe Systems Incorporated. All rights reserved.
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation 
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, 
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
 * DEALINGS IN THE SOFTWARE.
 * 
 */


define(function (require, exports, module) {
    "use strict";

    var React = require("react");

    var TitleHeader = require("jsx!js/jsx/shared/TitleHeader"),
        Opacity = require("jsx!./Opacity"),
        Combine = require("jsx!./Combine"),
        Type = require("jsx!./Type"),
        Fill = require("jsx!./Fill"),
        StrokeList = require("jsx!./Stroke").StrokeList,
        strings = require("i18n!nls/strings");

    var StylePanel = React.createClass({
        render: function () {
            var containerClasses = React.addons.classSet({
                "section-container": true,
                "section-container__collapsed": !this.props.visible
            });

            var sectionClasses = React.addons.classSet({
                "style": true,
                "section": true,
                "section__sibling-collapsed": !this.props.visibleSibling
            });

            var containerContents = this.props.visible && (
                <ul className="list">
                    <Opacity />
                    <Combine />
                    <Type />
                    <Fill />
                    <StrokeList {...this.props} />
                </ul>
            );

            return (
                <section className={sectionClasses}>
                    <TitleHeader
                        title={strings.TITLE_STYLE}
                        onDoubleClick={this.props.onVisibilityToggle} />
                    <div className={containerClasses}>
                        {containerContents}
                    </div>
                </section>
            );
        }
    });

    module.exports = StylePanel;
});