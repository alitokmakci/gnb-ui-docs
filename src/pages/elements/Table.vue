<template>
  <Layout>
    <template #navigation>
      <div class="card">
        <h5 class="text-right pr-30 mb-10">On this page:</h5>
        <ul>
          <li>
            <a class="link dark" href="#default"> Default Table </a>
          </li>
          <li>
            <a class="link dark" href="#colors"> Colors </a>
          </li>
          <li>
            <a class="link dark" href="#flat"> Flat </a>
          </li>
          <li>
            <a class="link dark" href="#striped"> Striped </a>
          </li>
          <li>
            <a class="link dark" href="#bordered"> Bordered </a>
          </li>
          <li>
            <a class="link dark" href="#square"> Square </a>
          </li>
          <li>
            <a class="link dark" href="#footer"> Footer </a>
          </li>
          <li>
            <a class="link dark" href="#responsive"> Responsive </a>
          </li>
          <li>
            <a href="#variables" class="link dark">Variables</a>
          </li>
        </ul>
      </div>
    </template>
    <section class="section docs-title">
      <div class="container">
        <h1 class="title-5 fw-500">Table</h1>
        <p class="subtitle">
          Tables are the most important element when dealing with datas and
          thanks to <b>GNB UI</b>'s good looking tables you can easily manage
          your datas.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h5 class="mb-20">To Import Tables Separately:</h5>
        <highlightjs
          autodetect
          code='@import "../../node_modules/gnb-ui/src/elements/table";'
        />
      </div>
    </section>

    <section class="section" id="default">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Default Table</h2>
          <p class="fs-6">
            Default table has no background color or border and it is the most
            basic table we have.
          </p>
        </div>

        <div class="text-center mt-25 bg-white p-30 border-radius-2">
          <table class="table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<table class="table">
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </tbody>
</table>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="colors">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Colors</h2>
          <p class="fs-6">
            If you want to add background color to table header just add one of
            the color classes to the
            <code class="text-danger">.table</code> element.
          </p>
        </div>

        <div class="text-center mt-25 bg-white p-30 border-radius-2">
          <table class="table mb-20 primary">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 secondary">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 success">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 info">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 warning">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 danger">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 dark">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<table class="table primary">
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </tbody>
</table>
<table class="table secondary">
  ...
</table>
<table class="table success">
  ...
</table>
<table class="table info">
  ...
</table>
<table class="table warning">
  ...
</table>
<table class="table danger">
  ...
</table>
<table class="table dark">	...
</table>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="flat">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Flat Colors</h2>
          <p class="fs-6">
            To use flat colors you can use
            <code class="text-danger">.flat</code> class with the color class to
            the <code class="text-danger">.table</code> element. Flat colored
            tables have <b>striped</b>
            looking default.
          </p>
        </div>

        <div class="text-center mt-25 bg-white p-30 border-radius-2">
          <table class="table mb-20 primary flat">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 secondary flat">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 success flat">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 info flat">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 warning flat">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 danger flat">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 dark flat">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<table class="table primary flat">
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </tbody>
</table>
<table class="table secondary flat">
  ...
</table>
<table class="table success flat">
  ...
</table>
<table class="table info flat">
  ...
</table>
<table class="table warning flat">
  ...
</table>
<table class="table danger flat">
  ...
</table>
<table class="table dark">	...
</table>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="striped">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Striped</h2>
          <p class="fs-6">
            If you have large set of data you may use
            <code class="text-danger">.striped</code> class to make it easier
            for your users to follow the lines.
          </p>
        </div>

        <div class="text-center mt-25 bg-white p-30 border-radius-2">
          <table class="table mb-20 primary striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 secondary striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 success striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 info striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 warning striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 danger striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 dark striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<table class="table primary striped">
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Centro comercial</td>
      <td>Francisco Chang</td>
      <td>Mexico</td>
    </tr>
  </tbody>
</table>
<table class="table secondary striped">
  ...
</table>
<table class="table success striped">
  ...
</table>
<table class="table info striped">
  ...
</table>
<table class="table warning striped">
  ...
</table>
<table class="table danger striped">
  ...
</table>
<table class="table dark striped">	...
</table>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="bordered">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Bordered</h2>
          <p class="fs-6">
            To make your table columns have border to separate each other add
            <code class="text-danger">.bordered</code> class to the
            <code class="text-danger">.table</code> element.
          </p>
        </div>

        <div class="text-center mt-25 bg-white p-30 border-radius-2">
          <table class="table mb-20 striped bordered">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 primary bordered">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<table class="table striped bordered">
    <thead>
    <tr>
    	<th>Company</th>
    	<th>Contact</th>
    	<th>Country</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    	<td>Alfreds Futterkiste</td>
    	<td>Maria Anders</td>
    	<td>Germany</td>
    </tr>
    <tr>
    	<td>Centro comercial</td>
    	<td>Francisco Chang</td>
    	<td>Mexico</td>
    </tr>
    </tbody>
