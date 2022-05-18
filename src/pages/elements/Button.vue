<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#default"> Default Button </a>
          </li>
          <li>
            <a class="link dark" href="#colors"> Colors </a>
          </li>
          <li>
            <a class="link dark" href="#flat-colors"> Flat Colors </a>
          </li>
          <li>
            <a class="link dark" href="#square"> Square </a>
          </li>
          <li>
            <a class="link dark" href="#bordered"> Bordered </a>
          </li>
          <li>
            <a class="link dark" href="#pill"> Pill </a>
          </li>
          <li>
            <a class="link dark" href="#link"> Link </a>
          </li>
          <li>
            <a class="link dark" href="#floating"> Floating </a>
          </li>
          <li>
            <a class="link dark" href="#no-float"> No Float </a>
          </li>
          <li>
            <a class="link dark" href="#loading"> Loading </a>
          </li>
          <li>
            <a class="link dark" href="#block"> Block </a>
          </li>
          <li>
            <a class="link dark" href="#grouping"> Grouping </a>
          </li>
          <li>
            <a class="link dark" href="#sizing"> Sizing </a>
          </li>
          <li>
            <a class="link dark" href="#disabled"> Disabled </a>
          </li>
          <li>
            <a class="link dark" href="#variables"> Button Variables </a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Buttons</h1>
        <p class="subtitle">
          <b>GNB UI</b> comes with a set of colorful buttons.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Buttons Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/elements/buttons";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Button</h2>
          <p class="fs-6">
            To use default button style just add
            <code class="text-danger">.btn</code> class to your button. You can
            also add this class to: <br />
            <span class="text-primary">
              <code>&lt;button&gt;</code> <br />
              <code>&lt;a&gt;</code> <br />
              <code>&lt;input type="submit"&gt;</code> <br />
              <code>&lt;input type="reset"&gt;</code>
            </span>
            elements.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn">Primary Button</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn">Default Button</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Colors</h2>
          <p class="fs-6">
            To use colors for button just add
            <span class="text-danger">color class</span> to your button with
            <code class="text-danger">.btn</code> class.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn primary mr-10">Primary</button>
          <button class="btn secondary mr-10">Secondary</button>
          <button class="btn success mr-10">Success</button>
          <button class="btn info mr-10">Info</button>
          <button class="btn warning mr-10">Warning</button>
          <button class="btn danger mr-10">Danger</button>
          <button class="btn dark">Dark</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn primary">Primary</button>
<button class="btn secondary">Secondary</button>
<button class="btn success">Success</button>
<button class="btn info">Info</button>
<button class="btn warning">Warning</button>
<button class="btn danger">Danger</button>
<button class="btn dark">Dark</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="flat-colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Flat Colors</h2>
          <p class="fs-6">
            To use flat colors for button add
            <code class="text-danger">.flat</code> with
            <code class="text-danger">.btn</code> class.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn flat mr-10">Default</button>
          <button class="btn primary flat mr-10">Primary</button>
          <button class="btn secondary flat mr-10">Secondary</button>
          <button class="btn success flat mr-10">Success</button>
          <button class="btn info flat mr-10">Info</button>
          <button class="btn warning flat mr-10">Warning</button>
          <button class="btn danger flat mr-10">Danger</button>
          <button class="btn dark flat">Dark</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn flat">Default</button>
<button class="btn primary flat">Primary</button>
<button class="btn secondary flat">Secondary</button>
<button class="btn success flat">Success</button>
<button class="btn info flat">Info</button>
<button class="btn warning flat">Warning</button>
<button class="btn danger flat">Danger</button>
<button class="btn dark flat">Dark</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="square">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Square</h2>
          <p class="fs-6">
            If you want your buttons shape to be square just add
            <code class="text-danger">.square</code> class to your button.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn square mr-10">Default</button>
          <button class="btn primary square mr-10">Primary</button>
          <button class="btn secondary flat square mr-10">Secondary</button>
          <button class="btn success square mr-10">Success</button>
          <button class="btn info flat square mr-10">Info</button>
          <button class="btn warning flat square mr-10">Warning</button>
          <button class="btn danger square mr-10">Danger</button>
          <button class="btn dark flat square">Dark</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn square">Default</button>
