import React from 'react';
import {Panel} from 'react-bootstrap';

const UtilitiesExample = () => {
  return (
    <div>
      <h1 id="utilities">Utilities</h1>

      <p className="lead">Utilities, or utility classes, are a series of single-purpose, immutable classes designed to
        reduce duplication in
        your compiled CSS. Each utility takes a common CSS property-value pair and turns it into a reusable class.</p>
      <p>These utilities are in addition to those <a href="http://getbootstrap.com">provided in Bootstrap</a>.</p>

      <Panel header="Positioning">
        <figure className="highlight"><pre><code className="language-css"
                                                 data-lang="css">.pos-r {'{'} position: relative !important; {'}\n'}
          .pos-a {'{'} position: absolute !important; {'}\n'}
          .pos-f {'{'} position: fixed !important; {'}\n'}</code></pre>
        </figure>
      </Panel>

      <Panel header="Width">
        <figure className="highlight"><pre><code className="language-css"
                                                 data-lang="css">.w-sm {'{'} width: 25% !important; {'}\n'}
          .w-md {'{'} width: 50% !important; {'}\n'}
          .w-lg {'{'} width: 75% !important; {'}\n'}
          .w-full {'{'} width: 100% !important; {'}\n'}</code></pre>
        </figure>
      </Panel>

      <Panel header="Margin and Padding">
        <p>Assign <code className="highlighter-rouge">margin</code> or <code
          className="highlighter-rouge">padding</code> to an element or a subset of
          it&apos;s sides with shorthand classes. Includes support for individual properties, all properties, and
          vertical and horizontal properties.
          All classes are multiples on the global default value, <code className="highlighter-rouge">20px</code>.</p>
        <figure className="highlight">
          <pre><code className="language-css" data-lang="css">.m-a-0 {'{'} margin:        0 !important; {'}\n'}
            .m-t-0 {'{'} margin-top:    0 !important; {'}\n'}
            .m-r-0 {'{'} margin-right:  0 !important; {'}\n'}
            .m-b-0 {'{'} margin-bottom: 0 !important; {'}\n'}
            .m-l-0 {'{'} margin-left:   0 !important; {'}\n'}

            .m-a {'{'} margin:        var(--spacer) !important; {'}\n'}
            .m-t {'{'} margin-top:    var(--spacer-y) !important; {'}\n'}
            .m-r {'{'} margin-right:  var(--spacer-x) !important; {'}\n'}
            .m-b {'{'} margin-bottom: var(--spacer-y) !important; {'}\n'}
            .m-l {'{'} margin-left:   var(--spacer-x) !important; {'}\n'}
            .m-x {'{'} margin-right:  var(--spacer-x) !important; margin-left: var(--spacer-x) !important; {'}\n'}
            .m-y {'{'} margin-top:    var(--spacer-y) !important; margin-bottom: var(--spacer-y) !important; {'}\n'}
            .m-x-auto {'{'} margin-right: auto !important; margin-left: auto !important; {'}\n'}

            .m-a-md {'{'} margin:        calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .m-t-md {'{'} margin-top:    calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .m-r-md {'{'} margin-right:  calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .m-b-md {'{'} margin-bottom: calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .m-l-md {'{'} margin-left:   calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .m-x-md {'{'} margin-right:  calc(var(--spacer-x) * 1.5) !important; margin-left:   calc(var(--spacer-x) * 1.5) !important; {'}\n'}
            .m-y-md {'{'} margin-top:    calc(var(--spacer-y) * 1.5) !important; margin-bottom: calc(var(--spacer-y) * 1.5) !important; {'}\n'}

            .m-a-lg {'{'} margin:        calc(var(--spacer-y) * 3) !important; {'}\n'}
            .m-t-lg {'{'} margin-top:    calc(var(--spacer-y) * 3) !important; {'}\n'}
            .m-r-lg {'{'} margin-right:  calc(var(--spacer-y) * 3) !important; {'}\n'}
            .m-b-lg {'{'} margin-bottom: calc(var(--spacer-y) * 3) !important; {'}\n'}
            .m-l-lg {'{'} margin-left:   calc(var(--spacer-y) * 3) !important; {'}\n'}
            .m-x-lg {'{'} margin-right:  calc(var(--spacer-x) * 3) !important; margin-left:   calc(var(--spacer-x) * 3) !important; {'}\n'}
            .m-y-lg {'{'} margin-top:    calc(var(--spacer-y) * 3) !important; margin-bottom: calc(var(--spacer-y) * 3) !important; {'}\n'}
            .p-a-0 {'{'} padding:        0 !important; {'}\n'}
            .p-t-0 {'{'} padding-top:    0 !important; {'}\n'}
            .p-r-0 {'{'} padding-right:  0 !important; {'}\n'}
            .p-b-0 {'{'} padding-bottom: 0 !important; {'}\n'}
            .p-l-0 {'{'} padding-left:   0 !important; {'}'}</code></pre>
        </figure>

        <figure className="highlight">
          <pre><code className="language-css"
                     data-lang="css">.p-a {'{'} padding:        var(--spacer) !important; {'}\n'}
            .p-t {'{'} padding-top:    var(--spacer-y) !important; {'}\n'}
            .p-r {'{'} padding-right:  var(--spacer-x) !important; {'}\n'}
            .p-b {'{'} padding-bottom: var(--spacer-y) !important; {'}\n'}
            .p-l {'{'} padding-left:   var(--spacer-x) !important; {'}\n'}
            .p-x {'{'} padding-right:  var(--spacer-x) !important; padding-left:   var(--spacer-x) !important; {'}\n'}
            .p-y {'{'} padding-top:    var(--spacer-y) !important; padding-bottom: var(--spacer-y) !important; {'}\n'}

            .p-a-md {'{'} padding:        calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .p-t-md {'{'} padding-top:    calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .p-r-md {'{'} padding-right:  calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .p-b-md {'{'} padding-bottom: calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .p-l-md {'{'} padding-left:   calc(var(--spacer-y) * 1.5) !important; {'}\n'}
            .p-x-md {'{'} padding-right:  calc(var(--spacer-x) * 1.5) !important; padding-left:   calc(var(--spacer-x) * 1.5) !important; {'}\n'}
            .p-y-md {'{'} padding-top:    calc(var(--spacer-y) * 1.5) !important; padding-bottom: calc(var(--spacer-y) * 1.5) !important; {'}\n'}

            .p-a-lg {'{'} padding:        calc(var(--spacer-y) * 3) !important; {'}\n'}
            .p-t-lg {'{'} padding-top:    calc(var(--spacer-y) * 3) !important; {'}\n'}
            .p-r-lg {'{'} padding-right:  calc(var(--spacer-y) * 3) !important; {'}\n'}
            .p-b-lg {'{'} padding-bottom: calc(var(--spacer-y) * 3) !important; {'}\n'}
            .p-l-lg {'{'} padding-left:   calc(var(--spacer-y) * 3) !important; {'}\n'}
            .p-x-lg {'{'} padding-right:  calc(var(--spacer-x) * 3) !important; padding-left:   calc(var(--spacer-x) * 3) !important; {'}\n'}
            .p-y-lg {'{'} padding-top:    calc(var(--spacer-y) * 3) !important; padding-bottom: calc(var(--spacer-y) * 3) !important; {'}'}</code></pre>
        </figure>

      </Panel>

      <Panel header="Responsive text alignment">
        <p>Use these classes to easily switch <code className="highlighter-rouge">text-align</code> across viewports
          when designing responsive pages.</p>

        <figure className="highlight">
          <pre><code className="language-css" data-lang="css">.text-xs-left {'{'} text-align: left; {'}\n'}
            .text-xs-right {'{'} text-align: right; {'}\n'}
            .text-xs-center {'{'} text-align: center; {'}\n\n'}

            @media (min-width: @screen-sm-min) {'{'}
            {'  '}.text-sm-left {'{'} text-align: left; {'}\n'}
            {'  '}.text-sm-right {'{'} text-align: right; {'}\n'}
            {'  '}.text-sm-center {'{'} text-align: center; {'}\n'}
            {'}\n\n'}

            @media (min-width: @screen-md-min) {'{'}
            {'  '}.text-md-left {'{'} text-align: left; {'}\n'}
            {'  '}.text-md-right {'{'} text-align: right; {'}\n'}
            {'  '}.text-md-center {'{'} text-align: center; {'}\n'}
            {'}\n\n'}

            @media (min-width: @screen-lg-min) {'{'}
            {'  '}.text-lg-left {'{'} text-align: left; {'}\n'}
            {'  '}.text-lg-right {'{'} text-align: right; {'}\n'}
            {'  '}.text-lg-center {'{'} text-align: center; {'}\n'}
            {'}'}</code></pre>
        </figure>
      </Panel>
    </div>
  );
};

export default UtilitiesExample;