</table>
<table class="table primary bordered">
    <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
    </tbody>
</table>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="square">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Square</h2>
          <p class="fs-6">
            Default tables have a small border radius to make them look more
            clean. To make your table look like a square add
            <code class="text-danger">.square</code> class to the
            <code class="text-danger">.table</code> element.
          </p>
        </div>

        <div class="text-center mt-25 bg-white p-30 border-radius-2">
          <table class="table mb-20 striped bordered square">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
          <table class="table mb-20 primary square">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<table class="table striped bordered square">
    <thead>
    <tr>
    	<th>Company</th>
    	<th>Contact</th>
    	<th>Country</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    	<td>Alfreds Futterkiste</td>
    	<td>Maria Anders</td>
    	<td>Germany</td>
    </tr>
    <tr>
    	<td>Centro comercial</td>
    	<td>Francisco Chang</td>
    	<td>Mexico</td>
    </tr>
    </tbody>
</table>
<table class="table primary square">
    <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
    </tbody>
</table>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="footer">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Footer</h2>
          <p class="fs-6">
            With large content tables, it's often difficult to see the whole
            table. To show your tables column names under the table body, add
            <code class="text-danger">tfoot</code> element to the table. Shape
            of the <code class="text-danger">tfoot</code> element will be mirror
            reflection of the <code class="text-danger">thead</code> element and
            also the <code class="text-danger">tfoot</code> element will has
            same background color and font color as the
            <code class="text-danger">thead</code> element.
          </p>
        </div>

        <div class="text-center mt-25 bg-white p-30 border-radius-2">
          <table class="table mb-20 square bordered">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </tfoot>
          </table>
          <table class="table mb-20 primary striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </tfoot>
          </table>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<table class="table square bordered">
    <thead>
    <tr>
    	<th>Company</th>
    	<th>Contact</th>
    	<th>Country</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    	<td>Alfreds Futterkiste</td>
    	<td>Maria Anders</td>
    	<td>Germany</td>
    </tr>
    <tr>
    	<td>Centro comercial</td>
    	<td>Francisco Chang</td>
    	<td>Mexico</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
    	<th>Company</th>
    	<th>Contact</th>
    	<th>Country</th>
    </tr>
    </tfoot>
</table>
<table class="table primary striped">
    <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
    </tbody>
    <tfoot>
    <tr>
    	<th>Company</th>
    	<th>Contact</th>
    	<th>Country</th>
    </tr>
    </tfoot>
</table>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="responsive">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Responsive</h2>
          <p class="fs-6">
            To make your table responsive, you need to wrap your table with a
            div has <code class="text-danger">.has-table</code> class.
          </p>
        </div>

        <div class="text-center mt-25 bg-white p-30 border-radius-2 has-table">
          <table class="table primary striped">
            <thead>
              <tr>
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Centro comercial</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-25">
          <p>HTML:</p>
          <highlightjs
            autodetect
            code='<div class="has-table">
    <table class="table primary striped">
        <thead>
        <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
        </tbody>
    </table>
</div>'
          />
        </div>
      </div>
    </section>

    <section class="section" id="variables">
      <div class="container">
        <div>
          <h2 class="mb-20">&bull; Variables</h2>
          <p class="fs-6">
            To customize the table element you can change the variables listed
            below.
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
                <td>
                  $table-min-width
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>500px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $table-header-background
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>$gray-2</td>
                <td>rgb(244, 247, 248)</td>
              </tr>
              <tr>
                <td>
                  $table-header-border-radius
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>12px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $table-header-padding
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>10px 12px</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $table-header-font-size
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>0.8rem</td>
                <td></td>
              </tr>
              <tr>
                <td>
                  $table-footer-background
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>$table-header-background</td>
                <td>rgb(244, 247, 248)</td>
              </tr>
              <tr>
                <td>
                  $table-footer-border-radius
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>$table-header-border-radius</td>
                <td>12px</td>
              </tr>
              <tr>
                <td>
                  $table-cell-padding
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>$table-header-padding</td>
                <td>10px 12px</td>
              </tr>
              <tr>
                <td>
                  $table-cell-font-size
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>$table-header-font-size</td>
                <td>0.8rem</td>
              </tr>
              <tr>
                <td>
                  $bordered-table-border-style
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>dashed</td>
                <td></td>
              </tr>

              <tr>
                <td>
                  $striped-table-odd-background
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>$white</td>
                <td>rgba(255, 255, 255)</td>
              </tr>

              <tr>
                <td>
                  $striped-table-even-background
                  <span class="tag success">since: 0.2.0</span>
                </td>
                <td>$table-header-background</td>
                <td>rgb(244, 247, 248)</td>
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