<button class="btn primary square">Primary</button>
<button class="btn secondary flat square">Secondary</button>
<button class="btn success square">Success</button>
<button class="btn info flat square">Info</button>
<button class="btn warning flat square">Warning</button>
<button class="btn danger square">Danger</button>
<button class="btn dark flat square">Dark</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="bordered">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Bordered</h2>
          <p class="fs-6">
            You can change the style of your button by adding
            <code class="text-danger">.bordered</code> class to your button.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn bordered mr-10">Default</button>
          <button class="btn primary square bordered mr-10">Primary</button>
          <button class="btn secondary flat bordered mr-10">Secondary</button>
          <button class="btn success bordered mr-10">Success</button>
          <button class="btn info square bordered mr-10">Info</button>
          <button class="btn warning flat bordered mr-10">Warning</button>
          <button class="btn danger square bordered mr-10">Danger</button>
          <button class="btn dark flat bordered">Dark</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn bordered">Default</button>
<button class="btn primary square bordered">Primary</button>
<button class="btn secondary flat bordered">Secondary</button>
<button class="btn success bordered">Success</button>
<button class="btn info square bordered">Info</button>
<button class="btn warning flat bordered">Warning</button>
<button class="btn danger square bordered">Danger</button>
<button class="btn dark flat bordered">Dark</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="pill">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Pill</h2>
          <p class="fs-6">
            To use pill styled buttons add
            <code class="text-danger">.pill</code> class to your button.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn pill mr-10">Default</button>
          <button class="btn primary bordered pill mr-10">Primary</button>
          <button class="btn secondary flat pill mr-10">Secondary</button>
          <button class="btn success bordered pill mr-10">Success</button>
          <button class="btn info bordered pill mr-10">Info</button>
          <button class="btn warning flat pill mr-10">Warning</button>
          <button class="btn danger pill mr-10">Danger</button>
          <button class="btn dark flat bordered pill">Dark</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn pill">Default</button>
<button class="btn primary bordered pill">Primary</button>
<button class="btn secondary flat pill">Secondary</button>
<button class="btn success bordered pill">Success</button>
<button class="btn info bordered pill">Info</button>
<button class="btn warning flat pill">Warning</button>
<button class="btn danger pill">Danger</button>
<button class="btn dark flat bordered pill">Dark</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="link">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Link</h2>
          <p class="fs-6">
            If you want your buttons looks like a link add
            <code class="text-danger">.link</code> class to your button.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn link mr-10">Default</button>
          <button class="btn primary link mr-10">Primary</button>
          <button class="btn secondary link mr-10">Secondary</button>
          <button class="btn success link mr-10">Success</button>
          <button class="btn info link mr-10">Info</button>
          <button class="btn warning link mr-10">Warning</button>
          <button class="btn danger link mr-10">Danger</button>
          <button class="btn dark link">Dark</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn link">Default</button>
<button class="btn primary link">Primary</button>
<button class="btn secondary link">Secondary</button>
<button class="btn success link">Success</button>
<button class="btn info link">Info</button>
<button class="btn warning link">Warning</button>
<button class="btn danger link">Danger</button>
<button class="btn dark link">Dark</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="floating">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Floating</h2>
          <p class="fs-6">
            Buttons have a default floating effect on hover. If you want your
            buttons to have a floating effect always add
            <code class="text-danger">.floating</code> class to your buttons.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn floating mr-10">Default</button>
          <button class="btn primary floating mr-10">Primary</button>
          <button class="btn secondary floating mr-10">Secondary</button>
          <button class="btn success floating mr-10">Success</button>
          <button class="btn info floating mr-10">Info</button>
          <button class="btn warning floating mr-10">Warning</button>
          <button class="btn danger floating mr-10">Danger</button>
          <button class="btn dark floating">Dark</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn floating">Default</button>
<button class="btn primary floating">Primary</button>
<button class="btn secondary floating">Secondary</button>
<button class="btn success floating">Success</button>
<button class="btn info floating">Info</button>
<button class="btn warning floating">Warning</button>
<button class="btn danger floating">Danger</button>
<button class="btn dark floating">Dark</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="no-float">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; No Float</h2>
          <p class="fs-6">
            Buttons have a default floating effect on hover as we said. If you
            want to remove this floating effect add
            <code class="text-danger">.no-float</code> class to your buttons.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn no-float mr-10">Default</button>
          <button class="btn primary no-float mr-10">Primary</button>
          <button class="btn secondary no-float mr-10">Secondary</button>
          <button class="btn success no-float mr-10">Success</button>
          <button class="btn info no-float mr-10">Info</button>
          <button class="btn warning no-float mr-10">Warning</button>
          <button class="btn danger no-float mr-10">Danger</button>
          <button class="btn dark no-float">Dark</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn no-float">Default</button>
<button class="btn primary no-float">Primary</button>
<button class="btn secondary no-float">Secondary</button>
<button class="btn success no-float">Success</button>
<button class="btn info no-float">Info</button>
<button class="btn warning no-float">Warning</button>
<button class="btn danger no-float">Danger</button>
<button class="btn dark no-float">Dark</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="loading">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Loading</h2>
          <p class="fs-6">
            When your content is loading or maybe sending a form you can add
            <code class="text-danger">.loading</code> class to your buttons for
            loading effect. When you add this class to button, user actions will
            be ignored.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn loading mr-10">Default</button>
          <button class="btn primary loading mr-10">Primary</button>
          <button class="btn secondary loading mr-10">Secondary</button>
          <button class="btn success loading mr-10">Success</button>
          <button class="btn info loading mr-10">Info</button>
          <button class="btn warning loading mr-10">Warning</button>
          <button class="btn danger loading mr-10">Danger</button>
          <button class="btn dark loading">Dark</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn loading">Default</button>
<button class="btn primary loading">Primary</button>
<button class="btn secondary loading">Secondary</button>
<button class="btn success loading">Success</button>
<button class="btn info loading">Info</button>
<button class="btn warning loading">Warning</button>
<button class="btn danger loading">Danger</button>
<button class="btn dark loading">Dark</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="block">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Block</h2>
          <p class="fs-6">
            If you want your button width to be 100% of its parent add
            <code class="text-danger">.block</code> class to your buttons.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn primary block mr-10">Primary Block Button</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn primary block mr-10">Primary Block Button</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="grouping">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Grouping</h2>
          <p class="fs-6">
            Grouping buttons is a great way to create a button group. Just wrap
            your button with a div has a
            <code class="text-danger">.btn-group</code> class.
          </p>
        </div>

        <div class="flex justify-center mt-25">
          <div class="btn-group">
            <button class="btn primary">First Button</button>
            <button class="btn primary">Second Button</button>
            <button class="btn primary">Third Button</button>
          </div>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="btn-group">
    <button class="btn primary">First Button</button>
    <button class="btn primary">Second Button</button>
    <button class="btn primary">Third Button</button>
</div>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="sizing">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Sizing</h2>
          <p class="fs-6">
            We have 5 size of buttons. Theese are: <br />
            <code class="text-danger">.mini</code> <br />
            <code class="text-danger">.sm</code> <br />
            <code class="text-danger">.lg</code> <br />
            <code class="text-danger">.xl</code> <br />
            and default size.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn primary xl mr-10">XLarge</button>
          <button class="btn primary lg mr-10">Large</button>
          <button class="btn primary mr-10">Default</button>
          <button class="btn primary sm mr-10">Small</button>
          <button class="btn primary mini">Mini</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn primary xl">XLarge</button>
<button class="btn primary lg">Large</button>
<button class="btn primary">Default</button>
<button class="btn primary sm">Small</button>
<button class="btn primary mini">Mini</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="disabled">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Disabled</h2>
          <p class="fs-6">
            To disable a button add
            <code class="text-danger">disabled</code> attribute.
          </p>
        </div>

        <div class="text-center mt-25">
          <button class="btn primary mr-10" disabled>Default</button>
          <button class="btn primary flat mr-10" disabled>Flat</button>
          <button class="btn primary bordered mr-10" disabled>Bordered</button>
          <button class="btn primary pill mr-10" disabled>Pill</button>
          <button class="btn primary square mr-10" disabled>Square</button>
          <button class="btn primary link" disabled>Link</button>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<button class="btn primary" disabled>Default</button>
<button class="btn primary flat" disabled>Flat</button>
<button class="btn primary bordered" disabled>Bordered</button>
<button class="btn primary pill" disabled>Pill</button>
<button class="btn primary square" disabled>Square</button>
<button class="btn primary link" disabled>Link</button>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To change the style of buttons you can change the value of the
            variables.
          </p>
        </div>

        <div class="has-table">
	        <table class="table dark bordered striped">
		        <thead>
		        <tr>
			        <th>Name</th>
			        <th>Default Value</th>
			        <th>Computed Value</th>
		        </tr>
		        </thead>
		        <tbody class="bg-white">
		        <tr>
			        <td><span class="tag primary">$button-font-color</span></td>
			        <td><span class="tag secondary">$font-color</span></td>
			        <td><span class="tag warning">rgb(44, 62, 80)</span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$button-background-color</span></td>
			        <td><span class="tag secondary">$white</span></td>
			        <td><span class="tag warning">rgb(0, 0, 0)</span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$button-border-width</span></td>
			        <td><span class="tag secondary">2px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$button-padding</span></td>
			        <td><span class="tag secondary">6p 10px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$button-font-size</span></td>
			        <td><span class="tag secondary">0.8rem</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$button-border-radius</span></td>
			        <td><span class="tag secondary">12px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$disabled-button-opacity</span></td>
			        <td><span class="tag secondary">0.5</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$xl-button-padding</span></td>
			        <td><span class="tag secondary">15px 20px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$xl-button-font-size</span></td>
			        <td><span class="tag secondary">1.1rem</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$xl-button-border-radius</span></td>
			        <td><span class="tag secondary">20px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$lg-button-padding</span></td>
			        <td><span class="tag secondary">10px 15px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$lg-button-font-size</span></td>
			        <td><span class="tag secondary">1rem</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$lg-button-border-radius</span></td>
			        <td><span class="tag secondary">15px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$sm-button-padding</span></td>
			        <td><span class="tag secondary">5px 10px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$sm-button-font-size</span></td>
			        <td><span class="tag secondary">0.75rem</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$sm-button-border-radius</span></td>
			        <td><span class="tag secondary">9px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$mini-button-padding</span></td>
			        <td><span class="tag secondary">3px 8px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$mini-button-font-size</span></td>
			        <td><span class="tag secondary">0.6rem</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$mini-button-border-radius</span>
			        </td>
			        <td><span class="tag secondary">7px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$icon-button-padding</span></td>
			        <td><span class="tag secondary">6px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$icon-button-font-size</span></td>
			        <td><span class="tag secondary">16px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$bordered-button-font-color</span>
			        </td>
			        <td>
				        <span class="tag secondary">$button-background-color</span>
			        </td>
			        <td><span class="tag warning">rgb(0,0,0)</span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$bordered-button-border-color</span>
			        </td>
			        <td>
				        <span class="tag secondary">$button-background-color</span>
			        </td>
			        <td><span class="tag warning">rgb(0,0,0)</span></td>
		        </tr>
		        <tr>
			        <td>
                <span class="tag primary"
                >$bordered-button-hovered-border-color-alpha</span
                >
			        </td>
			        <td><span class="tag secondary">0.5</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$floating-button-translate-size</span>
			        </td>
			        <td><span class="tag secondary">-3px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$flat-button-background-alpha</span>
			        </td>
			        <td><span class="tag secondary">$flat-color-alpha</span></td>
			        <td><span class="tag warning">0.15</span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$flat-button-background-color</span>
			        </td>
			        <td>
                <span class="tag secondary"
                >tint( $button-background-color, percentage(1 -
                  $flat-button-background-alpha) )</span
                >
			        </td>
			        <td><span class="tag warning">rgba(0,0,0)</span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$flat-button-font-color</span></td>
			        <td>
				        <span class="tag secondary">rgba($font-color, 0.65)</span>
			        </td>
			        <td><span class="tag warning">rgba(44, 62, 80, 0.65)</span></td>
		        </tr>
		        <tr>
			        <td>
                <span class="tag primary"
                >$flat-button-hovered-background-alpha</span
                >
			        </td>
			        <td><span class="tag secondary">0.25</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$link-button-background-color</span>
			        </td>
			        <td>
				        <span class="tag secondary">$button-background-color</span>
			        </td>
			        <td><span class="tag warning">rgba(0,0,0)</span></td>
		        </tr>
		        <tr>
			        <td><span class="tag primary">$link-button-font-color</span></td>
			        <td><span class="tag secondary">$button-font-color</span></td>
			        <td><span class="tag warning">rgb(44, 62, 80)</span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$link-button-background-alpha</span>
			        </td>
			        <td><span class="tag secondary">0.1</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td>
                <span class="tag primary"
                >$loading-button-spinner-diameter</span
                >
			        </td>
			        <td><span class="tag secondary">16px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$loading-button-spinner-width</span>
			        </td>
			        <td><span class="tag secondary">3px</span></td>
			        <td><span class="tag warning"></span></td>
		        </tr>
		        <tr>
			        <td>
				        <span class="tag primary">$loading-button-spinner-color</span>
			        </td>
			        <td><span class="tag secondary">$button-font-color</span></td>
			        <td><span class="tag warning">rgb(44, 62, 80)</span></td>
		        </tr>
		        </tbody>
	        </table>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script setup>
import Layout from "../../layout/Layout.vue";
</script>
